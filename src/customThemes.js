import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

export const PageTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "35px",
  lineHeight: "133.4%",
  color: "#0A194E",
  textAlign: { xs: "center" },
});

export const SubTitle = styled(Typography)({
  fontSize: "22px",
  color: "#A2BCDC",
  fontWeight: 700,
  lineHeight: "33px",
  marginBottom: "10px",
});

export const BoxContent = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  border: "2px solid #CEDDF2",
  width: "100%",
  height: {
    sm: "95px",
    xl: "149px",
  },
  background: "#fff",
});

export const CustomSpan = styled(Typography)({
  fontSize: "35px",
  color: "custom.main",
  fontWeight: 700,
});

export const CustomButton = styled(Button)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  //   margin: "56px auto 42px",
  padding: "0px",
  width: 602,
  height: { xs: "42px", lg: "55px" },
  background: "#2776EA",
  fontSize: { xs: "13px", lg: "20px" },
  fontWeight: "600",
  lineHeight: "26px",
  letterSpacing: "0.46px",
  textTransform: "uppercase",
});

export const MainTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: { xs: "20px", lg: "35px" },
  textAlign: "center",
  color: "#0A194E",
  margin: "31px 0 21px",
});
