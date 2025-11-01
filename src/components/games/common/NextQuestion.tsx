import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface NextQuestionProps {
  handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function NextQuestion({ handleNext }: Readonly<NextQuestionProps>) {
  return (
    <Tooltip title="Next">
      <Button variant="outlined" color="secondary" onClick={handleNext}>
        <ArrowForwardIcon />
      </Button>
    </Tooltip>
  );
}

export default NextQuestion;
