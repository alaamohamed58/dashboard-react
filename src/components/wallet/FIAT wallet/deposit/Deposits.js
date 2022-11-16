import { useEffect, useState, useMemo, Fragment } from "react";
import ReactPaginate from "react-paginate";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  link: {
    color: "#2776EA",
    textDecoration: "underline",
  },
});

const Deposits = () => {
  const classes = useStyles();

  const DUMMY_DATA = useMemo(
    () => [
      {
        id: "d1",
        "date & time": "05/07/2022 - 10:46",
        amount: 430,
        via: "Wire Transfer",
      },
      {
        id: "d2",
        "date & time": "05/07/2022 - 10:46",
        amount: 540,
        via: "Wire Transfer",
      },
      {
        id: "d3",
        "date & time": "05/07/2022 - 10:46",
        amount: 600,
        via: "Wire Transfer",
      },
      {
        id: "d4",
        "date & time": "05/07/2022 - 10:46",
        amount: 410,
        via: "Wire Transfer",
      },
      {
        id: "d5",
        "date & time": "05/07/2022 - 10:46",
        amount: 200,
        via: "Wire Transfer",
      },
      {
        id: "d6",
        "date & time": "05/07/2022 - 10:46",
        amount: 430,
        via: "Wire Transfer",
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
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date & Time</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Via</TableCell>
              <TableCell align="center"> Details </TableCell>
              <TableCell align="center">Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">{row["date & time"]}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.via}</TableCell>
                <TableCell align="center" className={classes.link}>
                  <Link to="/wallet">Details</Link>{" "}
                </TableCell>
                <TableCell align="center" className={classes.link}>
                  <Link to="/wallet">Download</Link>
                </TableCell>
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
    </Fragment>
  );
};

export default Deposits;
