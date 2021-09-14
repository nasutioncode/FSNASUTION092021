import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./style.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";

import useStyles from "./style";

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Navbar />
      <div className={classes.marginWrap}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
