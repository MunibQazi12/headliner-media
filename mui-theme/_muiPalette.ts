/* eslint-disable mui-path-imports/mui-path-imports */
//  MUI pallete colors will be listed here

import { PaletteMode, PaletteOptions } from "@mui/material";

export const primaryColors = {
  primary: "#012060",
  secondary: "#01B0F1",
  secondaryBorder: "#F380A5",
  info: "#7CD1D2",
  infoBorder: "#67C1C2",
  disabledBg: "#DBE0E8",
  textDisabled: "#8F98A8",
  errorMain: "#EB4444",
  errorLight: "#FFECF2",
  white: "#fff",
  black: "#000",
  bodyColor: "#F4F6F8",
  mainFontColor: "#848484",
  textPrimaryColor: "#070707",
  borderprimary: "#DBE0E8",
  border_primary: "#DBE0E8",
  warning_color: "#FFEFD7",
  success_color: "#D4FEFF",
  text_success: "#3C8183",
  warning_text: "#6F4F1F",
  deepGreen: "#3c8183",
  lightGreen: "#D4FEFF",
  danger_text: "#9B3858",
  warningMain: "rgba(255, 167, 33, 1)",
  pendingColor: "#FFEFD7",
  pendingTextColor: "#6F4F1F",
  textDanger: "#9B3858",
  dangerColor: "#FFECF2",

  // borderprimary:"#DBE0E8",
  chipErrorBg: "#FFECF2",
  chipErrorText: "#9B3858",
  cardShadow: "#0707070F",
  tableshadow: "rgba(7, 7, 7, 0.06)",
  secondaryFont: "#4D4E4E",
  tertiaryFont: "#585858",
  color060606: "#060606",
  colorF6EFF8: "#F6EFF8",
  colorfdf8ff: "#fdf8ff",
  color2F3240: "#2F3240",
  color00AF50: "#00AF50",
  colorFE0000: "#FE0000",
  colorFFC000: "#FFC000",
  color365722: "#365722",
  color92D051: "#92D051",
  colorED7D31: "#ED7D31",
  colorC00000: "#C00000",
  color0071C1: "#0071C1",
  color70AD46: "#70AD46",
  color283653: "#283653",
  colorE4E4E4: "#E4E4E4",
  colorA8E7FF: "#A8E7FF",
  colorDDEBF8: "#DDEBF8",
  color3074F1: "#3074F1",
  color08204F: "#08204F",
  color62b4e4: "#61b4e5"
};

export const pallete = (mode: PaletteMode): PaletteOptions => {
  return {
    mode,
    background: {
      default: mode === "light" ? "#f5f8fa" : "#000",
      paper: mode === "light" ? "#fff" : "#000"
    },
    //global
    primary: {
      main: primaryColors.primary,
      dark: primaryColors.secondary
    },
    secondary: {
      main: primaryColors.secondary
    },
    info: {
      main: primaryColors.info
    },
    error: {
      main: primaryColors.errorMain
    },
    warning: {
      main: primaryColors.warningMain
    },

    text: {
      primary: primaryColors.disabledBg
    },
    common: {
      black: "#000",
      white: "#fff"
    }
  };
};
