import React from "react";
import ReactDOM from "react-dom";
import { deserialize, deserializePlain, serialize, serializeString } from "../serializer";
import { sanitize } from "../sanitizer";

// notice the malicious script and the malicious css style tag
const TEXT_FROM_SERVER_1 = '<p style="position: fixed">this is some simple text</p><p class="malicious">that came from the server</p><p>and is being parsed by text engine</p><script>window.MALICIOUS = true</script>';
const TEXT_FROM_SERVER_2 = '<img src="https://external-server.com" /><p>invalid html</p></p>';
const TEXT_FROM_SERVER_3 = '<p>click <a href="https://external-server.com/malicious">here</a> or here <a href="./safe">here</a> </p>';
const TEXT_FROM_SERVER_4 = '<div class="container-happy"><p class="rich-text--sparkling-text">allowed custom class</p></div><div class="container-sad"><p>invalid container type</p></div><p>outside of container</p>';
const TEXT_FROM_SERVER_5 = '<a class="image"><div class="image-container"><div class="image-pad" style="padding-bottom: 56.25%"><img alt="example" data-src-height="720" data-src-id="FILEID" data-src-width="1280" loading="lazy"></div></div></a>';
const TEXT_FROM_SERVER_6 = "This is just\nSome plain text";

// this is safe to use in dangerouslySetInnerHTML
const sanitized1 = sanitize({
  fileResolver: null,
}, {
  supportedContainers: null,
  supportedCustoms: null,
  supportedRichClasses: null,
  supportedTables: null,
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  supportsExternalLinks: true,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true,
}, TEXT_FROM_SERVER_1);

const sanitized2 = sanitize({
  fileResolver: null,
}, {
  supportedContainers: null,
  supportedCustoms: null,
  supportedRichClasses: null,
  supportedTables: null,
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  supportsExternalLinks: true,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true,
}, TEXT_FROM_SERVER_2);

const sanitized3 = sanitize({
  fileResolver: null,
}, {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  // disabling external links
  supportsExternalLinks: false,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true,
}, TEXT_FROM_SERVER_3);

const sanitized4 = sanitize({
  fileResolver: null,
}, {
  supportedContainers: ["happy"],
  supportedCustoms: [],
  supportedRichClasses: ["sparkling-text"],
  supportedTables: [],
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  // disabling external links
  supportsExternalLinks: false,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true,
}, TEXT_FROM_SERVER_4);

const sanitized4_2 = sanitize({
  fileResolver: null,
}, {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
  // disabling containers
  supportsContainers: false,
  supportsCustom: true,
  supportsCustomStyles: true,
  // disabling external links
  supportsExternalLinks: false,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true,
}, TEXT_FROM_SERVER_4);

const sanitized5 = sanitize({
  // resolving a file
  fileResolver: (id: string) => {
    // the id is going to be FILEID
    return {
      src: "./img/example-img.jpeg",
      // no srcset specified
    };
  },
}, {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  // disabling external links
  supportsExternalLinks: false,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true,
}, TEXT_FROM_SERVER_5);

const filesToAttach: string[] = [];
const cidFilesToAttach: string[] = [];
const sanitized5_2 = sanitize({
  // resolving a file
  fileResolver: (id: string) => {
    // the id is going to be FILEID
    return {
      // this is dangerous, don't trust the file ID as it is
      // always generate own ids
      src: "cid:" + id,
    };
  },
  mail: true,
  mailShouldAttachFile: (fileId) => {
    filesToAttach.push(fileId);
  },
  mailShouldAttachCidFile: (fileId) => {
    cidFilesToAttach.push(fileId);
  },
}, {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  // disabling external links
  supportsExternalLinks: false,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true,
}, TEXT_FROM_SERVER_5);


// this is actually not sanitized, however the deserializer doesn't understand script values
// but you may notice that position fixed, will go through without problem this way
const textTree1 = deserialize(TEXT_FROM_SERVER_1);
// this is safer
const textTree1_2 = deserialize(sanitized1);

// doing it the safer way from now on
const textTree2 = deserialize(sanitized2);

const textTree3 = deserialize(sanitized3);

// because this is just plain text is actually safe to use
const textTree6 = deserializePlain(TEXT_FROM_SERVER_6);

// this is reserialized as string because it is text plain
// if the original source was html it would produce htmlElement list
// the serializeString is the preferred method
const reSerialized6 = serialize(textTree6);

// force it render as rich text, will actually produce HTMLElement array
// however due to caching, we need actually a new object with a new ID
// better to use a uuid to keep things safe but in practise you shouldn't be forcing
// these serializations like this, this is for demonstration only
const textTree6_clone = {
  ...textTree6,
  rich: true,
  id: "MY_ID",
};
const reSerialized6_3 = serializeString(textTree6_clone);


function Example() {
  return (
    <div>
      <h1>Basic Parsing and Data Displaying</h1>

      <section>
        <h4>
          simple parsing and deserializing, this example shows how to deserialize and build a tree safely
          note the sheer amount of elements that represent security issues are removed
        </h4>
        <div>
          Original HTML:
        </div>
        <code>{TEXT_FROM_SERVER_1}</code>
        <div>
          Sanitized HTML (can be used in dangerouslySetInnerHTML):
        </div>
        <code>{sanitized1}</code>
        <div>
          Deserialized HTML Tree (Unsanitized, Unsafe):
        </div>
        <code>{JSON.stringify(textTree1, null, 2)}</code>
        <div>
          Deserialized HTML Tree (Sanitized, Safe):
        </div>
        <code>{JSON.stringify(textTree1_2, null, 2)}</code>
      </section>

      <section>
        <h4>
          simple parsing and deserializing, example of an image taken from an external server being denied
        </h4>
        <div>
          Original HTML:
        </div>
        <code>{TEXT_FROM_SERVER_2}</code>
        <div>
          Sanitized HTML (can be used in dangerouslySetInnerHTML):
        </div>
        <code>{sanitized2}</code>
        <div>
          Deserialized HTML Tree (Sanitized, Safe):
        </div>
        <code>{JSON.stringify(textTree2, null, 2)}</code>
      </section>

      <section>
        <h4>
          Due to configuration settings, external links are denied but internal
          are allowed
        </h4>
        <div>
          Original HTML:
        </div>
        <code>{TEXT_FROM_SERVER_3}</code>
        <div>
          Sanitized HTML (external links are disabled):
        </div>
        <code>{sanitized3}</code>
        <div>
          Deserialized HTML Tree (Sanitized, Safe):
        </div>
        <code>{JSON.stringify(textTree3, null, 2)}</code>
      </section>

      <section>
        <h4>
          This dynamic content, uses custom classes in order to apply stylistic purposes
          however some of these classes are not allowed and are stripped
        </h4>
        <div>
          Original HTML:
        </div>
        <code>{TEXT_FROM_SERVER_4}</code>
        <div>
          Sanitized HTML (container-happy and sparkling-text are allowed):
        </div>
        <code>{sanitized4}</code>
        <div>
          Displayed of sanitized
        </div>
        <div className="rich-text" dangerouslySetInnerHTML={{ __html: sanitized4 }} style={{ padding: "10px", border: "solid 1px #ccc" }} />
        <div>
          Sanitized HTML (containers are not allowed):
        </div>
        <code>{sanitized4_2}</code>
      </section>

      <section>
        <h4>
          This shows image resolving, images are not expected to be part of the text itself, but rather incorportated
          during a postprocess based on an id, this allows for images to be retrieved dynamically
        </h4>
        <div>
          Original HTML:
        </div>
        <code>{TEXT_FROM_SERVER_5}</code>
        <div>
          Sanitized HTML (during sanitization images are resolved, since the original source isn't trusted anyway):
        </div>
        <code>{sanitized5}</code>
        <div>
          Displayed of sanitized
        </div>
        <div className="rich-text" dangerouslySetInnerHTML={{ __html: sanitized5 }} style={{ padding: "10px", border: "solid 1px #ccc" }} />
        <div>
          Generated for email
        </div>
        <code>{sanitized5_2}</code>
        <code>{JSON.stringify({ filesToAttach, cidFilesToAttach }, null, 2)}</code>
      </section>

      <section>
        <h4>
          Plain text parsing
        </h4>
        <div>
          Original PLAIN TEXT:
        </div>
        <code>{JSON.stringify(TEXT_FROM_SERVER_6)}</code>
        <div>
          Deserialized Plan Text Tree (The tree can be used so the rich text editor can produce/use plain text too to keep consistency):
        </div>
        <code>{JSON.stringify(textTree6, null, 2)}</code>
        <div>
          Reserialized Original:
        </div>
        <code>{JSON.stringify(reSerialized6, null, 2)}</code>
        <div>
          Reserialized Force HTML (Bad practise):
        </div>
        <code>{JSON.stringify(reSerialized6_3, null, 2)}</code>
      </section>
    </div>
  );
}

ReactDOM.render(<Example />, document.querySelector("#app"));