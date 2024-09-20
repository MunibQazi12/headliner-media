import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButtonWrapper = styled(Button)`
  display: flex;
  padding: 16px 44px;
  border-radius: 10px;
  min-width: 194px;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  font-weight: 700;
  /* transition: all ease-in-out 4s; */
  @media (max-width: 1499px) {
    font-size: 18px;
  }
  @media (max-width: 1399px) {
    font-size: 16px;
  }
  &:hover {
    /* transition: all ease-in-out 4s; */
  }

  &.Mui-disabled {
    background-color: ${primaryColors?.disabledBg};
    border: 1px solid ${primaryColors?.disabledBg};

    p {
      color: ${primaryColors?.white};
    }
    img {
      filter: contrast(0);
    }
  }

  &.smallButton {
    padding: 4px 16px;
    width: auto;
  }

  &.MuiButton-outlinedInfo {
    p {
      color: ${primaryColors?.black};
    }
  }

  p {
    font-size: 16px;
    font-weight: 700;
    color: ${primaryColors?.white};
  }

  span {
    color: ${primaryColors?.white};
    font-weight: 700;
    font-size: 21px;
    @media (max-width: 1399px) {
      font-size: 18px;
    }
    div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

interface CustomButtonprops extends ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  buttonType?: "small" | "large";
}

const CustomButtonPrimary = ({
  children,
  className,
  buttonType,
  ...others
}: CustomButtonprops) => {
  return (
    <CustomButtonWrapper
      className={`${buttonType === "small" && "smallButton"} ${
        className || ""
      }`}
      {...others}
    >
      {children}
    </CustomButtonWrapper>
  );
};

export default CustomButtonPrimary;
