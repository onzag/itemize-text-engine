/**
 * Provides the dialogs that are used for the file
 * @module
 */

import React from "react";
import ReactDOM from "react-dom";

/**
 * The error dialog props
 */
interface IFileLoadErrorDialogProps {
  /**
   * The current error, it also represents
   * the fact of the dialog being open if one
   * is available
   */
  currentLoadError: string;
  /**
   * dismiss such error
   */
  dismissCurrentLoadError: () => void;
  /**
   * Generic error message
   */
  i18nGenericError: string;
  /**
   * Ok
   */
  i18nOk: string;
  /**
   * The component for the dialog
   */
  Dialog?: React.ComponentType<IDialogComponentProps>;
}

export interface IDialogComponentProps {
  children: string;
  open: boolean;
  onClose: () => void;
  title: string;
  buttons: Array<{
    label: string;
    onClick: () => void;
    action: "primary" | "secondary";
  }>;
  args?: any;
}

function DefaultDialog(props: IDialogComponentProps) {
  if (!props.open) {
    return null;
  }

  const dialog = (
    <div className="slateEditorDialogBackdrop">
      <div className="slateEditorDialog">
        <div className="slateEditorDialogTitle">{props.title}</div>
        <div className="slateEditorDialogContent">{props.children}</div>
        <div className="slateEditorButtons">
          {props.buttons.map((v) => (
            <button key={v.action} onClick={v.onClick}>{v.label}</button>
          ))}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(dialog, document.body);
}

/**
 * This dialog provides a convenient error message to display and close
 * for when the file failed to load
 */
export class FileLoadErrorDialog extends React.PureComponent<IFileLoadErrorDialogProps> {
  constructor(props: IFileLoadErrorDialogProps) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }
  public onClose() {
    this.props.dismissCurrentLoadError();
  }
  /**
   * The render function
   */
  public render() {
    const Dialog = this.props.Dialog || DefaultDialog;
    return (
      <Dialog
        open={!!this.props.currentLoadError}
        onClose={this.onClose}
        title={this.props.i18nGenericError}
        buttons={
          [
            {
              label: this.props.i18nOk,
              onClick: this.props.dismissCurrentLoadError,
              action: "primary",
            }
          ]
        }
      >
        {this.props.currentLoadError}
      </Dialog>
    );
  }
}
