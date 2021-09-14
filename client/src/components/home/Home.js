import React, { useState, useEffect } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';
import useStyles from './styles';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

import { useDispatch } from 'react-redux';

function Home() {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  console.log('ini user', user);

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

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');

    setUser(null);
  };

  return (
    <div>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
            className={classes.mainContainer}
          >
            <Grid item xs={12} sm={12} className={classes.formWrap}>
              {user ? (
                // user sudah login
                <h1>Congratulations!</h1>
              ) : (
                // jika belum login
                <h1>Please Login</h1>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default Home;
