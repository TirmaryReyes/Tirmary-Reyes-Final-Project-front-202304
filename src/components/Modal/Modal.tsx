interface ModalProps {
  text: string;
  image: string;
  isError: boolean;
}

const Modal = ({ text, image, isError }: ModalProps): React.ReactElement => {
  return (
    <article className="modal" aria-label="feedback modal">
      <img src={image} alt="feedback icon" />
      <div className={`modal${isError ? "--error" : ""}`}></div>
      <span>{text}</span>
      <button className="modal__feedback-error-closed">Close</button>
    </article>
  );
};

export default Modal;
