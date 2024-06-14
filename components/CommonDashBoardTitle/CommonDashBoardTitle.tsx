/* eslint-disable react/jsx-no-useless-fragment */
import { CommonDashBoardTitleWrap } from "@/styles/StyledComponents/CommonDashBoardTitleWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Typography from "@mui/material/Typography";

interface titleProps {
  title: string;
  isButton?: boolean;
  btnText?: string;
  onClick?: any;
}

export default function CommonDashBoardTitle({
  title,
  isButton,
  btnText,
  onClick
}: titleProps) {
  return (
    <CommonDashBoardTitleWrap>
      <Typography variant="h2" className={isButton ? "" : "fullWdt"}>
        {title}
      </Typography>
      {isButton && (
        <CustomButtonPrimary
          variant="contained"
          color="secondary"
          onClick={onClick}
        >
          <>{btnText}</>
        </CustomButtonPrimary>
      )}
    </CommonDashBoardTitleWrap>
  );
}
