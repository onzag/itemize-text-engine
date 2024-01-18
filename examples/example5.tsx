import React, { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { deserialize } from "../serializer";
import { IFeatureSupportOptions, sanitize } from "../sanitizer";
import { ISlateFile, ISlateInsertedFileInformationType, SlateEditor, defaultBaseI18nRichInfoEnglish } from "../editor/slate";
import { DefaultSlateWrapper, defaultWrapperI18nRichInfoEnglish } from "../editor/slate/wrapper";
import { defaultElementWrappers } from "../editor/slate/element-wrappers";
import { renderTemplateDynamically } from "../renderer";
import { TemplateArgs } from "../serializer/template-args";

const featureSupportBasic: IFeatureSupportOptions = {
  supportedContainers: null,
  supportedCustoms: null,
  supportedRichClasses: null,
  supportedTables: null,
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  supportsExternalLinks: true,
  supportsFiles: true,
  supportsFilesAccept: "*",
  supportsImages: true,
  supportsImagesAccept: "image/*",
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

// YOU MAY NOTICE THAT THE EDITOR IS ABLE TO PICK UP
// all the available rich classes, table types, containers, and just everything available
// by reading the stylesheets
// if you have particularly large stylesheets, do this
// where your rich text editor css are
// if (typeof document !== "undefined") {
//    (window as any).SLATE_EDITOR_STYLESHEETS_PREFIX = location.protocol + "//" + location.host + "/mycssextensionlocation/"
// }
// yes globals are ugly but this is for performance and is dead simple
// sometimes globals make things easier

function Example() {
  // our initial value is the same as the sanitized
  // this value is for convenience is not what is used
  // for the state of the editor but the tree is
  const [htmlValue, setHtmlValue] = useState(sanitized1);
  const [treeValue, setTreeValue] = useState(textTree1);

  const aFunction = useCallback(() => {
    alert("You called me!");
  }, []);

  const templateArgs = useMemo(() => {
    return new TemplateArgs({
      aFunction,
    });
  }, [aFunction]);

  const [files, setFiles] = useState([] as Array<{
    file: ISlateFile;
    isImage: boolean;
  }>);

  const onInsertFile = useCallback(async (file: File, isExpectingImage?: boolean) => {
    // if you want to reject here you should set an error and pass it to currentLoadError
    // however we are not handling these errors right now we will accept whatever
    // but you should validate your file


    // for this tutorial we are going to blindly trust

    const fileData: ISlateFile = {
      // you should probably use some uuid instead of this
      id: "FILE" + Math.random().toString().substring(2),
      metadata: null,
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
      src: file,
    };

    if (isExpectingImage) {
      return await new Promise<ISlateInsertedFileInformationType>(async (resolve) => {
        // so we create an image
        const img = new Image();
        // on load
        img.onload = () => {
          // we build the metadata
          fileData.metadata = img.width + "x" + img.height;

          // and resolve
          setFiles([...files, {
            file: fileData,
            isImage: true,
          }]);
          resolve({
            result: fileData,
            width: img.width,
            height: img.height,
            isImage: true,
          });
        }
        img.onerror = () => {
          // on error should probably do something
          resolve(null);
        }
        // and this is assigned the url of the image
        img.src = fileData.url;
      });
    }

    setFiles([...files, {
      file: fileData,
      isImage: true,
    }]);

    return {
      result: fileData,
      width: null,
      height: null,
      isImage: false,
    }
  }, [files]);

  const onInsertFileFromURL = useCallback(async (url: string, name: string, isExpectingImage: boolean) => {
    let blob: any;
    try {
      const fileData = await fetch(url);
      blob = await fileData.blob();

      // we are going to use a trick, we could use the File constructor
      // but there were a lot of complains regarding the constructor on stackoverflow
      // while as a matter of fact the src allows for blobs so
      blob.name = name;
    } catch (err) {
      // failed to fetch
      return null;
    }

    // there, it will work
    // now this is a funny thing since the data uri might
    // be a remote URL as well, depends on what we used to load
    // from
    return this.onInsertFile(blob, isExpectingImage);
  }, [onInsertFile]);

  const onRetrieveFile = useCallback((fileId: string) => {
    const file = files.find((f) => f.file.id === fileId) || null;
    return  file?.file || null;
  }, [files]);

  const onRetrieveImage = useCallback((fileId: string) => {
    const file = onRetrieveFile(fileId);
    if (file) {
      // we don't know a srcset
      return  {
        file,
        srcset: null,
      }
    }

    return null;
  }, [onRetrieveFile]);

  return (
    <div>
      <h1>Basic Editing</h1>

      <section>
        <h4>
          The following example shows how you can make an editor to build templates
          by defining contexts and other functionality, note that our sparkling-text and container-happy
          make a comeback here
        </h4>
        <div style={{ border: "solid 1px #ccc" }}>
          <SlateEditor
            id="my-editor"

            // this is regarging file loading
            // we have disabled files and images so this shouldn't happen
            currentLoadError={null}
            dismissCurrentLoadError={null}
            onInsertFile={onInsertFile}
            onInsertFileFromURL={onInsertFileFromURL}
            onRetrieveFile={onRetrieveFile}
            onRetrieveImage={onRetrieveImage}
            supportedImageTypes="image/*"

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
            rootContext={{
              type: "context",
              label: "root",
              properties: {
                aFunction: {
                  type: "function",
                  label: "alert something",
                },
              }
            }}

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
            elementWrappers={defaultElementWrappers}
            // note how we changed this to use the one that has more details
            // which are necessary for the wrapper to function
            baseI18n={{
              // note how we extend this to add more language information
              ...defaultWrapperI18nRichInfoEnglish,
              richClasses: {
                sparkling_text: "Sparkling Teeext",
              },
              richContainers: {
                happy: "Happy Container",
              },
            }}
          />
        </div>
      </section>

      <section>
        <h4>
          This raw display does not support templating (if you added an event, or templating classes it will not work here)
        </h4>
        <div className="rich-text" dangerouslySetInnerHTML={{ __html: htmlValue }} style={{ padding: "10px", border: "solid 1px #ccc" }} />
      </section>

      <section>
        <h4>
          This raw display uses the reactify method and supports full templating (if you added an event or templating classes, it will only work here)
        </h4>
        <div className="rich-text">
          {renderTemplateDynamically(treeValue, templateArgs)}
        </div>
      </section>
    </div >
  );
}

ReactDOM.render(<Example />, document.querySelector("#app"));