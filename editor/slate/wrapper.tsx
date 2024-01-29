/**
 * This file contains the fast prototyping wrapper that uses the material UI elements
 * in order to create the slate editor for the PropertyViewText
 * 
 * The wrapper component is added as a property to the slate editor itself so other wrappers
 * can be added as replacement, you can also design your own wrapper based on this one
 * 
 * @module
 */

import React, { useCallback, useEffect } from "react";
import { IHelperFunctions, ISlateEditorInternalStateType, ISlateEditorWrapperBaseProps } from ".";

import { Path, Range } from "slate";
import { RichElement } from "../../serializer";
import { WrapperDrawer } from "./drawer";
import { FileLoadErrorDialog, IDialogComponentProps } from "./dialogs/file";
import ReactDOM from "react-dom";
import { countSizeAndWords } from "../../util";
import { STANDARD_TEXT_NODE } from "../../serializer/types/text";
import { IBaseI18nRichTextInfo, defaultBaseI18nRichInfoEnglish } from ".";
import { IWrapperDrawerElementTitleProps, IWrapperDrawerInfoPanelWrapperProps, IWrapperDrawerTabsProps } from "./drawer";
import type { IWrapperDrawerCheckBoxProps, IWrapperDrawerMultiSelectFieldProps, IWrapperDrawerSelectFieldProps, IWrapperDrawerTextFieldProps } from "./drawer/general";

export const defaultWrapperI18nRichInfoEnglish: IWrapperI18nRichTextInfo = {
  ...defaultBaseI18nRichInfoEnglish,
  formatAddContainerLabel: "add container",
  addTemplateHTML: {
    label: "select a template",
    placeholder: "select a template",
    submit: "ok",
    title: "add template html",
  },
  addTemplateText: {
    label: "select a template",
    placeholder: "select a template",
    submit: "ok",
    title: "add template text",
  },
  formatAddCustomLabel: "add custom",
  formatAddFileLabel: "add file",
  formatAddImageLabel: "add image",
  formatAddTableLabel: "add table",
  formatAddTbodyLabel: "add table body",
  formatAddTdLabel: "add table column",
  formatAddTemplateHTML: "add template html",
  formatAddTemplateText: "add template text",
  formatAddTfootLabel: "toggle table foot",
  formatAddTheadLabel: "add table head",
  formatAddThLabel: "toggle table header",
  formatAddTrLabel: "add table row",
  formatAddVideoLabel: "add table video",
  formatBoldLabel: "bold",
  formatDeleteElement: "delete",
  formatDelTdLabel: "delete table column",
  formatDelThLabel: "delete table header column",
  formatDelTrLabel: "delete table row",
  formatItalicLabel: "italic",
  formatLinkLabel: "link",
  formatListBulletedLabel: "bulleted list",
  formatListNumberedLabel: "numbered list",
  formatMakeLoop: "make loop",
  formatMore: "more",
  formatQuoteLabel: "quote",
  formatSetActiveStyleLabel: "active style",
  formatSetClassLabel: "class names",
  formatSetContext: "set context",
  formatSetEventHandlers: "set event handlers",
  formatSetHoverStyleLabel: "hover style",
  formatSetRenderCondition: "set render condition",
  formatSetStyleLabel: "set style",
  formatSetUIHandlerArgLabel: "set ui handler arg",
  formatSetUIHandlerArgName: "set ui handler arg name",
  formatSetUIHandlerArgValue: "set ui handler arg value",
  formatSetUIHandlerLabel: "set ui handler",
  formatTitleLabel: "title",
  formatUnderlineLabel: "underline",
  loadVideo: {
    invalid: "invalid url",
    label: "youtube and vimeo only",
    placeholder: "https://youtube.com/...",
    submit: "insert",
    title: "insert a video",
  },
  setLink: {
    invalid: "invalid link",
    label: "url",
    placeholder: "https://url",
    placeholderLocalOnly: "./local-url-only",
    submit: "ok",
    templated: "or select one of these template values",
    templatedLabel: "template value",
    templatedPlaceholder: "template value",
    templatedUnspecified: "unspecified",
    title: "insert a link,"
  },
  genericError: "error",
  ok: "ok",
}

/**
 * The rich text information
 * to be used to build an editor and describe
 * a node
 * 
 * check basicI18nRichInfoEnglish to see how it is done
 * some of these elements are setup with a number {0}
 * due to itemize's localization and the way it's done
 * in its localization files, here you have to do by code
 */
export interface IWrapperI18nRichTextInfo extends IBaseI18nRichTextInfo {
  formatBoldLabel: string;
  formatItalicLabel: string;
  formatUnderlineLabel: string;
  formatLinkLabel: string;
  formatTitleLabel: string;
  formatQuoteLabel: string;
  formatListNumberedLabel: string;
  formatListBulletedLabel: string;
  formatAddImageLabel: string;
  formatAddVideoLabel: string;
  formatAddFileLabel: string;
  formatAddContainerLabel: string;
  formatAddTableLabel: string;
  formatAddTheadLabel: string;
  formatAddTbodyLabel: string;
  formatAddTfootLabel: string;
  formatAddTrLabel: string;
  formatAddTdLabel: string;
  formatAddThLabel: string;
  formatDelTrLabel: string;
  formatDelTdLabel: string;
  formatDelThLabel: string;
  formatAddCustomLabel: string;
  formatSetStyleLabel: string;
  formatSetHoverStyleLabel: string;
  formatSetActiveStyleLabel: string;
  formatSetClassLabel: string;
  formatSetEventHandlers: string;
  formatSetContext: string;
  formatSetRenderCondition: string;
  formatMakeLoop: string;
  formatSetUIHandlerLabel: string;
  formatSetUIHandlerArgLabel: string;
  formatSetUIHandlerArgName: string;
  formatSetUIHandlerArgValue: string;
  formatAddTemplateText: string;
  formatAddTemplateHTML: string;
  formatDeleteElement: string;
  formatMore: string;

  loadVideo: {
    invalid: string;
    label: string;
    placeholder: string;
    title: string;
    submit: string;
  };

  setLink: {
    invalid: string;
    label: string;
    placeholder: string;
    placeholderLocalOnly: string;
    templated: string;
    templatedLabel: string;
    templatedPlaceholder: string;
    templatedUnspecified: string;
    title: string;
    submit: string;
  };

  addTemplateText: {
    title: string;
    label: string;
    placeholder: string;
    submit: string;
  };

  addTemplateHTML: {
    title: string;
    label: string;
    placeholder: string;
    submit: string;
  };

  genericError: string;
  ok: string;
}

type RichElementFn = () => RichElement;

function callFn(focusFn: Function, actionFn: Function, ...args: any[]) {
  focusFn();
  actionFn(...args);
}

/**
 * Refers to toolbar prescence elements that are added
 */
export interface IToolbarPrescenseElement {
  /**
   * The extra id
   */
  id: string;
  /**
   * A title to use
   * if a react node is provided this node will be modified
   * and added a children as (i18nValue: string) => React.Node
   * eg. the i18nRead element
   */
  title?: string | React.ReactNode;
  /**
   * The element to be added
   */
  element?: RichElement | RichElementFn;
  /**
   * Alternatively an action
   */
  onClick?: (defaultAction: () => RichElement, e: React.MouseEvent<HTMLElement>, helpers: IHelperFunctions) => void;
  /**
   * Handle refocus attempts during the click event
   * @param defaultAction 
   * @param e 
   * @returns 
   */
  refocusHandler?: (defaultAction: () => void, e: React.MouseEvent<HTMLElement>, helpers: IHelperFunctions) => void;
  /**
   * Trigger on any keydown event
   * @param e 
   * @returns 
   */
  onAnyKeyDown?: (e: KeyboardEvent) => void;
  /**
   * Manually specify whether it's disabled
   * if not specified it will check whether an element
   * can be inserted as it assumes it's about the insertion
   * of the element
   */
  disabled?: boolean;

  /**
   * whether it should be marked as selected
   */
  selected?: boolean;

  /**
   * A given count for the button
   */
  count?: number;

  /**
   * Adds a custom children at the end of the toolbar
   */
  customChildren?: React.ReactNode;
  /**
   * Arbitrary props passed to the ToolbarButton element
   * use if your toolbar is able to consume further props
   */
  toolbarButtonProps: any;
}

/**
 * Specifies a input configuration for the ui handler argument
 * of type select
 */
export interface IDrawerUIHandlerElementConfigSelect {
  type: "select",
  label: string | React.ReactNode;
  fastKey?: string;

  /**
   * A placeholder to use
   * if a react node is provided this node will be modified
   * and added a children as (i18nValue: string) => React.Node
   * eg. the i18nRead element
   */
  placeholder: string | React.ReactNode;
  options: Array<{ value: string, label: string | React.ReactNode }>;
}

/**
 * Specifies an input configuration for the ui handler argument
 * of type input
 */
export interface IDrawerUIHandlerElementConfigInput {
  type: "input";
  label: string | React.ReactNode;
  pattern?: string;
  subtype?: "text" | "number";
  fastKey?: string;

  /**
   * A placeholder to use
   * if a react node is provided this node will be modified
   * and added a children as (i18nValue: string) => React.Node
   * eg. the i18nRead element
   */
  placeholder: string | React.ReactNode;
}

/**
 * Specifies a input configuration for the ui handler argument
 * of type boolean, because all ui handlers are strings
 * this uses the string true or false rather than actual
 * booleans
 */
export interface IDrawerUIHandlerElementConfigBoolean {
  type: "boolean",
  label: string | React.ReactNode;
  fastKey?: string;
}

export interface IDrawerUIHandlerElementConfigCustomProps {
  value: string;
  onChange: (value: string) => void;
  onDelayedChange: (value: string) => void;
  helpers: IHelperFunctions;
  state: ISlateEditorInternalStateType;
}

export interface IDrawerUIHandlerElementConfigCustom {
  type: "custom";
  component: React.ComponentType<IDrawerUIHandlerElementConfigCustomProps>;
}

/**
 * Specifies a configurator to be added to the drawer
 */
export interface IDrawerConfiguratorElement {
  key?: string | number;
  Component: React.ComponentType<IDrawerContainerProps>;
}

export type SlateEditorWrapperCustomToolbarIdentifiedElement =
  "bold" |
  "italic" |
  "underline" |
  "link" |
  "title" |
  "bulleted-list" |
  "numbered-list" |
  "image" |
  "video" |
  "file" |
  "quote" |
  "container" |
  "table" |
  "template-text" |
  "template-html" |
  "extras" |
  "none" |
  "divider" |
  "hdivider";

export type SlateEditorWrapperCustomToolbarElementBaseForm =
  IToolbarPrescenseElement |
  SlateEditorWrapperCustomToolbarIdentifiedElement;

export type SlateEditorWrapperCustomToolbarElementFnForm = (toolbarProps: any) =>
  SlateEditorWrapperCustomToolbarElementBaseForm;

export type SlateEditorWrapperCustomToolbarElement =
  SlateEditorWrapperCustomToolbarElementBaseForm |
  SlateEditorWrapperCustomToolbarElementFnForm;

export interface IWrapperDrawerInternalPanelWrapperProps { children: React.ReactNode, args: any; };

export interface IWrapperDrawerElementTitleWrapperProps { children: React.ReactNode, args: any; };

/**
 * These are the base props that this wrapper uses, note how we extend the base wrapper props as defined
 * in the slate editor itself, and add the styles for the classes and these i18n info
 * 
 * If you wonder how the i18n information is to be added, in the PropertyEntryText when creating
 * the slate editor as a component the wrapper can receive wrapperArgs so these args are passed
 * when the editor is created with the wrapper itself
 */
export interface IDefaultSlateWrapperProps extends ISlateEditorWrapperBaseProps {
  /**
   * Function that should be specified to assign extra toolbar elements
   * to be used either by ui handled components and whatnot
   */
  toolbarExtras?: IToolbarPrescenseElement[];
  /**
   * Function to be used to specify a whole custom toolbar down to the very basics
   */
  customToolbar?: SlateEditorWrapperCustomToolbarElement[];
  /**
   * Drawer extras for the ui handled types
   */
  drawerExtras?: IDrawerConfiguratorElement[];
  /**
   * Whether to hide the drawer
   */
  hideDrawer?: boolean;
  /**
   * The disjointed mode
   */
  disjointedMode?: boolean;
  /**
   * The toolbar is retained even if the text isn't focused
   */
  disjointedModeKeepToolbar?: boolean;
  /**
   * Add a class name to the toolbar in the wrapper
   */
  toolbarClassName?: string;
  /**
   * A function to define custom extra children
   * 
   * Note that this uses the default character count and word count algorithm
   * which may not work in some languages
   */
  customExtraChildren?: (characterCount: number, wordCount: number) => React.ReactNode;

  /**
   * Customization for the drawer
   * the container box that wraps the entire drawer
   */
  DrawerContainerBox?: DrawerContainerBoxComponent;

  /**
   * Customization for the drawer
   * the spacer that is added on disjointed mode only
   */
  DrawerSpacer?: DrawerSpacerComponent;

  /**
   * Customization for the drawer
   * the body object containment itself
   */
  DrawerBody?: DrawerBodyComponent;

  /**
   * Customization for the button wrapper that is used
   * in the toolbar
   */
  ToolbarButton?: ToolbarButtonComponent;

  /**
   * The button used to toggle the drawer from the toolbar
   */
  ToolbarDrawerButton?: React.ComponentType<IToolbarDrawerButtonProps>;

  /**
   * Used for separation in the toolbar (horizontal)
   */
  ToolbarHDivider?: React.ComponentType<{}>;

  /**
   * Used for separation in the toolbar (vertical)
   */
  ToolbarVDivider?: React.ComponentType<{}>;

  /**
   * Used for the toolbar itself
   * the toolbar should also support a ref
   * as it's used to calculate the height of the toolbar
   */
  Toolbar?: React.ComponentType<IToolbarProps>;

  /**
   * When used disjointed mode a container is given to the editor
   * to wrap it use this to specify it, remember to allow it to pass
   * a ref as it's required for this component
   */
  DisjointedEditorContainer?: React.ComponentType<IEditorContainerProps>;
  /**
   * The disjointed editor itself
   */
  DisjointedEditor?: React.ComponentType<IEditorProps>;
  /**
   * The editor itself, not used in disjointed mode
   * the DisjointedEditor is used instead
   * a ref is required for this component to be supported
   */
  Editor?: React.ComponentType<IEditorProps>;
  /**
   * When using the standard mode, it contains
   * the editor itself
   */
  EditorContainer?: React.ComponentType<IEditorContainerProps>;

  /**
   * A wrapper for the toolbar component
   */
  ToolbarWrapper?: React.ComponentType<IEditorWrapperProps>;

  /**
   * A wrapper for everything
   */
  FinalWrapper?: React.ComponentType<IEditorWrapperProps>;

  /**
   * A wrapper for the editing region
   */
  BaseWrapper?: React.ComponentType<IEditorWrapperProps>;

  /**
   * A wrapper for the drawer
   */
  DrawerWrapper?: React.ComponentType<IEditorWrapperProps>;

  /**
   * Used for displaying dialogs with errors
   */
  Dialog?: React.ComponentType<IDialogComponentProps>;

  /**
   * Used for generating the title and hirearchy of each element in the drawer
   */
  WrapperDrawerElementTitle?: React.ComponentType<IWrapperDrawerElementTitleProps>;

  /**
   * Used for wrapping all the titles generated
   */
  WrapperDrawerElementTitleWrapper?: React.ComponentType<IWrapperDrawerElementTitleWrapperProps>;

  /**
   * Wraps the information panel from the drawer, whatever is visible
   */
  WrapperDrawerInfoPanelWrapper?: React.ComponentType<IWrapperDrawerInfoPanelWrapperProps>;

  /**
   * Used for the tabs switcher component that is used in the drawer
   */
  WrapperDrawerTabs?: React.ComponentType<IWrapperDrawerTabsProps>;

  /**
   * Used to wrap the internal panel
   */
  WrapperDrawerInternalPanelWrapper?: React.ComponentType<IWrapperDrawerInternalPanelWrapperProps>;

  /**
   * Used to make text input fields
   */
  WrapperDrawerTextField?: React.ComponentType<IWrapperDrawerTextFieldProps>;

  /**
   * Used to make checkbox input fields
   */
  WrapperDrawerCheckboxField?: React.ComponentType<IWrapperDrawerCheckBoxProps>;

  /**
   * Used to make select input fields
   */
  WrapperDrawerSelectField?: React.ComponentType<IWrapperDrawerSelectFieldProps>;

  /**
 * Used to make select input fields
 */
  WrapperDrawerMultiSelectField?: React.ComponentType<IWrapperDrawerMultiSelectFieldProps>;

  /**
   * custom args that are passed to every element down the stream that is custom
   */
  customArgs?: any;

  /**
   * add extra children to the drawer
   */
  drawerExtraChildren?: React.ReactNode;
}

function DefaultEditorContainer(props: IEditorContainerProps) {
  return (
    <div className="slateEditorDefaultEditorContainer">
      {props.children}
    </div>
  );
}

/**
 * An utility to define a single templating option
 * for usage in a select field
 */
export interface ISingleTemplatingElementOption {
  value: string;
  label: string;
}

export interface IEditorWrapperProps extends IDefaultSlateWrapperProps {
  drawerOpen: boolean;
  /**
   * custom args passed
   */
  args: any;
}

export interface IEditorContainerProps {
  children: React.ReactNode;
  /**
   * custom args passed
   */
  args: any;
}

export interface IEditorProps {
  children: React.ReactNode;
  className: string;
  /**
   * custom args passed
   */
  args: any;
}


export interface IToolbarProps {
  /**
   * toolbar contents with all the buttons and separators
   * as determined
   */
  toolbarContents: React.ReactNode;
  /**
   * Custom children for the toolbar that are added
   * by the active toolbar elements
   */
  customChildren: React.ReactNode;
  /**
   * Single drawer button to open and close the drawer
   */
  drawerButton: React.ReactNode;
  /**
   * These props should be applied to the top of the toolbar
   */
  props: any;
  /**
   * Whether working in disjointed mode
   */
  disjointedMode: boolean;
  /**
   * Whether the drawer is open
   */
  drawerOpen: boolean;
  /**
   * custom args provided
   */
  args: any;
}

const DefaultToolbar = React.forwardRef((props: IToolbarProps, ref: React.ForwardedRef<HTMLElement>) => {
  return (
    <div className="slateEditorToolbar" {...props.props} ref={ref}>
      <div className="slateEditorToolbarInternal">
        {props.toolbarContents}
        {props.customChildren}
        <div className="slateEditorToolbarInternalSpacer" />
        {props.drawerButton}
      </div>
    </div>
  )
});

/**
 * These are the rich text editor toolbar properties they basically take the same
 * that the entire wrapper does, but adding these functions and flags taken from
 * the state of the wrapper or other functions
 */
export interface RichTextEditorToolbarProps extends IDefaultSlateWrapperProps {
  /**
   * Whether the drawer is open, the drawer is the side drawer that contains
   * a lot of functionality to edit the currently selected element
   */
  drawerOpen: boolean;

  /**
   * The current state
   */
  state: ISlateEditorInternalStateType;

  /**
   * A custom toolbar state
   */
  toolbarState: string;

  /**
   * The toolbar height
   */
  toolbarHeight: number;

  /**
   * call to request an image, opens a dialog so requires a state
   */
  requestImage: () => void;

  /**
   * Call to request a file, opens a dialog so requires a state
   */
  requestFile: () => void;

  /**
   * sets the toolbar state
   */
  setToolbarState: (state: string | null) => void;

  /**
   * A function that specifies whether the drawer should
   * exist
   * @returns a boolean as the answer
   */
  shouldHaveDrawer: () => boolean;

  /**
   * Toggle the drawer open or close
   */
  toggleDrawer: () => void;

  /**
   * Called when the height changes
   */
  onHeightChange: (newHeight: number) => void;
}

interface RichTextEditorToolbarState {
  isReady: boolean;
}

interface RichTextEditorToolbarElementProps extends RichTextEditorToolbarState, RichTextEditorToolbarProps {
}

export interface IToolbarButtonProps {
  title: string;
  type: SlateEditorWrapperCustomToolbarIdentifiedElement | "extra";
  extraId?: string;
  selected: boolean;
  disabled: boolean;
  htmlEntity: string;
  onClick: () => void;
  count?: number;
  disjointedMode: boolean;
}

type ToolbarButtonComponent = React.ComponentType<IToolbarButtonProps>;

function DefaultToolbarButtonComponent(props: IToolbarButtonProps) {
  return (
    <button
      className={"slateEditorToolbarButton " + (props.selected ? " selected" : "")}
      title={props.title}
      disabled={props.disabled}
      onClick={props.onClick}
      dangerouslySetInnerHTML={{ __html: props.htmlEntity + (typeof props.count === "number" ? (" (" + props.count + ")") : "") }}
    />
  );
}

function Bold(props: RichTextEditorToolbarElementProps) {
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  const disabled = !props.state.currentSelectedText || !props.state.allowsText;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatBoldLabel}
      disabled={disabled}
      selected={props.state.currentSelectedText && props.state.currentSelectedText.bold}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.formatToggle, "bold")}
      htmlEntity="&#x1d401;"
      type="bold"
      disjointedMode={props.disjointedMode}
    />
  );
}

function Italic(props: RichTextEditorToolbarElementProps) {
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  const disabled = !props.state.currentSelectedText || !props.state.allowsText;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatItalicLabel}
      disabled={disabled}
      selected={props.state.currentSelectedText && props.state.currentSelectedText.italic}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.formatToggle, "italic")}
      htmlEntity="&#x1d470;"
      type="italic"
      disjointedMode={props.disjointedMode}
    />
  );
}

function Underline(props: RichTextEditorToolbarElementProps) {
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  const disabled = !props.state.currentSelectedText || !props.state.allowsText;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatUnderlineLabel}
      disabled={disabled}
      selected={props.state.currentSelectedText && props.state.currentSelectedText.underline}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.formatToggle, "underline")}
      htmlEntity="&#x1e48;"
      type="underline"
      disjointedMode={props.disjointedMode}
    />
  );
}

function VDivider(props: RichTextEditorToolbarElementProps) {
  if (props.ToolbarVDivider) {
    const RealDivider = props.ToolbarVDivider;
    return (<RealDivider />);
  }

  return (
    <div className="slateEditorVdivider" />
  );
}

function HDivider(props: RichTextEditorToolbarElementProps) {
  if (props.ToolbarHDivider) {
    const RealDivider = props.ToolbarHDivider;
    return (<RealDivider />);
  }

  return (
    <>
      <div className="slateEditorHdividerspacer" />
      <div className="slateEditorHdivider" />
    </>
  );
}

function Link(props: RichTextEditorToolbarElementProps) {
  if (!props.featureSupport.supportsLinks || !props.isReady) {
    return null;
  }

  let templateLinkAmount = 0;

  if (props.featureSupport.supportsTemplating && props.state.currentSelectedBlockContext) {
    Object.keys(props.state.currentSelectedBlockContext.properties).forEach((key) => {
      const property = props.state.currentSelectedBlockContext.properties[key];

      // but they must be the given element type
      if (property.type === "link") {
        templateLinkAmount++;
      }
    });
  }

  if (
    props.featureSupport.supportsTemplating &&
    props.state.currentRootContext &&
    props.state.currentRootContext !== props.state.currentSelectedBlockContext
  ) {
    Object.keys(props.state.currentRootContext.properties).forEach((key) => {
      const property = props.state.currentRootContext.properties[key];
      if (property.nonRootInheritable) {
        return;
      }

      // but they must be the given element type
      if (property.type === "link") {
        templateLinkAmount++;
      }
    });
  }

  const disabled = !props.state.allowsInsertElement({ type: "link", href: "", children: [], thref: null });

  const selected = props.helpers.editor.selection &&
    props.helpers.Range.isCollapsed(props.helpers.editor.selection) &&
    props.state.currentSelectedInlineElement &&
    props.state.currentSelectedInlineElement.type === "link";

  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;

  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatLinkLabel}
      selected={selected}
      disabled={disabled}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.toggleLink, null, null)}
      count={templateLinkAmount === 0 ? null : templateLinkAmount}
      htmlEntity="&#x1f517;"
      type="link"
      disjointedMode={props.disjointedMode}
    />
  );
}

function Title(props: RichTextEditorToolbarElementProps) {
  if (!props.featureSupport.supportsTitle) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement({ type: "title", titleType: "h1", children: [] }, { collapsed: true });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatTitleLabel}
      disabled={disabled}
      selected={props.state.currentSelectedBlockElement && props.state.currentSelectedBlockElement.type === "title"}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.toggleTitle, "h1")}
      htmlEntity="&#x1d413;"
      type="title"
      disjointedMode={props.disjointedMode}
    />
  );
}

function Quote(props: RichTextEditorToolbarElementProps) {
  if (!props.featureSupport.supportsQuote) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement({ type: "quote", children: [] }, { collapsed: true });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatQuoteLabel}
      disabled={disabled}
      selected={props.state.currentSelectedBlockElement && props.state.currentSelectedBlockElement.type === "quote"}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.toggleQuote)}
      htmlEntity="&quot;"
      type="quote"
      disjointedMode={props.disjointedMode}
    />
  );
}


function NumberedList(props: RichTextEditorToolbarElementProps) {
  if (!props.featureSupport.supportsLists) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement({ type: "list", listType: "numbered", children: [] });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatListNumberedLabel}
      disabled={disabled}
      selected={false}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.insertList, "numbered")}
      htmlEntity="123"
      type="numbered-list"
      disjointedMode={props.disjointedMode}
    />
  );
}

function BulletedList(props: RichTextEditorToolbarElementProps) {
  if (!props.featureSupport.supportsLists) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement({ type: "list", listType: "bulleted", children: [] });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatListBulletedLabel}
      disabled={disabled}
      selected={false}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.insertList, "bulleted")}
      htmlEntity="..."
      type="bulleted-list"
      disjointedMode={props.disjointedMode}
    />
  );
}

const imgExample = {
  type: "image" as "image",
  children: [STANDARD_TEXT_NODE()] as any,
  width: 0,
  height: 0,
  alt: "",
  src: "",
  srcSet: "",
  srcId: "",
  standalone: false,
  sizes: "",
};

function Image(props: RichTextEditorToolbarElementProps) {
  if (
    !props.featureSupport.supportsImages
  ) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement(imgExample, { selected: true });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddImageLabel}
      disabled={disabled}
      selected={false}
      onClick={props.requestImage}
      htmlEntity="&#128247;"
      type="image"
      disjointedMode={props.disjointedMode}
    />
  );
}

const videoExample = {
  type: "video" as "video",
  origin: "youtube" as "youtube",
  src: "",
  children: [STANDARD_TEXT_NODE()] as any,
}

function Video(props: RichTextEditorToolbarElementProps) {
  if (
    !props.featureSupport.supportsVideos
  ) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement(videoExample, { selected: true });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddVideoLabel}
      disabled={disabled}
      selected={false}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.insertVideo, null)}
      htmlEntity="&#127909;"
      type="video"
      disjointedMode={props.disjointedMode}
    />
  );
}

const fileExample = {
  type: "file" as "file",
  children: [STANDARD_TEXT_NODE()] as any,
  extension: "",
  fileName: "",
  size: "",
  src: "",
  srcId: "",
};

function File(props: RichTextEditorToolbarElementProps) {
  if (
    !props.featureSupport.supportsFiles
  ) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement(fileExample, { selected: true });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddFileLabel}
      disabled={disabled}
      selected={false}
      onClick={props.requestFile}
      htmlEntity="&#128441;"
      type="file"
      disjointedMode={props.disjointedMode}
    />
  );
}

function Container(props: RichTextEditorToolbarElementProps) {
  if (
    !props.featureSupport.supportsContainers
  ) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement({ type: "container", containerType: null, children: [] });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddContainerLabel}
      disabled={disabled}
      selected={false}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.insertContainer, null)}
      htmlEntity="&#9974;"
      type="container"
      disjointedMode={props.disjointedMode}
    />
  );
}

function Table(props: RichTextEditorToolbarElementProps) {
  if (
    !props.featureSupport.supportsTables
  ) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement({ type: "table", tableType: null, children: [] });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddTableLabel}
      disabled={disabled}
      selected={false}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.insertTable, null)}
      htmlEntity="&#5785;"
      type="table"
      disjointedMode={props.disjointedMode}
    />
  );
}

function TemplateText(props: RichTextEditorToolbarElementProps) {
  if (
    !props.isReady ||
    !props.featureSupport.supportsTemplating
  ) {
    return null;
  }

  let templateTextAmount = 0;

  if (props.state.currentSelectedBlockContext) {
    Object.keys(props.state.currentSelectedBlockContext.properties).forEach((key) => {
      const property = props.state.currentSelectedBlockContext.properties[key];

      // but they must be the given element type
      if (property.type === "text") {
        templateTextAmount++;
      }
    });
  }

  if (
    props.featureSupport.supportsTemplating &&
    props.state.currentRootContext &&
    props.state.currentRootContext !== props.state.currentSelectedBlockContext
  ) {
    Object.keys(props.state.currentRootContext.properties).forEach((key) => {
      const property = props.state.currentRootContext.properties[key];
      if (property.nonRootInheritable) {
        return;
      }

      // but they must be the given element type
      if (property.type === "text") {
        templateTextAmount++;
      }
    });
  }

  if (templateTextAmount === 0) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement({ type: "inline", children: [], textContent: "text" });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddTemplateText}
      disabled={disabled}
      selected={false}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.insertTemplateText, null, null)}
      htmlEntity="text"
      type="table"
      disjointedMode={props.disjointedMode}
      count={templateTextAmount}
    />
  );
}

function TemplateHTML(props: RichTextEditorToolbarElementProps) {
  if (
    !props.isReady ||
    !props.featureSupport.supportsTemplating
  ) {
    return null;
  }

  let templateHTMLAmount = 0;

  const currentSelectedSuperBlockElement = props.state.currentSelectedSuperBlockElements &&
    props.state.currentSelectedSuperBlockElements[
    props.state.currentSelectedSuperBlockElements.length - 1
    ];

  if (
    currentSelectedSuperBlockElement &&
    props.state.currentSelectedTopmostSuperBlockContext
  ) {
    Object.keys(props.state.currentSelectedTopmostSuperBlockContext.properties).forEach((key) => {
      const property = props.state.currentSelectedTopmostSuperBlockContext.properties[key];

      // but they must be the given element type
      if (property.type === "html") {
        templateHTMLAmount++;
      }
    });
  }

  if (
    props.featureSupport.supportsTemplating &&
    props.state.currentRootContext &&
    props.state.currentRootContext !== props.state.currentSelectedTopmostSuperBlockContext
  ) {
    Object.keys(props.state.currentRootContext.properties).forEach((key) => {
      const property = props.state.currentRootContext.properties[key];
      if (property.nonRootInheritable) {
        return;
      }

      // but they must be the given element type
      if (property.type === "html") {
        templateHTMLAmount++;
      }
    });
  }

  if (templateHTMLAmount === 0) {
    return null;
  }

  const disabled = !props.state.allowsInsertElement({ type: "void-block", children: [], html: "html" });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return (
    <ToolbarButton
      title={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddTemplateHTML}
      disabled={disabled}
      selected={false}
      onClick={callFn.bind(null, props.helpers.focus, props.helpers.insertTemplateHTML, null, null)}
      htmlEntity="html"
      type="table"
      disjointedMode={props.disjointedMode}
      count={templateHTMLAmount}
    />
  );
}

interface IToolbarExtraProps extends RichTextEditorToolbarElementProps {
  extra: IToolbarPrescenseElement;
}

function ToolbarExtra(props: IToolbarExtraProps) {
  const elementReference = typeof props.extra.element === "function" ? props.extra.element() : props.extra.element;
  const defaultAction = useCallback(() => {
    const element = typeof props.extra.element === "function" ? props.extra.element() : props.extra.element;
    props.helpers.insertElement(element);
    return element;
  }, [props.extra.element, props.helpers.insertElement]);

  useEffect(() => {
    if (props.extra.onAnyKeyDown) {
      document.body.addEventListener("keydown", props.extra.onAnyKeyDown);

      return () => {
        document.body.removeEventListener("keydown", props.extra.onAnyKeyDown);
      }
    }

    return;
  }, [props.extra.onAnyKeyDown])

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.extra.refocusHandler) {
      props.extra.refocusHandler(props.helpers.focus, e, props.helpers);
    } else {
      props.helpers.focus();
    }
    props.extra.onClick ? props.extra.onClick(defaultAction, e, props.helpers) : defaultAction();
  }, [props.helpers]);

  let disabled = false;
  if (elementReference) {
    disabled = !props.state.allowsInsertElement(elementReference);
  }

  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  if (typeof props.extra.title === "string" || !props.extra.title) {
    return (
      <ToolbarButton
        title={props.extra.title as string}
        disabled={disabled}
        selected={props.extra.selected}
        count={props.extra.count}
        disjointedMode={props.disjointedMode}
        htmlEntity="?"
        type="extra"
        extraId={props.extra.id}
        onClick={onClick}
        {...props.extra.toolbarButtonProps}
      />
    );
  } else {
    const element: React.ReactElement = props.extra.title as any;
    return React.cloneElement(element, {
      children: (i18nTitle: string) => (
        <ToolbarButton
          title={i18nTitle}
          disabled={disabled}
          selected={props.extra.selected}
          count={props.extra.count}
          disjointedMode={props.disjointedMode}
          htmlEntity="?"
          type="extra"
          extraId={props.extra.id}
          onClick={onClick}
          {...props.extra.toolbarButtonProps}
        />
      )
    });
  }
}

function ToolbarExtras(props: RichTextEditorToolbarElementProps) {
  if (props.toolbarExtras && props.toolbarExtras.length) {
    const toolbarExtras = props.toolbarExtras.map((x, index) => {
      return (
        <ToolbarExtra {...props} extra={x} key={index} />
      );
    });

    const customs = props.toolbarExtras.map((x, i) => (
      x.customChildren ? <React.Fragment key={i}>{x.customChildren}</React.Fragment> : null
    ));

    return (
      <>
        {toolbarExtras}
        {customs}
      </>
    );
  }

  return null;
}

function None(): any {
  return null;
}

const toolbarRegistry: Record<SlateEditorWrapperCustomToolbarIdentifiedElement, React.ElementType<RichTextEditorToolbarElementProps>> = {
  none: None,
  italic: Italic,
  bold: Bold,
  underline: Underline,
  "bulleted-list": BulletedList,
  "numbered-list": NumberedList,
  "template-html": TemplateHTML,
  "template-text": TemplateText,
  title: Title,
  container: Container,
  divider: VDivider,
  hdivider: HDivider,
  extras: ToolbarExtras,
  file: File,
  image: Image,
  link: Link,
  quote: Quote,
  video: Video,
  table: Table,
}

export interface IToolbarDrawerButtonProps {
  /**
   * state of the editor
   */
  state: ISlateEditorInternalStateType;
  /**
   * is the drawer open
   */
  drawerOpen: boolean;
  /**
   * toggle the drawer
   * @returns 
   */
  toggleDrawer: () => void;
  /**
   * disjointd mode
   */
  disjointedMode: boolean;
  /**
   * Custom args provided
   */
  args?: any;
};

function DefaultToolbarDrawerToggleButton(props: IToolbarDrawerButtonProps) {
  return (
    <button
      onClick={props.toggleDrawer}
      className="slateEditorToolbarButton"
      dangerouslySetInnerHTML={{ __html: props.drawerOpen ? "&#11014;" : "&#11015;" }}
    />
  );
}

/**
 * This is the function component that represents the toolbar for the wrapper
 * @param props the entire rich text editor toolbar props with all the added functions
 */
class RichTextEditorToolbar extends React.Component<RichTextEditorToolbarProps, RichTextEditorToolbarState> {

  private appBarHeaderRef: React.RefObject<HTMLElement>;

  constructor(props: RichTextEditorToolbarProps) {
    super(props);
    // issues with the badge and SSR
    this.state = {
      isReady: false,
    }
  }

  componentDidMount() {
    this.setState({
      isReady: true,
    });

    this.props.onHeightChange(this.getHeight());
  }

  componentDidUpdate() {
    this.props.onHeightChange(this.getHeight());
  }

  public getHeight() {
    return this.appBarHeaderRef?.current?.offsetHeight;
  }

  public getAppbarHeader() {
    return this.appBarHeaderRef?.current;
  }

  public render() {
    // no rich text
    if (!this.props.state.isRichText) {
      // no toolbar
      return null;
    }

    if (this.props.disjointedMode && !this.props.disjointedModeKeepToolbar && !this.props.state.currentSelectedElement) {
      return null;
    }

    const toolbarForm: SlateEditorWrapperCustomToolbarElement[] = (
      this.props.customToolbar || [
        "bold",
        "italic",
        "underline",
        (
          this.props.featureSupport.supportsTitle ||
          this.props.featureSupport.supportsQuote ||
          this.props.featureSupport.supportsLinks ||
          this.props.featureSupport.supportsLists
        ) ? "divider" : "none",
        this.props.featureSupport.supportsLinks ? "link" : "none",
        this.props.featureSupport.supportsTitle ? "title" : "none",
        this.props.featureSupport.supportsQuote ? "quote" : "none",
        this.props.featureSupport.supportsLists ? "bulleted-list" : "none",
        this.props.featureSupport.supportsLists ? "numbered-list" : "none",
        this.props.featureSupport.supportsTables ? "table" : "none",
        (
          this.props.featureSupport.supportsImages ||
          this.props.featureSupport.supportsFiles ||
          this.props.featureSupport.supportsVideos
        ) ? "divider" : "none",
        this.props.featureSupport.supportsImages ? "image" : "none",
        this.props.featureSupport.supportsFiles ? "file" : "none",
        this.props.featureSupport.supportsVideos ? "video" : "none",
        "divider",
        this.props.featureSupport.supportsContainers ? "container" : "none",
        "template-text",
        "template-html",
        this.props.toolbarExtras && this.props.toolbarExtras.length ? "extras" : "none",
      ]
    ).map((v) => {
      if (typeof (v) === "function") {
        return v(this.props);
      }

      return v;
    });

    const DrawerToggleComponent = this.props.ToolbarDrawerButton || DefaultToolbarDrawerToggleButton;

    let drawerButton = (
      this.props.shouldHaveDrawer() ?
        <DrawerToggleComponent
          state={this.props.state}
          drawerOpen={this.props.drawerOpen}
          toggleDrawer={this.props.toggleDrawer}
          disjointedMode={this.props.disjointedMode}
          args={this.props.customArgs}
        /> :
        null
    );

    const customChildren: React.ReactNode[] = [];
    const toolbarFormMapped = (
      toolbarForm.map((ele, index) => {
        if (typeof ele === "string") {
          const Element = toolbarRegistry[ele];
          return (
            <Element
              {...this.props}
              isReady={this.state.isReady}
              key={index}
            />
          );
        } else {
          const extraValue = typeof ele === "function" ? ele(this.props) : ele;

          if ((extraValue as IToolbarPrescenseElement).customChildren) {
            customChildren.push(
              <React.Fragment key={index}>
                {(extraValue as IToolbarPrescenseElement).customChildren}
              </React.Fragment>
            );
          }

          return (
            <ToolbarExtra
              {...this.props}
              isReady={this.state.isReady}
              key={index}
              extra={extraValue as IToolbarPrescenseElement}
            />
          );
        }
      })
    );

    const Toolbar = this.props.Toolbar || DefaultToolbar;

    // now we can create the component itself
    // there is not much to say on how this all works
    const toReturn = (
      <Toolbar
        customChildren={customChildren}
        disjointedMode={this.props.disjointedMode}
        drawerButton={drawerButton}
        drawerOpen={this.props.drawerOpen}
        props={{
          ["data-unblur"]: true,
        }}
        toolbarContents={toolbarFormMapped}
        ref={this.appBarHeaderRef}
        args={this.props.customArgs}
      />
    );

    if (this.props.disjointedMode && this.state.isReady) {
      return ReactDOM.createPortal(toReturn, document.body);
    } else if (this.props.disjointedMode) {
      return null;
    } else {
      return toReturn;
    }
  }
}

/**
 * This is the state for the wrapper
 * the state is necessary as the wrapper can hold dialogs open
 * and the drawer itself
 */
export interface DefaultSlateWrapperState {
  /**
   * Specifies the state of the drawer
   */
  drawerOpen: boolean;

  /**
   * Specifies the height of the toolbar for use
   * when the drawer is open in disjointed mode
   */
  toolbarHeight: number;

  /**
   * A custom toolbar state
   */
  toolbarState: string;

  /**
   * The drawer being open or closed is stored in local storage, which is not available in the server
   * side, and the drawer animates when it's opened and closed, so this variable is always false at the
   * start, the drawer is always closed at the start, however, if we need to open the drawer at the start
   * on mount we don't want any animation so we toggle this flag temporarily, it doesn't need to be part
   * of the state as it's only used there
   */
  noAnimate: boolean;

  /**
   * When opening a dialog and losing focus to the slate rich text editor content editable
   * we lose access to the anchors and current elements now that we are in focus of something
   * else so we need to store the element that was the current element that was in focus
   * before that happened
   */
  inlineElementThatWasCurrentBeforeLosingFocus: RichElement;
}

/**
 * This represents the unwrapped class that is used for the wrapper, it is not
 * the exported one because it needs to be withStyles for stylization
 */
export class DefaultSlateWrapper extends React.PureComponent<IDefaultSlateWrapperProps, DefaultSlateWrapperState> {
  /**
   * The ref object for the input object for image input
   */
  private inputImageRef: React.RefObject<HTMLInputElement>;

  /**
   * The ref object for the input object for any file input
   */
  private inputFileRef: React.RefObject<HTMLInputElement>;

  /**
   * A ref to the container
   */
  private DrawerContainerRef: React.RefObject<DrawerContainer>;

  /**
   * a ref to the editor
   */
  private editorRef: React.RefObject<HTMLElement>;

  /**
   * A ref for the toolbar
   */
  private toolbarRef: React.RefObject<RichTextEditorToolbar>;

  /**
   * This is the range that was in place before losing focus, it is used because
   * when opening some dialog, the insertion or change needs to happen at a given
   * selection range, but that is lost when losing focus, so we need to remember it
   */
  private originalSelectionArea: Range;
  /**
   * If instead of having a selection area we had a selection path as a selected element
   * because we were workign in the range
   */
  private originalSelectionPath: Path;

  /**
   * this is used to ensure a refocus after the native dialogs for file and for image that
   * are used to get a file are closed; while we need to wait for the input event to trigger
   * we don't know if that happens first as there are no guarantees so we delay it a little bit
   * and the change event might not even trigger
   */
  private refocusTimeout: NodeJS.Timeout;

  private isUnmounted: boolean;

  /**
   * Constructs a new material ui based wrapper for the slate editor
   * @param props the base properties that every wrapper gets extended for this specific wrapper
   */
  constructor(props: IDefaultSlateWrapperProps) {

    // super calling
    super(props);

    // setup the initial state
    this.state = {
      inlineElementThatWasCurrentBeforeLosingFocus: null,

      // keep SSR compatibility by keeping the drawer closed at the start
      // as we cannot read local storage in the server side
      drawerOpen: false,
      toolbarHeight: 0,
      noAnimate: true,
      toolbarState: null,
    }

    this.isUnmounted = false;

    // create the refs
    this.inputImageRef = React.createRef();
    this.inputFileRef = React.createRef();
    this.DrawerContainerRef = React.createRef();
    this.toolbarRef = React.createRef();
    this.editorRef = React.createRef();

    // bind all the functions
    this.onHeightChange = this.onHeightChange.bind(this);
    this.onImageLoad = this.onImageLoad.bind(this);
    this.onFileLoad = this.onFileLoad.bind(this);
    this.requestImage = this.requestImage.bind(this);
    this.requestFile = this.requestFile.bind(this);
    this.onFileEventedReFocus = this.onFileEventedReFocus.bind(this);
    this.refocus = this.refocus.bind(this);
    this.shouldHaveDrawer = this.shouldHaveDrawer.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setToolbarState = this.setToolbarState.bind(this);
    this.selectiveHardBlur = this.selectiveHardBlur.bind(this);
    this.keyUpListener = this.keyUpListener.bind(this);
    this.onAltActionTriggered = this.onAltActionTriggered.bind(this);
  }

  public onAltActionTriggered(tabNav: boolean, action: "click" | "focus" | "blur") {
    if (action === "blur") {
      this.props.helpers.hardBlur();
    }
  }

  public onHeightChange(newHeight: number) {
    if (this.state.toolbarHeight !== newHeight) {
      this.setState({
        toolbarHeight: newHeight,
      });
    }
  }

  /**
   * During the mount event
   */
  public componentDidMount() {
    // if we should have a drawer
    if (this.shouldHaveDrawer()) {
      // and set the state of the drawer based on the local storage value
      this.setState({
        drawerOpen: localStorage.getItem("SLATE_DRAWER_OPEN") === "true",
        noAnimate: true,
      }, () => {
        // We need to wait 300 seconds because as usual
        // some bug in react causes states to stack
        setTimeout(() => {
          // and re-enable the animation
          // if the drawer opened it won't animate
          // this keeps SSR compatibility
          !this.isUnmounted && this.setState({
            noAnimate: false,
          })
        }, 300);
      });
    } else {
      // otherwise animation is enabled
      this.setState({
        noAnimate: false,
      });
    }

    document.body.addEventListener("mousedown", this.selectiveHardBlur);
    document.body.addEventListener("touchstart", this.selectiveHardBlur);
    document.body.addEventListener("keyup", this.keyUpListener);
  }

  public componentWillUnmount() {
    document.body.removeEventListener("mousedown", this.selectiveHardBlur);
    document.body.removeEventListener("touchstart", this.selectiveHardBlur);
    document.body.removeEventListener("keyup", this.keyUpListener);
    this.isUnmounted = true;
  }

  public keyUpListener(e: KeyboardEvent) {
    if (e.key === "Tab") {
      this.selectiveHardBlur(e);
    }
  }

  public selectiveHardBlur(e: MouseEvent | KeyboardEvent, altTarget?: HTMLElement) {
    const target = altTarget || (e.target as HTMLElement);
    // we are currently in focus
    if (this.props.state.currentSelectedText) {
      // if it's an unblurred target, such as the toolbar
      // or the drawer
      if (this.isUnblurred(target)) {
        if (
          target.tagName !== "INPUT" &&
          target.tagName !== "SELECT" &&
          target.tagName !== "OPTION"
        ) {
          // stop from losing focus
          e.preventDefault();
        }
      } else if (!this.isInEditor(target)) {
        // otherwise if we are not in the editor
        // just lose all the focus
        this.props.helpers.hardBlur();
      }
    }
  }

  public isUnblurred(ele: HTMLElement): boolean {
    if (
      ele === this.toolbarRef.current.getAppbarHeader() ||
      ele === this.DrawerContainerRef.current.getDrawerBody() ||
      ele.dataset.unblur
    ) {
      return true;
    }

    if (ele.parentElement) {
      return this.isUnblurred(ele.parentElement);
    }

    return false;
  }

  public isInEditor(ele: HTMLElement): boolean {
    if (
      ele.dataset.notEditor
    ) {
      return false;
    }
    if (
      ele === this.editorRef.current
    ) {
      return true;
    }

    if (ele.parentElement) {
      return this.isInEditor(ele.parentElement);
    }

    return false;
  }

  /**
   * Specifies on whether it should have a drawer
   * @returns a boolean on this fact
   */
  public shouldHaveDrawer() {
    // basically not rich text
    if (!this.props.featureSupport || this.props.hideDrawer) {
      return false;
    }
    // a drawer is only necessary if we support all of these
    // beause that's what we configure in the drawer
    return !!(
      this.props.featureSupport.supportsTemplating ||
      this.props.featureSupport.supportsCustomStyles ||
      this.props.featureSupport.supportsContainers ||
      this.props.featureSupport.supportedCustoms ||
      this.props.featureSupport.supportsRichClasses ||
      this.props.drawerExtras
    );
  }

  /**
   * Executes in order to open the dialog in order to request an image
   * via this file upload dialog
   */
  public requestImage() {
    // we add the focus listener for the refocus when the dialog closes
    document.body.addEventListener("focus", this.onFileEventedReFocus, { capture: true });
    // get the original selection area
    this.originalSelectionArea = this.props.state.currentText ? this.props.helpers.editor.selection : null;
    this.originalSelectionPath = this.props.state.currentSelectedInlineElementAnchor ||
      this.props.state.currentSelectedBlockElementAnchor ||
      (
        this.props.state.currentSelectedSuperBlockElementAnchors &&
        this.props.state.currentSelectedSuperBlockElementAnchors[
        this.props.state.currentSelectedSuperBlockElementAnchors.length - 1
        ]
      );
    // trigger a click
    this.inputImageRef.current.click();
  }

  /**
   * Executes in order to open the dialog in order to request an file
   * via this file upload dialog
   */
  public requestFile() {
    // we add the focus listener for the refocus when the dialog closes
    document.body.addEventListener("focus", this.onFileEventedReFocus, { capture: true });
    // get the original selection area
    this.originalSelectionArea = this.props.state.currentText ? this.props.helpers.editor.selection : null;
    this.originalSelectionPath = this.props.state.currentSelectedInlineElementAnchor ||
      this.props.state.currentSelectedBlockElementAnchor ||
      (
        this.props.state.currentSelectedSuperBlockElementAnchors &&
        this.props.state.currentSelectedSuperBlockElementAnchors[
        this.props.state.currentSelectedSuperBlockElementAnchors.length - 1
        ]
      );
    // trigger a click
    this.inputFileRef.current.click();
  }

  /**
   * Opens/closes the drawer
   */
  public toggleDrawer() {
    // we take the new state that we will be using as the opposite of  the current
    const newState = !this.state.drawerOpen;

    // put it in the state
    this.setState({
      drawerOpen: newState,
    });

    if (!this.props.disjointedMode) {
      window.dispatchEvent(new Event("SLATE_DRAWER_OPEN"));
    }

    // and put it in local storage
    localStorage.setItem("SLATE_DRAWER_OPEN", JSON.stringify(newState));
  }

  /**
   * Refocuses as the original selection area that was focused
   * mainly used by dialogs once they haave closed
   */
  public refocus() {
    if (this.isUnmounted) {
      return;
    }

    if (this.originalSelectionArea) {
      this.props.helpers.focusAt(this.originalSelectionArea);
    } else if (this.originalSelectionPath) {
      this.props.helpers.selectPath(this.originalSelectionPath);
    }
  }

  /**
   * Triggers once the document has recovered focus from the file
   * dialog that is native for the file upload
   */
  public onFileEventedReFocus() {
    // remove the old listener from the body
    document.body.removeEventListener("focus", this.onFileEventedReFocus, { capture: true });

    // we do it this way because this is a hacky way and we are not sure
    // on whether the focus event will trigger before the input event,
    // that comes from the file input dialog, the input should come first
    // as the file is to upload, but we make no assumptions
    this.refocusTimeout = setTimeout(this.refocus, 30);
  }

  public setToolbarState(state: string | null) {
    if (this.state.toolbarState !== state) {
      this.setState({ toolbarState: state });
    }
  }

  /**
   * This function gets called once the image input calls the on change event
   * which means it has been loaded by the input itself and it's available for
   * reading
   * @param e the change event that contains the file 
   */
  public async onImageLoad(e: React.ChangeEvent<HTMLInputElement>) {
    // remove the listener for the whole input for the refocus back into the field
    document.body.removeEventListener("focus", this.onFileEventedReFocus, { capture: true });
    // clear a timeout in case there is one for this refocus, since the event
    // might refer to a cancel, then we need to ensure it is cancelled
    // as this function itself will refocus after the image is inserted
    clearTimeout(this.refocusTimeout);
    // now we pick the image
    const file = e.target.files[0];
    e.target.value = "";
    // and insert it
    await this.props.helpers.focusAt(this.originalSelectionArea || this.originalSelectionPath);
    this.props.helpers.insertImage(file, false);
  }

  /**
   * This function gets called once the file input calls the on change event
   * which means it has been loaded by the input itself and it's available for
   * reading
   * @param e the change event that contains the file
   */
  public async onFileLoad(e: React.ChangeEvent<HTMLInputElement>) {
    // remove the listener for the whole input for the refocus back into the field
    document.body.removeEventListener("focus", this.onFileEventedReFocus, { capture: true });
    // clear a timeout in case there is one for this refocus, since the event
    // might refer to a cancel, then we need to ensure it is cancelled
    // as this function itself will refocus after the image is inserted
    clearTimeout(this.refocusTimeout);
    // now we pick the file
    const file = e.target.files[0];
    e.target.value = "";
    // and insert it
    await this.props.helpers.focusAt(this.originalSelectionArea || this.originalSelectionPath);
    this.props.helpers.insertFile(file);
  }

  /**
   * Standard render function from the wrapper
   */
  public render() {

    // first we build the iamge input if we support it
    const imageInput = this.props.state.isRichText && this.props.featureSupport.supportsImages ? (
      <input
        ref={this.inputImageRef}
        type="file"
        accept={this.props.featureSupport.supportsImagesAccept}
        style={{ display: "none" }}
        autoComplete="off"
        onChange={this.onImageLoad}
      />
    ) : null;

    // now the general file input
    const fileInput = this.props.state.isRichText && this.props.featureSupport.supportsFiles ? (
      <input
        ref={this.inputFileRef}
        type="file"
        accept={this.props.featureSupport.supportsFilesAccept}
        style={{ display: "none" }}
        autoComplete="off"
        onChange={this.onFileLoad}
      />
    ) : null;

    // the file load error dialog that shows an error
    // based on the current load error
    const fileLoadErrorDialog =
      this.props.state.isRichText &&
        (
          this.props.featureSupport.supportsImages ||
          this.props.featureSupport.supportsFiles
        ) ?
        (
          <FileLoadErrorDialog
            currentLoadError={this.props.currentLoadError}
            dismissCurrentLoadError={this.props.dismissCurrentLoadError}
            i18nGenericError={(this.props.baseI18n as IWrapperI18nRichTextInfo).genericError}
            i18nOk={(this.props.baseI18n as IWrapperI18nRichTextInfo).ok}
            Dialog={this.props.Dialog}
          />
        ) : null;

    let toolbar = (
      <RichTextEditorToolbar
        {...this.props}
        toolbarState={this.state.toolbarState}
        toolbarHeight={this.state.toolbarHeight}
        ref={this.toolbarRef}
        onHeightChange={this.onHeightChange}
        requestImage={this.requestImage}
        requestFile={this.requestFile}
        shouldHaveDrawer={this.shouldHaveDrawer}
        drawerOpen={this.state.drawerOpen}
        toggleDrawer={this.toggleDrawer}
        setToolbarState={this.setToolbarState}
      />
    );

    let extraChildren: React.ReactNode = null;
    if (this.props.customExtraChildren) {
      const [characterCount, wordCount] = countSizeAndWords(this.props.state.treeValue);
      extraChildren = this.props.customExtraChildren(characterCount, wordCount);
    }

    let drawerContainer = (
      <DrawerContainer
        {...this.props}
        ref={this.DrawerContainerRef}
        drawerOpen={this.state.drawerOpen}
        noAnimate={this.state.noAnimate}
        toolbarHeight={this.state.toolbarHeight}
      />
    );

    const DisjointedEditorContainer = this.props.DisjointedEditorContainer || "div";
    const EditorContainer = this.props.EditorContainer || DefaultEditorContainer;
    const DisjointedEditor = this.props.DisjointedEditor || "div";
    const Editor = this.props.Editor || "div";

    const basicClassName = "rich-text editor " +
      (this.props.state.isRichText ? "rich-text-mode" : "plain-text-mode") +
      (this.props.state.focused ? " focused" : "") +
      (this.props.state.currentValid ? " valid" : " invalid") +
      (this.props.disabled ? " disabled" : " enabled");

    let box: React.ReactNode = null;
    if (this.props.disjointedMode) {
      box = (
        <DisjointedEditorContainer ref={this.editorRef as any} className="slateEditorDisjointedEditorContainer" args={this.props.customArgs}>
          <DisjointedEditor className={basicClassName} args={this.props.customArgs}>
            {this.props.children}
          </DisjointedEditor>
          <div data-not-editor={true} style={{ width: "100%" }}>
            {extraChildren}
          </div>
        </DisjointedEditorContainer>
      );
    } else {
      box = (
        <>
          <Editor
            ref={this.editorRef as any}
            className={basicClassName}
            args={this.props.customArgs}
          >
            {this.props.children}
          </Editor>
          {extraChildren}
        </>
      );
    }

    // we have reactioner specifications
    if (this.props.BaseWrapper) {
      const BaseWrapper = this.props.BaseWrapper;
      box = (
        <BaseWrapper
          {...this.props}
          drawerOpen={this.state.drawerOpen}
          args={this.props.customArgs}
        >
          {box}
        </BaseWrapper>
      );
    }

    if (this.props.ToolbarWrapper) {
      const ToolbarWrapper = this.props.ToolbarWrapper;

      toolbar = (
        <ToolbarWrapper {...this.props} drawerOpen={this.state.drawerOpen} args={this.props.customArgs}>
          {toolbar}
        </ToolbarWrapper>
      );
    }

    if (this.props.DrawerWrapper) {
      const DrawerWrapper = this.props.DrawerWrapper;

      drawerContainer = (
        <DrawerWrapper {...this.props} drawerOpen={this.state.drawerOpen} args={this.props.customArgs}>
          {drawerContainer}
        </DrawerWrapper>
      );
    }

    let toReturn: React.ReactNode;

    if (this.props.disjointedMode) {
      toReturn = (
        <>
          {toolbar}
          {box}
          {drawerContainer}
          {fileLoadErrorDialog}
          {imageInput}
          {fileInput}
        </>
      );
    } else {
      toReturn = (
        <>
          {toolbar}
          <EditorContainer args={this.props.customArgs}>
            {box}
            {drawerContainer}
          </EditorContainer>
          {fileLoadErrorDialog}
          {imageInput}
          {fileInput}
        </>
      );
    }

    if (this.props.FinalWrapper) {
      const FinalWrapper = this.props.FinalWrapper;

      toReturn = (
        <FinalWrapper {...this.props} drawerOpen={this.state.drawerOpen} args={this.props.customArgs}>
          {toReturn}
        </FinalWrapper>
      );
    }

    return toReturn;
  }
}

export interface IDrawerContainerProps extends IDefaultSlateWrapperProps {
  drawerOpen: boolean;
  toolbarHeight: number;
  noAnimate: boolean;
}

interface IDrawerContainerState {
  isReady: boolean;
}

export interface IDrawerContainerBoxProps {
  /**
   * The height of the toolbar that
   * is currently being on use
   */
  toolbarHeight: number;
  /**
   * Whether disjointed mode is being used
   */
  disjointedMode: boolean;
  /**
   * If the drawer is already confirmed to be open
   * do not perform any open or close animation
   */
  noAnimate: boolean;
  /**
   * The children represent all of what
   * the drawer box contains
   */
  children: React.ReactNode;
  /**
   * Whether the drawer should be open
   * according to a toolbar action
   */
  drawerOpen: boolean;
  /**
   * custom args passed
   */
  args: any;
}

/**
 * A spacer is basically a small cherry on top
 * added to fit the toolbarheight around the drawer container
 * if necessary, only useful on disjointed mode
 */
export interface IDrawerSpacerProps {
  /**
   * Whether disjointed mode is being used
   */
  disjointedMode: boolean;
  /**
   * The height of the toolbar that
   * is currently being on use
   */
  toolbarHeight: number;
  /**
   * custom args passed
   */
  args: any;
}

export interface IDrawerBodyProps {
  /**
   * Whether disjointed mode is being used
   */
  disjointedMode: boolean;
  /**
   * The height of the toolbar that
   * is currently being on use
   */
  toolbarHeight: number;
  /**
   * The content of the drawer itself
   */
  children: React.ReactNode;
  /**
   * Whether the drawer is open or not
   */
  drawerOpen: boolean;
  /**
   * custom args passed
   */
  args: any;
}

export type DrawerContainerBoxComponent = React.ComponentType<IDrawerContainerBoxProps>;
export type DrawerSpacerComponent = React.ComponentType<IDrawerSpacerProps>;
export type DrawerBodyComponent = React.ComponentType<IDrawerBodyProps>;

const DefaultDrawerBody = React.forwardRef((props: IDrawerBodyProps, ref: React.ForwardedRef<HTMLElement>) => {
  return (
    <div ref={ref as any} className="slateEditorDrawerBody">
      {props.drawerOpen ? props.children : null}
    </div>
  );
})

function DefaultDrawerSpacer(props: IDrawerSpacerProps) {
  return (
    <div
      className="slateEditorDrawerAppbarSpacer"
      style={{ height: props.toolbarHeight, flex: "0 0 " + props.toolbarHeight + "px" }}
    />
  );
}

function DefaultDrawerContainerBox(props: IDrawerContainerBoxProps) {
  return (
    <div
      className={
        (props.drawerOpen ? "open " : "") +
        (props.disjointedMode ? "slateEditorDrawerFixed" : "slateEditorDrawer") +
        (props.noAnimate ? " slateEditorDrawerNoAnimate" : "")
      }
    >
      {props.children}
    </div>
  );
}

class DrawerContainer extends React.Component<IDrawerContainerProps, IDrawerContainerState> {
  private editorDrawerBodyRef: React.RefObject<HTMLDivElement>;
  constructor(props: IDrawerContainerProps) {
    super(props);

    this.state = {
      isReady: false,
    }

    this.editorDrawerBodyRef = React.createRef();
  }
  public componentDidMount() {
    this.setState({
      isReady: true,
    });
  }
  public getDrawerBody() {
    return this.editorDrawerBodyRef.current;
  }
  public render() {
    if (this.props.disjointedMode && !this.props.state.currentSelectedElement) {
      return null;
    }

    const DrawerContainerBox = this.props.DrawerContainerBox || DefaultDrawerContainerBox;
    const DrawerSpacer = this.props.DrawerSpacer || DefaultDrawerSpacer;
    const DrawerBody = this.props.DrawerBody || DefaultDrawerBody;

    const toReturn = (
      <DrawerContainerBox
        disjointedMode={this.props.disjointedMode}
        drawerOpen={this.props.drawerOpen}
        noAnimate={this.props.noAnimate}
        toolbarHeight={this.props.toolbarHeight}
        args={this.props.customArgs}
      >
        {
          this.props.disjointedMode && this.props.drawerOpen ?
            <DrawerSpacer
              disjointedMode={this.props.disjointedMode}
              toolbarHeight={this.props.toolbarHeight}
              args={this.props.customArgs}
            /> :
            null
        }
        <DrawerBody
          ref={this.editorDrawerBodyRef}
          disjointedMode={this.props.disjointedMode}
          toolbarHeight={this.props.toolbarHeight}
          drawerOpen={this.props.drawerOpen}
          args={this.props.customArgs}
        >
          <WrapperDrawer {...this.props} />
        </DrawerBody>
      </DrawerContainerBox>
    );

    if (this.props.disjointedMode) {
      if (this.state.isReady) {
        return ReactDOM.createPortal(toReturn, document.body);
      } else {
        return null;
      }
    } else {
      return toReturn;
    }
  }
}
