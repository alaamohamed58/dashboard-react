import React, { useEffect, useState, useMemo } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const HistoryProfit = () => {
  const classes = useStyles();

  const DUMMY_DATA = useMemo(
    () => [
      {
        id: "d1",
        BTC: "0.13",
        "data & time": "05/07/2022 - 10:46",
        ASIC: "03",
        "shared miners": "60",
      },
      {
        id: "d2",
        BTC: "0.15",
        "data & time": "05/07/2022 - 12:46",
        ASIC: "03",
        "shared miners": "60",
      },
      {
        id: "d3",
        BTC: "0.18",
        "data & time": "05/09/2022 - 10:55",
        ASIC: "63",
        "shared miners": "60",
      },
      {
        id: "d4",
        BTC: "0.18",
        "data & time": "05/09/2022 - 10:55",
        ASIC: "63",
        "shared miners": "60",
      },
      {
        id: "d5",
        BTC: "0.17",
        "data & time": "05/09/2022 - 07:55",
        ASIC: "63",
        "shared miners": "60",
      },
      {
        id: "d6",
        BTC: "0.2",
        "data & time": "05/09/2022 - 10:55",
        ASIC: "70",
        "shared miners": "70",
      },
    ],
    []
  );
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 2;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(DUMMY_DATA.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(DUMMY_DATA.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, DUMMY_DATA]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % DUMMY_DATA.length;

    setItemOffset(newOffset);
  };

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
          marginBottom: "65px",
        }}
      >
        Mining History Profits
      </Typography>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">BTC</TableCell>
              <TableCell align="center">Date & Time</TableCell>
              <TableCell align="center">ASIC</TableCell>
              <TableCell align="center">Shared Miners</TableCell>
              <TableCell align="center">Details</TableCell>
              <TableCell align="center">Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">{row.BTC}</TableCell>
                <TableCell align="center">{row["data & time"]}</TableCell>
                <TableCell align="center">{row.ASIC}</TableCell>
                <TableCell align="center">{row["shared miners"]}</TableCell>
                <TableCell align="center">Details</TableCell>
                <TableCell align="center">Download</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="activeLink"
      />
    </Box>
  );
};

export default HistoryProfit;
