import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const BoxTitle = styled(Typography)({
  fontSize: {
    sm: "14px",
    xl: "22px",
  },
  color: "#A2BCDC",
  fontWeight: 700,
  lineHeight: "33px",
  marginBottom: {
    sm: "0",
    lg: "10px",
  },
});
export const ResponsiveBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  border: "2px solid #CEDDF2",
  width: {
    sm: "140px",
    xl: "322px",
  },
  height: {
    sm: "95px",
    xl: "149px",
  },
  background: "#fff",
});
