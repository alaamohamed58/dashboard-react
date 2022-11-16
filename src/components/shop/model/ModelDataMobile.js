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
const ModelDataMobile = ({
  props,
  h3Style,
  addModelFarmHandler,
  counter,
  quantity,
  setQuantity,
  spanStyle,
}) => {
  return (
    <Box
      component="li"
      sx={{
        padding: "30px",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", xl: "row" },
        gap: "30px",
        border: "2px solid #CEDDF2",
        background: "#fff",
        marginBottom: "51px",
      }}
    >
      <Accordion elevation={0} sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<img src="/images/icons/expandIcon.svg" alt="expand" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0, margin: "0 !importnant", width: "100%" }}
        >
          <Stack sx={{ width: "100%" }}>
            <Box
              component="img"
              src={props.image}
              sx={{ display: "inline-block", width: "300ox", margin: "0 auto" }}
            />

            <Stack sx={{ width: 1 }}>
              <MainTitle
                component="h2"
                sx={{
                  m: 0,
                  textAlign: "left",
                  borderBottom: "1px solid #CEDDF2",
                }}
              >
                {props.title}{" "}
              </MainTitle>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  flexDirection: { xs: "column", xl: "row" },
                  gap: { xs: "10px 50px", xl: "30px 112px" },
                  border: "1px solid #CEDDF2",
                  borderLeft: "none",
                  borderRight: "none",
                  padding: "20px 0",
                }}
              >
                <div>
                  <Typography
                    component="span"
                    sx={{
                      color: "custom.secondary",
                      fontSize: "15px",
                      fontWeight: 700,
                    }}
                  >
                    Model
                  </Typography>
                  <Typography component="h3" sx={h3Style}>
                    {props.model}
                  </Typography>
                </div>

                <div>
                  <Typography
                    component="span"
                    sx={{
                      color: "custom.secondary",
                      fontSize: "15px",
                      fontWeight: 700,
                    }}
                  >
                    Hash Rate
                  </Typography>
                  <Typography component="h3" sx={h3Style}>
                    {" "}
                    {props.rate}{" "}
                  </Typography>
                </div>

                <div>
                  <Typography
                    sx={{ fontSize: "35px", fontWeight: 700, color: "#0A194E" }}
                  >
                    {" "}
                    ${props.price}{" "}
                  </Typography>
                </div>
              </Box>
            </Stack>
          </Stack>
        </AccordionSummary>

        <AccordionDetails sx={{ padding: 0 }}>
          <Stack sx={{ width: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "10px 50px", xl: "30px 112px" },
                borderLeft: "none",
                borderRight: "none",
                padding: "20px 0",
              }}
            >
              <div>
                <Typography
                  component="span"
                  sx={{
                    color: "custom.secondary",
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  Power
                </Typography>
                <Typography component="h3" sx={h3Style}>
                  {" "}
                  {props.power}{" "}
                </Typography>
              </div>

              <div>
                <Typography component="span" sx={spanStyle}>
                  Algorithm
                </Typography>
                <Typography component="h3" sx={h3Style}>
                  {" "}
                  {props.algorithm}{" "}
                </Typography>
              </div>

              <div>
                <Typography component="span" sx={spanStyle}>
                  Estimated Online Date
                </Typography>
                <Typography component="h3" sx={h3Style}>
                  {" "}
                  {props.estimatedDate}{" "}
                </Typography>
              </div>

              <div>
                <Typography component="span" sx={spanStyle}>
                  Warrenty
                </Typography>
                <Typography component="h3" sx={h3Style}>
                  {" "}
                  {props.warrenty}{" "}
                </Typography>
              </div>

              <div>
                <Typography component="span" sx={spanStyle}>
                  Conditions
                </Typography>
                <Typography component="h3" sx={h3Style}>
                  {" "}
                  {props.conditions}{" "}
                </Typography>
              </div>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", xl: "row" },
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: { xs: "center", xl: "space-between" },
                    gap: "20px",
                    borderBottom: { xs: "1px solid #ddd", xl: "none" },
                    paddingBottom: { xs: "10px", xl: "0" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Box
                      sx={counter}
                      onClick={() =>
                        quantity === 1
                          ? quantity === 1
                          : setQuantity((currQ) => currQ - 1)
                      }
                    >
                      -
                    </Box>
                    <Typography
                      componenet="span"
                      sx={{
                        fontSize: "25px",
                        fontWeight: 500,
                        color: "custom.main",
                      }}
                    >
                      {quantity}
                    </Typography>
                    <Box
                      sx={counter}
                      onClick={() => setQuantity((currQ) => currQ + 1)}
                    >
                      +
                    </Box>
                  </Box>

                  <Button
                    onClick={addModelFarmHandler}
                    type="button"
                    variant="contained"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "203px",
                      height: "42px",
                      background: "#2776EA",
                      fontSize: "13px",
                      fontWeight: "600",
                      lineHeight: "22PX",
                      letterSpacing: "0.46px",
                      textTransform: "uppercase",
                    }}
                  >
                    SELECT MODEL
                  </Button>
                </Box>
              </Box>
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ModelDataMobile;
