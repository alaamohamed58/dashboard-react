import { Button } from "@mui/material";
import React from "react";

const customStyle = {
  backgroundColor: "custom.secondary",
  color: "custom.main",
  marginLeft: { xs: "15px", sm: "-100px", md: "0" },
  "&:hover": { color: "#fff" },
};

const ToggleLanguage = () => {
  return (
    <Button variant="contained" sx={customStyle}>
      EN
    </Button>
  );
};

export default ToggleLanguage;
