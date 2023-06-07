import { ModalStructure } from "../../store/ui/types";

export const addedModal: ModalStructure = {
  isError: false,
  message: "Plant added",
};

export const editedModal: ModalStructure = {
  isError: false,
  message: "Plant edited",
};

export const removedModal: ModalStructure = {
  isError: false,
  message: "Plant removed",
};

export const notAddedModal: ModalStructure = {
  isError: true,
  message: "Plant could not be added",
};

export const notEditModal: ModalStructure = {
  isError: true,
  message: "Plant could not be unedited",
};

export const notremovedModal: ModalStructure = {
  isError: true,
  message: "Plant could not be removed",
};

export const wrongCredential: ModalStructure = {
  isError: true,
  message: "Invalid credentials, Please try again",
};
