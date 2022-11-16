import { Box } from "@mui/material";

const Backdrop = ({ hideModelHandler }) => {
  return (
    <Box
      onClick={hideModelHandler}
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        width: 1,
        height: 1,
        background: "rgba(0,0,0,0.6)",
        "z-index": 11,
      }}
    ></Box>
  );
};

export default Backdrop;
