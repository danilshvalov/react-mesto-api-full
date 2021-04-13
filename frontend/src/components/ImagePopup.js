import Popup from "./Popup";
import { imagePopupClassNames } from "../utils/constants";

function ImagePopup({ name, link, isOpen, onClose }) {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <div className={imagePopupClassNames.picture}>
        <img className={imagePopupClassNames.image} src={link} alt={name} />
        <p className={imagePopupClassNames.description}>{name}</p>
      </div>
    </Popup>
  );
}

export default ImagePopup;
