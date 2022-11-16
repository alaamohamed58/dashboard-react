import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const tdStyle = {
  marginRight: { xs: 0, xl: "90px" },
  width: "auto",
  color: "#000",
};

const DepositsData = ({ data }) => {
  return (
    <Box
      component="tr"
      sx={{
        display: "flex",
        gap: {
          xs: "11px",
          md: "70px",
          lg: "63px",
        },
        fontSize: { xs: "12px", lg: "15px" },
        color: "#0A194E",
        fontWeight: 400,
        paddingTop: "23px",
        paddingBottom: "10px",
        borderBottom: "2px solid #CEDDF2",
      }}
    >
      <Box component="td" sx={tdStyle}>
        {data["date & time"]}
      </Box>
      <Box component="td" sx={tdStyle}>
        ${data.amount}
      </Box>
      <Box component="td" sx={tdStyle}>
        {data.via}
      </Box>

      <Box component="td" sx={tdStyle}>
        <Link to="wallet"> Detail </Link>
      </Box>
      <Box component="td" sx={tdStyle}>
        <Link to="wallet"> Download </Link>
      </Box>
    </Box>
  );
};

export default DepositsData;
