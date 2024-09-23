import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const MoreResourcesStyled = styled(Box)`
 
  max-width: 1850px;
  padding: 0 30px;
    
  @media (max-width: 1499px) {
    padding: 80px 0 40px;
  }
  @media (max-width: 1399px) {
    padding: 60px 0 30px;
  }
  @media (max-width: 1199px) {
    padding: 30px 0;
  }
  @media (max-width: 599px) {
    padding: 0 0 30px;
  }

  .container {
   
  .mainHeading {
   display : flex;
    justify-content : center;
    align-items : center;
    position: relative;
    font-size: 3vw;
    color: ${primaryColors.primary};
    margin-bottom: 30px;
    margin-top: 10px;

    @media (max-width: 899px) {
      font-size: 32px;
      margin-bottom: 16px;
    }

    @media (max-width: 599px) {
      font-size: 28px;
    }
}
    .cardContainer {
        display : flex;
        justify-content : space-between;
        margin-top : 3.5vw;

        
      }
        .btnContainer {
        margin :3.5vw 0px;
        display : flex;
        justify-content : center;
        align-items : center;

        .btn {
            color: #fff;
            background-color: ${primaryColors.primary};
            border-radius: .5vw;
            padding: .9vw 3.4vw;
            font-family: Inter, sans-serif;
            font-size: 1.3vw;
            font-weight: 600;
            line-height: 1.4;
}
       }
    }

      
  }
 
   
  }
`;
