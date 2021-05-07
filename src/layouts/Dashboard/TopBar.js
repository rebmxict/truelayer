/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Typography,
} from '@material-ui/core';
import AccountCircleIconOutlined from '@material-ui/icons/AccountCircleOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { redirect_uri } from 'src/current-env';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
  },
  header: {
    textAlign: 'center',
  },
  flexGrow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  userButton: {
    marginLeft: theme.spacing(1)
  },
  userIcon: {
    marginRight: theme.spacing(1)
  },
}));

function TopBar({
  onOpenNavBarMobile,
  className,
  ...rest
}) {
  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color={"primary"}
    >
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <RouterLink to="/">
          {/* <img
            alt="Logo"
            style={{width: '200px'}}
            src={`/images/logos/logo.png`}
          /> */}
          <Typography variant='h1' color='secondary'>Truelayer Info</Typography>
        </RouterLink>
        <div className={classes.flexGrow} />
        <Button
          className={classes.userButton}
          color="inherit"
          onClick={() => {
            window.location = `https://auth.truelayer.com/?response_type=code&client_id=rioephraim-98895b&scope=info%20accounts%20balance%20cards%20transactions%20direct_debits%20standing_orders%20offline_access&redirect_uri=${redirect_uri}&providers=uk-ob-all%20uk-oauth-all%20uk-cs-mock`
          }}
        >
          <Hidden xsDown>
            <AccountCircleIconOutlined className={classes.userIcon} />
          </Hidden>
          Connect my Bank
        </Button>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default TopBar;
