import MuiLayout from "./layout/MuiLayout";
import { Typography, Box, Stack } from "@mui/material";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  gap: "44px",
  width: "auto",
  height: "100px",
  border: "2px solid #CEDDF2",
  marginBottom: "20px",
  background: "#fff",
};
const titleStyle = {
  color: "#0A194E",
  fontSize: { xs: "15px", lg: "20px", xl: "30px" },
  fontWeight: 600,
};

const dateStyle = {
  color: "#9FBADB",
  fontWeight: 700,
  fontSize: { xs: "12px", xl: "20px" },
};

const Notification = () => {
  return (
    <MuiLayout>
      <Typography
        component="h2"
        sx={{
          color: "#0A194E",
          fontSize: "35px",
          marginBottom: "40px",
          fontWeight: 700,
        }}
      >
        Notification
      </Typography>

      <Stack sx={{ gap: "20px" }}>
        <Box sx={boxStyle}>
          <Box
            component="img"
            src="/images/notification/success.svg"
            alt="payment"
            sx={{
              width: { xs: "46px", lg: "auto" },
              marginLeft: "50px",
              display: "inline-block",
            }}
          />
          <Box>
            {" "}
            <Typography component="p" sx={titleStyle}>
              Congratulations! You have received 0.21 bitcoin.
            </Typography>
            <Typography component="span" sx={dateStyle}>
              {" "}
              29 May 2022 Subheader{" "}
            </Typography>
          </Box>
        </Box>

        <Box sx={boxStyle}>
          <Box
            component="img"
            src="/images/notification/error.svg"
            alt="payment"
            sx={{
              width: { xs: "46px", lg: "auto" },
              marginLeft: "50px",
              display: "inline-block",
            }}
          />
          <Box>
            {" "}
            <Typography component="p" sx={titleStyle}>
              Very sorry, machine turned off
            </Typography>
            <Typography component="span" sx={dateStyle}>
              {" "}
              29 May 2022 Subheader{" "}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </MuiLayout>
  );
};

export default Notification;
