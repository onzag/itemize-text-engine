/**
 * This file contains the templating options that exist within the drawer in order
 * to set the for-each and context key
 * @module
 */

import { getContextFor, RichElement } from "../../../serializer";
import React from "react";
import type { IDrawerContainerProps, ISingleTemplatingElementOption } from "../wrapper";
import { Path } from "slate";
import { DefaultWrapperDrawerInternalPanelWrapper, DefaultWrapperDrawerSelectField, IWrapperDrawerSelectFieldProps } from "./general";

/**
 * The single templating element option props are the props
 * that the component takes in order to build the select field
 * for these options
 */
interface ISingleTemplatingElementProps {
  /**
   * The name of the option, used for namespacing
   */
  name: string;
  /**
   * The i18n name is what is actually visible for the user
   * used for placeholder and label
   */
  i18nName: string;
  /**
   * The current value
   */
  value: string;
  /**
   * All the options
   */
  options: ISingleTemplatingElementOption[];
  /**
   * in which anchor the value was generated from
   * we keep track of the anchor in order to know
   * if the value should be updated
   * there is a delay between the updating and receiving the
   * value in the field so it'd cause flickering otherwise
   */
  anchor: Path;
  /**
   * The change event that triggers once the select value changes
   */
  onChange: (value: string, anchor: Path) => void;
  /**
   * The id that this represents
   */
  id: string;

  customArgs: any;

  SelectField: React.ComponentType<IWrapperDrawerSelectFieldProps>;
}

/**
 * The state of the templating element
 */
interface ISingleTemplatingElementState {
  /**
   * The current value as in the state, we store the value here
   * and we keep it here because there's a delay when updating these
   * values from the rich element content
   */
  value: string;
  /**
   * The anchor where it comes from we also store the anchor to know if it has
   * changed which means it's another element, otherwise we assume that the state
   * value is the right value
   */
  valueForAnchor: Path;
  valueLastTimeRequestedUpdate: number;
}

/**
 * The single templating element class that provides the selector
 */
class SingleTemplatingElement extends React.PureComponent<ISingleTemplatingElementProps, ISingleTemplatingElementState> {

  /**
   * We need the derived function in order to be able to update the value of the
   * selector in case, this is the more efficient way in these cases where things
   * are slightly out of sync
   */
  static getDerivedStateFromProps(props: ISingleTemplatingElementProps, state: ISingleTemplatingElementState) {
    // for that we check if the value is not the same as the one in the state, which happens
    // whenever changing, but in order to actually change it we only do so if it's a different
    // element anchor we are at
    const time = (new Date()).getTime();
    if (
      (props.value || "") !== state.value &&
      (
        !Path.equals(props.anchor, state.valueForAnchor) ||
        time - state.valueLastTimeRequestedUpdate > 300
      )
    ) {
      // so we update
      return {
        value: props.value || "",
        valueForAnchor: props.anchor,
      }
    }

    return null;
  }

  /**
   * Construct a brand new templating element that provides a selector
   * @param props the props
   */
  constructor(props: ISingleTemplatingElementProps) {
    // call to the super
    super(props);

    // function binding
    this.onChange = this.onChange.bind(this);
    this.onChangeByEvent = this.onChangeByEvent.bind(this);

    // setup the initial state
    this.state = {
      value: props.value || "",
      valueForAnchor: props.anchor,
      valueLastTimeRequestedUpdate: 0,
    }
  }

  /**
   * This function triggers once the selection has changed
   * in the field
   * @param e the change event
   */
  public onChange(newValue: string) {
    // now we can update the state
    this.setState({
      value: newValue || "",
      valueForAnchor: this.props.anchor,
      valueLastTimeRequestedUpdate: (new Date()).getTime(),
    });

    // and set the state
    this.props.onChange(newValue, this.props.anchor);
  }

  /**
 * This function triggers once the selection has changed
 * in the field
 * @param e the change event
 */
  public onChangeByEvent(e: React.ChangeEvent<HTMLSelectElement>) {
    // grab the new value from the event
    const newValue = e.target.value || null;

    this.onChange(newValue);
  }

  public unblur() {
    document.body.dataset.unblur = "true";
  }

  public resetBlur() {
    delete document.body.dataset.unblur;
  }

  /**
   * The render function
   */
  public render() {
    // here we do the return with the box
    const SelectField = this.props.SelectField || DefaultWrapperDrawerSelectField;
    return (
      <SelectField
        label={this.props.i18nName}
        onChangeByEvent={this.onChangeByEvent}
        onChangeByValue={this.onChange}
        options={this.props.options}
        resetBlur={this.resetBlur}
        unblur={this.unblur}
        value={this.state.value}
        id={this.props.id}
        displayEmpty={true}
        args={this.props.customArgs}
      />
    );
  }
}

/**
 * Provides the component that contains the both selectors for both
 * each and context key for usage in templating
 * @param props the props for the templating which is literally the whole
 * options of the wrapper itself
 */
export function TemplatingOptions(props: IDrawerContainerProps) {
  // we need to pick these to make the option list
  const currentNode = props.state.currentSelectedElement as RichElement;
  const allEachContexts: ISingleTemplatingElementOption[] = [
    {
      label: " - ",
      value: "",
    },
  ];
  const allContexts: ISingleTemplatingElementOption[] = [
    {
      label: " - ",
      value: "",
    },
  ];
  const allIfConditions: ISingleTemplatingElementOption[] = [
    {
      label: " - ",
      value: "",
    },
  ];

  // if we have a context, otherwise without context there are no options
  const currentSelectElementForSelectContext = getContextFor(
    props.state.currentSelectedElementAnchor,
    "select-context",
    props.state.treeValue,
    props.state.currentRootContext,
  );
  if (currentSelectElementForSelectContext) {
    // we build the key list
    Object.keys(currentSelectElementForSelectContext.properties).forEach((p) => {
      const value = currentSelectElementForSelectContext.properties[p];
      // it needs to be a context type
      if (value.type !== "context" || value.loopable) {
        return null;
      }

      // now we can build the option
      const option = {
        value: p,
        label: typeof value.label === "function" ? value.label() : value.label,
      };

      allContexts.push(option);
    });
  }

  const currentSelectElementForEachContext = getContextFor(
    props.state.currentSelectedElementAnchor,
    "select-loop",
    props.state.treeValue,
    props.state.currentRootContext,
  );
  // if we have a context, otherwise without context there are no options
  if (currentSelectElementForEachContext) {
    // we build the key list
    Object.keys(currentSelectElementForEachContext.properties).forEach((p) => {
      const value = currentSelectElementForEachContext.properties[p];
      // it needs to be a context type
      const isValidForBoolean = value.type === "boolean";
      const isValidForLoop = value.type === "context" && value.loopable;
      if (!isValidForBoolean && !isValidForLoop) {
        return null;
      }

      // now we can build the option
      const option = {
        value: p,
        label: typeof value.label === "function" ? value.label() : value.label,
      };

      if (isValidForBoolean) {
        allIfConditions.push(option);
      } else {
        allEachContexts.push(option);
      }
    });
  }

  if (currentNode.forEach) {
    const eachFound = allEachContexts.find((v) => v.value === currentNode.forEach);
    if (!eachFound) {
      allEachContexts.push({
        value: currentNode.forEach,
        label: currentNode.forEach,
      });
    }
  }

  if (currentNode.context) {
    const contextFound = allContexts.find((v) => v.value === currentNode.context);
    if (!contextFound) {
      allContexts.push({
        value: currentNode.context,
        label: currentNode.context,
      });
    }
  }

  if (currentNode.ifCondition) {
    const ifConditionFound = allIfConditions.find((v) => v.value === currentNode.ifCondition);
    if (!ifConditionFound) {
      allEachContexts.push({
        value: currentNode.ifCondition,
        label: currentNode.ifCondition,
      });
    }
  }

  // and return the thing
  const WrapperDrawerInternalPanelWrapper = props.WrapperDrawerInternalPanelWrapper || DefaultWrapperDrawerInternalPanelWrapper;
  return (
    <WrapperDrawerInternalPanelWrapper args={props.customArgs}>
      <SingleTemplatingElement
        name="context"
        i18nName={props.baseI18n.context}
        value={currentNode.context || null}
        options={allContexts}
        anchor={props.state.currentSelectedElementAnchor}
        onChange={props.helpers.setContext}
        SelectField={props.WrapperDrawerSelectField}
        id="render-context"
        customArgs={props.customArgs}
      />
      <SingleTemplatingElement
        name="if"
        i18nName={props.baseI18n.renderCondition}
        value={currentNode.ifCondition || null}
        options={allIfConditions}
        anchor={props.state.currentSelectedElementAnchor}
        onChange={props.helpers.setIfCondition}
        SelectField={props.WrapperDrawerSelectField}
        id="render-if"
        customArgs={props.customArgs}
      />
      <SingleTemplatingElement
        name="each"
        i18nName={props.baseI18n.each}
        value={currentNode.forEach || null}
        options={allEachContexts}
        anchor={props.state.currentSelectedElementAnchor}
        onChange={props.helpers.setForEach}
        SelectField={props.WrapperDrawerSelectField}
        id="render-for-each"
        customArgs={props.customArgs}
      />
    </WrapperDrawerInternalPanelWrapper>
  );
}
