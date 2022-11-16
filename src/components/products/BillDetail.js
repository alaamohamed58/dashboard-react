import { Link } from "react-router-dom";
import {
  Box,
  LinearProgress,
  Stack,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ActiveBillInform from "./ActiveBillInform";
import InstallingStepper from "./InstallingStepper";
import { MainTitle } from "../../customThemes";
const BillDetail = (props) => {
  const {
    id,
    title,
    loading,
    remainingDays,
    days,
    location,
    status,
    renovation,
    model,
    consumption,
    serialNum,
    hashRate,
    lastMining,
    totalMined,
    nextMining,
    lastPayment,
    nextPayment,
  } = props;

  let billStaus = "";
  let statusText = "";

  if (status === "pending") {
    billStaus = "pending";
    statusText = "pendingText";
  } else if (status === "active") {
    billStaus = "activeBill";
    statusText = "activeText";
  } else {
    billStaus = "installing";
    statusText = "installingText";
  }

  const Progress = styled(LinearProgress)({
    ".css-5xe99f-MuiLinearProgress-bar1": {
      backgroundColor:
        status === "pending"
          ? "#EA2727"
          : status === "active"
          ? "#2776EA"
          : status === "installing"
          ? "#EAB327"
          : "blue",
    },
  });

  return (
    <Box
      component="li"
      sx={{
        display: "flex",

        background: "#fff",
        marginTop: "55px",
      }}
    >
      <Accordion elevation={0} sx={{ width: 1, padding: "39px 56px" }}>
        <AccordionSummary
          expandIcon={<img src="/images/icons/expandIcon.svg" alt="expand" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            paddingLeft: 0,
            margin: "0 !importnant",
            width: "100%",
          }}
        >
          <Stack sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #CEDDF2",
              }}
            >
              <div>
                <MainTitle component="h2" sx={{ textAlign: "left", m: 0 }}>
                  {title}{" "}
                </MainTitle>
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: "15px", lg: "22px" },
                    fontWeight: 700,
                    color: "custom.secondary",
                  }}
                >
                  {location}
                </Typography>
              </div>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "15px",
                    width: { xs: "85px", xl: "118px" },
                  }}
                  variant="contained"
                  className={billStaus}
                >
                  {status}
                </Button>
              </Box>
            </Box>
            <Stack sx={{ marginTop: "15px", background: "#F6FAFF" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", lg: "22px" },
                    fontWeight: 700,
                    color: "custom.main",
                  }}
                >
                  {remainingDays} Days
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", lg: "22px" },
                    fontWeight: 700,
                    color: "custom.main",
                  }}
                >
                  {days} Day Active
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  height: "16px",
                  borderRadius: "12px",
                  background: "red",
                  margin: "40px 0 0px",
                  position: "relative",
                }}
              >
                <Progress
                  variant="determinate"
                  value={loading}
                  sx={{
                    height: 1,
                    borderRadius: "12px",
                  }}
                />
                <Typography
                  className={statusText}
                  sx={{
                    position: "absolute",
                    top: "-34px",
                    left: `${loading}%`,
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  {loading}%
                </Typography>
              </Box>

              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: "14px",
                  background: "#F6FAFF",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: "custom.secondary",
                    fontWeight: 500,
                  }}
                >
                  0%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: "custom.secondary",
                    fontWeight: 500,
                  }}
                >
                  100%
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            sx={{
              flexDirection: { lg: "row" },
              marginTop: "60px",
              gap: { xs: "10px", xl: "150px" },
            }}
          >
            <Box>
              <Typography
                component="span"
                sx={{ color: "custom.secondary", fontSize: "15px" }}
              >
                Renovation Date
              </Typography>
              <Typography
                component="h3"
                sx={{
                  color: "custom.main",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {renovation}
              </Typography>
            </Box>
            <Box>
              <Typography
                component="span"
                sx={{ color: "custom.secondary", fontSize: "15px" }}
              >
                Model
              </Typography>
              <Typography
                component="h3"
                sx={{
                  color: "custom.main",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {model}
              </Typography>
            </Box>
            <Box>
              <Typography
                component="span"
                sx={{ color: "custom.secondary", fontSize: "15px" }}
              >
                Hash Rate
              </Typography>
              <Typography
                component="h3"
                sx={{
                  color: "custom.main",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {hashRate}
              </Typography>
            </Box>
            <Box>
              <Typography
                component="span"
                sx={{ color: "custom.secondary", fontSize: "15px" }}
              >
                Consumption
              </Typography>
              <Typography
                component="h3"
                sx={{
                  color: "custom.main",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {consumption}
              </Typography>
            </Box>
            {status !== "pending" && (
              <Box>
                <Typography
                  component="span"
                  sx={{ color: "custom.secondary", fontSize: "15px" }}
                >
                  Serial Number
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    color: "custom.main",
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  {serialNum}
                </Typography>
              </Box>
            )}
          </Stack>
          {status === "pending" && (
            <Typography
              component="p"
              sx={{
                color: "custom.main",
                fontSize: "22px",
                fontWeight: 500,
                borderTop: "1px solid #CEDDF2",
                padding: "20px 0",
                marginTop: "30px ",
              }}
            >
              You have pending bills that need to be paid to continue. To pay
              the bills,
              <Typography
                component="span"
                sx={{
                  color: "#2776EA",
                  textDecoration: "underline",
                  fontSize: "22px",
                  fontWeight: 500,
                }}
              >
                <Link to="/shop">CLICK HERE</Link>
              </Typography>{" "}
              or go to the Expenses section.
            </Typography>
          )}

          {status === "installing" && <InstallingStepper />}

          {status === "active" && (
            <ActiveBillInform
              lastMining={lastMining}
              totalMined={totalMined}
              nextMining={nextMining}
              lastPayment={lastPayment}
              nextPayment={nextPayment}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default BillDetail;
