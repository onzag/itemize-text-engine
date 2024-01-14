import {
  DOMWindow,
  MutatingTemplateArgs,
  NULL_DOCUMENT,
  SERIALIZATION_REGISTRY,
  TemplateArgs,
  __toESM,
  deserialize,
  require_react,
  require_react_dom,
  sanitize
} from "/dist/commons.js";

// example2.tsx
var import_react2 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// ../renderer/index.tsx
var import_react = __toESM(require_react());
function processTemplateNodeInitialization(node, templateArgsContext, templateArgsRootcontext) {
  const ifKey = node.dataset.if;
  if (ifKey) {
    const ifValue = templateArgsContext[ifKey];
    if (!ifValue) {
      node.parentElement.removeChild(node);
      return;
    }
  }
  const textKey = node.dataset.text;
  if (textKey) {
    const text = templateArgsContext[textKey] || templateArgsRootcontext[textKey];
    if (typeof text !== "string") {
    } else {
      node.textContent = text;
    }
  }
  const threfKey = node.dataset.href;
  if (threfKey) {
    const thref = templateArgsContext[threfKey] || templateArgsRootcontext[threfKey];
    if (typeof thref !== "string") {
    } else {
      node.setAttribute("href", thref);
    }
  }
  const htmlKey = node.dataset.html;
  if (htmlKey) {
    const html = templateArgsContext[htmlKey] || templateArgsRootcontext[htmlKey];
    if (typeof html !== "string") {
    } else {
      node.innerHTML = html;
    }
  }
}
function processTemplateInitialization(node, templateArgsContext, templateArgsRootContext) {
  node.hasChildNodes() && node.childNodes.forEach((childNode) => {
    const childNodeASHTMLElement = childNode;
    let templateArgsNewContext = templateArgsContext;
    if (typeof childNodeASHTMLElement.dataset !== "undefined" && childNodeASHTMLElement.dataset) {
      const contextKey = childNodeASHTMLElement.dataset.context;
      if (contextKey) {
        templateArgsNewContext = templateArgsNewContext[contextKey];
      }
      const forEachKey = childNodeASHTMLElement.dataset.forEach;
      if (forEachKey) {
        const ifKey = childNodeASHTMLElement.dataset.if;
        const ifValue = ifKey && templateArgsNewContext[ifKey];
        if (ifKey && !ifValue) {
          node.parentElement.removeChild(node);
        } else {
          const forArgument = templateArgsNewContext[forEachKey];
          const nextSibling = childNodeASHTMLElement.nextSibling;
          forArgument.forEach((forEachContext, index) => {
            const clone = childNodeASHTMLElement.cloneNode(true);
            if (nextSibling) {
              childNodeASHTMLElement.parentElement.insertBefore(clone, nextSibling);
            } else {
              childNodeASHTMLElement.parentElement.appendChild(clone);
            }
            processTemplateNodeInitialization(
              clone,
              forEachContext,
              templateArgsRootContext
            );
            if (clone.hasChildNodes()) {
              processTemplateInitialization(
                clone,
                forEachContext,
                templateArgsRootContext
              );
            }
          });
          childNodeASHTMLElement.parentElement.removeChild(childNodeASHTMLElement);
        }
      } else {
        processTemplateNodeInitialization(
          childNodeASHTMLElement,
          templateArgsNewContext,
          templateArgsRootContext
        );
      }
    }
    if (childNodeASHTMLElement.hasChildNodes()) {
      processTemplateInitialization(
        childNodeASHTMLElement,
        templateArgsNewContext,
        templateArgsRootContext
      );
    }
  });
}
function renderTemplateAsNode(template, args) {
  const cheapdiv = DOMWindow.document.createElement("div");
  cheapdiv.innerHTML = template;
  processTemplateInitialization(
    cheapdiv,
    args,
    args
  );
  return cheapdiv;
}
function renderTemplateDontSanitize(template, args) {
  return renderTemplateAsNode(template, args).innerHTML;
}
function renderTemplateDynamically(document2, args, options = {}) {
  if (document2 === NULL_DOCUMENT) {
    return null;
  }
  const toReturn = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, document2.children.map((c, index) => {
    return SERIALIZATION_REGISTRY.REACTIFY[c.type || "text"]({
      asTemplate: true,
      active: true,
      element: c,
      key: index,
      templateArgs: args,
      selected: false,
      extraOptions: options,
      parent: document2,
      tree: document2
    });
  }));
  if (args && args.wrapper) {
    return args.wrapper(toReturn);
  }
  return toReturn;
}

// example2.tsx
var featureSupport = {
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
  supportsVideos: true
};
var TEXT_FROM_SERVER_1 = '<p>Basic templating for <span class="inline" data-text="username">username</span></p>';
var sanitized1 = sanitize({
  fileResolver: null
}, featureSupport, TEXT_FROM_SERVER_1);
var rendered1 = renderTemplateDontSanitize(sanitized1, {
  username: "my name"
});
var textTree1 = deserialize(sanitized1);
var rendered1_2 = renderTemplateDynamically(textTree1, new TemplateArgs(
  {
    username: "my name"
  }
));
var TEXT_FROM_SERVER_2 = '<p data-style-hover="color: red">Click this <span class="inline" data-html="button">button</span></p>';
var sanitized2 = sanitize({
  fileResolver: null
}, featureSupport, TEXT_FROM_SERVER_2);
var textTree2 = deserialize(sanitized2);
var rendered2 = renderTemplateDynamically(textTree2, new TemplateArgs(
  {
    button: /* @__PURE__ */ import_react2.default.createElement("button", { onClick: () => alert("You clicked me") }, "click me!")
  }
));
var TEXT_FROM_SERVER_3 = '<ul><li data-for-each="buttons" data-html="button"><p>button</p></li></ul>';
var sanitized3 = sanitize({
  fileResolver: null
}, featureSupport, TEXT_FROM_SERVER_3);
var textTree3 = deserialize(sanitized3);
var rendered3 = renderTemplateDynamically(textTree3, new TemplateArgs(
  {
    buttons: [
      new TemplateArgs({
        button: /* @__PURE__ */ import_react2.default.createElement("button", { onClick: () => alert("You clicked me 1") }, "click 1")
      }),
      new TemplateArgs({
        button: /* @__PURE__ */ import_react2.default.createElement("button", { onClick: () => alert("You clicked me 2") }, "click 2")
      }),
      new TemplateArgs({
        button: /* @__PURE__ */ import_react2.default.createElement("button", { onClick: () => alert("You clicked me 3") }, "click 3")
      })
    ]
  }
));
var MyInfoContext = import_react2.default.createContext([]);
var MyInfoProvider = (props) => {
  const buttonSets = [
    ["button1", "button2", "button3"],
    ["button4", "button5", "button6"]
    // Add more button sets as needed
  ];
  const [currentSetIndex, setCurrentSetIndex] = (0, import_react2.useState)(0);
  const currentSet = buttonSets[currentSetIndex];
  (0, import_react2.useEffect)(() => {
    const intervalId = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % buttonSets.length);
    }, 5e3);
    return () => clearInterval(intervalId);
  }, [currentSetIndex, buttonSets.length]);
  return /* @__PURE__ */ import_react2.default.createElement(MyInfoContext.Provider, { value: currentSet }, props.children);
};
var rendered3_2 = renderTemplateDynamically(textTree3, new TemplateArgs(
  {
    buttons: new MutatingTemplateArgs((children) => {
      return /* @__PURE__ */ import_react2.default.createElement(MyInfoContext.Consumer, null, (values) => {
        return values.map((value) => {
          return children(new TemplateArgs(
            {
              button: /* @__PURE__ */ import_react2.default.createElement("button", { onClick: () => alert("You clicked " + value) }, value)
            }
          ), value);
        });
      });
    })
  }
).wrappedBy((children) => {
  return /* @__PURE__ */ import_react2.default.createElement(MyInfoProvider, null, children);
}));
var TEXT_FROM_SERVER_4 = '<p data-on-click="clickAction">click me!</p>';
var sanitized4 = sanitize({
  fileResolver: null
}, featureSupport, TEXT_FROM_SERVER_4);
var textTree4 = deserialize(sanitized4);
var rendered4 = renderTemplateDynamically(textTree4, new TemplateArgs(
  {
    clickAction: () => {
      alert("You clicked me");
    }
  }
));
var TEXT_FROM_SERVER_5 = '<div class="container"><p data-on-click="clickAction">click me!</p></div><div class="container"><a class="image"><div class="image-container"><div class="image-pad" style="padding-bottom: 56.25%"><img alt="example" data-src-height="720" data-src-id="FILEID" data-src-width="1280" loading="lazy"></div></div></a></div>';
var sanitized5 = sanitize({
  fileResolver: (id) => {
    return {
      src: "./img/example-img.jpeg"
      // no srcset specified
    };
  }
}, featureSupport, TEXT_FROM_SERVER_5);
var textTree5 = deserialize(sanitized5);
var rendered5 = renderTemplateDynamically(textTree5, new TemplateArgs(
  {
    clickAction: () => {
      alert("You clicked me");
    }
  }
), {
  onCustomAttributesFor: (element) => {
    if (element.type === "paragraph") {
      return {
        // now every paragraph will have this
        onMouseOver: () => {
          console.log("Over here");
        }
      };
    }
  },
  onCustom: (element, props, info) => {
    if (element.type === "image") {
      return /* @__PURE__ */ import_react2.default.createElement("div", { style: { backgroundColor: "black" } }, info.defaultReturn());
    }
    return info.defaultReturn();
  }
});
function Example() {
  return /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h1", null, "Advanced Displaying"), /* @__PURE__ */ import_react2.default.createElement("section", null, /* @__PURE__ */ import_react2.default.createElement("div", null, "Original HTML (also sanitized):"), /* @__PURE__ */ import_react2.default.createElement("code", null, TEXT_FROM_SERVER_1), /* @__PURE__ */ import_react2.default.createElement("div", null, "Deserialized HTML Tree:"), /* @__PURE__ */ import_react2.default.createElement("code", null, JSON.stringify(textTree1, null, 2)), /* @__PURE__ */ import_react2.default.createElement("div", null, "rendered template"), /* @__PURE__ */ import_react2.default.createElement("code", null, rendered1), /* @__PURE__ */ import_react2.default.createElement("div", null, "rendered template dinamically (react component)"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "rich-text", style: { padding: "10px", border: "solid 1px #ccc" } }, rendered1_2)), /* @__PURE__ */ import_react2.default.createElement("section", null, /* @__PURE__ */ import_react2.default.createElement("div", null, "Original HTML (also sanitized):"), /* @__PURE__ */ import_react2.default.createElement("code", null, TEXT_FROM_SERVER_2), /* @__PURE__ */ import_react2.default.createElement("div", null, "rendered template dinamically (react component)"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "rich-text", style: { padding: "10px", border: "solid 1px #ccc" } }, rendered2)), /* @__PURE__ */ import_react2.default.createElement("section", null, /* @__PURE__ */ import_react2.default.createElement("div", null, "Original HTML (also sanitized):"), /* @__PURE__ */ import_react2.default.createElement("code", null, TEXT_FROM_SERVER_3), /* @__PURE__ */ import_react2.default.createElement("div", null, "rendered template dinamically (react component)"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "rich-text", style: { padding: "10px", border: "solid 1px #ccc" } }, rendered3), /* @__PURE__ */ import_react2.default.createElement("div", null, "rendered template dinamically (react component, with mutating data)"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "rich-text", style: { padding: "10px", border: "solid 1px #ccc" } }, rendered3_2)), /* @__PURE__ */ import_react2.default.createElement("section", null, /* @__PURE__ */ import_react2.default.createElement("div", null, "Original HTML (also sanitized):"), /* @__PURE__ */ import_react2.default.createElement("code", null, TEXT_FROM_SERVER_4), /* @__PURE__ */ import_react2.default.createElement("div", null, "rendered template dinamically (react component)"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "rich-text", style: { padding: "10px", border: "solid 1px #ccc" } }, rendered4)), /* @__PURE__ */ import_react2.default.createElement("section", null, /* @__PURE__ */ import_react2.default.createElement("div", null, "Original HTML (also sanitized):"), /* @__PURE__ */ import_react2.default.createElement("code", null, TEXT_FROM_SERVER_5), /* @__PURE__ */ import_react2.default.createElement("div", null, "rendered template dinamically (react component)"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "rich-text", style: { padding: "10px", border: "solid 1px #ccc" } }, rendered5)));
}
import_react_dom.default.render(/* @__PURE__ */ import_react2.default.createElement(Example, null), document.querySelector("#app"));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZXhhbXBsZTIudHN4IiwgIi4uLy4uL3JlbmRlcmVyL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBkZXNlcmlhbGl6ZSB9IGZyb20gXCIuLi9zZXJpYWxpemVyXCI7XG5pbXBvcnQgeyBJRmVhdHVyZVN1cHBvcnRPcHRpb25zLCBzYW5pdGl6ZSB9IGZyb20gXCIuLi9zYW5pdGl6ZXJcIjtcbmltcG9ydCB7IHJlbmRlclRlbXBsYXRlRG9udFNhbml0aXplLCByZW5kZXJUZW1wbGF0ZUR5bmFtaWNhbGx5IH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgeyBNdXRhdGluZ1RlbXBsYXRlQXJncywgVGVtcGxhdGVBcmdzIH0gZnJvbSBcIi4uL3NlcmlhbGl6ZXIvdGVtcGxhdGUtYXJnc1wiO1xuaW1wb3J0IHsgSVBhcmFncmFwaCB9IGZyb20gXCIuLi9zZXJpYWxpemVyL3R5cGVzL3BhcmFncmFwaFwiO1xuaW1wb3J0IHsgSUltYWdlIH0gZnJvbSBcIi4uL3NlcmlhbGl6ZXIvdHlwZXMvaW1hZ2VcIjtcblxuY29uc3QgZmVhdHVyZVN1cHBvcnQ6IElGZWF0dXJlU3VwcG9ydE9wdGlvbnMgPSB7XG4gIHN1cHBvcnRlZENvbnRhaW5lcnM6IFtdLFxuICBzdXBwb3J0ZWRDdXN0b21zOiBbXSxcbiAgc3VwcG9ydGVkUmljaENsYXNzZXM6IFtdLFxuICBzdXBwb3J0ZWRUYWJsZXM6IFtdLFxuICBzdXBwb3J0c0NvbnRhaW5lcnM6IHRydWUsXG4gIHN1cHBvcnRzQ3VzdG9tOiB0cnVlLFxuICBzdXBwb3J0c0N1c3RvbVN0eWxlczogdHJ1ZSxcbiAgc3VwcG9ydHNFeHRlcm5hbExpbmtzOiB0cnVlLFxuICBzdXBwb3J0c0ZpbGVzOiB0cnVlLFxuICBzdXBwb3J0c0ZpbGVzQWNjZXB0OiBudWxsLFxuICBzdXBwb3J0c0ltYWdlczogdHJ1ZSxcbiAgc3VwcG9ydHNJbWFnZXNBY2NlcHQ6IG51bGwsXG4gIHN1cHBvcnRzTGlua3M6IHRydWUsXG4gIHN1cHBvcnRzTGlzdHM6IHRydWUsXG4gIHN1cHBvcnRzUXVvdGU6IHRydWUsXG4gIHN1cHBvcnRzUmljaENsYXNzZXM6IHRydWUsXG4gIHN1cHBvcnRzVGFibGVzOiB0cnVlLFxuICAvLyBub3RpY2UgdGhpcyBiZWluZyB0cnVlXG4gIHN1cHBvcnRzVGVtcGxhdGluZzogdHJ1ZSxcbiAgc3VwcG9ydHNUaXRsZTogdHJ1ZSxcbiAgc3VwcG9ydHNWaWRlb3M6IHRydWUsXG59O1xuXG4vLyBub3RlIGhvdyB0aGlzIHNwZWNpZmllcyB0aGUgaW5saW5lIGNsYXNzXG4vLyB0aGF0IGlzIGJlY2F1c2Ugc3BhbiBpcyBhbHNvIHVzZWQgaW4gdGhlIHRleHQgdHlwZSB0byBtYWtlIGZvclxuLy8gY3VzdG9tIHN0eWxlcywgb25seSB0aGUgaW5saW5lIHRhZyBhbGxvd3MgZm9yIGN1c3RvbSBwcm9wZXJ0aWVzXG4vLyBvdGhlcndpc2UgaXQgd2lsbCB2YW5pc2gsIHdoaWxlIGl0IHdpbGwgc3Vydml2ZSBzYW5pdGl6YXRpb24gaXQgd2lsbCBub3Qgc3Vydml2ZSBkZXNlcmlhbGl6YXRpb25cbi8vIG9uY2UgdGhlIG5vcm1hbGl6ZXIgY2F0Y2hlcyBpdCwgc3BhbiBpcyB1c2VkIGZvciB0ZXh0IHN0eWxlcywgYW5kIHNwYW4uaW5saW5lIGlzIGFuIGlubGluZSBlbGVtZW50XG4vLyBmb3Igb3RoZXIgcHVycG9zZXNcbmNvbnN0IFRFWFRfRlJPTV9TRVJWRVJfMSA9ICc8cD5CYXNpYyB0ZW1wbGF0aW5nIGZvciA8c3BhbiBjbGFzcz1cImlubGluZVwiIGRhdGEtdGV4dD1cInVzZXJuYW1lXCI+dXNlcm5hbWU8L3NwYW4+PC9wPic7XG5cbmNvbnN0IHNhbml0aXplZDEgPSBzYW5pdGl6ZSh7XG4gIGZpbGVSZXNvbHZlcjogbnVsbCxcbn0sIGZlYXR1cmVTdXBwb3J0LCBURVhUX0ZST01fU0VSVkVSXzEpO1xuXG4vLyB0aGUgcmVuZGVyIHRlbXBsYXRlIG1ldGhvZCBpcyBsaW1pdGVkIHF1aXRlIGEgYml0XG5jb25zdCByZW5kZXJlZDEgPSByZW5kZXJUZW1wbGF0ZURvbnRTYW5pdGl6ZShzYW5pdGl6ZWQxLCB7XG4gIHVzZXJuYW1lOiBcIm15IG5hbWVcIixcbn0pO1xuXG5jb25zdCB0ZXh0VHJlZTEgPSBkZXNlcmlhbGl6ZShzYW5pdGl6ZWQxKTtcblxuY29uc3QgcmVuZGVyZWQxXzIgPSByZW5kZXJUZW1wbGF0ZUR5bmFtaWNhbGx5KHRleHRUcmVlMSwgbmV3IFRlbXBsYXRlQXJncyhcbiAge1xuICAgIHVzZXJuYW1lOiBcIm15IG5hbWVcIixcbiAgfVxuKSk7XG5cbi8vIHJlbmRlcmluZyBhcyBhIHJlYWN0IGNvbXBvbmVudCBhbGxvd3MgZm9yIGZ1bGwgY3VzdG9taXphdGlvbiBvblxuLy8gaG93IHRoaW5ncyBhcmUgcmVuZGVyZWQsIGl0IGFsc28gaGFzIHF1aXRlIGEgbW9yZSByYW5nZSBvbiB3aGF0IGl0IGNhbiBhbmQgY2FuJ3QgZG9cbi8vIGZvciBleGFtcGxlIGRhdGEtc3R5bGUtaG92ZXIgaXMgbm93IGZ1bmN0aW9uYWwgaXMgYWxsb3dlZCBieSB0aGUgZmVhdHVyZSBzdXBwb3J0LCBhbmQgd2hlblxuLy8gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRleHQtaHRtbCB5b3UgY2FuIGhhdmUgYSBsb3Qgb2YgZmxleGliaWxpdHlcbi8vIG5vdGUgdGhhdCBpdCdzIHBvc3NpYmxlIHRvIGluZm9ybSB0aGUgZWRpdG9yIGFib3V0IHRoaXMgdG9vIHNvIHRoZSBlZGl0aW5nIGV4cGVyaWVuY2Vcbi8vIGlzIGFsc28gZ3JlYXRcbmNvbnN0IFRFWFRfRlJPTV9TRVJWRVJfMiA9ICc8cCBkYXRhLXN0eWxlLWhvdmVyPVwiY29sb3I6IHJlZFwiPkNsaWNrIHRoaXMgPHNwYW4gY2xhc3M9XCJpbmxpbmVcIiBkYXRhLWh0bWw9XCJidXR0b25cIj5idXR0b248L3NwYW4+PC9wPic7XG5jb25zdCBzYW5pdGl6ZWQyID0gc2FuaXRpemUoe1xuICBmaWxlUmVzb2x2ZXI6IG51bGwsXG59LCBmZWF0dXJlU3VwcG9ydCwgVEVYVF9GUk9NX1NFUlZFUl8yKTtcbmNvbnN0IHRleHRUcmVlMiA9IGRlc2VyaWFsaXplKHNhbml0aXplZDIpO1xuY29uc3QgcmVuZGVyZWQyID0gcmVuZGVyVGVtcGxhdGVEeW5hbWljYWxseSh0ZXh0VHJlZTIsIG5ldyBUZW1wbGF0ZUFyZ3MoXG4gIHtcbiAgICBidXR0b246IDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCJZb3UgY2xpY2tlZCBtZVwiKX0+Y2xpY2sgbWUhPC9idXR0b24+LFxuICB9XG4pKTtcblxuLy8gb3RoZXIgbW9yZSBhZHZhbmNlZCBmZWF0dXJlcyBhcmUgYWxzbyBpbmNsdWRlZCB3aXRoIGR5bmFtaWMgcmVuZGVyc1xuLy8gc29tZSBvZiB0aGVtIHdvcmsgd2l0aCBzdGF0aWMgdG9vIGZvciBleGFtcGxlLCBsZXQncyBtYWtlIGEgbG9vcCBmb3IgYSBsaXN0XG5jb25zdCBURVhUX0ZST01fU0VSVkVSXzMgPSAnPHVsPjxsaSBkYXRhLWZvci1lYWNoPVwiYnV0dG9uc1wiIGRhdGEtaHRtbD1cImJ1dHRvblwiPjxwPmJ1dHRvbjwvcD48L2xpPjwvdWw+JztcbmNvbnN0IHNhbml0aXplZDMgPSBzYW5pdGl6ZSh7XG4gIGZpbGVSZXNvbHZlcjogbnVsbCxcbn0sIGZlYXR1cmVTdXBwb3J0LCBURVhUX0ZST01fU0VSVkVSXzMpO1xuY29uc3QgdGV4dFRyZWUzID0gZGVzZXJpYWxpemUoc2FuaXRpemVkMyk7XG5jb25zdCByZW5kZXJlZDMgPSByZW5kZXJUZW1wbGF0ZUR5bmFtaWNhbGx5KHRleHRUcmVlMywgbmV3IFRlbXBsYXRlQXJncyhcbiAge1xuICAgIGJ1dHRvbnM6IFtcbiAgICAgIG5ldyBUZW1wbGF0ZUFyZ3Moe1xuICAgICAgICBidXR0b246IDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCJZb3UgY2xpY2tlZCBtZSAxXCIpfT5jbGljayAxPC9idXR0b24+XG4gICAgICB9KSxcbiAgICAgIG5ldyBUZW1wbGF0ZUFyZ3Moe1xuICAgICAgICBidXR0b246IDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCJZb3UgY2xpY2tlZCBtZSAyXCIpfT5jbGljayAyPC9idXR0b24+XG4gICAgICB9KSxcbiAgICAgIG5ldyBUZW1wbGF0ZUFyZ3Moe1xuICAgICAgICBidXR0b246IDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCJZb3UgY2xpY2tlZCBtZSAzXCIpfT5jbGljayAzPC9idXR0b24+XG4gICAgICB9KSxcbiAgICBdXG4gIH1cbikpO1xuXG5jb25zdCBNeUluZm9Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxzdHJpbmdbXT4oW10pO1xuXG5jb25zdCBNeUluZm9Qcm92aWRlciA9IChwcm9wczoge2NoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGV9KSA9PiB7XG4gIGNvbnN0IGJ1dHRvblNldHMgPSBbXG4gICAgWydidXR0b24xJywgJ2J1dHRvbjInLCAnYnV0dG9uMyddLFxuICAgIFsnYnV0dG9uNCcsICdidXR0b241JywgJ2J1dHRvbjYnXSxcbiAgICAvLyBBZGQgbW9yZSBidXR0b24gc2V0cyBhcyBuZWVkZWRcbiAgXTtcblxuICBjb25zdCBbY3VycmVudFNldEluZGV4LCBzZXRDdXJyZW50U2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGN1cnJlbnRTZXQgPSBidXR0b25TZXRzW2N1cnJlbnRTZXRJbmRleF07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Q3VycmVudFNldEluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggKyAxKSAlIGJ1dHRvblNldHMubGVuZ3RoKTtcbiAgICB9LCA1MDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICB9LCBbY3VycmVudFNldEluZGV4LCBidXR0b25TZXRzLmxlbmd0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE15SW5mb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2N1cnJlbnRTZXR9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvTXlJbmZvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbi8vIGl0IGlzIGFsc28gcG9zc2libGUgdG8gbWFrZSBtdXRhdGluZyBjb250ZXh0cywgbXV0YXRpbmcgZnVuY3Rpb25zLCB0aGF0IGRlcGVuZCBvbiBjb250ZXh0c1xuLy8gdGhpcyBjYW4gYmUgdXNlZCB0byBjcmVhdGUgaW5jcmVkaWJsZWx5IGNvbXBsaWNhdGVkIGFuZCBpbnRyaW5jYXRlIGJlaGF2aW91cnNcbi8vIGFsbCBvZiBpdCB3aGljaCBpcyBlZGl0YWJsZSAod2lsbCBiZSBzaG93biBob3cgdG8gZG8gbGF0ZXIgb24pXG5jb25zdCByZW5kZXJlZDNfMiA9IHJlbmRlclRlbXBsYXRlRHluYW1pY2FsbHkodGV4dFRyZWUzLCBuZXcgVGVtcGxhdGVBcmdzKFxuICB7XG4gICAgYnV0dG9uczogbmV3IE11dGF0aW5nVGVtcGxhdGVBcmdzKChjaGlsZHJlbikgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE15SW5mb0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgeyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4obmV3IFRlbXBsYXRlQXJncyhcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBidXR0b246IDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCJZb3UgY2xpY2tlZCBcIiArIHZhbHVlKX0+e3ZhbHVlfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKSwgdmFsdWUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA8L015SW5mb0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICApXG4gICAgfSksXG4gIH1cbikud3JhcHBlZEJ5KChjaGlsZHJlbikgPT4ge1xuICAvLyB0aGlzIGNvbnRleHQgY291bGQgYmUgYW55d2hlcmUsIGJ1dCB3ZSBhcmUgcHV0dGluZyBpdCBoZXJlXG4gIC8vIHRoZSB3cmFwcGVkIGJ5IGZ1bmN0aW9uYWxpdHkgY2FuIHdyYXAgZm9yIGFueSByZWFzb25cbiAgLy8gZXZlbiBpZiBpdCdzIHN0eWxpc3RpYywgYnV0IGl0J3MgbWVhbnQgdG8gYmUgdXNlZCBmb3JcbiAgLy8gcGFzc2luZyBkb3duIGNvbnRleHRzXG5cbiAgLy8gZWZmZWN0aXZlbHkgYmVjYXVzZSB0aGlzIGlzIGEgcmVhY3QgY29tcG9uZW50IGlmIHRoZSBkYXRhIGNoYW5nZXNcbiAgLy8gdGhlbiB0aGUgZGlzcGxheSBjaGFuZ2VzXG4gIHJldHVybiAoXG4gICAgPE15SW5mb1Byb3ZpZGVyPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTXlJbmZvUHJvdmlkZXI+XG4gICk7XG59KSk7XG5cbi8vIFlvdSBtYXkgYWxzbyBkZWZpbmUgZnVuY3Rpb25zXG4vLyBvbiB0aGlzIGJlaGF2aW91clxuY29uc3QgVEVYVF9GUk9NX1NFUlZFUl80ID0gJzxwIGRhdGEtb24tY2xpY2s9XCJjbGlja0FjdGlvblwiPmNsaWNrIG1lITwvcD4nO1xuXG5jb25zdCBzYW5pdGl6ZWQ0ID0gc2FuaXRpemUoe1xuICBmaWxlUmVzb2x2ZXI6IG51bGwsXG59LCBmZWF0dXJlU3VwcG9ydCwgVEVYVF9GUk9NX1NFUlZFUl80KTtcbmNvbnN0IHRleHRUcmVlNCA9IGRlc2VyaWFsaXplKHNhbml0aXplZDQpO1xuY29uc3QgcmVuZGVyZWQ0ID0gcmVuZGVyVGVtcGxhdGVEeW5hbWljYWxseSh0ZXh0VHJlZTQsIG5ldyBUZW1wbGF0ZUFyZ3MoXG4gIHtcbiAgICBjbGlja0FjdGlvbjogKCkgPT4ge1xuICAgICAgYWxlcnQoXCJZb3UgY2xpY2tlZCBtZVwiKTtcbiAgICB9XG4gIH1cbikpO1xuXG4vLyBvZiBjb3Vyc2UgYXQgdGhlIGVuZCBvZiB0aGUgZGF5XG4vLyB5b3UgY2FuIGRvIHdoYXRldmVyIHlvdSB3YW50IHdpdGggdGhpc1xuLy8gd2l0aCBmdWxsIGN1c3RvbWl6YXRpb25cbmNvbnN0IFRFWFRfRlJPTV9TRVJWRVJfNSA9ICc8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PHAgZGF0YS1vbi1jbGljaz1cImNsaWNrQWN0aW9uXCI+Y2xpY2sgbWUhPC9wPjwvZGl2PjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj48YSBjbGFzcz1cImltYWdlXCI+PGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJpbWFnZS1wYWRcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiA1Ni4yNSVcIj48aW1nIGFsdD1cImV4YW1wbGVcIiBkYXRhLXNyYy1oZWlnaHQ9XCI3MjBcIiBkYXRhLXNyYy1pZD1cIkZJTEVJRFwiIGRhdGEtc3JjLXdpZHRoPVwiMTI4MFwiIGxvYWRpbmc9XCJsYXp5XCI+PC9kaXY+PC9kaXY+PC9hPjwvZGl2Pic7XG5cbmNvbnN0IHNhbml0aXplZDUgPSBzYW5pdGl6ZSh7XG4gIGZpbGVSZXNvbHZlcjogKGlkOiBzdHJpbmcpID0+IHtcbiAgICAvLyB0aGUgaWQgaXMgZ29pbmcgdG8gYmUgRklMRUlEXG4gICAgcmV0dXJuIHtcbiAgICAgIHNyYzogXCIuL2ltZy9leGFtcGxlLWltZy5qcGVnXCIsXG4gICAgICAvLyBubyBzcmNzZXQgc3BlY2lmaWVkXG4gICAgfTtcbiAgfSxcbn0sIGZlYXR1cmVTdXBwb3J0LCBURVhUX0ZST01fU0VSVkVSXzUpO1xuY29uc3QgdGV4dFRyZWU1ID0gZGVzZXJpYWxpemUoc2FuaXRpemVkNSk7XG5jb25zdCByZW5kZXJlZDUgPSByZW5kZXJUZW1wbGF0ZUR5bmFtaWNhbGx5KHRleHRUcmVlNSwgbmV3IFRlbXBsYXRlQXJncyhcbiAge1xuICAgIGNsaWNrQWN0aW9uOiAoKSA9PiB7XG4gICAgICBhbGVydChcIllvdSBjbGlja2VkIG1lXCIpO1xuICAgIH1cbiAgfVxuKSwge1xuICBvbkN1c3RvbUF0dHJpYnV0ZXNGb3I6IChlbGVtZW50KSA9PiB7XG4gICAgaWYgKChlbGVtZW50IGFzIElQYXJhZ3JhcGgpLnR5cGUgPT09IFwicGFyYWdyYXBoXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIG5vdyBldmVyeSBwYXJhZ3JhcGggd2lsbCBoYXZlIHRoaXNcbiAgICAgICAgb25Nb3VzZU92ZXI6ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk92ZXIgaGVyZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgb25DdXN0b206IChlbGVtZW50LCBwcm9wcywgaW5mbykgPT4ge1xuICAgIGlmICgoZWxlbWVudCBhcyBJSW1hZ2UpLnR5cGUgPT09IFwiaW1hZ2VcIikge1xuICAgICAgLy8gaW1hZ2UgaXMgbm93IHdyYXBwZWQgYnkgdGhpcyBibGFjayBib3hcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIn19PlxuICAgICAgICAgIHtpbmZvLmRlZmF1bHRSZXR1cm4oKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW5mby5kZWZhdWx0UmV0dXJuKCk7XG4gIH1cbn0pO1xuXG5cbi8vIChob3dldmVyIGRvbid0IGZyZXQsIFVJIEhhbmRsZXJzIHByb3ZpZGUgY3VzdG9tIGVsZW1lbnRzIGluIHRoZSBuZXh0IHNlY3Rpb24pXG4vLyBhbmQgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGN1c3RvbSBmdWxseSBlZGl0YWJsZSBjb21wb25lbnRzXG5cbmZ1bmN0aW9uIEV4YW1wbGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5BZHZhbmNlZCBEaXNwbGF5aW5nPC9oMT5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgT3JpZ2luYWwgSFRNTCAoYWxzbyBzYW5pdGl6ZWQpOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e1RFWFRfRlJPTV9TRVJWRVJfMX08L2NvZGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgRGVzZXJpYWxpemVkIEhUTUwgVHJlZTpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeSh0ZXh0VHJlZTEsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICByZW5kZXJlZCB0ZW1wbGF0ZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e3JlbmRlcmVkMX08L2NvZGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgcmVuZGVyZWQgdGVtcGxhdGUgZGluYW1pY2FsbHkgKHJlYWN0IGNvbXBvbmVudClcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmljaC10ZXh0XCIgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCJzb2xpZCAxcHggI2NjY1wiIH19PlxuICAgICAgICAgIHtyZW5kZXJlZDFfMn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIE9yaWdpbmFsIEhUTUwgKGFsc28gc2FuaXRpemVkKTpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxjb2RlPntURVhUX0ZST01fU0VSVkVSXzJ9PC9jb2RlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHJlbmRlcmVkIHRlbXBsYXRlIGRpbmFtaWNhbGx5IChyZWFjdCBjb21wb25lbnQpXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpY2gtdGV4dFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwic29saWQgMXB4ICNjY2NcIiB9fT5cbiAgICAgICAgICB7cmVuZGVyZWQyfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgT3JpZ2luYWwgSFRNTCAoYWxzbyBzYW5pdGl6ZWQpOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e1RFWFRfRlJPTV9TRVJWRVJfM308L2NvZGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgcmVuZGVyZWQgdGVtcGxhdGUgZGluYW1pY2FsbHkgKHJlYWN0IGNvbXBvbmVudClcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmljaC10ZXh0XCIgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCJzb2xpZCAxcHggI2NjY1wiIH19PlxuICAgICAgICAgIHtyZW5kZXJlZDN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHJlbmRlcmVkIHRlbXBsYXRlIGRpbmFtaWNhbGx5IChyZWFjdCBjb21wb25lbnQsIHdpdGggbXV0YXRpbmcgZGF0YSlcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmljaC10ZXh0XCIgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCJzb2xpZCAxcHggI2NjY1wiIH19PlxuICAgICAgICAgIHtyZW5kZXJlZDNfMn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIE9yaWdpbmFsIEhUTUwgKGFsc28gc2FuaXRpemVkKTpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxjb2RlPntURVhUX0ZST01fU0VSVkVSXzR9PC9jb2RlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHJlbmRlcmVkIHRlbXBsYXRlIGRpbmFtaWNhbGx5IChyZWFjdCBjb21wb25lbnQpXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpY2gtdGV4dFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwic29saWQgMXB4ICNjY2NcIiB9fT5cbiAgICAgICAgICB7cmVuZGVyZWQ0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgT3JpZ2luYWwgSFRNTCAoYWxzbyBzYW5pdGl6ZWQpOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e1RFWFRfRlJPTV9TRVJWRVJfNX08L2NvZGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgcmVuZGVyZWQgdGVtcGxhdGUgZGluYW1pY2FsbHkgKHJlYWN0IGNvbXBvbmVudClcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmljaC10ZXh0XCIgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCJzb2xpZCAxcHggI2NjY1wiIH19PlxuICAgICAgICAgIHtyZW5kZXJlZDV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEV4YW1wbGUgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpKTsiLCAiaW1wb3J0IHsgRE9NUHVyaWZ5IH0gZnJvbSBcIi4uL3NlcmlhbGl6ZXIvZG9tXCI7XG5pbXBvcnQge1xuICBJUm9vdExldmVsRG9jdW1lbnQsIFJpY2hFbGVtZW50LCBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLCBJUmVhY3RpZnlFeHRyYU9wdGlvbnMsIE5VTExfRE9DVU1FTlQsIGRlc2VyaWFsaXplXG59IGZyb20gXCIuLi9zZXJpYWxpemVyXCI7XG5pbXBvcnQgeyBJVGV4dCB9IGZyb20gXCIuLi9zZXJpYWxpemVyL3R5cGVzL3RleHRcIjtcbmltcG9ydCB7IERPTVdpbmRvdyB9IGZyb20gXCIuLi9zZXJpYWxpemVyL2RvbVwiO1xuaW1wb3J0IHsgVGVtcGxhdGVBcmdzIH0gZnJvbSBcIi4uL3NlcmlhbGl6ZXIvdGVtcGxhdGUtYXJnc1wiO1xuaW1wb3J0IHsgSUZlYXR1cmVTdXBwb3J0T3B0aW9ucywgSVBvc3RQcm9jZXNzaW5nT3B0aW9ucywgc2FuaXRpemUgfSBmcm9tIFwiLi4vc2FuaXRpemVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogUHJvY2Vzc2VzIHRoZSBpbml0aWFsaXphdGlvbiBvZiBhIHNpbmdsZSBub2RlXG4gKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBpbiBxdWVzdGlvbnNcbiAqIEBwYXJhbSB0ZW1wbGF0ZUFyZ3NDb250ZXh0IHRoZSBhcmcgY29udGV4dCB3ZSBhcmUgY3VycmVudGx5IGluXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZU5vZGVJbml0aWFsaXphdGlvbihcbiAgbm9kZTogSFRNTEVsZW1lbnQsXG4gIHRlbXBsYXRlQXJnc0NvbnRleHQ6IGFueSxcbiAgdGVtcGxhdGVBcmdzUm9vdGNvbnRleHQ6IGFueSxcbikge1xuICBjb25zdCBpZktleSA9IG5vZGUuZGF0YXNldC5pZjtcbiAgaWYgKGlmS2V5KSB7XG4gICAgY29uc3QgaWZWYWx1ZSA9IHRlbXBsYXRlQXJnc0NvbnRleHRbaWZLZXldO1xuICAgIGlmICghaWZWYWx1ZSkge1xuICAgICAgbm9kZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhhcyBhIHRleHQgaGFuZGxlclxuICBjb25zdCB0ZXh0S2V5ID0gbm9kZS5kYXRhc2V0LnRleHQ7XG4gIGlmICh0ZXh0S2V5KSB7XG4gICAgY29uc3QgdGV4dDogc3RyaW5nID0gdGVtcGxhdGVBcmdzQ29udGV4dFt0ZXh0S2V5XSB8fCB0ZW1wbGF0ZUFyZ3NSb290Y29udGV4dFt0ZXh0S2V5XTtcbiAgICBpZiAodHlwZW9mIHRleHQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIHdlIGRvIG5vdCBsb2cgYmVjYXVzZSB0aGlzIHdpbGwgaGl0IHRoZSBzZXJ2ZXIgc2lkZVxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgdGhlIHRocmVmIGtleVxuICBjb25zdCB0aHJlZktleSA9IG5vZGUuZGF0YXNldC5ocmVmO1xuICBpZiAodGhyZWZLZXkpIHtcbiAgICBjb25zdCB0aHJlZjogc3RyaW5nID0gdGVtcGxhdGVBcmdzQ29udGV4dFt0aHJlZktleV0gfHwgdGVtcGxhdGVBcmdzUm9vdGNvbnRleHRbdGhyZWZLZXldO1xuICAgIGlmICh0eXBlb2YgdGhyZWYgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIHdlIGRvIG5vdCBsb2cgYmVjYXVzZSB0aGlzIHdpbGwgaGl0IHRoZSBzZXJ2ZXIgc2lkZVxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdGhyZWYpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhhcyBhIEhUTUwgaGFuZGxlclxuICBjb25zdCBodG1sS2V5ID0gbm9kZS5kYXRhc2V0Lmh0bWw7XG4gIGlmIChodG1sS2V5KSB7XG4gICAgY29uc3QgaHRtbDogc3RyaW5nID0gdGVtcGxhdGVBcmdzQ29udGV4dFtodG1sS2V5XSB8fCB0ZW1wbGF0ZUFyZ3NSb290Y29udGV4dFtodG1sS2V5XTtcblxuICAgIGlmICh0eXBlb2YgaHRtbCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gd2UgZG8gbm90IGxvZyBiZWNhdXNlIHRoaXMgd2lsbCBoaXQgdGhlIHNlcnZlciBzaWRlXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIFByb2Nlc3NlcyB0aGUgaW50aWFsaXphdGlvbiBvZiBhIHRlbXBsYXRlLCBieSBwcm9jZXNzaW5nXG4gKiB0aGUgY2hpbGQgbm9kZXMgb2YgYSBnaXZlbiBub2RlXG4gKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSB3ZSBhcmUgd29ya2luZyB3aXRoXG4gKiBAcGFyYW0gdGVtcGxhdGVBcmdzQ29udGV4dCB0aGUgdGVtcGxhdGUgYXJncyB3ZSBhcmUgY3VycmVudGx5IHdvcmtpbmcgd2l0aFxuICovXG5mdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGVJbml0aWFsaXphdGlvbihcbiAgbm9kZTogSFRNTEVsZW1lbnQsXG4gIHRlbXBsYXRlQXJnc0NvbnRleHQ6IGFueSxcbiAgdGVtcGxhdGVBcmdzUm9vdENvbnRleHQ6IGFueSxcbikge1xuICAvLyBmaXJzdCB3ZSBjaGVjayBpZiB3ZSBoYXZlIGNoaWxkIG5vZGVzIHRvIGxvb3BcbiAgbm9kZS5oYXNDaGlsZE5vZGVzKCkgJiYgbm9kZS5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIC8vIHdlIGNvbnNpZGVyIGl0IGFuIGh0bWwgZWxlbWVudFxuICAgIGNvbnN0IGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQgPSBjaGlsZE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBzbyB0aGUgYXJncyB3ZSBhcmUgd29ya2luZyB3aXRoLCB0aGlzIGlzIGdvaW5nIHRvIGJlXG4gICAgLy8gdGhlIGNvbnRleHQgd2Ugd2lsbCBiZSB3b3JraW5nIHdpdGhcbiAgICBsZXQgdGVtcGxhdGVBcmdzTmV3Q29udGV4dCA9IHRlbXBsYXRlQXJnc0NvbnRleHQ7XG5cbiAgICAvLyBjaGVhcCBjaGVlc3kgd2F5IHRvIGNoZWNrIGlmIHdlIGFyZSB3b3JraW5nIHdpdGggYSBIVE1MIEVsZW1lbnRcbiAgICAvLyB0aGF0IGhhcyBhIGRhdGFzZXQgaW4gaXQsIG5vIG5lZWQgZm9yIGZhbmN5IGNoZWNrcyBzaW5jZSB3ZSBhcmUgb25seSBpbnRlcmVzdGVkXG4gICAgLy8gaW4gc3VjaCBlbGVtZW50cyBhbmQgd2UgY2FuIGJlIHN1cmUgd2UgaGF2ZSBhbiBodG1sIGVsZW1lbnRcbiAgICBpZiAodHlwZW9mIGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjaGlsZE5vZGVBU0hUTUxFbGVtZW50LmRhdGFzZXQpIHtcblxuICAgICAgLy8gdXBkYXRlIHRoZSBjb250ZXh0IGZvciBjaGlsZHJlblxuICAgICAgY29uc3QgY29udGV4dEtleSA9IGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQuZGF0YXNldC5jb250ZXh0O1xuICAgICAgaWYgKGNvbnRleHRLZXkpIHtcbiAgICAgICAgdGVtcGxhdGVBcmdzTmV3Q29udGV4dCA9IHRlbXBsYXRlQXJnc05ld0NvbnRleHRbY29udGV4dEtleV07XG4gICAgICB9XG5cbiAgICAgIC8vIHNvIG5vdyB3ZSBnb3QgdG8gc2VlIGlmIHdlIGhhdmUgYSBmb3IgbG9vcFxuICAgICAgY29uc3QgZm9yRWFjaEtleSA9IGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQuZGF0YXNldC5mb3JFYWNoO1xuICAgICAgaWYgKGZvckVhY2hLZXkpIHtcbiAgICAgICAgY29uc3QgaWZLZXkgPSBjaGlsZE5vZGVBU0hUTUxFbGVtZW50LmRhdGFzZXQuaWY7XG4gICAgICAgIGNvbnN0IGlmVmFsdWUgPSBpZktleSAmJiB0ZW1wbGF0ZUFyZ3NOZXdDb250ZXh0W2lmS2V5XTtcblxuICAgICAgICBpZiAoaWZLZXkgJiYgIWlmVmFsdWUpIHtcbiAgICAgICAgICBub2RlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYW5kIHRoaXMgaXMgd2hhdCB3ZSBhcmUgbG9vcGluZyBmb3JcbiAgICAgICAgICBjb25zdCBmb3JBcmd1bWVudCA9IHRlbXBsYXRlQXJnc05ld0NvbnRleHRbZm9yRWFjaEtleV07XG4gICAgICAgICAgLy8gd2UgZ3JhYiB0aGUgbmV4dCBzaWJsaW5nIHNvIHRoYXQgd2UgY2FuIHByb3Blcmx5IHJlcGVhdFxuICAgICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gY2hpbGROb2RlQVNIVE1MRWxlbWVudC5uZXh0U2libGluZztcblxuICAgICAgICAgIC8vIHNvIHdlIGxvb3BcbiAgICAgICAgICBmb3JBcmd1bWVudC5mb3JFYWNoKChmb3JFYWNoQ29udGV4dDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAvLyBub3cgd2UgbWFrZSBhIGNsb25lIG9mIHdoYXQgd2UgYXJlIGxvb3BpbmcgZm9yXG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBhIG5leHQgc2libGluZ1xuICAgICAgICAgICAgaWYgKG5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGluc2VydCBiZWZvcmUgaXRcbiAgICAgICAgICAgICAgY2hpbGROb2RlQVNIVE1MRWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjbG9uZSwgbmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGROb2RlQVNIVE1MRWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYW5kIG5vdyB3ZSBjYWxsIGZvciB0aGUgaW5pdGlhbGl6YXRpb24gb2YgdGhpcyBub2RlIGl0c2VsZlxuICAgICAgICAgICAgcHJvY2Vzc1RlbXBsYXRlTm9kZUluaXRpYWxpemF0aW9uKFxuICAgICAgICAgICAgICBjbG9uZSxcbiAgICAgICAgICAgICAgZm9yRWFjaENvbnRleHQsXG4gICAgICAgICAgICAgIHRlbXBsYXRlQXJnc1Jvb3RDb250ZXh0LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gaWYgd2UgZG9uJ3QgZXhwZWN0IGNoaWxkcmVuIHRvIGJlIHVuaGFuZGxlZFxuICAgICAgICAgICAgaWYgKGNsb25lLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgICAvLyB3ZSBoYW5kbGUgdGhlbSBwZXIgY2xvbmUgcmVzdWx0XG4gICAgICAgICAgICAgIHByb2Nlc3NUZW1wbGF0ZUluaXRpYWxpemF0aW9uKFxuICAgICAgICAgICAgICAgIGNsb25lLFxuICAgICAgICAgICAgICAgIGZvckVhY2hDb250ZXh0LFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlQXJnc1Jvb3RDb250ZXh0LFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gbm93IHdlIGNhbiByZW1vdmUgdGhlIG9yaWdpbmFsXG4gICAgICAgICAgY2hpbGROb2RlQVNIVE1MRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvdGhlcndpc2UgaWYgd2UgaGF2ZSBubyBmb3IgbG9vcCwgd2UganVzdCBwcm9jZXNzIHRoZSBub2RlIGl0c2VsZlxuICAgICAgICBwcm9jZXNzVGVtcGxhdGVOb2RlSW5pdGlhbGl6YXRpb24oXG4gICAgICAgICAgY2hpbGROb2RlQVNIVE1MRWxlbWVudCxcbiAgICAgICAgICB0ZW1wbGF0ZUFyZ3NOZXdDb250ZXh0LFxuICAgICAgICAgIHRlbXBsYXRlQXJnc1Jvb3RDb250ZXh0LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFuZCBpZiB3ZSBkaWQgbm90IGRlY2lkZSB0byBsZWF2ZSB0aGUgY2hpbGRyZW4gb2YgdGhlIG5vZGUgdW5oYW5kbGVkIGFuZFxuICAgIC8vIHdlIGhhdmUgY2hpbGRyZW5cbiAgICBpZiAoY2hpbGROb2RlQVNIVE1MRWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIC8vIGxldHMgcmVjdXJzZSBpbnRvIHRoZW0gZm9yIHRoZWlyIHByb2Nlc3NpbmdcbiAgICAgIHByb2Nlc3NUZW1wbGF0ZUluaXRpYWxpemF0aW9uKFxuICAgICAgICBjaGlsZE5vZGVBU0hUTUxFbGVtZW50LFxuICAgICAgICB0ZW1wbGF0ZUFyZ3NOZXdDb250ZXh0LFxuICAgICAgICB0ZW1wbGF0ZUFyZ3NSb290Q29udGV4dCxcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTYW1lIGFzIHJlbmRlciB0ZW1wbGF0ZSBidXQgd2lsbCBwcm92aWRlXG4gKiB0aGUgZGl2IGFzIGEgcmF3IEhUTUwgcmVzdWx0XG4gKiBcbiAqIHRoaXMgZnVuY3Rpb24gZG9lcyBub3Qgc2FuaXRpemUhISFcbiAqIFxuICogQHBhcmFtIHRlbXBsYXRlIHRoZSB0ZW1wbGF0ZSBpbiBxdWVzdGlvblxuICogQHBhcmFtIGFyZ3MgdGhlIGFyZ3VtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGVBc05vZGUoXG4gIHRlbXBsYXRlOiBzdHJpbmcsXG4gIGFyZ3M6IGFueSxcbik6IEhUTUxEaXZFbGVtZW50IHtcbiAgY29uc3QgY2hlYXBkaXYgPSBET01XaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hlYXBkaXYuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbiAgcHJvY2Vzc1RlbXBsYXRlSW5pdGlhbGl6YXRpb24oXG4gICAgY2hlYXBkaXYsXG4gICAgYXJncyxcbiAgICBhcmdzLFxuICApO1xuXG4gIHJldHVybiBjaGVhcGRpdjtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHNpbXBsZSB0ZW1wbGF0ZSByZW5kZXJpbmdcbiAqIGZyb20gYSBzdHJpbmcgYmFzZWQgSFRNTCB0ZW1wbGF0ZSBiYXNlZCBvbiB0aGUgdGV4dCBzcGVjc1xuICogXG4gKiBoaXMgZnVuY3Rpb24gZG9lcyBub3Qgc2FuaXRpemUhISFcbiAqIFxuICogQHBhcmFtIHRlbXBsYXRlIHRoZSB0ZW1wbGF0ZSBpbiBxdWVzdGlvblxuICogQHBhcmFtIGFyZ3MgdGhlIGFyZ3VtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGVEb250U2FuaXRpemUoXG4gIHRlbXBsYXRlOiBzdHJpbmcsXG4gIGFyZ3M6IGFueSxcbik6IHN0cmluZyB7XG4gIHJldHVybiByZW5kZXJUZW1wbGF0ZUFzTm9kZSh0ZW1wbGF0ZSwgYXJncykuaW5uZXJIVE1MO1xufVxuXG5cbi8qKlxuICogUGVyZm9ybXMgYSBzaW1wbGUgdGVtcGxhdGUgcmVuZGVyaW5nXG4gKiBmcm9tIGEgc3RyaW5nIGJhc2VkIEhUTUwgdGVtcGxhdGUgYmFzZWQgb24gdGhlIHRleHQgc3BlY3NcbiAqIFxuICogTm90ZSB0aGF0IHRoaXMgbWV0aG9kIGRvZXMgbm90IHN1cHBvcnQgVUkgSGFuZGxlcnNcbiAqIGl0IGlzIHVzZWQgZm9yIHByb2R1Y2luZyBhIHN0cmluZyBieSBkb2luZyBhIHNpbXBsZSBwYXNzXG4gKiBvbiBhIHRlbXBsYXRlXG4gKiBcbiAqIEl0IGFsc28gZG9lcyBub3Qgc3VwcG9ydCBkeW5hbWljIHN0eWxlc1xuICogXG4gKiBmb3IgcHJvcGVyIHRlbXBsYXRlcyB3aXRoIGZ1bGwgYmxvd24gZnVuY3Rpb25hbGl0eSB5b3Ugc2hvdWxkXG4gKiB1c2UgdGhlIHJlbmRlclRlbXBsYXRlRHluYW1pY2FsbHkgbWV0aG9kXG4gKiBcbiAqIEBwYXJhbSB0ZW1wbGF0ZSB0aGUgdGVtcGxhdGUgaW4gcXVlc3Rpb25cbiAqIEBwYXJhbSBhcmdzIHRoZSBhcmd1bWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRlbXBsYXRlKFxuICBvcHRpb25zOiBJUG9zdFByb2Nlc3NpbmdPcHRpb25zLFxuICBmZWF0dXJlU3VwcG9ydDogSUZlYXR1cmVTdXBwb3J0T3B0aW9ucyxcbiAgdGVtcGxhdGU6IHN0cmluZyxcbiAgYXJnczogYW55LFxuKTogc3RyaW5nIHtcbiAgY29uc3Qgc2FuaXRpemVkID0gc2FuaXRpemUob3B0aW9ucywgZmVhdHVyZVN1cHBvcnQsIHRlbXBsYXRlKTtcblxuICByZXR1cm4gcmVuZGVyVGVtcGxhdGVBc05vZGUoc2FuaXRpemVkLCBhcmdzKS5pbm5lckhUTUw7XG59XG5cbi8qKlxuICogQ29tcGlsZXMgdGhlIHRlbXBsYXRlIGJ1dCBpdCBkb2VzIGFzIGEgcmVhY3QgZWxlbWVudCBpbiB3aGljaFxuICogd2F5IGl0IHN1cHBvcnRzIHRoZSB3aG9sZSByYW5nZSBvZiB0aGUgY29tcG9uZW50cnksIGluY2x1ZGluZ1xuICogZHluYW1pYyBzdHlsZXMgYW5kIFVJIGhhbmRsaW5nXG4gKiBcbiAqIFRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgYSB0ZW1wbGF0ZSBmb3IgdGhpcyB0byBiZSB1c2FibGVcbiAqIFxuICogZWcuIHJlbmRlclRlbXBsYXRlRHluYW1pY2FsbHkoZGVzZXJpYWxpemUoc2FuaXRpemUoLi4uKSksIHsuLi5hcmdzfSlcbiAqIFxuICogbm90ZSBob3cgdGhpcyBtZXRob2QgZGlmZmVycyBmcm9tIHRoZSByZW5kZXJUZW1wbGF0ZSBtZXRob2QgYXMgaXRcbiAqIHRha2VzIGEgZG9jdW1lbnQgaW5zdGVhZFxuICogXG4gKiBAcGFyYW0gZG9jdW1lbnQgdGhlIHJvb3QgbGV2ZWwgZG9jdW1lbnRcbiAqIEBwYXJhbSBhcmdzIHRoZSBhcmd1bWVudHMgdG8gcmVuZGVyIHRoZSB0ZW1wbGF0ZSB3aXRoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUZW1wbGF0ZUR5bmFtaWNhbGx5KFxuICBkb2N1bWVudDogSVJvb3RMZXZlbERvY3VtZW50LFxuICBhcmdzOiBUZW1wbGF0ZUFyZ3MsXG4gIG9wdGlvbnM6IElSZWFjdGlmeUV4dHJhT3B0aW9ucyA9IHt9LFxuKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgaWYgKGRvY3VtZW50ID09PSBOVUxMX0RPQ1VNRU5UKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB0b1JldHVybiA9IChcbiAgICA8PlxuICAgICAge1xuICAgICAgICBkb2N1bWVudC5jaGlsZHJlbi5tYXAoKGMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFNFUklBTElaQVRJT05fUkVHSVNUUlkuUkVBQ1RJRllbYy50eXBlIHx8IFwidGV4dFwiXSh7XG4gICAgICAgICAgICBhc1RlbXBsYXRlOiB0cnVlLFxuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgZWxlbWVudDogYyxcbiAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICB0ZW1wbGF0ZUFyZ3M6IGFyZ3MsXG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICBleHRyYU9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICBwYXJlbnQ6IGRvY3VtZW50LFxuICAgICAgICAgICAgdHJlZTogZG9jdW1lbnQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC8+XG4gICk7XG5cbiAgaWYgKGFyZ3MgJiYgYXJncy53cmFwcGVyKSB7XG4gICAgcmV0dXJuIGFyZ3Mud3JhcHBlcih0b1JldHVybik7XG4gIH1cblxuICByZXR1cm4gdG9SZXR1cm47XG59XG5cblxuLy8gYml0IG92ZXJraWxsIGJ1dCBzbyBiZSBpdFxuZXhwb3J0IGNvbnN0IG5vZGVzVGhhdFJlcHJlc2VudExpbmVzID0gW1xuICBcImFkZHJlc3NcIixcbiAgXCJibG9ja3F1b3RlXCIsXG4gIFwiYm9keVwiLFxuICBcImNlbnRlclwiLFxuICBcImRpdlwiLFxuICBcImRpclwiLFxuICBcImRsXCIsXG4gIFwiZmllbGRzZXRcIixcbiAgXCJmb3JtXCIsXG4gIFwiaDFcIixcbiAgXCJoMlwiLFxuICBcImgzXCIsXG4gIFwiaDRcIixcbiAgXCJoNVwiLFxuICBcImg2XCIsXG4gIFwidGFibGVcIixcbiAgXCJkZFwiLFxuICBcImZyYW1lc2V0XCIsXG4gIFwibGlcIixcbiAgXCJ0Ym9keVwiLFxuICBcInRmb290XCIsXG4gIFwidGhlYWRcIixcbiAgXCJ0clwiLFxuICBcImh0bWxcIixcbl1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Tm9kZVRvVGV4dChub2RlOiBOb2RlKTogc3RyaW5nIHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICByZXR1cm4gbm9kZS50ZXh0Q29udGVudDtcbiAgfVxuICBpZiAoIW5vZGUuY2hpbGROb2RlcyB8fCAhbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykubWFwKChjbm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoY25vZGUubm9kZVR5cGUgIT09IDMpIHtcbiAgICAgIC8vIHdlIGNvbnNpZGVyIGl0IGFuIGh0bWwgZWxlbWVudFxuICAgICAgY29uc3QgY2hpbGROb2RlQVNIVE1MRWxlbWVudCA9IGNub2RlIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQudGFnTmFtZSAmJiBub2Rlc1RoYXRSZXByZXNlbnRMaW5lcy5pbmNsdWRlcyhjaGlsZE5vZGVBU0hUTUxFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnROb2RlVG9UZXh0KGNub2RlKSArIFwiXFxuXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udmVydE5vZGVUb1RleHQoY25vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY25vZGUudGV4dENvbnRlbnQ7XG4gICAgfVxuICB9KS5qb2luKFwiXCIpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQkFBMkM7QUFDM0MsdUJBQXFCOzs7QUNPckIsbUJBQWtCO0FBT2xCLFNBQVMsa0NBQ1AsTUFDQSxxQkFDQSx5QkFDQTtBQUNBLFFBQU0sUUFBUSxLQUFLLFFBQVE7QUFDM0IsTUFBSSxPQUFPO0FB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QUEsUUFBQSxjQUFDLFNBQUksV0FBVSxhQUFZLE9BQU8sRUFBRSxTQUFTLFFBQVEsUUFBUSxpQkFBaUIsS0FDM0UsV0FDSCxDQUNGLEdBRUEsOEJBQUFBLFFBQUEsY0FBQyxpQkFDQyw4QkFBQUEsUUFBQSxjQUFDLGFBQUksaUNBRUwsR0FDQSw4QkFBQUEsUUFBQSxjQUFDLGNBQU0sa0JBQW1CLEdBQzFCLDhCQUFBQSxRQUFBLGNBQUMsYUFBSSxpREFFTCxHQUNBLDhCQUFBQSxRQUFBLGNBQUMsU0FBSSxXQUFVLGFBQVksT0FBTyxFQUFFLFNBQVMsUUFBUSxRQUFRLGlCQUFpQixLQUMzRSxTQUNILENBQ0YsR0FFQSw4QkFBQUEsUUFBQSxjQUFDLGlCQUNDLDhCQUFBQSxRQUFBLGNBQUMsYUFBSSxpQ0FFTCxHQUNBLDhCQUFBQSxRQUFBLGNBQUMsY0FBTSxrQkFBbUIsR0FDMUIsOEJBQUFBLFFBQUEsY0FBQyxhQUFJLGlEQUVMLEdBQ0EsOEJBQUFBLFFBQUEsY0FBQyxTQUFJLFdBQVUsYUFBWSxPQUFPLEVBQUUsU0FBUyxRQUFRLFFBQVEsaUJBQWlCLEtBQzNFLFNBQ0gsQ0FDRixDQUNGO0FBRUo7QUFFQSxpQkFBQUMsUUFBUyxPQUFPLDhCQUFBRCxRQUFBLGNBQUMsYUFBUSxHQUFJLFNBQVMsY0FBYyxNQUFNLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9yZWFjdCIsICJkb2N1bWVudCIsICJSZWFjdCIsICJSZWFjdCIsICJSZWFjdERPTSJdCn0K
