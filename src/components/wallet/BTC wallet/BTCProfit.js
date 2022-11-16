import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
const data = [
  { quarter: 1, earnings: 0.3 },
  { quarter: 2, earnings: 0.5 },
  { quarter: 3, earnings: 0.3 },
  { quarter: 4, earnings: 0.35 },
  { quarter: 5, earnings: 0.7 },
  { quarter: 6, earnings: 0.8 },
  { quarter: 7, earnings: 0.33 },
  { quarter: 8, earnings: 1.0 },
  { quarter: 9, earnings: 0 },
  { quarter: 10, earnings: 0 },
  { quarter: 11, earnings: 0 },
  { quarter: 12, earnings: 0 },
];

const BTCProfit = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        margin: "51px auto",
        width: "100%",
        border: " 2px solid #CEDDF2",
        padding: { xs: "40px 10px", xl: "40px 49px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "22px", xl: "35px" },
          fontWeight: 700,
          color: "#0A194E",
        }}
      >
        BTC Profit
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
        <VictoryAxis dependentAxis tickFormat={(x) => `${x} BTC`} />
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          style={{
            data: { fill: "#2776EA", width: 20, gap: "30px" },
          }}
        />
      </VictoryChart>
    </Box>
  );
};

export default BTCProfit;
