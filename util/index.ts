import { IRootLevelDocument, RichElement, deserialize } from "../serializer";
import { IText } from "../serializer/types/text";
import equals from "deep-equal";

/**
 * Counts the size of the document
 * @param root 
 */
export function countSize(root: IRootLevelDocument | RichElement | IText): number {
  if (typeof (root as IText).text === "string") {
    return (root as IText).text.length;
  }
  const counts = (root as IRootLevelDocument).children.map(countSize);
  if (counts.length === 0) {
    return 0;
  } else if (counts.length === 1) {
    return counts[0];
  }

  return counts.reduce((a, b) => a + b);
}

/**
 * Counts the words of the document
 * @param root 
 */
const spaceRegex = /^\s+$/;
export function countWords(root: IRootLevelDocument | RichElement | IText): number {
  if (typeof (root as IText).text === "string") {
    return (root as IText).text.split(" ").filter((v) => v !== "" && !spaceRegex.test(v)).length;
  }
  const counts = (root as IRootLevelDocument).children.map(countWords);
  if (counts.length === 0) {
    return 0;
  } else if (counts.length === 1) {
    return counts[0];
  }

  return counts.reduce((a, b) => a + b);
}

/**
 * Counts the size and words of the document
 * @param root 
 */
export function countSizeAndWords(root: IRootLevelDocument | RichElement | IText): [number, number] {
  if (typeof (root as IText).text === "string") {
    return [
      (root as IText).text.length,
      (root as IText).text.split(" ").filter((v) => v !== "").length,
    ];
  }
  const results = (root as IRootLevelDocument).children.map(countSizeAndWords);
  if (results.length === 0) {
    return [0, 0];
  } else if (results.length === 1) {
    return results[0];
  }

  return results.reduce((a, b) => {
    return [a[0] + b[0], a[1] + b[1]];
  });
}

const invalidComparables = [
  "srcSet",
  "src",
  "sizes",
];

function removeInvalidComparables(elem: RichElement | IRootLevelDocument) {
  for (let comparable of invalidComparables) {
    if (elem[comparable]) {
      elem[comparable] = null;
    };
  }

  if (elem.children) {
    elem.children.forEach(removeInvalidComparables as any);
  }

  return elem;
}

/**
 * compares two text for equivalence
 * @param text1 
 * @param text2 
 */
export function checkEquality(text1: string | Node[], text2: string | Node[]) {
  if (text1 === text2) {
    return true;
  }

  if (text1 === null || text2 === null) {
    return text1 === text2;
  }

  const document1 = removeInvalidComparables(deserialize(text1));
  const document2 = removeInvalidComparables(deserialize(text2));

  return equals(document1.children, document2.children);
}

/**
 * compares two plain text for equivalence
 * @param text1 
 * @param text2 
 */
export function checkEqualityPlain(text1: string, text2: string) {
  return text1 === text2;
}
