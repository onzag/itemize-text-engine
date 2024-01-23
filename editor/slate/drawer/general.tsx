/**
 * Gives the general options for the current selected component, general options
 * depend on the rich element that is currently chosen, it also provides a delete
 * option to delete the node
 * @module
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { IDrawerContainerProps } from "../wrapper";

export function DefaultWrapperDrawerInternalPanelWrapper(props: { children: React.ReactNode }) {
  return (
    <div className="slateEditorWrapperDrawerInternalPanelWrapper">
      {props.children}
    </div>
  )
}

export interface IWrapperDrawerTextFieldProps {
  value: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeByEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeByValue: (v: string) => void;
  id: string;
  /**
   * custom args passed
   */
  args: any;
}

export interface IWrapperDrawerSelectFieldProps {
  value: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeByEvent: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeByValue: (v: string) => void;
  id: string;
  options: Array<{ value: string ; label: string | React.ReactNode; primary?: boolean }>;
  unblur: () => void;
  resetBlur: () => void;
  displayEmpty?: boolean;
  /**
   * custom args passed
   */
  args: any;
}

export interface IWrapperDrawerMultiSelectFieldProps {
  values: string[];
  label: string;
  disabled?: boolean;
  onChange: (v: string[]) => void;
  id: string;
  options: Array<{ value: string; label: string | React.ReactNode; primary?: boolean  }>;
  unblur: () => void;
  resetBlur: () => void;
  /**
   * custom args passed
   */
  args: any;
}

export interface IWrapperDrawerCheckBoxProps {
  value: boolean;
  label: string;
  onChange: (v: boolean) => void;
  id: string;
  disabled?: boolean;
}

export function DefaultWrapperDrawerTextField(props: IWrapperDrawerTextFieldProps) {
  return (
    <div className="slateEditorWrapperDrawerTextField">
      <label>{props.label}</label>
      <input
        value={props.value}
        placeholder={props.placeholder || props.label}
        onChange={props.onChangeByEvent}
        disabled={props.disabled}
      />
    </div>
  )
}

export function DefaultWrapperDrawerSelectField(props: IWrapperDrawerSelectFieldProps) {
  // due to contrains of the native HTML select
  // the label cannot be used in option values where an html has been given
  return (
    <div className="slateEditorWrapperDrawerSelectField">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={props.onChangeByEvent}
        disabled={props.disabled}
        placeholder={props.placeholder}
      >
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {typeof option.label === "string" ? option.label : option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export function DefaultWrapperDrawerMultiSelectField(props: IWrapperDrawerMultiSelectFieldProps) {
  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    props.onChange(selectedOptions);
  }, []);

  // due to contrains of the native HTML select
  // the label cannot be used in option values where an html has been given
  return (
    <div className="slateEditorWrapperDrawerMultiSelectField">
      <label>{props.label}</label>
      <select
        multiple={true}
        value={props.values}
        onChange={handleSelectChange}
        disabled={props.disabled}
      >
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {typeof option.label === "string" ? option.label : option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export function DefaultWrapperDrawerCheckBoxField(props: IWrapperDrawerCheckBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    props.onChange(newValue);
  };

  return (
    <div className="slateEditorWrapperDrawerCheckBoxField">
      <input
        type="checkbox"
        checked={props.value}
        onChange={handleChange}
        disabled={props.disabled}
      />
      <label>{props.label}</label>
    </div>
  );
}

/**
 * Provides the drawer section with all the general options of a given component
 * these general options are the specific options for the generic components
 * @param props all the entire wrapper props
 */
export function GeneralOptions(props: IDrawerContainerProps) {
  const [name, setName] = useState((props.state.currentSelectedElement && props.state.currentSelectedElement.givenName) || "");

  useEffect(() => {
    setName((props.state.currentSelectedElement && props.state.currentSelectedElement.givenName) || "");
  }, [props.state.currentSelectedElement]);

  const lastUpdateRef = useRef<any>();

  const updateNameB = useCallback((v: string) => {
    setName(v);
    clearTimeout(lastUpdateRef.current);
    lastUpdateRef.current = setTimeout(() => {
      props.helpers.set({
        givenName: v,
      }, props.state.currentSelectedElementAnchor);
    }, 600);
  }, [props.state.currentSelectedElement]);

  const updateName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateNameB(e.target.value);
  }, [updateNameB]);

  if (!props.state.currentSelectedElement) {
    return null;
  }

  const WrapperDrawerInternalPanelWrapper = props.WrapperDrawerInternalPanelWrapper || DefaultWrapperDrawerInternalPanelWrapper;
  const WrapperDrawerTextField = props.WrapperDrawerTextField || DefaultWrapperDrawerTextField;

  // and return
  return (
    <WrapperDrawerInternalPanelWrapper args={props.customArgs}>
      <WrapperDrawerTextField
        value={name}
        label={props.baseI18n.name}
        onChangeByEvent={updateName}
        onChangeByValue={updateNameB}
        id="name"
        args={props.customArgs}
      />
      {
        props.drawerExtras ? (
          props.drawerExtras.map((v, i) => {
            const Element = v.Component as any;
            return <Element key={v.key || i} {...props} />
          })
        ) : null
      }
    </WrapperDrawerInternalPanelWrapper>
  );
}
