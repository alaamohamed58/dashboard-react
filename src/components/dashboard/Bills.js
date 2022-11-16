import { Box } from "@mui/material";

import BillDetail from "./BillDetail";

const DUMMY_BILLS = [
  {
    id: "b2",
    title: "ASIC",
    location: "location Texis-2",
    remainingDays: 45,
    days: 250,
    status: "installing",
    loading: 10,
  },
  {
    id: "b3",
    title: "ASIC",
    location: "location Texis-2",
    remainingDays: 45,
    days: 250,
    status: "pending",
    loading: 80,
  },
  {
    id: "b4",
    title: "ASIC",
    location: "location Texis-2",
    remainingDays: 45,
    days: 250,
    status: "active",
    loading: 20,
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
          />
        );
      })}
    </Box>
  );
};

export default Bills;
