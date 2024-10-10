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
import { SEO_FAQs } from "@/types/common.type";
import CommonHeading from "../CommonHeading/CommonHeading";

interface I_AccordionProps {
  accordiondata: SEO_FAQs[];
}

export default function SEOFaqs(props: I_AccordionProps) {
  const { accordiondata } = props;

  const [expanded, setExpanded] = React.useState<string>("");

  const handleChange = (panel: string) => () => {
    setExpanded(expanded === panel ? "" : panel);
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
                  expanded={expanded === `${item.id}`}
                  onChange={handleChange(`${item.id}`)}
                  key={index}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === `${item.id}` ? (
                        <AccordionMinusIcon />
                      ) : (
                        <AccordionPlusIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.answer}</Typography>
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
