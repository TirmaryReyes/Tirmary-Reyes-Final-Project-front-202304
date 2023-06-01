import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import LoginForm from "./LoginForm";

const expectedFirstLabelText = "Username";
const expectedSecondLabelText = "Password";
const expectedText = "Log in";
const actionOnClick = vi.fn();
const usernameInput = "admin";
const passwordInput = "admin";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Log in'", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const buttonText = screen.getByRole("button", { name: expectedText });
      expect(buttonText).toBeInTheDocument();
    });

    test("Then it should two inputs with the label 'Username' and 'Password'", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const firstLabelText = screen.getByLabelText(expectedFirstLabelText);
      const secondLabelText = screen.getByLabelText(expectedSecondLabelText);

      expect(firstLabelText).toBeInTheDocument();
      expect(secondLabelText).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the inputs are empty", () => {
    test("Then the button should be disabled", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );
      const buttonText = screen.getByRole("button", { name: expectedText });

      expect(buttonText).toBeDisabled();
    });
  });

  describe("When it is rendered and the fields are filled", () => {
    test("Then it should an enabled button", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );
      const userLabel = screen.getByLabelText(expectedFirstLabelText);
      const passwordLabel = screen.getByLabelText(expectedSecondLabelText);

      await userEvent.type(userLabel, usernameInput);
      await userEvent.type(passwordLabel, passwordInput);

      const buttonText = screen.getByRole("button", { name: expectedText });

      expect(buttonText).toBeEnabled();
    });
  });

  describe("When it is rendered and the username field is written with 'admin'", () => {
    test("The it should show the text 'admin' in the username field", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const userLabel = screen.getByLabelText(expectedFirstLabelText);

      await userEvent.type(userLabel, usernameInput);

      expect(userLabel).toHaveValue(usernameInput);
    });
  });

  describe("When it is rendered and the password field is written with 'admin'", () => {
    test("The it should show the text 'admin' in the password field", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const passwordLabel = screen.getByLabelText(expectedFirstLabelText);

      await userEvent.type(passwordLabel, passwordInput);

      expect(passwordLabel).toHaveValue(usernameInput);
    });
  });

  describe("When it is rendered and the credentials are correct and the login button is clicked", () => {
    test("Tehn it should call the actionOnClick fuction", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );
      const userLabel = screen.getByLabelText(expectedFirstLabelText);
      const passwordLabel = screen.getByLabelText(expectedSecondLabelText);

      await userEvent.type(userLabel, usernameInput);
      await userEvent.type(passwordLabel, passwordInput);

      const button = screen.getByRole("button", { name: expectedText });
      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
