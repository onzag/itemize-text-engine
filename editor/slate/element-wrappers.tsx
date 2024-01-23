import type { ISlateEditorElementWrappers, ISlateEditorInternalStateType, ISlateEditorWrapperElementProps } from ".";
import React, { useCallback, useEffect, useState } from "react";
import { ILink } from "../../serializer/types/link";
import type { IVideo } from "../../serializer/types/video";
import { IContainer } from "../../serializer/types/container";
import { EditorDropdown, IDropdownComponentBoxProps, IDropdownComponentProps, IDropdownComponentWrapperProps } from "../editor-dropdown";
import { ITable } from "../../serializer/types/table";
import { ITitle } from "../../serializer/types/title";
import { IImage } from "../../serializer/types/image";
import { DefaultWrapperDrawerSelectField, DefaultWrapperDrawerTextField, IWrapperDrawerCheckBoxProps, IWrapperDrawerMultiSelectFieldProps, IWrapperDrawerSelectFieldProps, IWrapperDrawerTextFieldProps } from "./drawer/general";
import { IWrapperI18nRichTextInfo } from "./wrapper";

/**
 * Represents an option for the templated values
 * that the link can take
 */
interface ITemplateOption {
  value: string;
  label: string | (() => string);
  primary: boolean;
};

export interface IElementWrapperButton {
  label: string;
  id: string;
  disabled: boolean;
  selected?: boolean;
  onClick: () => void;
  args: any;
}

function DefaultElementWrapperButtonComponent(props: IElementWrapperButton) {
  return (
    <button
      className={"slateEditorElementWrapperButton " + (props.selected ? " selected" : "")}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button >
  );
}

export interface IFieldWrapperForMoreOptions {
  label: string;
  children: React.ReactNode;
  args: any;
}

function DefaultFieldWrapperForMoreOptions(props: IFieldWrapperForMoreOptions) {
  return (
    <div className="slateEditorFieldWrapperForMoreOptions">
      <div className="slateEditorFieldWrapperForMoreOptionsLabel">{props.label}</div>
      <div className="slateEditorFieldWrapperForMoreOptionsChildren">{props.children}</div>
    </div>
  )
}

export interface IDefaultSlateElementWrappersProps extends ISlateEditorWrapperElementProps {
  /**
   * Custom args to be passed
   */
  customArgs?: any;

  /**
   * Used to make text input fields
   */
  ElementWrapperTextField?: React.ComponentType<IWrapperDrawerTextFieldProps>;

  // /**
  //  * Used to make checkbox input fields
  //  */
  // ElementWrapperCheckboxField?: React.ComponentType<IWrapperDrawerCheckBoxProps>;

  /**
   * Used to make select input fields
   */
  ElementWrapperSelectField?: React.ComponentType<IWrapperDrawerSelectFieldProps>;

  // /**
  //  * Used to make select input fields
  //  */
  // ElementWrapperMultiSelectField?: React.ComponentType<IWrapperDrawerMultiSelectFieldProps>;

  /**
   * Buttons used within the element wrappers
   */
  ElementWrapperButton?: React.ComponentType<IElementWrapperButton>;

  /**
   * The dropdown component to use
   * note that it should support a ref object for this
   */
  DropdownComponent?: React.ComponentType<IDropdownComponentProps>;

  /**
   * Represents the optional parent box that some elements choose to use
   */
  DropdownComponentBox?: React.ComponentType<IDropdownComponentBoxProps>;

  /**
   * The component the dropdown is using as a wrapper
   * for the element
   */
  DropdownComponentWrapper?: React.ComponentType<IDropdownComponentWrapperProps>;

  /**
   * Used mainly in the templated element that it wraps in order to say that
   * there are more options
   */
  FieldWrapperForMoreOptions?: React.ComponentType<IFieldWrapperForMoreOptions>;
}

function getVideoURL(v: IVideo) {
  if (v.origin === "youtube") {
    return "https://youtube.com/watch?v=" + v.src;
  } else if (v.origin === "vimeo") {
    return "https://vimeo.com/" + v.src;
  } else {
    return "";
  }
}

function HTMLWrapper(props: IDefaultSlateElementWrappersProps) {
  const [htmlOptions, setHTMLOptions] = useState<ITemplateOption[]>([]);

  const updateHTMLB = useCallback((newV: string) => {
    const label = htmlOptions.find((o) => o.value === newV);
    props.helpers.updateTemplateHTML(typeof label.label === "string" ? label.label : label.label(), newV);
  }, [htmlOptions]);

  const updateHTML = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateHTMLB(e.target.value);
  }, [updateHTMLB]);

  useEffect(() => {
    if (!props.isSelected) {
      return;
    }

    const context = props.helpers.getContextFor(props.element);
    const rootContext = props.helpers.getRootContext();

    // need to find the templated options that are available
    // given the current context
    const htmlPropertiesToUse: ITemplateOption[] = [];

    // now we need to grab the current context, if we have any
    context && Object.keys(context.properties).forEach((key) => {
      // grab each property and check the type of it
      const property = context.properties[key];
      // if it's not a link
      if (property.type !== "html") {
        // continue
        return;
      }

      // otherwise we have a property we can use
      htmlPropertiesToUse.push({
        value: key,
        label: property.label || key,
        primary: context !== rootContext,
      });
    });

    if (rootContext && rootContext !== context) {
      Object.keys(rootContext.properties).forEach((key) => {
        // grab each property and check the type of it
        const property = rootContext.properties[key];

        if (property.nonRootInheritable) {
          return;
        }

        // if it's not a link
        if (property.type !== "html") {
          // continue
          return;
        }

        // otherwise we have a property we can use
        htmlPropertiesToUse.push({
          value: key,
          label: property.label || key,
          primary: false,
        });
      });
    }

    // and the value of such is not in the list
    if (props.element.html && !htmlPropertiesToUse.some((p) => p.value === props.element.html)) {
      // we add it
      htmlPropertiesToUse.push({
        value: props.element.html,
        label: (props.element.children[0] as any).text,
        primary: false,
      });
    }

    setHTMLOptions(htmlPropertiesToUse);
  }, [props.element, props.isSelected]);

  const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;

  return (
    <EditorDropdown
      DropdownComponent={props.DropdownComponent}
      DropdownComponentBox={props.DropdownComponentBox}
      DropdownComponentWrapper={props.DropdownComponentWrapper}
      dropdownComponentWrapperTag="span"
      isOpen={props.isSelected}
      dropdown={
        <SelectField
          id="template-html"
          label={(props.baseI18n as IWrapperI18nRichTextInfo).addTemplateHTML.label}
          onChangeByEvent={updateHTML}
          onChangeByValue={updateHTMLB}
          options={htmlOptions.map((v) => ({
            label: typeof v.label === "function" ? v.label() : v.label,
            value: v.value,
            primary: v.primary,
          }))}
          resetBlur={null}
          unblur={null}
          value={props.element.html}
          args={props.customArgs}
        />
      }
    >
      {props.children}
    </EditorDropdown>
  );
}

function TextWrapper(props: IDefaultSlateElementWrappersProps) {
  const [textOptions, setTextOptions] = useState<ITemplateOption[]>([]);

  const updateTextContentB = useCallback((newV: string) => {
    const label = textOptions.find((o) => o.value === newV);
    props.helpers.updateTemplateText(typeof label.label === "string" ? label.label : label.label(), newV);
  }, [textOptions]);

  const updateTextContent = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateTextContentB(e.target.value);
  }, [updateTextContentB]);

  useEffect(() => {
    if (!props.isSelected) {
      return;
    }

    const context = props.helpers.getContextFor(props.element);
    const rootContext = props.helpers.getRootContext();

    // need to find the templated options that are available
    // given the current context
    const textPropertiesToUse: ITemplateOption[] = [];

    // now we need to grab the current context, if we have any
    context && Object.keys(context.properties).forEach((key) => {
      // grab each property and check the type of it
      const property = context.properties[key];
      // if it's not a link
      if (property.type !== "text") {
        // continue
        return;
      }

      // otherwise we have a property we can use
      textPropertiesToUse.push({
        value: key,
        label: property.label || key,
        primary: context !== rootContext,
      });
    });

    if (rootContext && rootContext !== context) {
      Object.keys(rootContext.properties).forEach((key) => {
        // grab each property and check the type of it
        const property = rootContext.properties[key];

        if (property.nonRootInheritable) {
          return;
        }

        // if it's not a link
        if (property.type !== "text") {
          // continue
          return;
        }

        // otherwise we have a property we can use
        textPropertiesToUse.push({
          value: key,
          label: property.label || key,
          primary: false,
        });
      });
    }

    // and the value of such is not in the list
    if (props.element.textContent && !textPropertiesToUse.some((p) => p.value === props.element.textContent)) {
      // we add it
      textPropertiesToUse.push({
        value: props.element.textContent,
        label: (props.element.children[0] as any).text,
        primary: false,
      });
    }

    setTextOptions(textPropertiesToUse);
  }, [props.element, props.isSelected]);

  const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;

  return (
    <EditorDropdown
      DropdownComponent={props.DropdownComponent}
      DropdownComponentBox={props.DropdownComponentBox}
      DropdownComponentWrapper={props.DropdownComponentWrapper}
      dropdownComponentWrapperTag="span"
      isOpen={props.isSelected}
      dropdown={
        <SelectField
          id="template-text"
          label={(props.baseI18n as IWrapperI18nRichTextInfo).addTemplateText.label}
          onChangeByEvent={updateTextContent}
          onChangeByValue={updateTextContentB}
          options={textOptions.map((v) => ({
            label: typeof v.label === "function" ? v.label() : v.label,
            value: v.value,
            primary: v.primary,
          }))}
          resetBlur={null}
          unblur={null}
          value={props.element.html}
          args={props.customArgs}
        />
      }
    >
      {props.children}
    </EditorDropdown>
  );
}

function TdAndTh(props: IDefaultSlateElementWrappersProps) {
  const path = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
  const parentPath = [...path];
  // tr
  parentPath.pop();
  // thead or tbody or tfoot
  parentPath.pop();

  const parentTheadOrTbodyOrTfoot = props.helpers.Node.get(props.helpers.editor, parentPath) as any;

  parentPath.pop();
  const tableElement = props.helpers.Node.get(props.helpers.editor, parentPath) as any;

  const [tableType, setTableType] = useState((tableElement as ITable).tableType || "");

  useEffect(() => {
    setTableType((tableElement as ITable).tableType || "");
  }, [(tableElement as ITable).tableType]);

  const updateTableTypeB = useCallback((newValue: string) => {
    const path = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
    const tablePath = [...path];
    // tr
    tablePath.pop();
    // thead or tbody or tfoot
    tablePath.pop();
    // table
    tablePath.pop();

    props.helpers.set({
      tableType: newValue || null,
    } as any, tablePath);
    setTableType(newValue || "");
  }, []);

  const updateTableType = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    updateTableTypeB(e.target.value)
  }, [updateTableTypeB]);

  const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;
  const Button = props.ElementWrapperButton || DefaultElementWrapperButtonComponent;

  // because of dom nesting we will just put a fake component to the side
  // and a fake element so we don't nest a td in the table
  return (
    <>
      {props.children}
      <EditorDropdown
        DropdownComponent={props.DropdownComponent}
        DropdownComponentBox={props.DropdownComponentBox}
        DropdownComponentWrapper={props.DropdownComponentWrapper}
        dropdownComponentWrapperTag="td"
        dropdownComponentWrapperHidden={true}
        dropdownComponentWrapperProps={{ contentEditable: false }}
        dropdownSizable={true}
        dropdown={
          <>
            {props.featureSupport.availableTables.length ? (
              <SelectField
                value={tableType}
                onChangeByEvent={updateTableType}
                displayEmpty={true}
                label={props.baseI18n.type}
                id="table-type"
                onChangeByValue={updateTableTypeB}
                options={[{
                  label: " - ",
                  value: "",
                }].concat(props.featureSupport.availableTables)}
                resetBlur={null}
                unblur={null}
                args={props.customArgs}
              />
            ) : null}
            <Button
              id="table-add-td"
              label={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddTdLabel}
              onClick={props.helpers.insertTableColumn}
              disabled={false}
              args={props.customArgs}
            />
            <Button
              id="table-add-tr"
              label={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddTrLabel}
              onClick={props.helpers.insertTableRow}
              disabled={false}
              args={props.customArgs}
            />
            <Button
              id="table-del-td"
              label={(props.baseI18n as IWrapperI18nRichTextInfo).formatDelTdLabel}
              onClick={props.helpers.deleteTableColumn}
              disabled={false}
              args={props.customArgs}
            />
            <Button
              id="table-del-tr"
              label={(props.baseI18n as IWrapperI18nRichTextInfo).formatDelTrLabel}
              onClick={props.helpers.deleteTableRow}
              disabled={false}
              args={props.customArgs}
            />
            <Button
              id="table-toggle-th"
              label={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddThLabel}
              onClick={props.helpers.toggleTable.bind(null, "thead")}
              disabled={!props.helpers.canToggleTable("thead")}
              selected={props.element.type === "th"}
              args={props.customArgs}
            />
            <Button
              id="table-toggle-tfoot"
              label={(props.baseI18n as IWrapperI18nRichTextInfo).formatAddTfootLabel}
              onClick={props.helpers.toggleTable.bind(null, "tfoot")}
              disabled={!props.helpers.canToggleTable("tfoot")}
              selected={parentTheadOrTbodyOrTfoot.type === "tfoot"}
              args={props.customArgs}
            />
          </>
        }
        isOpen={props.isSelected}
        goIntoTreeDepth={-4}
      >
        <p />
      </EditorDropdown>
    </>
  );
}

export const defaultElementWrappers: ISlateEditorElementWrappers = {
  components: {
    link: (props: IDefaultSlateElementWrappersProps) => {
      const [valid, setValid] = useState(true);
      const [linkOptions, setLinkOptions] = useState<ITemplateOption[]>([]);
      const [elementHref, setElementHref] = useState((props.element as ILink).href || "");

      const updateElementHrefB = useCallback((newV: string) => {
        const valid = props.helpers.updateLink(newV, (props.element as ILink).thref || null);
        setElementHref(newV);
        setValid(valid);
      }, [props.element]);

      const updateElementTHrefB = useCallback((newV: string) => {
        const valid = props.helpers.updateLink((props.element as ILink).href || null, newV);
        setValid(valid);
      }, [props.element]);

      const updateElementHref = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        updateElementHrefB(e.target.value);
      }, [updateElementHrefB]);

      const updateElementTHref = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        updateElementTHrefB(e.target.value);
      }, []);

      useEffect(() => {
        if (!props.isSelected) {
          return;
        }
        const context = props.helpers.getContextFor(props.element);
        const rootContext = props.helpers.getRootContext();

        // need to find the templated options that are available
        // given the current context
        const linkPropertiesToUse: ITemplateOption[] = [];

        // now we need to grab the current context, if we have any
        context && Object.keys(context.properties).forEach((key) => {
          // grab each property and check the type of it
          const property = context.properties[key];
          // if it's not a link
          if (property.type !== "link") {
            // continue
            return;
          }

          // otherwise we have a property we can use
          linkPropertiesToUse.push({
            value: key,
            label: property.label || key,
            primary: context !== rootContext,
          });
        });

        if (rootContext && rootContext !== context) {
          Object.keys(rootContext.properties).forEach((key) => {
            // grab each property and check the type of it
            const property = rootContext.properties[key];

            if (property.nonRootInheritable) {
              return;
            }

            // if it's not a link
            if (property.type !== "link") {
              // continue
              return;
            }

            // otherwise we have a property we can use
            linkPropertiesToUse.push({
              value: key,
              label: property.label || key,
              primary: false,
            });
          });
        }

        // and the value of such is not in the list
        if ((props.element as ILink).thref && !linkPropertiesToUse.some((p) => p.value === (props.element as ILink).thref)) {
          // we add it
          linkPropertiesToUse.push({
            value: (props.element as ILink).thref,
            label: (props.element as ILink).thref,
            primary: false,
          });
        }

        setElementHref((props.element as ILink).href || "");
        setLinkOptions(linkPropertiesToUse);
      }, [props.element, props.isSelected]);

      const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;
      const TextField = props.ElementWrapperTextField || DefaultWrapperDrawerTextField;
      const FieldWrapperForMoreOptions = props.FieldWrapperForMoreOptions || DefaultFieldWrapperForMoreOptions;

      return (
        <EditorDropdown
          DropdownComponent={props.DropdownComponent}
          DropdownComponentBox={props.DropdownComponentBox}
          DropdownComponentWrapper={props.DropdownComponentWrapper}
          dropdownComponentWrapperTag="span"
          isOpen={props.isSelected}
          dropdown={
            <>
              <TextField
                value={elementHref}
                onChangeByEvent={updateElementHref}
                onChangeByValue={updateElementHrefB}
                label={(props.baseI18n as IWrapperI18nRichTextInfo).setLink.label}
                disabled={!!(props.element as ILink).thref}
                placeholder={
                  props.featureSupport.supportsExternalLinks ?
                    (props.baseI18n as IWrapperI18nRichTextInfo).setLink.placeholder :
                    (props.baseI18n as IWrapperI18nRichTextInfo).setLink.placeholderLocalOnly
                }
                id="link-href"
                args={props.customArgs}
              />
              {
                linkOptions.length ?
                  <FieldWrapperForMoreOptions label={(props.baseI18n as IWrapperI18nRichTextInfo).setLink.templated} args={props.customArgs}>
                    <SelectField
                      id="link-thref"
                      value={(props.element as ILink).thref || ""}
                      label={(props.baseI18n as IWrapperI18nRichTextInfo).setLink.templatedLabel}
                      placeholder={(props.baseI18n as IWrapperI18nRichTextInfo).setLink.templatedPlaceholder}
                      onChangeByEvent={updateElementTHref}
                      onChangeByValue={updateElementTHrefB}
                      displayEmpty={true}
                      options={[{
                        label: (props.baseI18n as IWrapperI18nRichTextInfo).setLink.templatedUnspecified,
                        value: "",
                      }].concat(linkOptions.map((v) => ({
                        label: typeof v.label === "function" ? v.label() : v.label,
                        value: v.value,
                        primary: v.primary,
                      })))}
                      resetBlur={null}
                      unblur={null}
                      args={props.customArgs}
                    />
                  </FieldWrapperForMoreOptions>
                  :
                  null
              }
            </>
          }
        >
          {props.children}
        </EditorDropdown>
      );
    },
    video: (props: IDefaultSlateElementWrappersProps) => {
      const [value, setValue] = useState(getVideoURL(props.element as IVideo));
      const [valid, setValid] = useState(true);

      const updateVideoURLB = useCallback((newV: string) => {
        setValue(newV);
        setValid(props.helpers.updateVideo(newV));
      }, []);

      const updateVideoURL = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        updateVideoURLB(e.target.value);
      }, [updateVideoURLB]);

      useEffect(() => {
        setValue(getVideoURL(props.element as IVideo));
      }, [props.element]);

      const TextField = props.ElementWrapperTextField || DefaultWrapperDrawerTextField;

      return (
        <EditorDropdown
          DropdownComponent={props.DropdownComponent}
          DropdownComponentBox={props.DropdownComponentBox}
          DropdownComponentWrapper={props.DropdownComponentWrapper}
          dropdown={
            <TextField
              value={value}
              onChangeByEvent={updateVideoURL}
              onChangeByValue={updateVideoURLB}
              label={(props.baseI18n as IWrapperI18nRichTextInfo).loadVideo.label}
              placeholder={(props.baseI18n as IWrapperI18nRichTextInfo).loadVideo.placeholder}
              id="video-url"
              args={props.customArgs}
            />
          }
          dropdownComponentWrapperTag="div"
          goIntoTreeDepth={1}
          isOpen={props.isSelected}
        >
          {props.children}
        </EditorDropdown>
      );
    },
    image: (props: IDefaultSlateElementWrappersProps) => {
      const [alt, setAlt] = useState((props.element as IImage).alt || "");

      useEffect(() => {
        setAlt((props.element as IImage).alt || "");
      }, [props.element]);

      const updateAltB = useCallback((newValue: string) => {
        const path = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
        props.helpers.set({
          alt: newValue || null,
        } as any, path);
        setAlt(newValue);
      }, []);

      const updateAlt = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        updateAltB(e.target.value);
      }, [updateAltB]);

      const TextField = props.ElementWrapperTextField || DefaultWrapperDrawerTextField;

      return (
        <EditorDropdown
          DropdownComponent={props.DropdownComponent}
          DropdownComponentBox={props.DropdownComponentBox}
          DropdownComponentWrapper={props.DropdownComponentWrapper}
          dropdown={
            <TextField
              value={alt}
              onChangeByEvent={updateAlt}
              onChangeByValue={updateAltB}
              label={props.baseI18n.alt}
              id="image-alt"
              args={props.customArgs}
            />
          }
          dropdownComponentWrapperTag="div"
          goIntoTreeDepth={(props.element as IImage).standalone ? null : 1}
          isOpen={props.isSelected}
        >
          {props.children}
        </EditorDropdown>
      );
    },
    td: TdAndTh as any,
    th: TdAndTh as any,
    title: (props: IDefaultSlateElementWrappersProps) => {
      const updateTitleTypeB = useCallback((newV: string) => {
        const path = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
        props.helpers.set({
          titleType: newV || null,
        } as any, path);
      }, []);

      const updateTitleType = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        updateTitleTypeB(e.target.value);
      }, [updateTitleTypeB]);

      const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;

      return (
        <EditorDropdown
          DropdownComponent={props.DropdownComponent}
          DropdownComponentBox={props.DropdownComponentBox}
          DropdownComponentWrapper={props.DropdownComponentWrapper}
          dropdownComponentWrapperTag="div"
          isOpen={props.isSelected}
          dropdown={
            <SelectField
              id="title-type"
              label={props.baseI18n.type}
              onChangeByEvent={updateTitleType}
              onChangeByValue={updateTitleTypeB}
              options={["h1", "h2", "h3", "h4", "h5", "h6"].map((Element: any) => {
                return {
                  label: <Element>{props.baseI18n.title}</Element>,
                  value: Element ? Element : " - ",
                }
              })}
              resetBlur={null}
              unblur={null}
              value={(props.element as ITitle).titleType || "h1"}
              args={props.customArgs}
            />
          }
        >
          {props.children}
        </EditorDropdown>
      ) as any;
    },
    inline: (props: IDefaultSlateElementWrappersProps) => {
      if (typeof props.element.textContent !== "string") {
        return props.children;
      }

      return (<TextWrapper {...props} />) as any;
    },
    "void-block": (props: IDefaultSlateElementWrappersProps) => {
      if (typeof props.element.html === "undefined") {
        return props.children;
      }

      return (<HTMLWrapper {...props} />) as any;
    },
    container: (props: IDefaultSlateElementWrappersProps) => {
      const updateContainerTypeB = useCallback((newV: string) => {
        const path = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
        props.helpers.set({
          containerType: newV || null,
        } as any, path);
      }, []);

      const updateContainerType = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        updateContainerTypeB(e.target.value);
      }, [updateContainerTypeB]);

      if (!props.featureSupport.availableContainers.length) {
        return props.children;
      }

      const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;

      return (
        <EditorDropdown
          DropdownComponent={props.DropdownComponent}
          DropdownComponentBox={props.DropdownComponentBox}
          DropdownComponentWrapper={props.DropdownComponentWrapper}
          dropdownComponentWrapperTag="span"
          isOpen={props.isSelected}
          dropdown={
            <SelectField
              id="container-type"
              label={props.baseI18n.type}
              onChangeByEvent={updateContainerType}
              onChangeByValue={updateContainerTypeB}
              options={[{
                label: " - ",
                value: "",
              }].concat(props.featureSupport.availableContainers)}
              resetBlur={null}
              unblur={null}
              value={(props.element as IContainer).containerType || ""}
              displayEmpty={true}
              args={props.customArgs}
            />
          }
        >
          {props.children}
        </EditorDropdown>
      ) as any;
    }
  }
}