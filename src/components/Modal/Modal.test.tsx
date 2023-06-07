import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import { store } from "../../store";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When it is rendered ", () => {
    test("Then it should show a button with the text 'Close' which when clicked should set the ui store message to empty", async () => {
      const buttonText = "Close";

      renderWithProviders(<Modal />, {
        ui: {
          isLoading: true,
          modal: { isError: false, message: "", isVisible: false },
        },
      });

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();

      await userEvent.click(button);

      const testStore = store.getState();

      expect(testStore.ui.modal.message).toBeFalsy();
    });

    test("Then it should a feedback Modal", () => {
      const expectedText = "modal message";

      renderWithProviders(<Modal />);

      const modal = screen.getByLabelText(expectedText);

      expect(modal).toBeInTheDocument();
    });
  });
});

describe("When it is rendered of modal is negative feedback", () => {
  test("Then it should show the message 'Invalid credentials, Please try again'", async () => {
    const expectedText = "Invalid credentials, Please try again";
    renderWithProviders(<Modal />, {
      ui: {
        isLoading: true,
        modal: {
          isError: true,
          message: "Invalid credentials, Please try again",
          isVisible: false,
        },
      },
    });

    const feedback = screen.getByText(expectedText);

    expect(feedback).toBeInTheDocument();
  });
});
