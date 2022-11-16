import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const NewsItem = ({ id, title }) => {
  return (
    <Box
      component="li"
      sx={{
        padding: "25px 20px",
        letterSpacing: "0.15px",
        fontWeight: 500,
        borderBottom: "1px solid #CEDDF2",
      }}
    >
      <Typography
        sx={{
          color: "rgba(0, 0, 0, 0.87)",
          fontWeight: 500,
          marginBottom: "10px",
        }}
      >
        {title}
      </Typography>
      <Link to="/dashboard">
        <Box
          component="span"
          sx={{ color: "#2776EA", textDecoration: "underline" }}
        >
          Reverse Now
        </Box>
      </Link>
    </Box>
  );
};

export default NewsItem;
