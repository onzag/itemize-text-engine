/**
 * This file contains the styles options that exist within the drawer in order
 * to set all the inline styles for the component
 * @module
 */

import { RichElement } from "../../../serializer";
import React, { useCallback } from "react";
import { IDrawerContainerProps } from "../wrapper";
import { Path } from "slate";
import equals from "deep-equal";
import { DefaultWrapperDrawerCheckBoxField, DefaultWrapperDrawerInternalPanelWrapper, DefaultWrapperDrawerMultiSelectField,
  DefaultWrapperDrawerTextField, IWrapperDrawerTextFieldProps } from "./general";

/**
 * The single style option props that define a single
 * option for the inline style, either, active, hover,
 * or the standard style
 */
interface ISingleStyleProps {
  /**
   * the name, it's used in the label and placeholder, not just namespacing
   */
  name: string;
  /**
   * The current value as it is right now
   */
  styleValue: string;
  /**
   * in which anchor the value was generated from
   * we keep track of the anchor in order to know
   * if the value should be updated
   * there is a delay between the updating and receiving the
   * value in the field so it'd cause flickering otherwise
   */
  anchor: Path;
  /**
   * Triggers on the change of the text field, and it triggers
   * every time a keypress is done
   */
  onChange: (value: string, anchor: Path) => void;

  /**
   * The text field to use
   */
  TextField?: React.ComponentType<IWrapperDrawerTextFieldProps>;
  /**
   * The id of the field
   */
  id: string;
  /**
   * custom args
   */
  customArgs: any;
}

/**
 * The state of the style input element
 */
interface ISingleStyleState {
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
}

/**
 * The single style element that provides an input for setting the style
 * both active, hover and the standard
 */
class SingleStyle extends React.PureComponent<ISingleStyleProps, ISingleStyleState> {

  /**
   * We need the derived function in order to be able to update the value of the
   * selector in case, this is the more efficient way in these cases where things
   * are slightly out of sync
   */
  static getDerivedStateFromProps(props: ISingleStyleProps, state: ISingleStyleState) {
    // for that we check if the value is not the same as the one in the state, which happens
    // whenever changing, but in order to actually change it we only do so if it's a different
    // element anchor we are at
    if ((props.styleValue || "") !== state.value && !Path.equals(props.anchor, state.valueForAnchor)) {
      // so we update
      return {
        value: props.styleValue || "",
        valueForAnchor: props.anchor,
      }
    }

    return null;
  }

  /**
   * Constructs the element that provides an input for active, hover and the standard
   * @param props 
   */
  constructor(props: ISingleStyleProps) {
    super(props);

    // bind the functions
    this.onStyleChange = this.onStyleChange.bind(this);
    this.onStyleChangeB = this.onStyleChangeB.bind(this);

    // set the initial state
    this.state = {
      value: props.styleValue || "",
      valueForAnchor: props.anchor,
    }
  }

  /**
   * Triggers each time the input for the style changes
   * @param e the change event in question
   */
  public onStyleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.onStyleChangeB(e.target.value);
  }

  /**
   * Triggers each time the input for the style changes
   * @param e the change event in question
   */
  public onStyleChangeB(newValue: string = null) {
    // set the state
    this.setState({
      value: newValue || "",
      valueForAnchor: this.props.anchor,
    });
    // call the event
    this.props.onChange(newValue, this.props.anchor);
  }

  /**
   * The standard render function
   */
  public render() {
    const TextField = this.props.TextField || DefaultWrapperDrawerTextField;
    return (
      <TextField
        value={this.state.value}
        onChangeByValue={this.onStyleChangeB}
        onChangeByEvent={this.onStyleChange}
        label={this.props.name}
        id={this.props.id}
        args={this.props.customArgs}
      />
    );
  }
}

/**
 * The state for the classes option selector that allows
 * for selecting rich classes
 */
interface IClassesOptionSelectorState {
  /**
   * The current value as in the state, we store the value here
   * and we keep it here because there's a delay when updating these
   * values from the rich element content
   * 
   * This is an array because the classes for the element are an array
   */
  value: string[];
  /**
   * The anchor where it comes from we also store the anchor to know if it has
   * changed which means it's another element, otherwise we assume that the state
   * value is the right value
   */
  valueForAnchor: Path;
  valueLastTimeRequestedUpdate: number;
}

/**
 * Provides a picker for rich classes in the drawer for the given element
 * basically a select field
 */
class ClassesOptionSelector extends React.PureComponent<IDrawerContainerProps, IClassesOptionSelectorState> {

  /**
   * We need the derived function in order to be able to update the value of the
   * selector in case, this is the more efficient way in these cases where things
   * are slightly out of sync
   */
  static getDerivedStateFromProps(props: IDrawerContainerProps, state: IClassesOptionSelectorState) {
    // we do it this way because this component eats the entire wrapper props so we need to pick it right
    // from the current selected node
    const selectedNode: RichElement = props.state.currentSelectedElement as any;

    // and we use both equals and path equals to determine a change
    // and avoid the sync issue
    const time = (new Date()).getTime();
    if (
      !equals(selectedNode.richClassList || [], state.value, { strict: true }) &&
      (
        !Path.equals(props.state.currentSelectedElementAnchor, state.valueForAnchor) ||
        time - state.valueLastTimeRequestedUpdate > 300
      )
    ) {
      return {
        value: selectedNode.richClassList || [],
        valueForAnchor: props.state.currentSelectedElementAnchor,
      }
    }

    return null;
  }

  /**
   * constructs a new class selector for rich classes
   * @param props the entire material ui slate wrapper props that the wrapper takes
   */
  constructor(props: IDrawerContainerProps) {
    super(props);

    // setup the initial state
    const selectedNode: RichElement = props.state.currentSelectedElement as any;
    this.state = {
      value: selectedNode.richClassList || [],
      valueForAnchor: props.state.currentSelectedElementAnchor,
      valueLastTimeRequestedUpdate: 0,
    };

    this.onRichClassListChange = this.onRichClassListChange.bind(this);
  }

  /**
   * Triggers when the select field changes and receives a new value
   * @param e the change event
   */
  public onRichClassListChange(newValue: string[] = []) {
    // now we can update the state
    this.setState({
      value: newValue,
      valueForAnchor: this.props.state.currentSelectedElementAnchor,
      valueLastTimeRequestedUpdate: (new Date()).getTime(),
    }, () => {
      // if we have nothing, the new value is null
      // for the primary component
      if (newValue.length === 0) {
        newValue = null;
      }

      // so we set such
      this.props.helpers.setRichClasses(newValue, this.props.state.currentSelectedElementAnchor);
    });
  }

  public unblur() {
    document.body.dataset.unblur = "true";
  }

  public resetBlur() {
    delete document.body.dataset.unblur;
  }

  /**
   * The render function that creates the multiselect
   */
  public render() {
    // we use a chip form in order to make it for multiple selection
    const MultiSelector = this.props.WrapperDrawerMultiSelectField || DefaultWrapperDrawerMultiSelectField;
    return (
      <MultiSelector
        id="rich-class"
        label={this.props.baseI18n.classes}
        onChange={this.onRichClassListChange}
        options={this.props.featureSupport.availableRichClasses.map((element) => (
          ({
            label: element.label,
            value: element.value,
          })
        ))}
        resetBlur={this.resetBlur}
        unblur={this.unblur}
        values={this.state.value}
        args={this.props.customArgs}
      />
    );
  }
}

/**
 * Provides the component that contains the multiselector for the rich classes
 * as well as allows to set active, hover and standard styles for the component
 * @param props the props for the templating which is literally the whole
 * options of the wrapper itself
 */
export function StylesOptions(props: IDrawerContainerProps) {
  const setStandalone = useCallback((v: boolean) => {
    props.helpers.set({
      standalone: v,
    }, props.state.currentSelectedElementAnchor);
  }, []);

  if (!props.state.currentSelectedElement) {
    return null;
  }

  const CheckboxField = props.WrapperDrawerCheckboxField || DefaultWrapperDrawerCheckBoxField;

  const imgStandalone = props.state.currentSelectedElement.type === "image" ? (
    <CheckboxField
      onChange={setStandalone}
      id="image-standalone"
      label={props.baseI18n.standalone}
      value={props.state.currentSelectedElement.standalone}
    />
  ) : null;

  const currentNode = props.state.currentSelectedElement as RichElement;
  const WrapperDrawerInternalPanelWrapper = props.WrapperDrawerInternalPanelWrapper || DefaultWrapperDrawerInternalPanelWrapper;

  return (
    <WrapperDrawerInternalPanelWrapper args={this.props.customArgs}>
      {imgStandalone}
      {
        props.featureSupport.supportsRichClasses ?
          <ClassesOptionSelector
            {...props}
          /> : null
      }
      {
        props.featureSupport.supportsCustomStyles ?
          <SingleStyle
            anchor={props.state.currentSelectedElementAnchor}
            onChange={props.helpers.setStyle}
            name={props.baseI18n.style}
            styleValue={currentNode.style}
            TextField={props.WrapperDrawerTextField}
            id="style"
            customArgs={props.customArgs}
          /> : null
      }
      {
        props.featureSupport.supportsCustomStyles && props.featureSupport.supportsTemplating ?
          <SingleStyle
            anchor={props.state.currentSelectedElementAnchor}
            onChange={props.helpers.setHoverStyle}
            name={props.baseI18n.styleHover}
            styleValue={currentNode.styleHover}
            TextField={props.WrapperDrawerTextField}
            id="style-hover"
            customArgs={props.customArgs}
          /> : null
      }
      {
        props.featureSupport.supportsCustomStyles && props.featureSupport.supportsTemplating ?
          <SingleStyle
            anchor={props.state.currentSelectedElementAnchor}
            onChange={props.helpers.setActiveStyle}
            name={props.baseI18n.styleActive}
            styleValue={currentNode.styleActive}
            TextField={props.WrapperDrawerTextField}
            id="style-active"
            customArgs={props.customArgs}
          /> : null
      }
    </WrapperDrawerInternalPanelWrapper>
  );
}
