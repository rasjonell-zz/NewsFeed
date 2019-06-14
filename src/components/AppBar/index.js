import useStyles from "hooks/useStyles";
import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import { NewsContext } from "contexts/newsContext";
import InputBase from "@material-ui/core/InputBase";
import { QueryContext } from "contexts/queryContext";

import styles from "./styles";

export default () => {
  const classes = useStyles(styles);
  const { setNews, setHasMore } = useContext(NewsContext);
  const { query, setQuery } = useContext(QueryContext);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
    setHasMore(true);
    setNews([]);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={query}
              onChange={handleChange}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "Search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
