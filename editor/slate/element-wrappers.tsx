import type { ISlateEditorElementWrappers, ISlateEditorInternalStateType, ISlateEditorWrapperElementProps } from ".";
import React, { useCallback, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { ILink } from "../../../internal/text/serializer/types/link";
import { IPropertyEntryI18nRichTextInfo } from "../../../internal/components/PropertyEntry/PropertyEntryText";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import type { IVideo } from "../../../internal/text/serializer/types/video";
import { IContainer } from "../../../internal/text/serializer/types/container";
import TableRowsIcon from '@mui/icons-material/TableRows';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { EditorDropdown } from "../editor-dropdown";
import { ITable } from "../../../internal/text/serializer/types/table";
import { ITitle } from "../../../internal/text/serializer/types/title";
import { IImage } from "../../../internal/text/serializer/types/image";
import { AltBadgeReactioner } from "../alt-badge-reactioner";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const styles = {
  linkTemplateOptionsBox: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0 0 0",
  },
  linkTemplateOptionsText: {
    textAlign: "center",
    color: "#aaa",
    paddingBottom: "1rem",
  },
  optionPrimary: {
    fontWeight: 700,
    color: "#1b5e20",
  },
  whiteBackgroundInput: {
    backgroundColor: "white",
  },
  upsideDown: {
    transform: "scaleY(-1)",
  },
  fixedWidthInput: {
    width: 200,
  },
  iconAddRemove: {
    position: "absolute",
    right: 0,
    fontSize: "15px",
  },
}

/**
 * Represents an option for the templated values
 * that the link can take
 */
interface ITemplateOption {
  value: string;
  label: string | (() => string);
  primary: boolean;
};

export interface IMaterialUIWrapperElementProps extends ISlateEditorWrapperElementProps {
  /**
 * A generic error message
 */
  i18nGenericError: string;
  /**
   * A generic ok
   */
  i18nOk: string;
  /**
   * The whole of the i18n rich information that is given by default
   */
  i18nRichInfo: IPropertyEntryI18nRichTextInfo;

  /**
   * The priority to use in accessibility
   * try to keep it in line with the wrappers
   * usually a value of 1
   */
  usePriority?: number;

  /**
   * The input variant for elements
   */
  inputVariant?: "filled" | "outlined" | "standard";
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

function HTMLWrapper(props: IMaterialUIWrapperElementProps) {
  const [htmlOptions, setHTMLOptions] = useState<ITemplateOption[]>([]);

  const updateHTML = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const label = htmlOptions.find((o) => o.value === e.target.value);
    props.helpers.updateTemplateHTML(typeof label.label === "string" ? label.label : label.label(), e.target.value);
  }, [htmlOptions]);

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

  const InputToUse = props.inputVariant === "outlined" ? OutlinedInput : FilledInput;

  return (
    <EditorDropdown
      componentWrapper="span"
      isOpen={props.isSelected}
      dropdown={
        <AltBadgeReactioner
          reactionKey="t"
          priority={typeof props.usePriority === "number" ? props.usePriority : 1}
          selector="div[tabindex]"
          action="focus"
          fullWidth={true}
          onTabOutTrigger="escape"
        >
          <FormControl fullWidth={true}>
            <InputLabel
              htmlFor="slate-wrapper-template-html-id"
              shrink={true}
            >
              {props.i18nRichInfo.addTemplateHTML.label}
            </InputLabel>
            <Select
              value={props.element.html}
              onChange={updateHTML}
              sx={styles.whiteBackgroundInput}
              input={
                <InputToUse
                  id="slate-wrapper-template-html-id"
                  placeholder={props.i18nRichInfo.addTemplateHTML.placeholder}
                  label={props.i18nRichInfo.addTemplateHTML.placeholder}
                  fullWidth={true}
                />
              }
            >
              {
                // render the valid values that we display and choose
                htmlOptions.map((vv) => {
                  // the i18n value from the i18n data
                  return <MenuItem
                    data-unblur="true"
                    key={vv.value}
                    value={vv.value}
                    sx={vv.primary ? styles.optionPrimary : null}
                  >{
                      typeof vv.label == "string" ? vv.label : vv.label()
                    }</MenuItem>;
                })
              }
            </Select>
          </FormControl>
        </AltBadgeReactioner>
      }
    >
      {props.children}
    </EditorDropdown>
  );
}

function TextWrapper(props: IMaterialUIWrapperElementProps) {
  const [textOptions, setTextOptions] = useState<ITemplateOption[]>([]);

  const updateTextContent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const label = textOptions.find((o) => o.value === e.target.value);
    props.helpers.updateTemplateText(typeof label.label === "string" ? label.label : label.label(), e.target.value);
  }, [textOptions]);

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

  const InputToUse = props.inputVariant === "outlined" ? OutlinedInput : FilledInput;

  return (
    <EditorDropdown
      componentWrapper="span"
      isOpen={props.isSelected}
      dropdown={
        <AltBadgeReactioner
          reactionKey="t"
          priority={typeof props.usePriority === "number" ? props.usePriority : 1}
          selector="div[tabindex]"
          action="focus"
          fullWidth={true}
          onTabOutTrigger="escape"
        >
          <FormControl fullWidth={true}>
            <InputLabel
              htmlFor="slate-wrapper-template-entry-id"
              shrink={true}
            >
              {props.i18nRichInfo.addTemplateText.label}
            </InputLabel>
            <Select
              value={props.element.textContent}
              onChange={updateTextContent}
              sx={styles.whiteBackgroundInput}
              input={
                <InputToUse
                  id="slate-wrapper-template-entry-id"
                  placeholder={props.i18nRichInfo.addTemplateText.placeholder}
                  label={props.i18nRichInfo.addTemplateText.placeholder}
                  fullWidth={true}
                />
              }
            >
              {
                // render the valid values that we display and choose
                textOptions.map((vv) => {
                  // the i18n value from the i18n data
                  return <MenuItem
                    data-unblur="true"
                    key={vv.value}
                    value={vv.value}
                    sx={vv.primary ? styles.optionPrimary : null}
                  >{
                      typeof vv.label == "string" ? vv.label : vv.label()
                    }</MenuItem>;
                })
              }
            </Select>
          </FormControl>
        </AltBadgeReactioner>
      }
    >
      {props.children}
    </EditorDropdown>
  );
}

function TdAndTh(props: IMaterialUIWrapperElementProps) {
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

  const updateTableType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const path = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
    const tablePath = [...path];
    // tr
    tablePath.pop();
    // thead or tbody or tfoot
    tablePath.pop();
    // table
    tablePath.pop();

    props.helpers.set({
      tableType: e.target.value || null,
    } as any, tablePath);
    setTableType(e.target.value || "");
  }, []);

  if (!props.featureSupport.availableContainers.length) {
    return props.children;
  }

  const InputToUse = props.inputVariant === "outlined" ? OutlinedInput : FilledInput;

  // because of dom nesting we will just put a fake component to the side
  // and a fake element so we don't nest a td in the table
  return (
    <>
      {props.children}
      <EditorDropdown
        componentWrapper="td"
        componentWrapperHidden={true}
        componentWrapperProps={{ contentEditable: false }}
        dropdownSizable={true}
        dropdown={
          <>
            {props.featureSupport.availableTables.length ? (
              <AltBadgeReactioner
                reactionKey="t"
                priority={typeof props.usePriority === "number" ? props.usePriority : 1}
                selector="div[tabindex]"
                action="focus"
                onTabOutTrigger="escape"
              >
                <FormControl>
                  <InputLabel
                    htmlFor="slate-wrapper-table-entry-id"
                    shrink={true}
                  >
                    {props.i18nRichInfo.type}
                  </InputLabel>
                  <Select
                    value={tableType}
                    onChange={updateTableType}
                    displayEmpty={true}
                    sx={[styles.whiteBackgroundInput, styles.fixedWidthInput]}
                    input={
                      <InputToUse
                        id="slate-wrapper-table-entry-id"
                        placeholder={props.i18nRichInfo.type}
                        label={props.i18nRichInfo.type}
                      />
                    }
                  >
                    <MenuItem value="" data-unblur="true">
                      <em>{" - "}</em>
                    </MenuItem>
                    {
                      // render the valid values that we display and choose
                      props.featureSupport.availableTables.map((vv) => {
                        // the i18n value from the i18n data
                        return <MenuItem
                          data-unblur="true"
                          key={vv.value}
                          value={vv.value}
                        >{
                            vv.label
                          }</MenuItem>;
                      })
                    }
                  </Select>
                </FormControl>
              </AltBadgeReactioner>
            ) : null}
            <AltBadgeReactioner
              reactionKey="c"
              priority={typeof props.usePriority === "number" ? props.usePriority : 1}
              selector="button"
              onTabOutTrigger="escape"
            >
              <IconButton
                tabIndex={-1}
                title={props.i18nRichInfo.formatAddTdLabel}
                onClick={props.helpers.insertTableColumn}
                size="large">
                <>
                  <ViewWeekIcon />
                  <AddIcon sx={styles.iconAddRemove}/>
                </>
              </IconButton>
            </AltBadgeReactioner>
            <AltBadgeReactioner
              reactionKey="r"
              priority={typeof props.usePriority === "number" ? props.usePriority : 1}
              selector="button"
              onTabOutTrigger="escape"
            >
              <IconButton
                tabIndex={-1}
                title={props.i18nRichInfo.formatAddTrLabel}
                onClick={props.helpers.insertTableRow}
                size="large">
                <>
                  <TableRowsIcon />
                  <AddIcon sx={styles.iconAddRemove}/>
                </>
              </IconButton>
            </AltBadgeReactioner>
            <AltBadgeReactioner
              reactionKey="c"
              priority={typeof props.usePriority === "number" ? props.usePriority : 1}
              selector="button"
              onTabOutTrigger="escape"
            >
              <IconButton
                tabIndex={-1}
                title={props.i18nRichInfo.formatDelTdLabel}
                onClick={props.helpers.deleteTableColumn}
                size="large">
                <>
                  <ViewWeekIcon />
                  <RemoveIcon sx={styles.iconAddRemove} />
                </>
              </IconButton>
            </AltBadgeReactioner>
            <AltBadgeReactioner
              reactionKey="r"
              priority={typeof props.usePriority === "number" ? props.usePriority : 1}
              selector="button"
              onTabOutTrigger="escape"
            >
              <IconButton
                tabIndex={-1}
                title={props.i18nRichInfo.formatAddTrLabel}
                onClick={props.helpers.deleteTableRow}
                size="large">
                <>
                  <TableRowsIcon />
                  <RemoveIcon sx={styles.iconAddRemove}/>
                </>
              </IconButton>
            </AltBadgeReactioner>
            <AltBadgeReactioner
              reactionKey="h"
              priority={typeof props.usePriority === "number" ? props.usePriority : 1}
              selector="button"
              onTabOutTrigger="escape"
            >
              <IconButton
                tabIndex={-1}
                title={props.i18nRichInfo.formatAddThLabel}
                onClick={props.helpers.toggleTable.bind(null, "thead")}
                disabled={!props.helpers.canToggleTable("thead")}
                size="large"
                color={props.element.type === "th" ? "primary" : "default"}
              >
                <CreditCardIcon />
              </IconButton>
            </AltBadgeReactioner>
            <AltBadgeReactioner
              reactionKey="f"
              priority={typeof props.usePriority === "number" ? props.usePriority : 1}
              selector="button"
              onTabOutTrigger="escape"
            >
              <IconButton
                tabIndex={-1}
                title={props.i18nRichInfo.formatAddTfootLabel}
                onClick={props.helpers.toggleTable.bind(null, "tfoot")}
                disabled={!props.helpers.canToggleTable("tfoot")}
                size="large"
                color={parentTheadOrTbodyOrTfoot.type === "tfoot" ? "primary" : "default"}
              >
                <CreditCardIcon sx={styles.upsideDown} />
              </IconButton>
            </AltBadgeReactioner>
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

export const materialUIElementWrappers: ISlateEditorElementWrappers = {
  components: {
    link: (props: IMaterialUIWrapperElementProps) => {
      const [valid, setValid] = useState(true);
      const [linkOptions, setLinkOptions] = useState<ITemplateOption[]>([]);
      const [elementHref, setElementHref] = useState((props.element as ILink).href || "");

      const updateElementHref = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const valid = props.helpers.updateLink(e.target.value, (props.element as ILink).thref || null);
        setElementHref(e.target.value);
        setValid(valid);
      }, []);

      const updateElementTHref = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const valid = props.helpers.updateLink((props.element as ILink).href || null, e.target.value);
        setValid(valid);
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

      const InputToUse = props.inputVariant === "outlined" ? OutlinedInput : FilledInput;

      return (
        <EditorDropdown
          componentWrapper="span"
          isOpen={props.isSelected}
          dropdown={
            <>
              <AltBadgeReactioner
                reactionKey="h"
                priority={typeof props.usePriority === "number" ? props.usePriority : 1}
                selector="input"
                action="focus"
                disabled={!!(props.element as ILink).thref}
                fullWidth={true}
                onTabOutTrigger="escape"
              >
                <TextField
                  value={elementHref}
                  onChange={updateElementHref}
                  label={props.i18nRichInfo.setLink.label}
                  disabled={!!(props.element as ILink).thref}
                  placeholder={
                    props.featureSupport.supportsExternalLinks ?
                      props.i18nRichInfo.setLink.placeholder :
                      props.i18nRichInfo.setLink.placeholderLocalOnly
                  }
                  fullWidth={true}
                  tabIndex={-1}
                  sx={!(props.element as ILink).thref ? styles.whiteBackgroundInput : null}
                  variant={props.inputVariant}
                />
              </AltBadgeReactioner>
              {
                linkOptions.length ?
                  <Box sx={styles.linkTemplateOptionsBox}>
                    <Box sx={styles.linkTemplateOptionsText}>{props.i18nRichInfo.setLink.templated}</Box>
                    <AltBadgeReactioner
                      reactionKey="t"
                      priority={typeof props.usePriority === "number" ? props.usePriority : 1}
                      selector="div[tabindex]"
                      action="focus"
                      fullWidth={true}
                      onTabOutTrigger="escape"
                    >
                      <FormControl fullWidth={true}>
                        <InputLabel
                          htmlFor="slate-wrapper-template-entry-id"
                          shrink={true}
                        >
                          {props.i18nRichInfo.setLink.templatedLabel}
                        </InputLabel>
                        <Select
                          value={(props.element as ILink).thref || ""}
                          onChange={updateElementTHref}
                          displayEmpty={true}
                          fullWidth={true}
                          sx={styles.whiteBackgroundInput}
                          input={
                            <InputToUse
                              id="slate-wrapper-template-entry-id"
                              placeholder={props.i18nRichInfo.setLink.templatedPlaceholder}
                              label={props.i18nRichInfo.setLink.templatedPlaceholder}
                              fullWidth={true}
                            />
                          }
                        >
                          <MenuItem value="" data-unblur="true">
                            <em>{props.i18nRichInfo.setLink.templatedUnspecified}</em>
                          </MenuItem>
                          {
                            // render the valid values that we display and choose
                            linkOptions.map((vv) => {
                              // the i18n value from the i18n data
                              return <MenuItem
                                data-unblur="true"
                                key={vv.value}
                                value={vv.value}
                                sx={vv.primary ? styles.optionPrimary : null}
                              >{
                                  typeof vv.label == "string" ? vv.label : vv.label()
                                }</MenuItem>;
                            })
                          }
                        </Select>
                      </FormControl>
                    </AltBadgeReactioner>
                  </Box> :
                  null
              }
            </>
          }
        >
          {props.children}
        </EditorDropdown>
      );
    },
    video: (props: IMaterialUIWrapperElementProps) => {
      const [value, setValue] = useState(getVideoURL(props.element as IVideo));
      const [valid, setValid] = useState(true);

      const updateVideoURL = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setValid(props.helpers.updateVideo(e.target.value));
      }, []);

      useEffect(() => {
        setValue(getVideoURL(props.element as IVideo));
      }, [props.element]);

      return (
        <EditorDropdown
          dropdown={
            <AltBadgeReactioner
              reactionKey="u"
              priority={typeof props.usePriority === "number" ? props.usePriority : 1}
              selector="input"
              action="focus"
              fullWidth={true}
              onTabOutTrigger="escape"
            >
              <TextField
                value={value}
                onChange={updateVideoURL}
                label={props.i18nRichInfo.loadVideo.label}
                placeholder={props.i18nRichInfo.loadVideo.placeholder}
                fullWidth={true}
                sx={styles.whiteBackgroundInput}
                variant={props.inputVariant}
                tabIndex={-1}
              />
            </AltBadgeReactioner>
          }
          componentWrapper="div"
          goIntoTreeDepth={1}
          isOpen={props.isSelected}
        >
          {props.children}
        </EditorDropdown>
      );
    },
    image: (props: IMaterialUIWrapperElementProps) => {
      const [alt, setAlt] = useState((props.element as IImage).alt || "");

      useEffect(() => {
        setAlt((props.element as IImage).alt || "");
      }, [props.element]);

      const updateAlt = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const path = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
        props.helpers.set({
          alt: e.target.value || null,
        } as any, path);
        setAlt(e.target.value);
      }, []);

      return (
        <EditorDropdown
          dropdown={
            <AltBadgeReactioner
              reactionKey="a"
              priority={typeof props.usePriority === "number" ? props.usePriority : 1}
              selector="input"
              action="focus"
              fullWidth={true}
              onTabOutTrigger="escape"
            >
              <TextField
                value={alt}
                onChange={updateAlt}
                label={props.i18nRichInfo.alt}
                placeholder={props.i18nRichInfo.alt}
                fullWidth={true}
                sx={styles.whiteBackgroundInput}
                variant={props.inputVariant}
                tabIndex={-1}
              />
            </AltBadgeReactioner>
          }
          componentWrapper="div"
          goIntoTreeDepth={(props.element as IImage).standalone ? null : 1}
          isOpen={props.isSelected}
        >
          {props.children}
        </EditorDropdown>
      );
    },
    td: TdAndTh as any,
    th: TdAndTh as any,
    title: (props: IMaterialUIWrapperElementProps) => {
      const updateTitleType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const path = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
        props.helpers.set({
          titleType: e.target.value || null,
        } as any, path);
      }, []);

      const InputToUse = props.inputVariant === "outlined" ? OutlinedInput : FilledInput;

      return (
        <EditorDropdown
          componentWrapper="div"
          isOpen={props.isSelected}
          dropdown={
            <AltBadgeReactioner
              reactionKey="t"
              priority={typeof props.usePriority === "number" ? props.usePriority : 1}
              selector="div[tabindex]"
              action="focus"
              fullWidth={true}
              onTabOutTrigger="escape"
            >
              <FormControl fullWidth={true}>
                <InputLabel
                  htmlFor="slate-wrapper-title-entry-id"
                  shrink={true}
                >
                  {props.i18nRichInfo.type}
                </InputLabel>
                <Select
                  value={(props.element as ITitle).titleType || ""}
                  onChange={updateTitleType}
                  displayEmpty={true}
                  sx={styles.whiteBackgroundInput}
                  input={
                    <InputToUse
                      id="slate-wrapper-title-entry-id"
                      placeholder={props.i18nRichInfo.type}
                      label={props.i18nRichInfo.type}
                      fullWidth={true}
                    />
                  }
                >
                  {
                    // render the valid values that we display and choose
                    ["h1", "h2", "h3", "h4", "h5", "h6"].map((Element: any) => {
                      return <MenuItem
                        data-unblur="true"
                        key={Element}
                        value={Element}
                      >
                        <Element>
                          {props.i18nRichInfo.title}
                        </Element>
                      </MenuItem>;
                    })
                  }
                </Select>
              </FormControl>
            </AltBadgeReactioner>
          }
        >
          {props.children}
        </EditorDropdown>
      ) as any;
    },
    inline: (props: IMaterialUIWrapperElementProps) => {
      if (typeof props.element.textContent !== "string") {
        return props.children;
      }

      return (<TextWrapper {...props} />) as any;
    },
    "void-block": (props: IMaterialUIWrapperElementProps) => {
      if (typeof props.element.html === "undefined") {
        return props.children;
      }

      return (<HTMLWrapper {...props} />) as any;
    },
    container: (props: IMaterialUIWrapperElementProps) => {
      const updateContainerType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const path = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
        props.helpers.set({
          containerType: e.target.value || null,
        } as any, path);
      }, []);

      if (!props.featureSupport.availableContainers.length) {
        return props.children;
      }

      const InputToUse = props.inputVariant === "outlined" ? OutlinedInput : FilledInput;

      return (
        <EditorDropdown
          componentWrapper="span"
          isOpen={props.isSelected}
          dropdown={
            <AltBadgeReactioner
              reactionKey="t"
              priority={typeof props.usePriority === "number" ? props.usePriority : 1}
              selector="div[tabindex]"
              action="focus"
              fullWidth={true}
              onTabOutTrigger="escape"
            >
              <FormControl fullWidth={true}>
                <InputLabel
                  htmlFor="slate-wrapper-container-entry-id"
                  shrink={true}
                >
                  {props.i18nRichInfo.type}
                </InputLabel>
                <Select
                  value={(props.element as IContainer).containerType || ""}
                  onChange={updateContainerType}
                  displayEmpty={true}
                  sx={styles.whiteBackgroundInput}
                  input={
                    <InputToUse
                      id="slate-wrapper-container-entry-id"
                      placeholder={props.i18nRichInfo.type}
                      label={props.i18nRichInfo.type}
                      fullWidth={true}
                    />
                  }
                >
                  <MenuItem value="" data-unblur="true">
                    <em>{" - "}</em>
                  </MenuItem>
                  {
                    // render the valid values that we display and choose
                    props.featureSupport.availableContainers.map((vv) => {
                      // the i18n value from the i18n data
                      return <MenuItem
                        data-unblur="true"
                        key={vv.value}
                        value={vv.value}
                      >{
                          vv.label
                        }</MenuItem>;
                    })
                  }
                </Select>
              </FormControl>
            </AltBadgeReactioner>
          }
        >
          {props.children}
        </EditorDropdown>
      ) as any;
    }
  }
}