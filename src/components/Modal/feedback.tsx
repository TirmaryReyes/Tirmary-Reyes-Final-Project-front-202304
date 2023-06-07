import { ModalProps } from "./Modal";

export const addedModal: ModalProps = {
  isError: false,
  image: "src/images/ok-icon.svg",
  text: "Plant added",
};

export const editedModal: ModalProps = {
  isError: false,
  image: "src/images/ok-icon.svg",
  text: "Plant edited",
};

export const removedModal: ModalProps = {
  isError: false,
  image: "src/images/ok-icon.svg",
  text: "Plant removed",
};

export const notAddedModal: ModalProps = {
  isError: true,
  image: "src/images/error-icon.svg",
  text: "Plant could not be added",
};

export const notEditModal: ModalProps = {
  isError: true,
  image: "src/images/error-icon.svg",
  text: "Plant could not be unedited",
};

export const notremovedModal: ModalProps = {
  isError: true,
  image: "src/images/error-icon.svg",
  text: "Plant could not be removed",
};

export const wrongCredential: ModalProps = {
  isError: true,
  image: "src/images/error-icon.svg",
  text: "Invalid credentials, Please try again",
};
