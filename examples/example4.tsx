import React, { useCallback, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { deserialize } from "../serializer";
import { IFeatureSupportOptions, sanitize } from "../sanitizer";
import { renderTemplateDontSanitize, renderTemplateDynamically } from "../renderer";
import { MutatingTemplateArgs, TemplateArgs } from "../serializer/template-args";
import { IParagraph } from "../serializer/types/paragraph";
import { IImage } from "../serializer/types/image";
import { IUIHandlerProps } from "../serializer/base";
import { SlateEditor, defaultBaseI18nRichInfoEnglish } from "../editor/slate";
import { DefaultSlateWrapper, defaultWrapperI18nRichInfoEnglish } from "../editor/slate/wrapper";

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
  // for now
  supportsFiles: false,
  supportsFilesAccept: null,
  supportsImages: false,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true,
};

// We will start with an empty value
const TEXT_FROM_SERVER_1 = '';

// we sanitize, it will do nothing in this
// case
const sanitized1 = sanitize({
  fileResolver: null,
}, featureSupportBasic, TEXT_FROM_SERVER_1);

const textTree1 = deserialize(sanitized1);

function Example() {
  // our initial value is the same as the sanitized
  // this value is for convenience is not what is used
  // for the state of the editor but the tree is
  const [htmlValue, setHtmlValue] = useState(sanitized1);
  const [treeValue, setTreeValue] = useState(textTree1);

  return (
    <div>
      <h1>Using UI Handlers</h1>

      <section>
        <h4>
          Basic Editor (Unstyled) (No Wrapper) (No Element Wrappers)
        </h4>
        <div style={{ border: "solid 1px #ccc" }}>
          <SlateEditor
            id="my-editor"

            // this is regarging file loading
            // we have disabled files and images so this shouldn't happen
            currentLoadError={null}
            dismissCurrentLoadError={null}
            onInsertFile={null}
            onInsertFileFromURL={null}
            onRetrieveFile={null}
            onRetrieveImage={null}
            supportedImageTypes={null}

            // this validity is done via another criteria
            // of your choosing
            currentValid={true}
            treeValue={treeValue}
            value={htmlValue}

            // we feed it the same feature support we used
            features={featureSupportBasic}
            isRichText={textTree1.rich}
            // the given language
            lang="en"

            onChange={(value, textTreeValue) => {
              setHtmlValue(value);
              setTreeValue(textTreeValue);
            }}

            // this is used to define a root context
            // used for templating, to determine
            // the shape of the context that will be feed
            rootContext={null}

            // this is used to feed it language information
            baseI18n={defaultBaseI18nRichInfoEnglish}
          />
        </div>
      </section>

      <section>
        <h4>
          Basic Editor (Unstyled) (No Element Wrappers)
        </h4>
        <div style={{ border: "solid 1px #ccc" }}>
          <SlateEditor
            id="my-editor"

            // this is regarging file loading
            // we have disabled files and images so this shouldn't happen
            currentLoadError={null}
            dismissCurrentLoadError={null}
            onInsertFile={null}
            onInsertFileFromURL={null}
            onRetrieveFile={null}
            onRetrieveImage={null}
            supportedImageTypes={null}

            // this validity is done via another criteria
            // of your choosing
            currentValid={true}
            treeValue={treeValue}
            value={htmlValue}

            // we feed it the same feature support we used
            features={featureSupportBasic}
            isRichText={textTree1.rich}
            // the given language
            lang="en"

            onChange={(value, textTreeValue) => {
              setHtmlValue(value);
              setTreeValue(textTreeValue);
            }}

            // this is used to define a root context
            // used for templating, to determine
            // the shape of the context that will be feed
            rootContext={null}

            // The wrapper wraps the editor and brings extra functionality
            // the default wrapper brings a toolbar and a config drawer
            // which is highly customizable,
            // the configuration is done via wrapperArgs prop
            // and is passed as props to the default wrapper
            // sadly these props are arbitrary and as a result
            // there's no typescript autocompletition, as anyone can write a wrapper
            // the default isn't pretty at all, and you should try to configure it to have the same
            // look and feel as your app, in itemize fast prototyping it is reconfigured to use material UI
            Wrapper={DefaultSlateWrapper}
            // note how we changed this to use the one that has more details
            // which are necessary for the wrapper to function
            baseI18n={defaultWrapperI18nRichInfoEnglish}
          />
        </div>
      </section>

      <section>
        <code>{htmlValue}</code>
        <code>{JSON.stringify(treeValue, null, 2)}</code>
      </section>
    </div >
  );
}

ReactDOM.render(<Example />, document.querySelector("#app"));