import { useAppSelector } from "../../store";
import { ModalStyled } from "./ModalStyled";

const Modal = (): React.ReactElement => {
  const { modal } = useAppSelector((state) => state.ui);

  return (
    <ModalStyled>
      <div className={`modal modal${modal.isError ? "--error" : "--success"}`}>
        <img
          src={modal.isError ? "images/error-icon.svg" : "images/ok-icon.svg"}
          alt="feedback icon"
        />
        <span className="modal__message">{modal.message}</span>

        <button className="modal__button">Close</button>
      </div>
    </ModalStyled>
  );
};

export default Modal;
