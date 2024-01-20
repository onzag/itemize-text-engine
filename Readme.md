# Itemize's Text Engine

This engine is used by the itemize text type in order to handle view and edit, the text type here defined follows a subset of HTML; as defined in the file `text-specs.md` it asks for a specific format and keeps that format consistent.

It is meant to be used within react projects.

It allows for consuming arbitrary HTML for editing however there's no guarantee that this will work properly, it's better if the given text follows the text specs.

The spec can be used for generating templates, for example, for usage in UI (so called fragments) or to generate fully interactive content.

When using text engine, it's possible to control how elements are displayed; since it prevents usage of dangerouslyUseInnerHTML; however the content can also be displayed as it is.

Text engine enforces the concept of separation of images/files as separate from the textual content itself.

## Differences between an editor

Originally text engine was meant to be used within itemize as a way to process text, but it can prove useful outside of it; it was originally developed to create posts and determine the UI elements of a cycling buy/sell website.

Itemize text engine is not an editor, it's more of a spec for handling text in the client side for an editor to be integrated; the text engine here has one editor integrated (Slate), but in theory other editors should be integrable and fully functional with it given they adhere to the spec and function in tandem by writing a wrapper; however text-engine was written to work nicely with slate; even when it was originally designed to work with QuillJS, slate ended up proving to handle all the needs better.

While an editor like Plate shows more advanced features that what is availble by default, text engine could in theory work with plate as an editor; or even CkEditor5; however the bridge has to be written, and currently only plain slate is available.

Note that text engine default editor comes unstyled, so it's quite ugly, but it can be made to look pretty since you (the developer) constrols all aspects of its display, it does in fact take quite a bit of setup to make the default editor look okay and that's covered in the examples.

The text engine follows several processes:

### Sanitizing

The content of the document is sanitized based on the text specification criteria, making it say to display as it is.

### Images and Files

Images and files are handled as binary, and not as base64 and urls are not stored in the text information because text information should be stored and indexed at a database level, and files may be distributed in a different manner (for example using content delivery networks under different urls), so since urls may be changing they are not part of the text information.

### Embedded Video

Embbeded video from vimeo or youtube is part of the spec.

### Server Side rendering

The processing of the text and file information is done in a way that server side rendering of it is supported.

### Templating

The core of text engine is templating, when content is following the spec it can be processed with one of the renderers to decide how the content is to be visualized; this allows for dynamic content to be generated, for example, you may edit the UI itself with the editor, build customized email templates, or create interactive content, such as polls or educational material.

Templating supports actions, conditions, loops, and contexting; all while using simple HTML so the server side can build indexes for templates using ordinary XML parsers.

### Custom Widgets

Widgets (named UI handlers) can be created to build customized UI components that can act in a different way in editing mode and view mode, this can be done for example to build math.

## Examples and Usage

Check the examples folder for usage, the options provided by text engine are vast and most of the functionality can be seen by visiting the code; the properties are well documented within the code on what they do.

API documentation in md format will come later, the examples are a good place to start.

## Installation

Because text engine is bundled in the same way itemize is, it builds itself when it's instaled, so it needs its peer dependencies to work.

The reason on why it is done so you must import the ts files and build them with your builder is because that simplifies debugging and patching on live systems (since this is part of the itemize flow, the parent library). This means that the installation process is non-standard and the bundling process is also non standard; since what the library contains is typescript source.

As the time of the writing it requires react 17, until itemize itself is ported to react 18 this will not change

```
npm install --save @onzag/itemize-text-engine react@^17.0.2 react-dom@^17.0.2 @types/react@^17.0.2 @types/react-dom@^17.0.2
```