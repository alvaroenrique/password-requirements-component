import CorrectIcon from "./icons/correct";
import IncorrectIcon from "./icons/incorrect";

interface Props {
  status: boolean;
  correctIcon?: React.ReactNode;
  incorrectIcon?: React.ReactNode;
}

function ValidationIcon({ status, correctIcon, incorrectIcon }: Props) {
  if (status) {
    return correctIcon || <CorrectIcon width={50} height={50} />;
  }
  return incorrectIcon || <IncorrectIcon width={50} height={50} />;
}

export default ValidationIcon;
