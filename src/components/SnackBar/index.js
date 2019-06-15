import useStyles from "hooks/useStyles";
import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowUp from "@material-ui/icons/ArrowUpward";
import { NotificationContext } from "contexts/notificationContext";

import styles from "./styles";

export default () => {
  const classes = useStyles(styles);
  const { open, setOpen } = useContext(NotificationContext);

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") return;

    window.scrollTo(0, 0);
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Check Out Latest News!</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <ArrowUp />
          </IconButton>
        ]}
      />
    </div>
  );
};
