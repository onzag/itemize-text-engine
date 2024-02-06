import { JSDOM as JSDOMDef } from "jsdom";
import createDOMPurify from "dompurify";

export const JSDOM = JSDOMDef;

export const DOMWindow = JSDOM ? (new JSDOM("<!DOCTYPE html>")).window : window;
export const DOMPurify = createDOMPurify(DOMWindow);