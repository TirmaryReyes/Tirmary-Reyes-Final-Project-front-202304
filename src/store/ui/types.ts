export interface UiStructure {
  isLoading: boolean;
  modal: ModalStructure;
}

export interface ModalStructure {
  message: string;
  isError: boolean;
  isVisible: boolean;
}
