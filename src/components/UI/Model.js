import { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ConvertModel from "./ConvertModel";

const Model = ({ hideModelHandler }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideModelHandler={hideModelHandler} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ConvertModel hideModelHandler={hideModelHandler} />,
        document.getElementById("model")
      )}
    </Fragment>
  );
};

export default Model;
