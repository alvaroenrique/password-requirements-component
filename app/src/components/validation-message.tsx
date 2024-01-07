import { Validation, ValidationConfig } from "@/types/props";
import ValidationIcon from "./validation-icon";

function ValidationMessage({
  validation,
  validationConfig,
}: {
  validation: Validation;
  validationConfig?: ValidationConfig;
}) {
  return (
    <div
      className={`flex items-center mb-3 ${
        validationConfig?.customClass || ""
      }`}
    >
      <ValidationIcon
        status={validation.status}
        correctIcon={validationConfig?.correctIcon}
        incorrectIcon={validationConfig?.incorrectIcon}
      />
      <p className="ml-3">{validation.text}</p>
    </div>
  );
}

export default ValidationMessage;
