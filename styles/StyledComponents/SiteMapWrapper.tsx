import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const SiteMapWrapper = styled(Box)`

    h2 {
     display : flex;
     justify-content : center;
    }

    .titletxt {
        font-weight: 700;
        font-size: 36px;
        color: ${primaryColors.primary};
        margin-bottom: 20px;
    }

    .headingSection {
        display :flex;
        justify-content : space-between;
        flex-wrap : wrap;
        margin : 80px auto;
        max-width : 1560px;
    }
    .linkListElements {
        margin-bottom : 40px;
    }
    .customLinks {
        color: ${primaryColors.primary};
        font-weight : 600;
        margin-bottom: 10px;
    }
   
`;
