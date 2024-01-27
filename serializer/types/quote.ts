/**
 * Contains the serialization, reactification and deserialization functions
 * for the quote element
 * 
 * @module
 */

import { deserializeChildrenForNode, IReactifyArg, ISerializationRegistryType} from "..";
import { serializeElementBase, deserializeElementBase, IElementBase, reactifyElementBase } from "../base";
import { IFile } from "./file";
import { ILink } from "./link";
import { ISentence } from "./segmenter-types/sentence";
import { IWord } from "./segmenter-types/word";
import { IText } from "./text";

/**
 * The function that registers and adds the quote element in the given
 * registry
 * @param registry the registry to modify
 */
export function registerQuote(registry: ISerializationRegistryType) {

  /**
   * converts a given quote rich element into its
   * HTML form
   * @param quote the quote rich element
   * @returns an HTML element
   */
  function serializeQuote(quote: IQuote) {
    // so we call the element base serialization function
    return serializeElementBase(
      // the registry
      registry,
      // the quote to use
      quote,
      // the tag we are using
      "blockquote",
      // no base class
      null,
      // no special attributes
      null,
      // the children
      quote.children,
    );
  }
  
  /**
   * Deserializes a given HTML element that is already
   * known as a quote into the given quote form
   * @param node the node in question
   * @returns a quote rich element
   */
  function deserializeQuote(node: HTMLQuoteElement): IQuote {
    // first we get the base
    const base = deserializeElementBase(node);

    // process the children
    const children = deserializeChildrenForNode(node) as any;

    // and build the quote with the base
    const quote: IQuote = {
      ...base,
      type: "quote",
      children,
    }

    // return the quote
    return quote;
  }

  /**
   * Reactifies a paragraph that is already
   * into a rich element form
   * @param arg the reactification arg
   */
  function reactifyQuote(arg: IReactifyArg<IQuote>) {
    // so we call the reactify element base function
    return reactifyElementBase(
      // with the registry
      registry,
      // the tag to use
      "blockquote",
      // no base class
      null,
      // the children to use
      arg.element.children,
      // nothing to use as a wrap function
      null,
      // the argument itself
      arg,
    );
  }

  // add in the registry
  registry.REACTIFY.quote = reactifyQuote;
  registry.SERIALIZE.quote = serializeQuote;
  registry.BLOCKS.quote = true;

  registry.DESERIALIZE.byTag.QUOTE = deserializeQuote;
}

/**
 * Represents a quote tag
 */
export interface IQuote extends IElementBase {
  /**
   * Represents the type
   */
  type: "quote";
  /**
   * Represents the children
   */
  children: Array<IText | ILink | IFile | ISentence | IWord>;
}