import { useState } from "react";
import "./index.css";
import { Props, Validation } from "./types/props";
import ValidationMessage from "./components/validation-message";

function PasswordRequirements({
  titleConfig,
  inputConfig,
  validationConfig,
  customValidations,
}: Props) {
  const [inputValue, setInputValue] = useState("");
  const [validations, setValidations] = useState<Validation[]>([
    {
      text: "Has a number 0 - 9",
      regex: /\d/,
      status: false,
    },
    {
      text: "Has one or more of these special characters: !@#$%^&*",
      regex: /[!@#$%^&*]/,
      status: false,
    },
    {
      text: "Has an uppercase letter",
      regex: /[A-Z]/,
      status: false,
    },

    ...(customValidations || []),
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    setValidations(
      validations.map((validation) => ({
        ...validation,
        status: validation.regex.test(event.target.value),
      }))
    );
  };

  return (
    <div className="p-4">
      <h1
        className={`text-center text-3xl mb-5 ${
          titleConfig?.customClass || ""
        }`}
      >
        {titleConfig?.text || "Password Component"}
      </h1>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <input
          data-testid="main-input"
          type="text"
          placeholder={inputConfig?.placeholder || "Type your password"}
          className={`input input-bordered w-full max-w-xs mb-4 md:mr-8 ${
            inputConfig?.customClass || ""
          } ${
            validations.every((validation) => validation.status)
              ? "input-success"
              : "input-error"
          }`}
          value={inputValue}
          onChange={handleInputChange}
        />
        <div>
          {validations.map((validation) => (
            <ValidationMessage
              key={validation.regex.toString()}
              validation={validation}
              validationConfig={validationConfig}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PasswordRequirements;
