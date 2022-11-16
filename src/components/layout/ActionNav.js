import { Box, Typography } from "@mui/material";

const imgStyle = {
  width: { xs: "fit-content", md: "30px", xl: "32.8px" },
  height: { xs: "23px", xl: "24.79px" },
  display: "inline-block",
  // position: { xs: "absolute", lg: "unset" },
  // left: { xs: "41%", sm: "44%", md: "45%", lg: "46%" },
};
const dataStyle = {
  width: { sm: "auto", md: "90px", xl: "110px" },
  justifyContent: {
    xs: "center",
    xl: "unset",
  },
  alignItems: "center",
  height: {
    xs: "auto",
    lg: "auto",
  },
  textAlign: "center",
  flexDirection: { xs: "column", xl: "unset" },
  flexWrap: "wrap",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "24px",
  letterSpacing: "0.4px",
  color: "#FFFFFF",
  display: { xs: "flex", xl: "unset" },
  gap: { xs: "15px", lg: "0" },
};

const liStyle = {
  display: "flex",
  alignItems: { xs: "center", lg: "center" },
  justifyContent: "center",
  gap: { xs: "10px", xl: 0 },
  padding: { xs: "10px" },
  width: 1,
  "&:first-of-type img": {
    left: { xs: "46%", sm: "48%", lg: "unset" },
  },
  "&:nth-child(2) img": {
    left: { xs: "43%", sm: "45%", md: "46%" },
  },
  // "&:first-child span": {
  //   marginLeft: { xs: "41px", lg: "unset" },
  // },
  // "&:nth-child(2) span": {
  //   marginLeft: { xs: "15px", lg: "unset" },
  // },
};

const h6Style = {
  color: "#9FBADB",
  marginTop: { sm: 0, xl: "10px" },
  fontSize: { xs: "18px", lg: "15px" },
  display: { xs: "none", lg: "block" },
};

const spanStyle = {
  display: { sm: "inline-block", xl: "unset" },
  width: { xs: "fit-content" },
  textAlign: "center",
  fontSize: {
    xs: "22px",
    lg: "18px",
  },
  "min-width": "60px",
  // marginLeft: { xs: "25px", lg: "0" },
};
const ActionNav = ({ showIcons }) => {
  return (
    <Box component="nav" sx={{ display: "flex" }}>
      <Box
        component="ul"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          width: 1,

          padding: { xs: "10px", lg: "0" },
          alignItems: "center",
          position: { xs: "absolute", lg: "unset" },
          top: showIcons ? "100%" : "-600%",
          left: 0,
          backgroundColor: { xs: "custom.main", lg: "unset" },
          transition: "0.2s",
        }}
      >
        <Box component="li" sx={liStyle}>
          <Box
            component="img"
            sx={imgStyle}
            src="/images/icons/icon1.svg"
            alt="icon"
          />
          <Box component="div" sx={dataStyle}>
            <Box component="span" sx={spanStyle}>
              0
            </Box>
            <Typography component="h6" sx={h6Style}>
              Shared Miners
            </Typography>
          </Box>
        </Box>

        <Box component="li" sx={liStyle}>
          <Box
            component="img"
            sx={imgStyle}
            src="/images/icons/icon2.svg"
            alt="icon"
          />
          <Box component="div" sx={dataStyle}>
            <Box component="span" sx={spanStyle}>
              1
            </Box>
            <Typography component="h6" sx={h6Style}>
              ASIC
            </Typography>
          </Box>
        </Box>

        <Box component="li" sx={liStyle}>
          <Box
            component="img"
            sx={imgStyle}
            src="/images/icons/icon3.svg"
            alt="icon"
          />
          <Box component="div" sx={dataStyle}>
            <Box component="span" sx={spanStyle}>
              ₿0.45
            </Box>
            <Typography component="h6" sx={h6Style}>
              Mined BTC
            </Typography>
          </Box>
        </Box>

        <Box component="li" sx={liStyle}>
          <Box
            component="img"
            sx={imgStyle}
            src="/images/icons/icon4.svg"
            alt="icon"
          />
          <Box component="div" sx={dataStyle}>
            <Box component="span" sx={spanStyle}>
              $300
            </Box>
            <Typography component="h6" sx={h6Style}>
              Fiat Balance
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ActionNav;
