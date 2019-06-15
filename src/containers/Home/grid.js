import some from "lodash/some";
import includes from "lodash/includes";
import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { useCookies } from "react-cookie";
import FeedItem from "components/FeedItem";
import { PinnedContext } from "contexts/pinnedContext";

export default ({ classes, news }) => {
  const { pinned } = useContext(PinnedContext);
  const [cookies] = useCookies(["visited-pages"]);

  return (
    <Grid container justify="space-around" alignItems="center">
      {news && news.map(item => (
        <Grid item key={item.id} xs={12} sm={6} className={classes.item}>
          <FeedItem
            item={item}
            pinned={some(pinned, { id: item.id })}
            visited={includes(cookies["visited-pages"], item.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
