import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import MuiLayout from "../layout/MuiLayout";
import { CustomButton, MainTitle, PageTitle } from "../../customThemes";

const DUMMY_DATA = [
  {
    id: "d1",
    image: "/images/_placeholderImage.svg",
    title: "Shared Miners",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry.",
    miners: "1462",
  },
  {
    id: "d2",
    image: "/images/_placeholderImage (1).svg",
    title: "ASIC",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry.",
    miners: "576",
  },
];

//style

const Shop = () => {
  const [miners, setMiners] = useState([]);
  useEffect(() => {
    setMiners(DUMMY_DATA);
  }, []);

  const navigate = useNavigate();

  //route handler
  const routeHandler = () => {
    navigate("/shop/asic");
  };

  return (
    <MuiLayout>
      <PageTitle component="h1">Market Place</PageTitle>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", xl: "row" },
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "55px",
          margin: "36px auto 0 auto",
          width: { xs: "auto", md: "auto" },
        }}
      >
        {miners.map((data) => {
          return (
            <Stack
              key={data.id}
              sx={{ width: { xs: "100%", xl: "calc(50% - 55px)" } }}
            >
              <Box>
                <Box
                  component="img"
                  src={"/images/_placeholderImage.svg"}
                  alt={data.name}
                  sx={{
                    width: "100%",
                  }}
                />
              </Box>

              <Box sx={{ background: "#fff", textAlign: "center" }}>
                <MainTitle component="h3">{data.name}</MainTitle>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "16px", lg: "24px" },
                    fontWeight: 500,
                    lineHeight: "133.4%",
                    color: "custom.main",
                    marginBottom: "31px",
                  }}
                >
                  {data.description}{" "}
                </Typography>

                <Typography
                  component="h5"
                  sx={{
                    fontSize: { xs: "28px", lg: 60 },
                    fontWeight: 400,
                    color: "custom.main",
                    lineHeight: 1,
                  }}
                >
                  {data.miner_count}
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontWeight: 500, color: "custom.main" }}
                >
                  Miners
                </Typography>
                <CustomButton
                  onClick={routeHandler}
                  type="submit"
                  variant="contained"
                  sx={{
                    width: { xs: "202px", sm: "80%" },
                    height: { xs: "42px", lg: "55px" },
                    m: "54px auto 42px",
                  }}
                >
                  Continue
                </CustomButton>
              </Box>
            </Stack>
          );
        })}
      </Box>
    </MuiLayout>
  );
};

export default Shop;
