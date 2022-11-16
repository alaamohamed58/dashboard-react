import { Stack, Typography, Box } from "@mui/material";
import { BoxContent, SubTitle } from "../../customThemes";
const contentStyle = {
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
};

const h3Style = {
  fontSize: {
    xs: "16px",
    xl: "22px",
  },
  color: "#A2BCDC",
  fontWeight: 700,
  lineHeight: "33px",
  marginBottom: {
    sm: "0",
    lg: "10px",
  },
};

const spanStyle = {
  fontSize: {
    xs: "18px",
    xl: "35px",
  },
  color: "#0A194E",
  fontWeight: 700,
};
const BillsCategory = () => {
  return (
    <Stack
      sx={{
        flexDirection: { xs: "columns", lg: "row" },
        justifyContent: "center",
        gap: { xs: "10px", lg: "50px" },
        marginBottom: "55px",
        marginTop: "40px",
      }}
    >
      <Box sx={contentStyle}>
        <SubTitle component="h3">Expected Bill</SubTitle>

        <Typography component="span" sx={spanStyle}>
          $17.000
        </Typography>
      </Box>
      <Box sx={contentStyle}>
        <SubTitle component="h3" sx={h3Style}>
          Next Payment
        </SubTitle>

        <Typography component="span" sx={spanStyle}>
          05/07/2022
        </Typography>
      </Box>
      <Box sx={contentStyle}>
        <SubTitle component="h3" sx={h3Style}>
          Last Bill
        </SubTitle>

        <Typography component="span" sx={spanStyle}>
          $15783
        </Typography>
      </Box>
      <Box sx={contentStyle}>
        <SubTitle component="h3" sx={h3Style}>
          Unpaid Bill
        </SubTitle>

        <Typography component="span" sx={spanStyle}>
          $500
        </Typography>
        <Typography
          component="span"
          sx={{ fontSize: "15px", color: "#EA2727", fontWeight: 600 }}
        >
          Due to Date 05/05/2023
        </Typography>
      </Box>
    </Stack>
  );
};

export default BillsCategory;
