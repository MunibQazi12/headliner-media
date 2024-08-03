import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const WrapperStyle = styled(Box)`
 
  .header-button {
    padding: 14px 42px;
    min-width: auto;
    margin-right: 15px;
  }
  &.active {
    overflow-y: hidden;
    height: 100vh;
  }
  .body_content {
    min-height: calc(100vh - 750px);
  }
  strong,
  b {
    font-weight: 700;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: #00a5d0;
    display: inline-block;
    text-decoration: none;
  }

  a:hover {
    /* color: #00a5d0; */
  }

  a:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }
  h1 {
    text-transform: capitalize;
  }
  p:last-child {
    margin-bottom: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    padding: 0;
    position: relative;
    list-style: none;
  }

  button {
    .MuiTouchRipple-root {
      display: none;
    }
  }

  a,
  button {
    transition: 0.3s all ease-in-out 0s;
    -webkit-transition: 0.3s all ease-in-out 0s;
    -moz-transition: 0.3s all ease-in-out 0s;
  }

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="password"],
  input[type="search"],
  input[type="number"],
  input[type="tel"],
  input[type="range"],
  input[type="date"],
  input[type="month"],
  input[type="week"],
  input[type="time"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="color"],
  textarea {
    padding: 5px 10px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: 2px solid #656664;
    border-radius: 0;
  }

  select {
    background: url(/assets/images/down-arrow.svg) right 10px center no-repeat;
    background-size: 20px;
  }

  select[multiple] {
    background: transparent;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: pink;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: pink;
  }

  :-ms-input-placeholder {
    /* IE 10+ */
    color: pink;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: pink;
  }

  /* button, */
  input[type="button"],
  input[type="submit"] {
    text-align: center;
    padding: 8px 20px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    color: #fff;
    background: #51bff0;
    border: 1px solid #51bff0;
    transition: 0.3s all ease-in-out 0s;
    -webkit-transition: 0.3s all ease-in-out 0s;
    -moz-transition: 0.3s all ease-in-out 0s;
    cursor: pointer;
    display: inline-block;
    border-radius: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  input[type="button"]:hover,
  input[type="submit"]:hover {
    background-color: #51bff0;
    color: #ffffff;
    outline: none;
    text-decoration: none;
  }

  .MuiButtonBase-root {
    text-transform: none !important;
  }

  .cmn_gap {
    padding: 50px 0;
  }

  .cmn_gap_top {
    padding-top: 0 !important;
  }

  .cmn_gap_btm {
    padding-bottom: 0 !important;
  }

  .cmn_head {
    margin-bottom: 50px;
    text-align: center;

    h2 {
      font-size: 40px;
      text-transform: none;
      color: #202020;
      @media (max-width: 1200px) {
      }
    }
  }

  // ====================================================

  // contact input
  .form_group {
    margin-bottom: 19px;
    label {
      display: block;
      margin-bottom: 11px;
    }
    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="password"],
    input[type="search"],
    input[type="number"],
    input[type="tel"],
    input[type="range"],
    input[type="date"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="color"],
    textarea {
      width: 100%;
      background: var(--white);
      border: 1px solid var(--colorEBEBEB);
      border-radius: 10px;
      padding: 21.5px 28px;
      font-size: 16px;

      &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: var(--color748992);
        opacity: 1; /* Firefox */
      }

      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: var(--color748992);
      }

      &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: var(--color748992);
      }
    }
    textarea {
      resize: none;
      height: 140px !important;
      font-family: "Work Sans";
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
    background: #f9f9f9;
    border-radius: 44px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    background: #329691;
    border-radius: 44px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #329691;
  }

  // &::-webkit-scrollbar:vertical {
  //   display: none;
  // }

  .slick-slider {
    width: 100%;
  }

  // validation message
  .MuiFormHelperText-root {
    font-size: 16px !important;
    color: var(--colorff0000) !important;
  }

  .errSpan {
    color: red;
  }

  // ========================================
  //   .global_slick {
  //     .slick-dots {
  //       text-align: start;
  //       bottom: -65px;
  //       li {
  //         width: 14px;
  //         height: 14px;
  //         button {
  //           border: 1px solid rgba(255, 255, 255, 0.5);
  //           width: 10px;
  //           height: 10px;
  //           line-height: 10px;
  //           background: transparent;
  //           border-radius: 100%;
  //           margin: auto;

  //           &::before {
  //             font-size: 0;
  //             line-height: 10px;

  //             width: auto;
  //             height: auto;
  //             content: "";
  //             text-align: center;
  //             border: 0;
  //             opacity: 1;
  //             background: transparent;
  //             border-radius: 100%;
  //           }
  //         }
  //         &.slick-active {
  //           button {
  //             opacity: 1;
  //             background: linear-gradient(
  //               158.45deg,
  //               #0bd3d3 17.08%,
  //               #ab2aa9 64.21%,
  //               #f890e7 97.73%
  //             );
  //             &::before {
  //               // opacity: 1;
  //               // background: linear-gradient(
  //               //   158.45deg,
  //               //   #0bd3d3 17.08%,
  //               //   #ab2aa9 64.21%,
  //               //   #f890e7 97.73%
  //               // );
  //               // outline: 1px solid rgba(11, 211, 211, 1);
  //               // outline-offset: 3px;
  //               width: auto;
  //               height: auto;
  //               border: 1px solid rgba(11, 211, 211, 1);
  //               border-radius: 100%;
  //               content: "";
  //               top: -4px;
  //               left: -3px;
  //               right: -3px;
  //               bottom: -2px;
  //             }
  //           }
  //         }
  //       }
  //     }

  //     .slick-prev {
  //       background-image: url("../public/assets/images/prev.svg");
  //       background-position: center;
  //       background-repeat: no-repeat;
  //       background-size: 30px;
  //       left: -40px;
  //       width: 30px;
  //       height: 30px;
  //       &::before {
  //         content: "";
  //       }
  //       &:hover {
  //         background: url("../public/assets/images/prev2.svg") center no-repeat
  //           transparent;

  //         background-size: 30px;
  //       }
  //       &:focus {
  //         background: url("../public/assets/images/prev2.svg") center no-repeat
  //           transparent;

  //         background-size: 30px;
  //       }
  //     }
  //     .slick-next {
  //       background-image: url("../public/assets/images/next.svg");
  //       background-position: center;
  //       background-repeat: no-repeat;
  //       background-size: 30px;
  //       right: -40px;
  //       width: 30px;
  //       height: 30px;
  //       &::before {
  //         content: "";
  //       }
  //       &:hover {
  //         background: url("../public/assets/images/next2.svg") center no-repeat
  //           transparent;

  //         background-size: 30px;
  //       }
  //       &:focus {
  //         background: url("../public/assets/images/next2.svg") center no-repeat
  //           transparent;

  //         background-size: 30px;
  //       }
  //     }
  //   }

  // ==============================
  .MuiContainer-root {
    @media (min-width: 1200px) {
      max-width: 1240px;
      padding: 0 50px;
    }
    @media (min-width: 1400px) {
      max-width: 1370px;
      padding: 0 50px;
    }
    @media (min-width: 1600px) {
      max-width: 1570px;
      padding: 0 50px;
    }
    &.cus_container {
      @media (min-width: 1200px) {
        max-width: 1310px;
        padding: 0 30px;
      }
      @media (min-width: 1400px) {
        max-width: 1850px;
        padding: 0 30px;
      }
    }
  }
  //   ======================

  .pelletsDryIce {
    .wrapperText {
      ul {
        justify-content: flex-start !important;
      }
    }
  }
  .agricultureMain_wrapper {
    .wrapper_whyChose {
      padding-top: 100px;
      @media (max-width: 1499px) {
        padding-top: 80px;
      }
      @media (max-width: 1399px) {
        padding-top: 60px;
      }
      @media (max-width: 899px) {
        padding-top: 40px;
      }
      @media (max-width: 599px) {
        padding-top: 30px;
      }
    }
  }

  .dashBoardOuter {
    position: relative;
    padding: 100px 0;
    @media (max-width: 1499px) {
      padding: 60px 0;
    }
    @media (max-width: 1199px) {
      padding: 40px 0;
    }
    @media (max-width: 599px) {
      padding: 20px 0 30px;
    }
    .dashboardInner {
      position: relative;
      display: flex;
      .innerSiderBar {
        width: 453px;
        padding-right: 48px;

        @media (max-width: 1799px) {
          width: 380px;
          padding-right: 20px;
        }
        @media (max-width: 1599px) {
          width: 320px;
        }
        @media (max-width: 1499px) {
          width: 280px;
        }
        @media (max-width: 1299px) {
          width: 240px;
        }
        @media (max-width: 1199px) {
          width: 280px;
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          z-index: 999;
          background: ${primaryColors.white};
          padding: 50px 40px 16px 16px;
          transform: translateX(-100%);
          transition: 0.3s ease-in-out;
          &.active {
            transform: inherit;
            transition: 0.3s ease-in-out;
          }
        }
        .closeBtn {
          position: absolute;
          right: 10px;
          top: 10px;
          background: ${primaryColors.secondary};
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: auto;
          display: none;

          @media (max-width: 1199px) {
            display: block;
          }
          svg {
            path {
              fill: ${primaryColors.white};
            }
          }
        }
      }
      .mainContentRight {
        width: calc(100% - 453px);
        padding-left: 48px;
        border-left: 1px solid ${primaryColors.black};

        @media (max-width: 1799px) {
          width: calc(100% - 380px);
          padding-left: 20px;
        }
        @media (max-width: 1599px) {
          width: calc(100% - 320px);
        }
        @media (max-width: 1499px) {
          width: calc(100% - 280px);
        }
        @media (max-width: 1299px) {
          width: calc(100% - 240px);
        }

        @media (max-width: 1199px) {
          width: 100%;
          padding-left: 0;
          border: 0;
        }
      }
    }
  }
  .overlayDashboard {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9;
    display: none;
    &.active {
      display: block;
    }
  }

  .seoMainPage {
    .whyDry_iceSec {
      padding-top: 40px;
      @media (max-width: 599px) {
        padding-top: 20px;
      }
    }
  }
  .seoFaq {
    position: relative;
    .wrapper_mainLast {
      display: none;
    }
    .allTestimonialCard {
      padding-bottom: 100px;
      @media (max-width: 1399px) {
        padding-bottom: 80px;
      }
      @media (max-width: 1199px) {
        padding-bottom: 60px;
      }
      @media (max-width: 899px) {
        padding-bottom: 40px;
      }
      @media (max-width: 599px) {
        padding-bottom: 30px;
      }
    }
    .commonFaq_wrapper {
      max-width: 1475px;
      margin: 40px auto 0;
      @media (max-width: 1499px) {
        max-width: 1280px;
      }
      @media (max-width: 1399px) {
        max-width: 1080px;
      }
      @media (max-width: 599px) {
        margin-top: 20px;
      }
      .bigHeading {
        display: none;
      }
    }
  }
  .listSocialShare {
    position: relative;
    padding-bottom: 100px;
    @media (max-width: 1399px) {
      padding-bottom: 60px;
    }
    @media (max-width: 899px) {
      padding-bottom: 40px;
    }
    @media (max-width: 599px) {
      padding-bottom: 30px;
    }
   
    ul {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 1199px) {
        flex-wrap: wrap;
        justify-content: center;
      }
      li {
        width: auto;
        padding: 0 5px;

        @media (max-width: 1199px) {
          padding: 5px;
        }

        @media (max-width: 479px) {
          width: 50%;
        }
        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 34px;
          background: ${primaryColors.secondary};
          color: ${primaryColors.white};
          font-size: 21px;
          font-weight: 700;
          border-radius: 10px;

          @media (max-width: 1199px) {
            padding: 10px 20px;
            font-size: 18px;
          }
          @media (max-width: 479px) {
            width: 100%;
          }
          &.shareBtn {
            background: #00af50;
          }
          &.printrStBtn {
            background: #fe0000;
          }
          &.linkedInBtn {
            background: #0071c1;
          }
          &.twitterBtn {
            background: #000;
          }
          svg {
            padding-right: 8px;
            border-right: 1px solid ${primaryColors.white};
            width: 24px;
            margin-right: 8px;
          }
        }
      }
    }
  }
`;
