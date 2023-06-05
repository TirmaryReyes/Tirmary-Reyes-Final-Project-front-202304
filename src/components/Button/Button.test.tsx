import { screen } from "@testing-library/react";
import Button from "./Button";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";

describe("Given a Button component", () => {
  describe("When it is rendered with the text 'click'", () => {
    test("Then the button should show the text 'click", () => {
      const expectedText = "click";

      renderWithProviders(wrapWithRouter(<Button text={expectedText} />));

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
