export interface Props {
  titleConfig?: TitleConfig;
  inputConfig?: InputConfig;
  validationConfig?: ValidationConfig;
  customValidations?: Validation[];
}

export interface Validation {
  text: string;
  regex: RegExp;
  status: boolean;
}

interface TitleConfig {
  text?: string;
  customClass?: string;
}

interface InputConfig {
  placeholder?: string;
  customClass?: string;
}

export interface ValidationConfig {
  customClass?: string;
  correctIcon?: React.ReactNode;
  incorrectIcon?: React.ReactNode;
}
