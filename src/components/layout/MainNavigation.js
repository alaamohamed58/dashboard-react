import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import RightArrow from "../icons/RightArrow";
import AuthContext from "../../context/auth-context";

const iconStyle = {
  display: "inline-block",
  width: "20.7px",
  height: "20px",
  marginRight: "34.3px",
  marginLeft: "25px",
};

const typographyStyle = {
  color: "#9FBADB",
  fontStyle: "normal",
  fontWeight: 700,
  letterSpacing: "0.17px",
  fontSize: "20px",
  lineHeight: "150%",
  cursor: "pointer",
  marginBottom: "12px",
  display: "inline-block",
};

const subAccordion = {
  ...typographyStyle,
  padding: "4px 0px",
  "&:hover": {
    backgroundColor: "#1B2B65",
  },
};

const toggleBtn = {
  height: "75px",
  width: "30px",
  display: {
    xs: "flex",
    lg: "none",
  },
  borderEndEndRadius: "50px",
  borderStartEndRadius: "50px",
  color: "#fff",
  position: "absolute",
  "z-index": 11,
  right: "-20px",
  top: "50%",
  background: "#00255B",
  cursor: "pointer",
  transform: "translateY(-50%)",
};

const MainNavigation = () => {
  const [toggleNav, setToggleNav] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //context
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  const fiatWalletHandler = () => {
    dispatch(uiActions.fiatWallet());
    navigate("/wallet");
  };

  const btcWalletHandler = () => {
    dispatch(uiActions.btcWallet());
    navigate("/wallet");
  };
  const toggleNavHandler = () => {
    setToggleNav((currPos) => !currPos);
  };

  //logout Handler
  const logoutHandler = () => {
    logout();
    navigate("/auth");
  };

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        backgroundColor: "#00255B",
        width: "317px",
        minHeight: "calc(100vh - 93px)",
        paddingTop: "50px",
        position: "fixed",
        transition: "0.3s",
        left: {
          xs: toggleNav ? "-317px" : "0",

          lg: "0",
        },
        top: "93px",
        "z-index": 10,
      }}
    >
      <Box sx={toggleBtn} onClick={toggleNavHandler}>
        <RightArrow />{" "}
      </Box>

      <Box>
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: "#00255B",
            color: "#9FBADB",
            fontSize: "20px",
            fontWeight: 700,
            paddingLeft: 0,
            margin: "0 !importnant",
            "&.MuiPaper-root": {
              background: "unset",
              color: "#9FBADB",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<img src="/images/icons/expandIcon.svg" alt="expand" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ paddingLeft: 0, margin: "0 !importnant" }}
          >
            <Box
              component="img"
              src="/images/icons/cart.svg"
              alt="cart"
              sx={iconStyle}
            />

            <Typography
              sx={{ fontWeight: 700, fontSize: "20px" }}
              component="h5"
            >
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/shop"
              >
                Shop{" "}
              </NavLink>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{ paddingLeft: "60px" }}>
              <Link to="/shop/asic">
                <Box sx={subAccordion}>ASIC Miners</Box>
              </Link>
              <Box sx={subAccordion}>Shared Miners (soon) </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ marginTop: { xs: "20px", lg: "34px" } }}>
          <Box
            component="img"
            src="/images/icons/dashboard.svg"
            alt="cart"
            sx={iconStyle}
          />

          <Typography sx={typographyStyle} component="h5">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </Typography>
        </Box>{" "}
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: "#00255B",
            color: "#9FBADB",
            fontSize: "20px",
            fontWeight: 700,
            marginTop: { xs: "20px", lg: "34px" },
            "&.MuiPaper-root": {
              background: "unset",
              color: "#9FBADB",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<img src="/images/icons/expandIcon.svg" alt="expand" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ paddingLeft: 0 }}
          >
            <Box
              component="img"
              src="/images/icons/wallet.svg"
              alt="cart"
              sx={iconStyle}
            />

            <Typography
              sx={{ fontWeight: 700, fontSize: "20px" }}
              component="h5"
            >
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/wallet"
              >
                Wallet
              </NavLink>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{ paddingLeft: "60px" }}>
              <Box onClick={btcWalletHandler} sx={subAccordion}>
                BTC Wallet
              </Box>{" "}
              <Box onClick={fiatWalletHandler} sx={subAccordion}>
                Fiat Wallet
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ marginTop: { xs: "20px", lg: "34px" } }}>
          <Box
            component="img"
            src="/images/icons/products.svg"
            alt="cart"
            sx={iconStyle}
          />
          <Typography sx={typographyStyle} component="h5">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/products"
            >
              My Products
            </NavLink>
          </Typography>
        </Box>
        <Box sx={{ marginTop: { xs: "20px", lg: "34px" } }}>
          <Box
            component="img"
            src="/images/icons/electricity.svg"
            alt="cart"
            sx={iconStyle}
          />

          <Typography sx={typographyStyle} component="h5">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/bills"
            >
              Electricity Bills
            </NavLink>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ paddingBottom: "50px" }}>
        <Box>
          <Box
            component="img"
            src="/images/icons/support.svg"
            alt="cart"
            sx={iconStyle}
          />

          <Typography sx={typographyStyle} component="h5">
            Support
          </Typography>
        </Box>

        <Box
          sx={{ marginTop: { xs: "20px", lg: "34px" } }}
          onClick={logoutHandler}
        >
          <Box
            component="img"
            src="/images/icons/logout.svg"
            alt="cart"
            sx={iconStyle}
          />

          <Typography sx={typographyStyle} component="h5">
            Logout
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default MainNavigation;
