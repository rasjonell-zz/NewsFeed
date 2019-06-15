import React from "react";
import useStyles from "hooks/useStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./styles";

export default ({ color = "primary", size = 100 }) => {
  const classes = useStyles(styles);
  return (
    <div className={classes.root}>
      <CircularProgress color={color} size={size} />
    </div>
  );
};
