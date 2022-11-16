import { Box } from "@mui/material";

import BillDetail from "./BillDetail";

const DUMMY_BILLS = [
  {
    if: "b1",
    title: "ASIC",
    location: "location Texis-2",
    remainingDays: 45,
    days: 250,
    status: "pending",
    loading: 42,
    renovationDate: "03/07/2024",
    model: "S19Pro",
    hashRate: "110 TH/s",
    consumption: "3200w",
  },
  {
    if: "b1",
    title: "ASIC",
    location: "location Texis-2",
    remainingDays: 45,
    days: 250,
    status: "installing",
    loading: 80,
    renovationDate: "03/07/2024",
    model: "S19Pro",
    hashRate: "110 TH/s",
    consumption: "3200w",
    serialNum: 46973,
  },
  {
    if: "b1",
    title: "ASIC",
    location: "location Texis-2",
    remainingDays: 45,
    days: 250,
    status: "active",
    loading: 20,
    renovationDate: "03/07/2024",
    model: "S19Pro",
    hashRate: "110 TH/s",
    consumption: "3200w",
    serialNum: 46973,
    lastMining: "0.13 BTC",
    totalMined: "0.76 BTC",
    nextMining: "05/07/2022",
    lastPayment: "$168",
    nextPayment: "05/11/2022",
  },
];

const Bills = () => {
  return (
    <Box component="ul" sx={{ marginTop: "55px" }}>
      {DUMMY_BILLS.map((bill) => {
        return (
          <BillDetail
            key={bill.id}
            id={bill.id}
            title={bill.title}
            location={bill.location}
            remainingDays={bill.remainingDays}
            days={bill.days}
            status={bill.status}
            loading={bill.loading}
            renovation={bill.renovationDate}
            model={bill.model}
            consumption={bill.consumption}
            serialNum={bill.serialNum}
            hashRate={bill.hashRate}
            lastMining={bill.lastMining}
            totalMined={bill.totalMined}
            nextMining={bill.nextMining}
            lastPayment={bill.lastPayment}
            nextPayment={bill.nextPayment}
          />
        );
      })}
    </Box>
  );
};

export default Bills;
