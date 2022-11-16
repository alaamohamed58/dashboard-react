import { Stack, Box, Typography } from "@mui/material";
const ElectricityBills = ({ lastPayment, nextPayment }) => {
  return (
    <Stack>
      <Typography
        component="h3"
        sx={{
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "133.4%",
          color: "#0A194E",
          marginBottom: "22px",
        }}
      >
        Electricity Bills
      </Typography>
      <Stack sx={{ flexDirection: { xs: "column", xl: "row" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            border: "2px solid #0A194E",
            borderRight: { xl: "none" },
          }}
        >
          <Box sx={{ display: "flex", padding: "14px 23px" }}>
            <Typography
              component="h3"
              sx={{ color: "#A2BCDC", fontWeight: 700 }}
            >
              Last Payment:
            </Typography>
            <Typography
              component="span"
              sx={{ color: "#0A194E", fontWeight: 700 }}
            >
              {lastPayment}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            border: "2px solid #0A194E",
          }}
        >
          <Box sx={{ display: "flex", padding: "14px 23px" }}>
            <Typography
              component="h3"
              sx={{ color: "#0A194E", fontWeight: 700 }}
            >
              Next Payment:
            </Typography>
            <Typography
              component="span"
              sx={{ color: "#0A194E", fontWeight: 700 }}
            >
              {nextPayment}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ElectricityBills;
