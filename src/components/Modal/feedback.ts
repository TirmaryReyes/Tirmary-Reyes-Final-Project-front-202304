import { ModalStructure } from "../../store/ui/types";

export const addedModal: ModalStructure = {
  isError: false,
  message: "Plant added",
  isVisible: false,
};

export const editedModal: ModalStructure = {
  isError: false,
  message: "Plant edited",
  isVisible: false,
};

export const removedModal: ModalStructure = {
  isError: false,
  message: "Plant removed",
  isVisible: false,
};

export const notAddedModal: ModalStructure = {
  isError: true,
  message: "Plant could not be added",
  isVisible: false,
};

export const notEditModal: ModalStructure = {
  isError: true,
  message: "Plant could not be unedited",
  isVisible: false,
};

export const notRemovedModal: ModalStructure = {
  isError: true,
  message: "Plant could not be removed",
  isVisible: false,
};

export const wrongCredential: ModalStructure = {
  isError: true,
  message: "Invalid credentials, Please try again",
  isVisible: false,
};

export const listUnavailable: ModalStructure = {
  isError: true,
  message: "Can't get the list of plants",
  isVisible: false,
};
