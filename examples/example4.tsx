import React, { useCallback, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { deserialize } from "../serializer";
import { IFeatureSupportOptions, sanitize } from "../sanitizer";
import { renderTemplateDontSanitize, renderTemplateDynamically } from "../renderer";
import { MutatingTemplateArgs, TemplateArgs } from "../serializer/template-args";
import { IParagraph } from "../serializer/types/paragraph";
import { IImage } from "../serializer/types/image";
import { IUIHandlerProps } from "../serializer/base";

const featureSupportBasic: IFeatureSupportOptions = {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  supportsExternalLinks: true,
  // we will disable both files and images
  supportsFiles: false,
  supportsFilesAccept: null,
  supportsImages: false,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  // we will also disable templating
  supportsTemplating: false,
  supportsTitle: true,
  supportsVideos: true,
};

// We will start with an empty value, normally we would need to sanitize but this isn't necessary
// right now
const TEXT_FROM_SERVER_1 = '';

const sanitized1 = sanitize({
  fileResolver: null,
}, featureSupportBasic, TEXT_FROM_SERVER_1);

const textTree1 = deserialize(sanitized1);

// UI Handlers can also play with all the other features defined before, however they need to be specified manually
// for example the styleActive and styleHover properties need to be set manually since the component
// is ui handled by itself, even props.events are included

function Example() {
  return (
    <div>
      <h1>Using UI Handlers</h1>

      <section>
        <h4>
          Basic UI Handler to have input fields
        </h4>
        <div>
          Original HTML (also sanitized):
        </div>
        <code>{TEXT_FROM_SERVER_1}</code>
        <div>
          rendered template dinamically (react component)
        </div>
        <div className="rich-text" style={{ padding: "10px", border: "solid 1px #ccc" }}>{rendered1}</div>
      </section>

      <section>
        <h4>
          Basic UI Handler that contains UI handlers and contains content within the handler
        </h4>
        <div>
          Original HTML (also sanitized):
        </div>
        <code>{TEXT_FROM_SERVER_2}</code>
        <div>
          rendered template dinamically (react component)
        </div>
        <div className="rich-text" style={{ padding: "10px", border: "solid 1px #ccc" }}>{rendered2}</div>
      </section>
    </div>
  );
}

ReactDOM.render(<Example />, document.querySelector("#app"));