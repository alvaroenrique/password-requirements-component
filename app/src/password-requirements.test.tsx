import { render, screen, fireEvent } from "@testing-library/react";

import PasswordRequirements from "./password-requirements";

describe("App", () => {
  beforeEach(() => {
    render(
      <PasswordRequirements
        titleConfig={{
          text: "Custom title",
        }}
        inputConfig={{
          placeholder: "Custom placeholder",
        }}
        customValidations={[
          {
            text: "Has NO consecutive letters *** (Incorrect to have 3 or more consecutive letters)",
            regex: /^(?!.*(.)\1\1).*/,
            status: false,
          },
        ]}
      />
    );
  });

  test("should render the custom title in a H1 tag", () => {
    const title = screen.getByText(/Custom title/i);
    expect(title).toBeDefined();
    expect(title.tagName).toBe("H1");
  });

  test("should render the default input placeholder", () => {
    const input = screen.getByPlaceholderText(/Custom placeholder/i);
    expect(input).toBeDefined();
  });

  // Testing validations

  test("should render the Correct icon if the user inputs a number from 0 to 9", () => {
    const input = screen.getByTestId("main-input");
    fireEvent.change(input, { target: { value: "contraseña1" } });

    const validationMessage = screen.getByText("Has a number 0 - 9");
    const correctIcon = validationMessage.previousElementSibling;

    expect(correctIcon?.getAttribute("data-testid")).toBe("correct-icon");
  });

  test("should render the Correct icon if the user inputs one or more of these special characters: !@#$%^&*", () => {
    const input = screen.getByTestId("main-input");
    fireEvent.change(input, { target: { value: "contraseña1!" } });

    const validationMessage = screen.getByText(
      "Has one or more of these special characters: !@#$%^&*"
    );
    const correctIcon = validationMessage.previousElementSibling;

    expect(correctIcon?.getAttribute("data-testid")).toBe("correct-icon");
  });

  test("should render the Correct icon if the user inputs an uppercase letter", () => {
    const input = screen.getByTestId("main-input");
    fireEvent.change(input, { target: { value: "contraseña1A" } });

    const validationMessage = screen.getByText("Has an uppercase letter");
    const correctIcon = validationMessage.previousElementSibling;

    expect(correctIcon?.getAttribute("data-testid")).toBe("correct-icon");
  });

  // Testing custom validations

  test("should render the custom validation message", () => {
    const validationMessage = screen.getByText(/Has NO consecutive letters/i);
    expect(validationMessage).toBeDefined();
  });

  test("should render the Incorrect icon if the user inputs 3 or more consecutive letters", () => {
    const input = screen.getByTestId("main-input");
    fireEvent.change(input, { target: { value: "contraseña1AAA" } });

    const validationMessage = screen.getByText(/Has NO consecutive letters/i);
    const incorrectIcon = validationMessage.previousElementSibling;

    expect(incorrectIcon?.getAttribute("data-testid")).toBe("incorrect-icon");
  });
});
