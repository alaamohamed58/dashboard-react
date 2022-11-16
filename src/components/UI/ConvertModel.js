import { Typography, Button, Stack, Box } from "@mui/material";

const contentStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  border: "2px solid #7A8185",
  margin: "0 auto 30px",
  width: { xs: "auto", xl: "557px" },
};
const fieldStyle = {
  borderRight: "2px solid #7A8185",
  paddingRight: "20px",
  color: "#A2BCDC",
  fontSize: "22px",
  fontWeight: 700,
};
const valueStyle = {
  paddingLeft: "20px",
  color: "#0A194E",
  fontSize: "22px",
  fontWeight: 700,
};

const ConvertModel = ({ hideModelHandler }) => {
  return (
    <Stack
      sx={{
        width: { xs: "90%", xl: "647px" },
        height: { xs: "auto", xl: "532px" },
        position: "fixed",
        top: { xs: "10%", xl: "336px" },
        left: { xs: "50%", xl: "637px" },
        transform: { xs: "translateX(-50%)", xl: "unset" },
        padding: "54px 25px 0px",
        background: "#fff",
        color: "#0A194E",
        textAlign: "center",
        "z-index": 12,
        border: "2px solid #2776EA",
      }}
    >
      <Box
        onClick={hideModelHandler}
        component="img"
        src="/images/icons/close.svg"
        sx={{
          position: "absolute",
          display: "inline-block",
          width: "20px",
          height: "20px",
          top: "20px",
          right: "20px",
        }}
      />
      <Typography
        componenet="h2"
        sx={{ fontSize: "30px", fontWeight: 700, marginBottom: "20px" }}
      >
        Convert
      </Typography>
      <Typography
        componenet="p"
        sx={{ fontSize: "24px", fontWeight: 500, marginBottom: "50px" }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Box sx={contentStyle}>
        <Typography sx={fieldStyle}>BTC Amount</Typography>
        <Typography sx={valueStyle}>0.2 BTC</Typography>
      </Box>
      <Box sx={contentStyle}>
        <Typography sx={fieldStyle}>FIAT Amount</Typography>
        <Typography sx={valueStyle}>$64646</Typography>
      </Box>

      <Button
        type="button"
        variant="contained"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "auto", xl: "557px" },
          height: { xs: "auto", xl: "55px" },
          margin: "10px auto",
          background: "#2776EA",
          fontSize: "20px",
          fontWeight: "600",
          lineHeight: "26px",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
        }}
      >
        Confirm
      </Button>
    </Stack>
  );
};

export default ConvertModel;
