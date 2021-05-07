import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Paper,
  Grid,
} from '@material-ui/core';
import { parse } from 'qs';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { initResource } from 'src/actions/resourceActions';
import { server_url, redirect_uri } from 'src/current-env';

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
  const dispatch = useDispatch();

  const code = parse(window.location.search, { ignoreQueryPrefix: true })?.code;
  // const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTk4OUIwNTdDOUMzMzg0MDc4MDBBOEJBNkNCOUZFQjMzRTk1MTBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IkZGbUpzRmZKd3poQWVBQ291bXk1X3JNLWxSQSJ9.eyJuYmYiOjE2MjAzNjc1NjMsImV4cCI6MTYyMDM3MTE2MywiaXNzIjoiaHR0cHM6Ly9hdXRoLnRydWVsYXllci5jb20iLCJhdWQiOiJkYXRhX2FwaSIsImNsaWVudF9pZCI6InJpb2VwaHJhaW0tOTg4OTViIiwic3ViIjoiY1puSER3VFA3N2pDMWNjYll4MWJudWhkZUhiMjlhQTYyQUgxM1BxMHNzcz0iLCJhdXRoX3RpbWUiOjE2MjAzNjc1NTAsImlkcCI6ImxvY2FsIiwianRpIjoiMDFBNTA2MUZCM0EwMDA3QzUyRjc4MEVGMzcwM0Q0RTciLCJzaWQiOiJhdXRoLUFYbUZkaVk0SnZ0cUYwRGRwaTQxN1VYSVFVdU1CQVVoLUROV1V2Q2JyQ3MiLCJpYXQiOjE2MjAzNjc1NjMsImNvbm5lY3Rvcl9pZCI6Im1vY2siLCJjcmVkZW50aWFsc19rZXkiOiJiMjQyZmY1ZTlkYjc2ZmU2NzhiMTNhZTkxMTZkYTljZWIzM2U5NDA0NjRmNTI1MjQ3MDQ5NWY5YmU0NDYxMWFiIiwicHJpdmFjeV9wb2xpY3kiOiJGZWIyMDE5IiwiY29uc2VudF9pZCI6IjMwN2NlOWZlLWE4OTMtNGExYi05MWZjLTdiZmViODYxNTM2OSIsInNjb3BlIjpbImluZm8iLCJhY2NvdW50cyIsImJhbGFuY2UiLCJjYXJkcyIsInRyYW5zYWN0aW9ucyIsImRpcmVjdF9kZWJpdHMiLCJzdGFuZGluZ19vcmRlcnMiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.Yy-8fRbMpmiG2PyBqYn_dwm-v3k8XoCiy0MYrovjnFiXebk_KrUuGB7UAqKHhD4WP4FaKzpJmsNZZietRXWCdszF_sxqqGcUQl2jrwO4Ev3KQqX4Ar0novH-cps4riVsl6E4r-d5e1NNhuq_fuksTQJXyRUlaOssnQNE5hea9VIBJgt1f8GAbH7GfZ9kRpKuoNo781Y_XZuPAXvhL4h78Xmh8q7pXktRH_FClrlUxKG3hFY2Y6Zd55ZKbYTCDiltiKlpmHlDmVvUNm78BcMdWUDkNpWWiwM4M7s3NBbAvOpAns8To9H8nXu5MK7Uabp2C_7YEAfOJ7H_15yIoxT2JA';

  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if (code) {
      const data = {
        'grant_type': 'authorization_code',
        'client_id': 'rioephraim-98895b',
        'client_secret': '9dc8561d-c8f2-476c-978e-d08f84a54bfb',
        'redirect_uri': redirect_uri,
        'code': code
      };

      const config = {
        method: 'post',
        url: `${server_url}/authtruelayer`,
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      axios(config)
      .then(function (response) {
        const { access_token } = response.data;
        setAccessToken(access_token);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    if (accessToken) {
      dispatch(initResource({ accessToken }));
    }
    
    // eslint-disable-next-line
  }, [code, accessToken]);

  return (
    <Container maxWidth={false} className={classes.root}>
      <Container maxWidth="lg" className={classes.body}>
        <Paper className={classes.bodyContainer}>
          <Grid container spacing={2}>
            <h1 style={{padding: '15px'}}>Connect Your Bank</h1>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
}

export default Dashboard;
