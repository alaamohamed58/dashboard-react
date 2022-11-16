import { useState, useEffect } from "react";

import { Box, Typography, Button, Stack } from "@mui/material";
import { MainTitle } from "../../../customThemes";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import FarmMobile from "./FarmMobile";

/*start style*/
const titleStyle = {
  fontSize: { xs: "12px", lg: "16px" },
  color: "custom.secondary",
  fontWeight: 600,
};

const detailStyle = {
  letterSpacing: "0.17px",
  color: "custom.main",
  fontSize: { xs: "12px", lg: "16px", xl: "22px" },
  fontWeight: 600,
};

/*end style*/

const Farm = ({ data, activeStepHandler }) => {
  const dispatch = useDispatch();

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 992px)").matches
  );

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    window.matchMedia("(max-width: 992px)").addEventListener("change", handler);
  }, []);

  const addSelectedFarmHandler = () => {
    dispatch(
      cartActions.addFarm({
        title: data.title,
        fee: data["setup_fee"],
        location: data.location,
      })
    );
    activeStepHandler();
  };
  if (matches) {
    return (
      <FarmMobile
        data={data}
        titleStyle={titleStyle}
        detailStyle={detailStyle}
        addSelectedFarmHandler={addSelectedFarmHandler}
      />
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "12px" },
        flexDirection: { xs: "column", xl: "row" },
        gap: "23px",
        marginTop: "61px",
        background: "#fff",
        marginBottom: "31px",
      }}
    >
      <Stack
        sx={{
          background:
            "linear-gradient(91.12deg, rgba(39, 118, 234, 0.3) 0.93%, rgba(39, 118, 234, 0) 99.04%)",
          padding: "40px",
          width: "354px",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src="/images/icons/group.svg"
          alt="data.title"
          sx={{
            width: "282.33px",
            height: "151.4px",
            display: "inline-block",
          }}
        />
        <Box
          sx={{
            width: "280px",
            height: "10px",
            borderRadius: "33px",
            margin: "41px 0 13px",
            backgroundColor: "#A9C8F7",
          }}
        >
          <Box
            component="div"
            sx={{
              width: `${data.filled}%`,
              backgroundColor: "#2776EA",
              height: 1,
              borderRadius: "33px",
            }}
          ></Box>
        </Box>
        <Typography
          component="h4"
          sx={{ fontSize: 15, color: "#2776EA", fontWeight: 600 }}
        >
          {" "}
          Filled {data.filled}%
        </Typography>
      </Stack>

      <Box
        sx={{
          background: "#fff",
          width: { xs: "100%", xl: "auto" },
          marginTop: "20px",
        }}
      >
        <MainTitle
          component="h2"
          sx={{
            m: 0,
            textAlign: "left",
            borderBottom: "1px solid #CEDDF2",
          }}
        >
          {data.title}{" "}
        </MainTitle>

        <Box>
          <Stack
            sx={{
              flexDirection: { xs: "column", xl: "row" },
              flexWrap: "wrap",

              gap: { xs: "15px", xl: "50px" },
              marginTop: "10px",
            }}
          >
            <div>
              <Typography compenent="span" sx={titleStyle}>
                Location
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data.location}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Electricity Prices
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                ${data["electricity_prices"]}kWh
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Maintainance Fee
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                ${data["maintenance_fee"]}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Guarantee
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data.guarantee}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                security
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data.security}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Setup Period
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data["setup_period"]}{" "}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Guaranteed Uptime
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data["guaranteed_uptime"]}%
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Mines To External Wallet
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                {data["mines_to_external_wallet"] ? "Yes" : "No"}
              </Typography>
            </div>

            <div>
              <Typography compenent="span" sx={titleStyle}>
                Setup Fee
              </Typography>
              <Typography compenent="h4" sx={detailStyle}>
                {" "}
                ${data["setup_fee"]}
              </Typography>
            </div>
          </Stack>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginTop: "22px",
              marginBottom: "31px",
            }}
          >
            <Button
              variant="contained"
              sx={{ width: "203px", height: "42px" }}
              onClick={addSelectedFarmHandler}
            >
              SELECT FARM
            </Button>
            <Button variant="outlined" sx={{ width: "203px", height: "42px" }}>
              VIEW GALLERY
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Farm;
