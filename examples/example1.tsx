import React from "react";
import ReactDOM from "react-dom";
import { deserialize } from "../serializer";
import { sanitize } from "../sanitizer";

// notice the malicious script and the malicious css style tag
const TEXT_FROM_SERVER_1 = '<p style="position: fixed">this is some simple text</p><p class="malicious">that came from the server</p><p>and is being parsed by text engine</p><script>window.MALICIOUS = true</script>';
const TEXT_FROM_SERVER_2 = '<img src="https://external-server.com" /><p>invalid html</p></p>';
const TEXT_FROM_SERVER_3 = '<p>click <a href="https://external-server.com/malicious">here</a> or here <a href="./safe">here</a> </p>';
const TEXT_FROM_SERVER_4 = '<div class="container-happy"><p class="rich-text--sparkling-text">allowed custom class</p></div><div class="container-sad"><p>invalid container type</p></div><p>outside of container</p>';
const TEXT_FROM_SERVER_5 = '<a class="image"><div class="image-container"><div class="image-pad" style="padding-bottom: 56.25%"><img alt="example" data-src-height="720" data-src-id="FILEID" data-src-width="1280" loading="lazy"></div></div></a>';

// this is safe to use in dangerouslySetInnerHTML
const sanitized1 = sanitize({
  fileResolver: null,
}, {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
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
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
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


// this is actually not sanitized, however the deserializer doesn't understand script values
// but you may notice that position fixed, will go through without problem this way
const textTree1 = deserialize(TEXT_FROM_SERVER_1);
// this is safer
const textTree1_2 = deserialize(sanitized1);

// doing it the safer way from now on
const textTree2 = deserialize(sanitized2);

const textTree3 = deserialize(sanitized3);

function Example() {
  return (
    <div>
      <h1>Basic Parsing and Data Displaying</h1>

      <section>
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
        <div className="rich-text" dangerouslySetInnerHTML={{__html: sanitized4}} style={{padding: "10px", border: "solid 1px #ccc"}}/>
        <div>
          Sanitized HTML (containers are not allowed):
        </div>
        <code>{sanitized4_2}</code>
      </section>

      <section>
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
        <div className="rich-text" dangerouslySetInnerHTML={{__html: sanitized5}} style={{padding: "10px", border: "solid 1px #ccc"}}/>
      </section>
    </div>
  );
}

ReactDOM.render(<Example />, document.querySelector("#app"));