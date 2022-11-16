import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
const data = [
  { quarter: 1, pr: 100 },
  { quarter: 2, pr: 200 },
  { quarter: 3, pr: 300 },
  { quarter: 4, pr: 350 },
  { quarter: 5, pr: 400 },
  { quarter: 6, pr: 550 },
  { quarter: 7, pr: 700 },
  { quarter: 8, pr: 800 },
  { quarter: 9, pr: 250 },
  { quarter: 10, pr: 950 },
  { quarter: 11, pr: 1000 },
  { quarter: 12, pr: 900 },
];
const Consumption = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", xl: "869px" },
        border: "2px solid #CEDDF2",
        background: "#Fff",
        padding: "40px 48px",
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "22px", xl: "35px" },
          lineHeight: "136.9%",
          color: "#0A194E",
        }}
      >
        Monthly Consumption (kW) & Cost ($)
      </Typography>
      <VictoryChart domain={{ x: [0, 12] }}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          tickFormat={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `$${x}`} />
        <VictoryBar
          data={data}
          x="quarter"
          y="pr"
          style={{
            data: { fill: "#2776EA", width: 20, gap: "30px" },
          }}
        />
      </VictoryChart>
    </Box>
  );
};

export default Consumption;
