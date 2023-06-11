import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import PlantForm from "./PlantForm";

const plantFormLabels = [
  "Name",
  "URL image",
  "Type",
  "Size",
  "Has Flowers",
  "Environment",
  "Description",
];

describe("Given a AddForm component", () => {
  plantFormLabels.forEach((expectedText) => {
    describe("When it was rendered", () => {
      test(`Then it should show a text field with the label '${expectedText}'`, () => {
        renderWithProviders(<PlantForm />);
        const textField = screen.getByLabelText(expectedText);

        expect(textField).toBeInTheDocument();
      });
    });
  });
});
