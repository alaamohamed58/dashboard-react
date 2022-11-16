import { Fragment } from "react";
import { Box, Container } from "@mui/material";

import Header from "./Header";
import MainNavigation from "./MainNavigation";

const MuiLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <Box sx={{ display: "flex" }}>
        <MainNavigation />

        <Container
          component="main"
          maxWidth={false}
          sx={{
            marginLeft: { lg: "calc(317px + 80px)", xs: "auto" },
            marginRight: { lg: "80px", xs: "auto" },
            padding: { xs: "0 16px", xl: "0 0" },
          }}
        >
          <Box component="section" sx={{ padding: "50px 0px" }}>
            {children}
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default MuiLayout;
