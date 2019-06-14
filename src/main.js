import React from "react";
import history from "config/history";
import HomePage from "containers/Home";
import AppBar from "components/AppBar";
import NotFoundPage from "containers/NotFound";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router, Switch, Route } from "react-router-dom";

import theme from "theme";

export default () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar />
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  </ThemeProvider>
);
