import GridContainer from "./grid";
import useStyles from "hooks/useStyles";
import React, { useContext } from "react";
import SnackBar from "components/SnackBar";
import Divider from "@material-ui/core/Divider";
import PinnedPanel from "components/PinnedPanel";
import { NewsContext } from "contexts/newsContext";
import InfiniteScroll from "react-infinite-scroller";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./styles";

export default () => {
  const classes = useStyles(styles);
  const { news, loadNews, hasMore, latest } = useContext(NewsContext);

  return (
    <div>
      <PinnedPanel />
      {!!latest.length && (
        <div>
          <Typography variant="h5">Latest News</Typography>
          <GridContainer classes={classes} news={latest} />
          <Divider className={classes.divider} />
        </div>
      )}
      <InfiniteScroll
        pageStart={0}
        hasMore={hasMore}
        loadMore={loadNews}
        loader={
          <div key="loader" className={classes.loading}>
            <CircularProgress />
          </div>
        }
      >
        <GridContainer classes={classes} news={news} />
      </InfiniteScroll>
      <SnackBar />
    </div>
  );
};
