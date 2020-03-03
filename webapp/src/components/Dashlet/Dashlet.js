import React from "react";
import { makeStyles } from "@material-ui/styles";
import Breadcrumbs from "../Navigation/Breadcrumbs/Breadcrumbs";

const useStyles = makeStyles(theme => ({
  pad3: {
    padding: theme.spacing(3)
  },
  pad4: {
    padding: theme.spacing(4)
  }
}));

const Dashlet = props => {
  const classes = useStyles();
  return (
    <div className={props.container == "listing" ? classes.pad3 : classes.pad4}>
      {props.breadcrumbs ? (
        <Breadcrumbs modules={props.breadcrumbs}></Breadcrumbs>
      ) : (
        ""
      )}
      {props.children}
    </div>
  );
};

export default Dashlet;
