import { PageTitle } from "../../customThemes";
import MuiLayout from "../layout/MuiLayout";
import Bills from "./Bills";

const MyProducts = () => {
  return (
    <MuiLayout>
      <PageTitle component="h1">Products</PageTitle>
      <Bills />
    </MuiLayout>
  );
};

export default MyProducts;
