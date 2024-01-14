# Itemize's Text Engine

This engine is used by the itemize text type in order to handle view and edit, the text type here defined follows a subset of HTML; as defined in the file `text-specs.md` it asks for a specific format and keeps that format consistent.

It is meant to be used within react projects.

It allows for consuming arbitrary HTML for editing however there's no guarantee that this will work properly, it's better if the given text follows the text specs.

The spec can be used for generating templates, for example, for usage in UI (so called fragments) or to generate fully interactive content.

When using text engine, it's possible to control how elements are displayed; since it prevents usage of dangerouslyUseInnerHTML; however the content can also be displayed as it is.

Text engine enforces the concept of separation of images/files as separate from the textual content itself.

## Standalone Usage

Originally text engine was meant to be used within itemize as a way to process text, but it can prove useful outside of it; it was originally developed to create posts and determine the UI elements of a cycling buy/sell website.

As such it was tied to Itemize, which name referred to "itemizing" these buy/sell products, however, the website didn't go anywhere but all the elements of text engine, accessibility and organization stayed behind; Itemize grew to be a behemot on its own, and the text engine was ripped appart from the original source so it could be used within other projects that didn't use Itemize but used plain react.

As a result standalone usage comes with providing information in the format that is expected to be consumed, in the spec that is expected to be consumed; therefore you should ensure that the input html comes in the proper format, if text engine itself created such html then it isn't relevant; but if it was generated somewhere else, by some other editor you may need to do a pre-processing step, which isn't covered here.

### Sanitizing input (and displaying as it is)

If the input from the database/client side endpoint 

#### Styling


### Sanitizing input (and displaying as basic template)

Sometimes you want the content to differ and not be exactly the same html that was inputted, for example; let's say you have the following html

```html
<div class="container" style="border: solid 1px red;" data-style-hover="border: solid 2px blue;">
    <p>hello <span data-text="userName">USERNAME</span> click <span data-html="button">BUTTON</span> to log in</p>
</div>
```

which you want the username part to be the username, and the button part to be a button you may be willing to insert in place, this is using the `data-text`, `data-html`, `data-style-hover` templating attributes, other attributes are `data-style-active`, `data-for-each`, `data-if`, and `data-on-click` (among other events).

Some of these attributes require what is determined to be context info, in this case a proper context could be

There is two ways to render this template, statically, or dynamically.

A static render is useful when you want to, for example, replace USERNAME and BUTTON, with plain text values, but it will not affect dynamic elements, as a result, it will of course not add anything and it will return a string; this can be used for example, to send an email.

In this case the arguments could be

```typescript
const args = {
    userName: "John Doe",
    button: "<a href="https://mysite.com/validate?token=xxx"><button>here</button></a>"
}
```

The function recalled is `renderTemplate` and returns a string, unless `renderTemplateAsNode` is used, which returns a HTML element, `renderTemplateAsNode` doe not sanitize so it isn't recommended unless a very specific case.

```typescript
const result = renderTemplate(
    originalValue,
    
)
```

However a dynamic render which is more often used in 

### Sanitizing input (and displaying as customized template)

You may use this, for example, to wrap images

### Configuring the editor

The editor given for itemize text engine is the slate editor

#### Writing text

#### Writing templates


### Extending the editor (UI Handlers)


### Customizing the editor

#### Toolbar

#### Drawer

#### Element Wrappers


### Custom Editor