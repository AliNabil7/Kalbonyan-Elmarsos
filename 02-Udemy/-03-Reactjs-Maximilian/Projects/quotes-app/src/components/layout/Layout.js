import { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavigtion from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigtion />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
