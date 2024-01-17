/**
 * This file provides the drawer content that exists side to the rich text editor
 * when it is allowed to hold a drawer, the drawer contains a range of options to enable
 * templating or custom styling
 * @module
 */

import React, { useCallback, useEffect, useState } from "react";
import { IDrawerContainerProps } from "../wrapper";
// import { GeneralOptions } from "./general";
// import { StylesOptions } from "./styles";
// import { ActionsOptions } from "./actions";
// import { TemplatingOptions } from "./templating";
import { INodeInfo, getInfoFor } from "../..";
import { GeneralOptions } from "./general";


export interface IWrapperDrawerElementTitleProps {
  info: INodeInfo;
  entirePath: Array<{ info: INodeInfo; path: string[] }>;
  isCurrent: boolean;
  index: number;
  onSelect: () => void;
}

function DefaultWrapperDrawerElementTitle(props: IWrapperDrawerElementTitleProps) {
  return (
    <h6>
      {
        props.info.isInteractive ? (
          <span className="slateEditorWrapperDrawerElementTitleIconRtlOnly">{String.fromCharCode(9094)}</span>
        ) : null
      }
      <span
        className={props.isCurrent ? "slateEditorWrapperDrawerElementTitleSelected" : "slateEditorWrapperDrawerElementTitle"}
        role="button"
        aria-current={props.isCurrent}
        onClick={props.onSelect}
      >
        {props.info.name}
      </span>
      {
        props.info.isInteractive ? (
          <span className="slateEditorWrapperDrawerElementTitleIconLtrOnly">{String.fromCharCode(9094)}</span>
        ) : null
      }
      {
        props.isCurrent ? null : (
          <>
            <span className="slateEditorWrapperDrawerElementTitleIconLtrOnly">{String.fromCharCode(11106)}</span>
            <span className="slateEditorWrapperDrawerElementTitleIconRtlOnly">{String.fromCharCode(11106)}</span>
          </>
        )
      }
    </h6>
  )
}

function DefaultWrapperDrawerElementTitleWrapper(props: { children: React.ReactNode }) {
  return (
    <div className="slateEditorWrapperDrawerElementTitleWrapper">
      {props.children}
    </div>
  );
}

type IOptionType = "MAIN" | "STYLES" | "ACTIONS" | "TEMPLATING";
type SetOptionTypeFn = (v: IOptionType) => void;

export interface IWrapperDrawerInfoPanelWrapperProps {
  accessibilitySelectedOption: IOptionType;
  selectedOption: IOptionType;
  setSelectedOption: SetOptionTypeFn;
  setAccessibilitySelectedOption: SetOptionTypeFn;
  children: React.ReactNode;
}

export interface IWrapperDrawerTabsProps {
  accessibilitySelectedOption: IOptionType;
  selectedOption: IOptionType;
  setSelectedOption: SetOptionTypeFn;
  setAccessibilitySelectedOption: SetOptionTypeFn;
  options: Array<{ id: string; label: string; }>
}

export function DefaultWrapperDrawerInfoPanelWrapper(props: IWrapperDrawerInfoPanelWrapperProps) {
  return props.children as any;
}

export function DefaultWrapperDrawerTabs(props: IWrapperDrawerTabsProps) {
  return (
    <div className="slateEditorWrapperDrawerTabs">
      {props.options.map((v) => (
        <button
          onClick={props.setSelectedOption.bind(null, v.id)}
          key={v.id}
          className={props.selectedOption === v.id ? "slateEditorWrapperDrawerTabSelected" : "slateEditorWrapperDrawerTab"}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}

/**
 * This is the wrapper drawer itself
 * @param props it takes the entire wrapper props with the styles
 */
export function WrapperDrawer(props: IDrawerContainerProps) {
  // we grab this from local storage, this won't affect SSR because the drawer won't
  // ever render in the server side, it's client side only, it's always technically closed
  // on the server side
  const [location, setLocation] = useState(localStorage.getItem("SLATE_DRAWER_LAST_LOCATION") || "MAIN" as IOptionType);
  const [accessibilitySelectedOption, useAccessibilitySelectedOption] = useState(null as IOptionType);

  useEffect(() => {
    if (!props.drawerOpen) {
      useAccessibilitySelectedOption(null);
    }
  }, [props.drawerOpen]);

  // update the given location
  const setLocationCallback = useCallback((value: IOptionType) => {
    localStorage.setItem("SLATE_DRAWER_LAST_LOCATION", value);
    useAccessibilitySelectedOption(value);
    setLocation(value);
  }, []);

  // now we need to build the settings
  let settingsForNode: React.ReactNode = null;
  let titleForNode: React.ReactNode = null;

  // and that's done based on the selected node
  if (props.state.currentSelectedElement) {
    // and according to that decide which panel to render
    let infoPanel: React.ReactNode = null;
    switch (location) {
      case "MAIN":
        infoPanel = <GeneralOptions {...props} />;
        break;
      // case "STYLES":
      //   infoPanel = <StylesOptions {...props} />;
      //   break;
      // case "ACTIONS":
      //   infoPanel = <ActionsOptions {...props} />;
      //   break;
      // case "TEMPLATING":
      //   infoPanel = <TemplatingOptions {...props} />;
      //   break;
    }

    const selectedNodeInfo = getInfoFor(
      props.state.currentSelectedElement,
      props.baseI18n,
    );

    const potentialBlockParent = props.state.currentSelectedElement === props.state.currentSelectedInlineElement ?
      getInfoFor(
        props.state.currentSelectedBlockElement,
        props.baseI18n,
      ) : null;

    const superBlockPaths = (props.state.currentSelectedSuperBlockElements || []).filter((e) => e !== props.state.currentSelectedElement).map((v, index) => {
      return {
        info: getInfoFor(v, props.baseI18n),
        path: props.state.currentSelectedSuperBlockElementAnchors[index],
      }
    });

    const entirePath = superBlockPaths;

    if (potentialBlockParent) {
      entirePath.push({
        info: potentialBlockParent,
        path: props.state.currentSelectedBlockElementAnchor,
      });
    }

    entirePath.push({
      info: selectedNodeInfo,
      path: props.state.currentSelectedElementAnchor,
    });

    const WrapperDrawerElementTitle = props.WrapperDrawerElementTitle || DefaultWrapperDrawerElementTitle;

    titleForNode = entirePath.map((v, i) => {
      return (
        <WrapperDrawerElementTitle
          entirePath={entirePath as any}
          info={v.info}
          isCurrent={i === entirePath.length - 1}
          key={i}
          index={i}
          onSelect={i === entirePath.length - 1 ? null : props.helpers.selectPath.bind(null, v.path)}
        />
      );
    });

    const WrapperDrawerInfoPanelWrapper = props.WrapperDrawerInfoPanelWrapper || DefaultWrapperDrawerInfoPanelWrapper;

    const WrapperDrawerTabs = props.WrapperDrawerTabs || DefaultWrapperDrawerTabs;

    // and now we can build these settings
    // basically here we are building the divider and then
    // adding the panel, where the tabs allow us to switch
    // from each panel
    settingsForNode = (
      <>
        {
          !selectedNodeInfo.isText ?
            (
              <WrapperDrawerTabs
                accessibilitySelectedOption={accessibilitySelectedOption as any}
                selectedOption={location as any}
                setSelectedOption={setLocationCallback}
                setAccessibilitySelectedOption={useAccessibilitySelectedOption}
                options={[
                  {
                    id: "MAIN",
                    label: props.baseI18n.settings,
                  },
                  props.featureSupport.supportsCustomStyles || props.featureSupport.supportsRichClasses ? (
                    {
                      id: "STYLES",
                      label: props.baseI18n.styles,
                    }
                  ) : null,
                  props.featureSupport.supportsTemplating ? (
                    {
                      id: "TEMPLATING",
                      label: props.baseI18n.templating,
                    }
                  ) : null,
                  props.featureSupport.supportsTemplating ? (
                    {
                      id: "ACTIONS",
                      label: props.baseI18n.actions,
                    }
                  ) : null,
                ].filter((v) => !!v)}
              />
            ) : null
        }
        <WrapperDrawerInfoPanelWrapper
          accessibilitySelectedOption={accessibilitySelectedOption as any}
          selectedOption={location as any}
          setSelectedOption={setLocationCallback}
          setAccessibilitySelectedOption={useAccessibilitySelectedOption}
        >
          {infoPanel}
        </WrapperDrawerInfoPanelWrapper>
      </>
    );
  }

  const WrapperForTitle = props.WrapperDrawerElementTitleWrapper || DefaultWrapperDrawerElementTitleWrapper;

  // now we return
  return (
    <>
      <WrapperForTitle>
        {titleForNode}
      </WrapperForTitle>
      {settingsForNode}
      {props.drawerExtraChildren}
    </>
  );
}
