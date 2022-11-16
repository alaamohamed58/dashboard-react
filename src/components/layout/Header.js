import { useState } from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import BarsIcon from "../icons/BarsIcon";
import ActionNav from "./ActionNav";
import SecondaryNav from "./SecondaryNav";

const Header = () => {
  const [showIcons, setShowIcons] = useState(false);
  const navigate = useNavigate();

  const toggleNavHandler = () => {
    setShowIcons((currPos) => !currPos);
  };

  const notificationPageHandler = () => {
    navigate("/notification");
  };

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: "0",
        "z-index": 11,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", xl: "flex-start" },
          height: "95px",
          gap: { xs: "25px", xl: "0" },
          backgroundColor: "#011B41",
          padding: "0 35px",
        }}
      >
        <Box
          sx={{
            width: { xs: "264px" },
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Link to="/dashboard">
            <Box
              component="img"
              sx={{ width: 1 }}
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
        </Box>
        <Box
          component="nav"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", lg: "row" },
            width: { xs: "100%", lg: "fit-content" },
            gap: { sm: 0, xl: "200px" },
            alignItems: "center",
            position: { xs: "absolute", lg: "unset" },
            top: showIcons ? "100%" : "-600%",
            left: 0,
            backgroundColor: { xs: "custom.main", lg: "unset" },
            transition: "0.2s",
            "z-index": { xs: "-5", lg: "0" },
            flex: 1,
          }}
        >
          <ActionNav showIcons={showIcons} />

          {/* second NAV */}
          <SecondaryNav notificationHandler={notificationPageHandler} />
        </Box>
        <Box
          onClick={toggleNavHandler}
          sx={{
            color: "#fff",
            display: { xs: "block", lg: "none" },
            width: "30px",
          }}
        >
          <BarsIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
