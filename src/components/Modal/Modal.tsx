import { useAppDispatch, useAppSelector } from "../../store";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import { ModalStyled } from "./ModalStyled";

const Modal = (): React.ReactElement => {
  const { isError, message } = useAppSelector((state) => state.ui.modal);

  const dispatch = useAppDispatch();
  const handleOnClose = () => {
    dispatch(hideFeedbackActionCreator());
  };

  return (
    <ModalStyled aria-label="modal message">
      <div className={`modal modal${isError ? "--error" : "--success"}`}>
        <img
          src={isError ? "images/error-icon.svg" : "images/ok-icon.svg"}
          alt="feedback icon"
        />
        <span className="modal__message">{message}</span>

        <button className="modal__button" onClick={handleOnClose}>
          Close
        </button>
      </div>
    </ModalStyled>
  );
};

export default Modal;
