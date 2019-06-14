import React from "react";
import { Browser } from "react-kawaii";
import useStyles from "hooks/useStyles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

export default () => {
  const { root, icon } = useStyles(styles);

  return (
    <div className={root}>
      <Browser className={icon} size={250} />
      <Typography variant="h5" align="center">
        Oops... The Page You Requested was not found
      </Typography>
      <Typography variant="h6" align="center" component={Link} to="/">
        Go Home
      </Typography>
    </div>
  );
};
