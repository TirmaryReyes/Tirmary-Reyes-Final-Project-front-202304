import { ModalStructure } from "../../store/ui/types";
import { ModalStyled } from "./ModalStyled";

const Modal = ({ message, isError }: ModalStructure): React.ReactElement => {
  return (
    <ModalStyled>
      <div className={`modal modal${isError ? "--error" : "--success"}`}>
        <img
          src={isError ? "images/error-icon.svg" : "images/ok-icon.svg"}
          alt="feedback icon"
        />
        <span className="modal__message">{message}</span>

        <button className="modal__button">Close</button>
      </div>
    </ModalStyled>
  );
};

export default Modal;
