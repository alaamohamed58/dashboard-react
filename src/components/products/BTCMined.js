import { Stack, Box, Typography } from "@mui/material";
const BTCMined = ({ lastMining, totalMined, nextMining }) => {
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
        BTC Mined
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
              Last Mining Round:
            </Typography>
            <Typography
              component="span"
              sx={{ color: "#0A194E", fontWeight: 700 }}
            >
              {lastMining}
            </Typography>
          </Box>
        </Box>
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
              Total Mined:
            </Typography>
            <Typography
              component="span"
              sx={{ color: "#0A194E", fontWeight: 700 }}
            >
              {totalMined}
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
              sx={{ color: "#A2BCDC", fontWeight: 700 }}
            >
              Next Mining Round:
            </Typography>
            <Typography
              component="span"
              sx={{ color: "#0A194E", fontWeight: 700 }}
            >
              {nextMining}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default BTCMined;
