import { Box, LinearProgress, Stack, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const BillDetail = (props) => {
  const { title, loading, remainingDays, days, location, status } = props;

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
        flexDirection: { xs: "column", lg: "row" },
        alignItems: { xs: "center", lg: "unset" },
        height: "auto",
        background: "#fff",
        marginTop: "55px",
      }}
    >
      {/* <Box
        component="img"
        src="/images/icons/bills.svg"
        sx={{
          display: "inline-block",
          width: "142.08px",
          height: "143px",
          margin: { xs: "29px 10px", xl: "69px 36px" },
        }}
      ></Box>*/}
      <Stack sx={{ width: 1, padding: { xs: "29px 10px", xl: "69px 36px" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #CEDDF2",
          }}
        >
          <div>
            <Typography
              component="h3"
              sx={{
                fontSize: { xs: "22px", xl: "35px" },
                fontWeight: 700,
                color: "#0A194E",
              }}
            >
              {title}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: { xs: "12px", xl: "22px" },
                fontWeight: 700,
                color: "#A2BCDC",
              }}
            >
              {location}
            </Typography>
          </div>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {status === "installing" && (
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "12px", xl: "16px" },
                  color: "#0A194E",
                  fontWeight: 500,
                }}
              >
                {remainingDays} days are remaining{" "}
              </Typography>
            )}
            <Button
              sx={{
                textTransform: "capitalize",
                fontSize: "15px",
                width: "118px",
              }}
              variant="contained"
              className={billStaus}
            >
              {status}
            </Button>
          </Box>
        </Box>
        <Stack sx={{ marginTop: "15px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", xl: "22px" },
                fontWeight: 700,
                color: "#0A194E",
              }}
            >
              {remainingDays} Days
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", xl: "22px" },
                fontWeight: 700,
                color: "#0A194E",
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
                left: `${loading}%`,
                top: "-34px",
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
              marginTop: "14px",
              background: "#fff",
            }}
          >
            <Typography
              sx={{ fontSize: "22px", color: "#A2BCDC", fontWeight: 500 }}
            >
              0%
            </Typography>
            <Typography
              sx={{ fontSize: "22px", color: "#A2BCDC", fontWeight: 500 }}
            >
              100%
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default BillDetail;
