import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Typography, Stack, Box } from "@mui/material";
import { Button } from "@mui/material";
import { MainTitle } from "../../../customThemes";
import { cartActions } from "../../../store/cart-slice";
import ModelDataMobile from "./ModelDataMobile";

const h3Style = {
    color: "#0A194E",
    fontSize: { xs: "14px", xl: "22px" },
    fontWeight: 700,
  },
  counter = {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    textAlign: "center",
    backgroundColor: "custom.main",
    color: "#Fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    fontWeight: 700,
    cursor: "pointer",
    "user-select": "none",
  },
  spanStyle = {
    color: "custom.secondary",
    fontSize: { xs: "12px", xl: "15px" },
    fontWeight: 700,
  };

const ModelData = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 992px)").matches
  );

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    window.matchMedia("(max-width: 992px)").addEventListener("change", handler);
  }, []);

  const dispatch = useDispatch();

  const addModelFarmHandler = () => {
    dispatch(
      cartActions.addModel({
        model: props.model,
        price: props.price,
        image: props.image,
        warrently: props.warrently,
        quantity: quantity,
      })
    );
    props.activeStepHandler();
  };

  if (matches) {
    return (
      <ModelDataMobile
        props={props}
        h3Style={h3Style}
        addModelFarmHandler={addModelFarmHandler}
        counter={counter}
        quantity={quantity}
        setQuantity={setQuantity}
        spanStyle={spanStyle}
      />
    );
  }
  return (
    <Box
      component="li"
      sx={{
        padding: "30px",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", xl: "row" },
        gap: "30px",
        border: "2px solid #CEDDF2",
        background: "#fff",
        marginBottom: "51px",
      }}
    >
      <Box
        component="img"
        src="/images/icons/model.svg"
        sx={{ display: "inline-block", width: "263.18px" }}
      />

      <Stack sx={{ width: "100%" }}>
        <MainTitle
          component="h2"
          sx={{
            m: 0,
            textAlign: "left",
            borderBottom: "1px solid #CEDDF2",
          }}
        >
          {props.title}{" "}
        </MainTitle>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px 50px", xl: "30px 112px" },
            border: "1px solid #CEDDF2",
            borderLeft: "none",
            borderRight: "none",
            padding: "20px 0",
          }}
        >
          <div>
            <Typography
              component="span"
              sx={{
                color: "custom.secondary",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Model
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {props.model}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{
                color: "custom.secondary",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Hash Rate
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.rate}{" "}
            </Typography>
          </div>

          <div>
            <Typography
              component="span"
              sx={{
                color: "custom.secondary",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              Power
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.power}{" "}
            </Typography>
          </div>

          <div>
            <Typography component="span" sx={spanStyle}>
              Algorithm
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.algorithm}{" "}
            </Typography>
          </div>

          <div>
            <Typography component="span" sx={spanStyle}>
              Estimated Online Date
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.estimatedDate}{" "}
            </Typography>
          </div>

          <div>
            <Typography component="span" sx={spanStyle}>
              Warrenty
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.warrenty}{" "}
            </Typography>
          </div>

          <div>
            <Typography component="span" sx={spanStyle}>
              Conditions
            </Typography>
            <Typography component="h3" sx={h3Style}>
              {" "}
              {props.conditions}{" "}
            </Typography>
          </div>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", xl: "row" },
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: { xs: "center", xl: "space-between" },
              gap: "20px",
              borderBottom: { xs: "1px solid #ddd", xl: "none" },
              paddingBottom: { xs: "10px", xl: "0" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                sx={counter}
                onClick={() =>
                  quantity === 1
                    ? quantity === 1
                    : setQuantity((currQ) => currQ - 1)
                }
              >
                -
              </Box>
              <Typography
                componenet="span"
                sx={{ fontSize: "25px", fontWeight: 500, color: "custom.main" }}
              >
                {quantity}
              </Typography>
              <Box
                sx={counter}
                onClick={() => setQuantity((currQ) => currQ + 1)}
              >
                +
              </Box>
            </Box>

            <Button
              onClick={addModelFarmHandler}
              type="button"
              variant="contained"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "203px",
                height: "42px",
                background: "#2776EA",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "22PX",
                letterSpacing: "0.46px",
                textTransform: "uppercase",
              }}
            >
              SELECT MODEL
            </Button>
          </Box>

          <div>
            <Typography
              sx={{ fontSize: "35px", fontWeight: 700, color: "#0A194E" }}
            >
              {" "}
              ${props.price}{" "}
            </Typography>
          </div>
        </Box>
      </Stack>
    </Box>
  );
};

export default ModelData;
