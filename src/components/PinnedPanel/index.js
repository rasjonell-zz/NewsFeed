import some from "lodash/some";
import includes from "lodash/includes";
import useStyles from "hooks/useStyles";
import Grid from "@material-ui/core/Grid";
import { useCookies } from "react-cookie";
import FeedItem from "components/FeedItem";
import React, { useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { PinnedContext } from "contexts/pinnedContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import styles from "./styles";

export default () => {
  const classes = useStyles(styles);
  const { pinned } = useContext(PinnedContext);
  const [expanded, setExpanded] = useState(true);
  const [cookies] = useCookies(["visited-pages"]);

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded}>
        <ExpansionPanelSummary
          id="panel-header"
          aria-controls="panel-content"
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
        >
          <Typography>Pinned News</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.field}>
            {pinned.map(item => (
              <div className={classes.item} key={item.id}>
                <FeedItem
                  item={item}
                  pinned={some(pinned, { id: item.id })}
                  visited={includes(cookies["visited-pages"], item.id)}
                />
              </div>
            ))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
