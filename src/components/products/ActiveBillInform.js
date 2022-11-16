import { Stack } from "@mui/material";
import BTCMined from "./BTCMined";
import ElectricityBills from "./ElectricityBills";

const ActiveBillInform = ({
  lastMining,
  totalMined,
  nextMining,
  lastPayment,
  nextPayment,
}) => {
  return (
    <Stack
      sx={{
        flexDirection: { xl: "row" },
        gap: "21px",
        borderTop: "1px solid #CEDDF2",
        paddingTop: "34px",
        marginTop: "25px",
      }}
    >
      <BTCMined
        lastMining={lastMining}
        totalMined={totalMined}
        nextMining={nextMining}
      />
      <ElectricityBills lastPayment={lastPayment} nextPayment={nextPayment} />
    </Stack>
  );
};

export default ActiveBillInform;
