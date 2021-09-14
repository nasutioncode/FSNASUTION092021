import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import logoNascodefy from "../../images/logo-nascodefy.png";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";

import { useDispatch } from "react-redux";

function Navbar() {
  const webName = "{()=>nasution}";
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  console.log("ini user", user);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    //cek token expires
    if (token) {
      const decodeToken = decode(token);

      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");

    setUser(null);
  };

  return (
    <div>
      <AppBar className={classes.appBar} color="primary">
        <div className={classes.brandContainer}>
          <img
            className={classes.image}
            src={logoNascodefy}
            alt="icon"
            height="80"
          />
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h5"
            align="center"
          >
            {webName}
          </Typography>
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            // user sudah login
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            // jika belum login
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
            >
              SignIn
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
