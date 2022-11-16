import { useDispatch } from "react-redux";
import { Typography, Stack, Box } from "@mui/material";
import { cartActions } from "../store/cart-slice";

let h3Style = {
  color: "#0A194E",
  fontSize: { xs: "16px", xl: "22px" },
  fontWeight: 700,
};
const spanStyle = { color: "#A2BCDC", fontSize: "15px", fontWeight: 700 };

const CheckoutData = (props) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  return (
    <Box
      component="li"
      sx={{
        padding: "30px",
        display: "flex",
        flexDirection: { xs: "column", xl: "row" },
        alignItems: "center",
        gap: "30px",
        border: "2px solid #CEDDF2",
        background: "#fff",
        marginBottom: "51px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: "30px",
          right: "30px",
          cursor: "pointer",
        }}
        onClick={deleteItemHandler}
      >
        <Box component="img" src="/images/icons/close.svg" />
      </Box>
      <Box
        component="img"
        src={props.img}
        sx={{ display: "inline-block", width: "263.18px" }}
      />

      <Stack>
        <Typography
          component="h2"
          sx={{
            color: "#0A194E",
            fontSize: "35px",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          {props.model}{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px 112px", xl: "30px 112px" },
            border: "1px solid #CEDDF2",
            borderLeft: "none",
            borderRight: "none",
            padding: "20px 0",
          }}
        >
          <Box sx={{ width: "122PX" }}>
            <Typography
              component="span"
              sx={{
                color: "#A2BCDC",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              quantity
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {props.quantity}
            </Typography>
          </Box>

          <div>
            <Typography
              component="span"
              sx={{ color: "#A2BCDC", fontSize: "15px", fontWeight: 700 }}
            >
              Electricity Plan
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.electricityPlan}{" "}
            </Typography>
          </div>

          <div>
            <Typography component="span" sx={spanStyle}>
              location
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.location}{" "}
            </Typography>
          </div>

          <div>
            <Typography component="span" sx={spanStyle}>
              Electricity Deposit
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              $60
            </Typography>
          </div>

          <Box sx={{ width: "159px" }}>
            <Typography
              component="span"
              sx={{
                color: "#A2BCDC",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Setup Charges
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              ${props.setupCharges}{" "}
            </Typography>
          </Box>

          <div>
            <Typography component="span" sx={spanStyle}>
              Price
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              ${props.price}{" "}
            </Typography>
          </div>
        </Box>
        <Box
          sx={{
            fontSize: { xs: "22px", xl: "30px" },
            color: "#0A194E",
            fontWeight: 700,
            marginTop: "21px",
          }}
        >
          Total - ${props.total.toFixed(2)}
        </Box>
      </Stack>
    </Box>
  );
};

export default CheckoutData;
