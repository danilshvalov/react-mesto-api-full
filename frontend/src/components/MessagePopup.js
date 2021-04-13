import React from "react";
import Popup from "./Popup";
import { messagePopupClassNames } from "../utils/constants";
import { addThemeAttrs } from "../utils/utils";
import ThemeContext from "../contexts/ThemeContext";

function MessagePopup({ message, onClose, isOpen }) {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classes
  const messageBoxClassName = addThemeAttrs({
    theme: currentTheme,
    classList: messagePopupClassNames.container,
  });

  return (
    <Popup name={messagePopupClassNames.name} onClose={onClose} isOpen={isOpen}>
      <div className={messageBoxClassName}>
        <span className={messagePopupClassNames.textContainer}>{message}</span>
      </div>
    </Popup>
  );
}

export default MessagePopup;
