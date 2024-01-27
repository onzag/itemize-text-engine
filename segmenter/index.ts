import { IInline } from "../serializer/types/inline";
import { IFile } from "../serializer/types/file";
import { ILink } from "../serializer/types/link";
import { IText } from "../serializer/types/text";
import { ISentence } from "../serializer/types/segmenter-types/sentence";
import { IRootLevelDocument, RichElement, SERIALIZATION_REGISTRY } from "../serializer";
import { IWord } from "../serializer/types/segmenter-types/word";

export type SegmenterType = (children: Array<IText | ILink | IFile | IInline>) => ISentence[];

/**
+ * Applies the segmenter to a given element
+ * @param element 
+ * @param segmenter 
+ */
export function applySegmenterInElement(
  element: RichElement,
  segmenter: SegmenterType,
) {
  if (
    (SERIALIZATION_REGISTRY.BLOCKS[element.type] || SERIALIZATION_REGISTRY.INLINES[element.type]) &&
    !SERIALIZATION_REGISTRY.PROHIBIT_TEXT[element.type] &&
    !SERIALIZATION_REGISTRY.VOIDS[element.type] &&
    element.children
  ) {
    element.children = segmenter(element.children as any);
  } else if (element.children && !SERIALIZATION_REGISTRY.VOIDS[element.type]) {
    // basically a superblock that is contaning inlines and text instead of a sentence
    const isInInvalidForm = (element.children as any).every((c: any) => typeof c.text === "string" || SERIALIZATION_REGISTRY.INLINES[c.type]);
    if (isInInvalidForm) {
      element.children = segmenter(element.children as any);
    } else {
      element.children.forEach((e) => {
        applySegmenterInElement(e as any, segmenter);
      });
    }
  }
}

/**
 * Applies the segmenter to a given document
 * @param doc 
 * @param segmenter 
 */
export function applySegmenterInDocument(
  doc: IRootLevelDocument,
  segmenter: SegmenterType,
) {
  doc.children.forEach((e) => {
    applySegmenterInElement(e, segmenter);
  });

  doc.segmented = true;
}

const sentenceEndingPunctuation = [
  '.', // Period (.)
  '!', // Exclamation mark (!)
  '?', // Question mark (?)
  '\u203D', // Interrobang
  '\u2047', // Double question mark
  '\u2048', // Question-exclamation mark
  '\u2049', // Exclamation-question mark
  '\u3002', // Ideographic full stop
  '\uFF01', // Fullwidth exclamation mark
  '\uFF1F', // Fullwidth question mark
  '\u06D4', // Arabic full stop
  '\u2E2E'  // Reversed question mark
];

const needsSpaceAfterChars = [
  "."
];

const sentenceEndingRegex = new RegExp(`([${sentenceEndingPunctuation.join('')}])`, 'g');
const spacesRegex = new RegExp(/(\s+)/g);

/**
 * Given a text node it will push words where it is necessary
 * and indicate end of sentences
 * @param e 
 * @returns 
 */

function wordSegmenter(e: IText): Array<IWord | IText | "EOS"> {
  // basically just a space or nothing in particular
  if (e.text.trim().length === 0) {
    return [e];
  }

  const result: Array<IWord | IText | "EOS"> = [];

  // we split by potential sentences
  const splitted = e.text.split(sentenceEndingRegex);

  // something accumulated in case our last was not a real sentence ending
  let previousAccumulated = "";
  for (let i = 0; i < splitted.length; i += 2) {
    // we loop
    const wordGroup = previousAccumulated + splitted[i];
    const sentenceEnd = splitted[i + 1] || null;
    const nextWordGroup = splitted[i + 2] || null;

    // if we have a sentence end and it needs a space, and we have a next group, and there's no space in that group
    if (sentenceEnd && needsSpaceAfterChars.includes(sentenceEnd) && nextWordGroup && nextWordGroup[0] !== " ") {
      // we add it to the accumulated and go for the next
      previousAccumulated = wordGroup + sentenceEnd;
      continue;
    }

    // otherwise we split by spaces
    const spacesSplitted = wordGroup.split(spacesRegex);
    spacesSplitted.forEach((bit, index) => {
      if (!bit) {
        return;
      }

      // if it's odd it's a space
      const isSpace = index % 2 === 1;

      // this is our text
      const textElement = {
        ...e,
        text: bit,
      };

      // and if we are just a space
      if (isSpace) {
        result.push(textElement);
      } else {
        // otherwise we must be a word
        // and mark as such
        result.push({
          type: "word",
          children: [
            textElement,
          ],
        });
      }
    });

    if (sentenceEnd) {
      // add the end and signal the end of sentence
      result.push({
        ...e,
        text: sentenceEnd,
      });
      result.push("EOS");
    }
  }

  return result;
}

/**
 * This is a standard basic segmenter that works fine with a variety of languages, it is however unable to
 * find words within many asian languages, you may need to create your own custom segmenter in order to segment
 * such
 * 
 * @param children 
 * @returns 
 */
export function defaultBasicSegmenter(children: Array<IText | ILink | IFile | IInline>): ISentence[] {
  // first we make this
  const sentences: ISentence[] = [];
  let accumulatedObjectsSentence: Array<IText | ILink | IFile | IInline | IWord> = [];
  children.forEach((c) => {
    if (typeof (c as IText).text === "string") {
      const splitPunctuation = wordSegmenter(c as IText);
      splitPunctuation.forEach((v) => {
        if (v === "EOS") {
          sentences.push({
            type: "sentence",
            children: accumulatedObjectsSentence,
          });
          accumulatedObjectsSentence = [];
        } else if (typeof (v as any).text === "string") {
          accumulatedObjectsSentence.push(v as any);
        } else {
          // it is a word
          const lastAccumulated = accumulatedObjectsSentence[accumulatedObjectsSentence.length - 1];
          if (lastAccumulated && (lastAccumulated as IWord).type === "word") {
            (lastAccumulated as IWord).children = (lastAccumulated as IWord).children.concat((v as IWord).children);
          } else {
            accumulatedObjectsSentence.push(v as any);
          }
        }
      });
    } else {
      if ((c as any).children) {
        const calculated = defaultBasicSegmenter((c as any).children);

        const newC = { ...c };
        (newC as any).children = [];
        calculated.forEach((r) => {
          if ((r as any).type === "sentence") {
            (newC as any).children = (newC as any).children.concat((r as any).children);
          } else {
            (newC as any).children.push(r);
          }
        });

        accumulatedObjectsSentence.push(newC);
      } else {
        accumulatedObjectsSentence.push(c);
      }
    }
  });

  if (accumulatedObjectsSentence.length) {
    sentences.push({
      type: "sentence",
      children: accumulatedObjectsSentence,
    });
  }

  return sentences;
}

