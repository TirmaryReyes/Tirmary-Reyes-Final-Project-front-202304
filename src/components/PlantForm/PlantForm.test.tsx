import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import PlantForm from "./PlantForm";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

const submitForm = vi.fn();

const plantFormLabels = [
  "Name",
  "URL image",
  "Type",
  "Size",
  "Environment",
  "Description",
];
const text = "test";

describe("Given a AddForm component", () => {
  plantFormLabels.forEach((expectedText) => {
    describe("When it was rendered", () => {
      test(`Then it should show a text field with the label '${expectedText}'`, () => {
        renderWithProviders(<PlantForm submitPlantForm={submitForm} />);
        const textField = screen.getByLabelText(expectedText);

        expect(textField).toBeInTheDocument();
      });
    });
  });

  describe("When it was rendered", () => {
    test("Then it should show a button with the text 'Create'", () => {
      const expectedText = "Create";

      renderWithProviders(<PlantForm submitPlantForm={submitForm} />);

      const textField = screen.getByRole("button", { name: expectedText });

      expect(textField).toBeInTheDocument();
    });
  });

  describe("When it's rendered but the inputs fields are empty", () => {
    test("Then it should show a disabled button with the text 'Create'", () => {
      const expectedText = "Create";

      renderWithProviders(<PlantForm submitPlantForm={submitForm} />);

      const createButton = screen.getByRole("button", { name: expectedText });

      expect(createButton).toBeDisabled();
    });
  });

  plantFormLabels.slice(6).forEach((expectedText) => {
    describe(`When it's rendered and the user writes the text '${text}' on the field '${expectedText[0]}'`, () => {
      test(`Then it should show the text '${text}' in the field`, async () => {
        renderWithProviders(<PlantForm submitPlantForm={submitForm} />);

        const textField = screen.getByLabelText(expectedText);

        await userEvent.type(textField, text);

        expect(textField).toHaveValue(text);
      });
    });
  });

  describe("When it's rendered and all the inputs fields are filled in", () => {
    test("Then it should show an enabled button with the text 'Create'", async () => {
      renderWithProviders(<PlantForm submitPlantForm={submitForm} />);

      const nameImputField = screen.getByLabelText(plantFormLabels[0]);
      const urlImageImputField = screen.getByLabelText(plantFormLabels[1]);
      const typeImputField = screen.getByLabelText(plantFormLabels[2]);
      const sizeImputField = screen.getByLabelText(plantFormLabels[3]);
      const environmentImputField = screen.getByLabelText(plantFormLabels[4]);
      const descriptionImputField = screen.getByLabelText(plantFormLabels[5]);

      const nameTextField = "Ficus";
      const urlImageTextField = "https://i.ibb.co/R6yy3nN/ficus.com";
      const typeTextField = "Ficus";
      const sizeTextField = "large";
      const environmentTextField = "Indoor";
      const descriptionTextField =
        "Popular indoor plant with glossy leaves that prefers bright, indirect";

      await userEvent.type(nameImputField, nameTextField);
      await userEvent.type(urlImageImputField, urlImageTextField);
      await userEvent.type(typeImputField, typeTextField);
      await userEvent.type(sizeImputField, sizeTextField);
      await userEvent.selectOptions(
        environmentImputField,
        environmentTextField
      );
      await userEvent.type(descriptionImputField, descriptionTextField);

      const createButton = screen.getByRole("button", { name: "Create" });
      expect(createButton).toBeEnabled();
    });
  });
});
