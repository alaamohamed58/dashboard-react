import {
  Box,
  Typography,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { MainTitle } from "../../../customThemes";

const FarmMobile = ({
  data,
  titleStyle,
  detailStyle,
  addSelectedFarmHandler,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "12px", lg: "0" },
        flexDirection: { xs: "column", lg: "row" },
        gap: "23px",
        marginTop: "61px",
        background: "#fff",
        marginBottom: "31px",
      }}
    >
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<img src="/images/icons/expandIcon.svg" alt="expand" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0, margin: "0 !importnant", width: "100%" }}
        >
          <Stack sx={{ width: "100%" }}>
            <Stack
              sx={{
                background:
                  "linear-gradient(91.12deg, rgba(39, 118, 234, 0.3) 0.93%, rgba(39, 118, 234, 0) 99.04%)",
                padding: "40px",
                width: "100%",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src="/images/icons/group.svg"
                alt="data.title"
                sx={{
                  width: "100%",
                  height: "151.4px",
                  display: "inline-block",
                }}
              />
              <Box
                sx={{
                  width: "100%",
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

            <MainTitle
              component="h2"
              sx={{
                m: "30px 15px 0",
                textAlign: "left",
                borderBottom: "1px solid #CEDDF2",
              }}
            >
              {data.title}{" "}
            </MainTitle>

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
            </Stack>
          </Stack>
        </AccordionSummary>

        <AccordionDetails sx={{ padding: 0 }}>
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
        </AccordionDetails>
      </Accordion>

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
  );
};

export default FarmMobile;
