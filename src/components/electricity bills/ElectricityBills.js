import { PageTitle } from "../../customThemes";
import MuiLayout from "../layout/MuiLayout";
import BillsCategory from "./BillsCategory";
import Consumption from "./Consumption";
import HistoryBills from "./HistoryBills";

const ElectricityBills = () => {
  return (
    <MuiLayout>
      <PageTitle component="h1">Electricity Bills</PageTitle>
      <BillsCategory />
      <Consumption />
      <HistoryBills />
    </MuiLayout>
  );
};

export default ElectricityBills;
