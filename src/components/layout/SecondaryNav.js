import { useState } from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
const SecondaryNav = ({ notificationHandler }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box component="nav" sx={{ width: { xs: "100%", lg: "fit-content" } }}>
      <Box
        component="ul"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "25px", xl: "50px" },
          backgroundColor: { xs: "#2776EA", lg: "unset" },
          padding: { xs: "10px", xl: "0" },
          width: "100%",
          position: "relative",
        }}
      >
        <li>
          <Tooltip title="Langauge">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={anchorEl ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? "true" : undefined}
            >
              <Box
                sx={{
                  width: { xs: "20.17px", xl: "29.17px" },
                  height: { xs: "20.17px", xl: "29.17px" },
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src="/images/icons/icon7.svg"
                  alt="icon"
                  sx={{ width: 1 }}
                />
              </Box>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            onClose={handleClose}
            onClick={handleClose}
            open={anchorEl}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>English</MenuItem>
            <MenuItem>Spainish</MenuItem>
          </Menu>
        </li>

        <li>
          <Link to="/shop/checkout">
            <Box
              sx={{
                width: { xs: "24.17px", xl: "34.17px" },
                height: { xs: "24.17px", xl: "34.17px" },
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src="/images/icons/icon6.svg"
                alt="icon"
                sx={{ width: 1 }}
              />
            </Box>
          </Link>
        </li>

        <li onClick={notificationHandler}>
          <Box
            sx={{
              width: { xs: "20.33px", xl: "27.33px" },
              height: { xs: "23.31px", xl: "33.31px" },
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src="/images/icons/notification.svg"
              alt="icon"
              sx={{ width: 1 }}
            />
          </Box>
        </li>
        <li>
          <Box
            sx={{
              width: { xs: "30px", xl: "40px" },
              height: { xs: "30px", xl: "40px" },
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src="/images/icons/user.svg"
              alt="icon"
              sx={{ width: 1 }}
            />
          </Box>
        </li>
      </Box>
    </Box>
  );
};

export default SecondaryNav;
