/* eslint-disable react/no-array-index-key */
import { CommonFaqWrapper } from "@/styles/StyledComponents/CommonFaqWrapper";
import AccordionMinusIcon from "@/ui/Icons/AccordionMinusIcon";
import AccordionPlusIcon from "@/ui/Icons/AccordionPlusIcon";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CommonHeading from "../CommonHeading/CommonHeading";

interface accordionCartProps {
  titleMain: string;
  subTitle: string;
  panelName: string;
}
interface accordionProps {
  accordiondata: accordionCartProps[];
}

export default function CommonFaq({ accordiondata }: accordionProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <CommonFaqWrapper>
      <Box className="commonFaq_wrapper">
        <Container fixed>
          <Box className="wrapper_inner">
            <CommonHeading bigHeading="FAQs for Emory Dry Ice Services" />
            <Box className="comnMainAccordian">
              {accordiondata.map((item, index) => (
                <Accordion
                  expanded={expanded === `${item.panelName}`}
                  onChange={handleChange(`${item.panelName}`)}
                  key={index}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === item.panelName ? (
                        <AccordionMinusIcon />
                      ) : (
                        <AccordionPlusIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography>{item.titleMain}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.subTitle}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </CommonFaqWrapper>
  );
}
