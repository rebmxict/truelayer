import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { parse, stringify } from 'qs';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  body: {
    marginTop: '10px',
    width: '950px',
  },
  bodyContainer: {
    padding: '15px',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      overflow: 'scroll',
    }
  },
  results: {
    marginTop: theme.spacing(2),
  },
  originalImg: {
    // width: '100%',
    // height: '100%',
    cursor: 'crosshair',
    border: '1px solid lightgray',
  },
  rectangle: {
    border: '1px solid #FF0000',
    position: 'absolute'
  }
}));

function Dashboard() {
  const classes = useStyles();

  const code = parse(window.location.search, { ignoreQueryPrefix: true })?.code;
  console.log(parse(window.location.search, { ignoreQueryPrefix: true }));

  useEffect(() => {
    if (code) {
      var data = stringify({
        'grant_type': 'authorization_code',
        'client_id': 'rioephraim-98895b',
        'client_secret': '9dc8561d-c8f2-476c-978e-d08f84a54bfb',
        // 'redirect_uri': 'http://localhost:3000/dashboard',
        'redirect_uri': 'http://18.139.160.8/dashboard',
        'code': code
      });
      console.log(data);
      var config = {
        method: 'post',
        url: 'https://auth.truelayer.com/connect/token',
        headers: {
          'Content-Type': 'application/json; application/x-www-form-urlencoded',
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }, [code]);

  return (
    <Container maxWidth={false} className={classes.root}>
      <Container maxWidth="lg" className={classes.body}>
        <Paper className={classes.bodyContainer}>
          <Grid container spacing={2}>
            <h1>Test</h1>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
}

export default Dashboard;
