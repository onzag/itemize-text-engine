import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { deserialize } from "../serializer";
import { IFeatureSupportOptions, sanitize } from "../sanitizer";
import { renderTemplateDontSanitize, renderTemplateDynamically } from "../renderer";
import { MutatingTemplateArgs, TemplateArgs } from "../serializer/template-args";
import { IParagraph } from "../serializer/types/paragraph";
import { IImage } from "../serializer/types/image";

const featureSupport: IFeatureSupportOptions = {
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
  // notice this being true
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true,
};

// note how this specifies the inline class
// that is because span is also used in the text type to make for
// custom styles, only the inline tag allows for custom properties
// otherwise it will vanish, while it will survive sanitization it will not survive deserialization
// once the normalizer catches it, span is used for text styles, and span.inline is an inline element
// for other purposes
const TEXT_FROM_SERVER_1 = '<p>Basic templating for <span class="inline" data-text="username">username</span></p>';

const sanitized1 = sanitize({
  fileResolver: null,
}, featureSupport, TEXT_FROM_SERVER_1);

// the render template method is limited quite a bit
const rendered1 = renderTemplateDontSanitize(sanitized1, {
  username: "my name",
});

const textTree1 = deserialize(sanitized1);

const rendered1_2 = renderTemplateDynamically(textTree1, new TemplateArgs(
  {
    username: "my name",
  }
));

// rendering as a react component allows for full customization on
// how things are rendered, it also has quite a more range on what it can and can't do
// for example data-style-hover is now functional is allowed by the feature support, and when
// used in conjunction with text-html you can have a lot of flexibility
// note that it's possible to inform the editor about this too so the editing experience
// is also great
const TEXT_FROM_SERVER_2 = '<p data-style-hover="color: red">Click this <span class="inline" data-html="button">button</span></p>';
const sanitized2 = sanitize({
  fileResolver: null,
}, featureSupport, TEXT_FROM_SERVER_2);
const textTree2 = deserialize(sanitized2);
const rendered2 = renderTemplateDynamically(textTree2, new TemplateArgs(
  {
    button: <button onClick={() => alert("You clicked me")}>click me!</button>,
  }
));

// other more advanced features are also included with dynamic renders
// some of them work with static too for example, let's make a loop for a list
const TEXT_FROM_SERVER_3 = '<ul><li data-for-each="buttons" data-html="button"><p>button</p></li></ul>';
const sanitized3 = sanitize({
  fileResolver: null,
}, featureSupport, TEXT_FROM_SERVER_3);
const textTree3 = deserialize(sanitized3);
const rendered3 = renderTemplateDynamically(textTree3, new TemplateArgs(
  {
    buttons: [
      new TemplateArgs({
        button: <button onClick={() => alert("You clicked me 1")}>click 1</button>
      }),
      new TemplateArgs({
        button: <button onClick={() => alert("You clicked me 2")}>click 2</button>
      }),
      new TemplateArgs({
        button: <button onClick={() => alert("You clicked me 3")}>click 3</button>
      }),
    ]
  }
));

const MyInfoContext = React.createContext<string[]>([]);

const MyInfoProvider = (props: { children: React.ReactNode }) => {
  const buttonSets = [
    ['button1', 'button2', 'button3'],
    ['button4', 'button5', 'button6'],
    // Add more button sets as needed
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const currentSet = buttonSets[currentSetIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % buttonSets.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSetIndex, buttonSets.length]);

  return (
    <MyInfoContext.Provider value={currentSet}>
      {props.children}
    </MyInfoContext.Provider>
  );
};

// it is also possible to make mutating contexts, mutating functions, that depend on contexts
// this can be used to create incrediblely complicated and intrincate behaviours
// all of it which is editable (will be shown how to do later on)
const rendered3_2 = renderTemplateDynamically(textTree3, new TemplateArgs(
  {
    buttons: new MutatingTemplateArgs((children) => {
      return (
        <MyInfoContext.Consumer>
          {(values) => {
            return values.map((value) => {
              return children(new TemplateArgs(
                {
                  button: <button onClick={() => alert("You clicked " + value)}>{value}</button>
                }
              ), value)
            });
          }}
        </MyInfoContext.Consumer>
      )
    }),
  }
).wrappedBy((children) => {
  // this context could be anywhere, but we are putting it here
  // the wrapped by functionality can wrap for any reason
  // even if it's stylistic, but it's meant to be used for
  // passing down contexts

  // effectively because this is a react component if the data changes
  // then the display changes
  return (
    <MyInfoProvider>
      {children}
    </MyInfoProvider>
  );
}));

// You may also define functions
// on this behaviour
const TEXT_FROM_SERVER_4 = '<p data-on-click="clickAction">click me!</p>';

const sanitized4 = sanitize({
  fileResolver: null,
}, featureSupport, TEXT_FROM_SERVER_4);
const textTree4 = deserialize(sanitized4);
const rendered4 = renderTemplateDynamically(textTree4, new TemplateArgs(
  {
    clickAction: () => {
      alert("You clicked me");
    }
  }
));

// of course at the end of the day
// you can do whatever you want with this
// with full customization
const TEXT_FROM_SERVER_5 = '<div class="container"><p data-on-click="clickAction">click me!</p></div><div class="container"><a class="image"><div class="image-container"><div class="image-pad" style="padding-bottom: 56.25%"><img alt="example" data-src-height="720" data-src-id="FILEID" data-src-width="1280" loading="lazy"></div></div></a></div>';

const sanitized5 = sanitize({
  fileResolver: (id: string) => {
    // the id is going to be FILEID
    return {
      src: "./img/example-img.jpeg",
      // no srcset specified
    };
  },
}, featureSupport, TEXT_FROM_SERVER_5);
const textTree5 = deserialize(sanitized5);
const rendered5 = renderTemplateDynamically(textTree5, new TemplateArgs(
  {
    clickAction: () => {
      alert("You clicked me");
    }
  }
), {
  onCustomAttributesFor: (element) => {
    if ((element as IParagraph).type === "paragraph") {
      return {
        // now every paragraph will have this
        onMouseOver: () => {
          console.log("Over here");
        }
      }
    }
  },
  onCustom: (element, props, info) => {
    if ((element as IImage).type === "image") {
      // image is now wrapped by this black box
      return (
        <div style={{ backgroundColor: "black" }}>
          {info.defaultReturn()}
        </div>
      );
    }

    return info.defaultReturn();
  },
  onCustomWrap: (element, elementAsNode, key) => {
    // we just going to wrap every single element with this
    // that includes just text nodes
    // all of it
    return (
      <span style={{ display: "contents" }} key={key}>
        {elementAsNode}
      </span>
    )
  }
});

// there is more on templating that is not included here, for example, data-context and non-root-inheritables

// (however don't fret, UI Handlers provide custom elements in the next section)
// and can be used to define custom fully editable components

function Example() {
  return (
    <div>
      <h1>Advanced Displaying</h1>

      <section>
        <h4>
          Showing templating capabilities to fill content
        </h4>
        <div>
          Original HTML (also sanitized):
        </div>
        <code>{TEXT_FROM_SERVER_1}</code>
        <div>
          Deserialized HTML Tree:
        </div>
        <code>{JSON.stringify(textTree1, null, 2)}</code>
        <div>
          rendered template
        </div>
        <code>{rendered1}</code>
        <div>
          rendered template dinamically (react component)
        </div>
        <div className="rich-text" style={{ padding: "10px", border: "solid 1px #ccc" }}>
          {rendered1_2}
        </div>
      </section>

      <section>
        <h4>
          Possibility to fill gaps of html content with dynamic react components
        </h4>
        <div>
          Original HTML (also sanitized):
        </div>
        <code>{TEXT_FROM_SERVER_2}</code>
        <div>
          rendered template dinamically (react component)
        </div>
        <div className="rich-text" style={{ padding: "10px", border: "solid 1px #ccc" }}>
          {rendered2}
        </div>
      </section>

      <section>
        <h4>
          Possibility to render templates using loops, and using mutating data
        </h4>
        <div>
          Original HTML (also sanitized):
        </div>
        <code>{TEXT_FROM_SERVER_3}</code>
        <div>
          rendered template dinamically (react component)
        </div>
        <div className="rich-text" style={{ padding: "10px", border: "solid 1px #ccc" }}>
          {rendered3}
        </div>
        <div>
          rendered template dinamically (react component, with mutating data)
        </div>
        <div className="rich-text" style={{ padding: "10px", border: "solid 1px #ccc" }}>
          {rendered3_2}
        </div>
      </section>

      <section>
        <h4>
          Assingning arbitrary functions based on a context
        </h4>
        <div>
          Original HTML (also sanitized):
        </div>
        <code>{TEXT_FROM_SERVER_4}</code>
        <div>
          rendered template dinamically (react component)
        </div>
        <div className="rich-text" style={{ padding: "10px", border: "solid 1px #ccc" }}>
          {rendered4}
        </div>
      </section>

      <section>
      <h4>
          Full customization, all images get a black background, everything is wrapped in spans, and onMouseOver
          every paragraph will trigger a function call to log "Over here"
        </h4>
        <div>
          Original HTML (also sanitized):
        </div>
        <code>{TEXT_FROM_SERVER_5}</code>
        <div>
          rendered template dinamically (react component)
        </div>
        <div className="rich-text" style={{ padding: "10px", border: "solid 1px #ccc" }}>
          {rendered5}
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(<Example />, document.querySelector("#app"));