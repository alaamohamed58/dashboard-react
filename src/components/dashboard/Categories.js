import { Stack, Box, Typography } from "@mui/material";

const contentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  border: "2px solid #CEDDF2",
  width: {
    xs: "100%",
  },
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

const Categories = () => {
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
        <Typography component="h3" sx={h3Style}>
          Avilable BTC
        </Typography>

        <Typography component="span" sx={spanStyle}>
          ₿17.000
        </Typography>
      </Box>
      <Box sx={contentStyle}>
        <Typography component="h3" sx={h3Style}>
          Next Payout
        </Typography>

        <Typography component="span" sx={spanStyle}>
          05/07/2022
        </Typography>
      </Box>
      <Box sx={contentStyle}>
        <Typography component="h3" sx={h3Style}>
          Total Expenses
        </Typography>

        <Typography component="span" sx={spanStyle}>
          $15783
        </Typography>
      </Box>
      <Box sx={contentStyle}>
        <Typography component="h3" sx={h3Style}>
          Total Earn
        </Typography>

        <Typography component="span" sx={spanStyle}>
          $25698
        </Typography>
      </Box>
    </Stack>
  );
};

export default Categories;
