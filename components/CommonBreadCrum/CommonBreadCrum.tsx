import { CommonBreadCrumWrap } from "@/styles/StyledComponents/CommonBreadCrumWrap";
import ArrowTxtIcon from "@/ui/Icons/ArrowTxtIcon";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface breadProps {
  pageName: string;
  ifSumpage?: string | boolean;
  sumPageLink?: string;
}

export default function CommonBreadCrum({
  pageName,
  ifSumpage,
  sumPageLink
}: breadProps) {
  return (
    <CommonBreadCrumWrap>
      <Box className="wrapper_mainBreadcrum">
        <Container fixed className="cus_container">
          <Box className="wrapperText">
            <List disablePadding>
              <ListItem disablePadding>
                <Link href="/">Home</Link>
                <i>
                  <ArrowTxtIcon />
                </i>
              </ListItem>
              {ifSumpage && (
                <ListItem disablePadding>
                  <Link href={`${sumPageLink}`}>{ifSumpage}</Link>
                  <i>
                    <ArrowTxtIcon />
                  </i>
                </ListItem>
              )}
              <ListItem disablePadding>
                <Typography variant="body1">{pageName}</Typography>
              </ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </CommonBreadCrumWrap>
  );
}
