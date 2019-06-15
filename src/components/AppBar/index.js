import history from "config/history";
import useStyles from "hooks/useStyles";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Home";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import { NewsContext } from "contexts/newsContext";
import React, { useContext, useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import { QueryContext } from "contexts/queryContext";
import IconButton from "@material-ui/core/IconButton";

import styles from "./styles";

export default () => {
  const classes = useStyles(styles);
  const [input, setInput] = useState("");
  const { setQuery, setPage } = useContext(QueryContext);
  const { setNews, setHasMore, setLatest } = useContext(NewsContext);

  const handleHome = () => {
    setPage(1);
    setNews([]);
    setQuery("");
    setInput("");
    setHasMore(true);
    history.push("/");
  };

  const handleChange = ({ key }) => {
    if (key === "Enter") {
      history.push("/");
      setPage(1);
      setNews([]);
      setLatest([]);
      setQuery(input);
      setHasMore(true);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={handleHome}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={input}
              onKeyPress={handleChange}
              onChange={({ target: { value } }) => setInput(value)}
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
