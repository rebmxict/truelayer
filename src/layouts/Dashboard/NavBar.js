/* eslint-disable react/no-multi-comp */
import React from 'react';
import { useLocation } from 'react-router';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Drawer,
  List,
  ListSubheader,
  Hidden,
} from '@material-ui/core';
import NavItem from 'src/components/NavItem';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  navigation: {
    overflow: 'auto',
    padding: theme.spacing(0, 2, 2, 2),
    flexGrow: 1
  },
}));

function renderNavItems({
  // eslint-disable-next-line react/prop-types
  items, subheader, key, ...rest
}) {
  return (
    <List key={rest.pathname}>
      {subheader && <ListSubheader disableSticky>{subheader}</ListSubheader>}
      {/* eslint-disable-next-line react/prop-types */}
      {items.reduce(
        // eslint-disable-next-line no-use-before-define
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc, pathname, item, depth = 0,
}) {
  if (item.items) {
    const open = item.items.find((a) => pathname.includes(a.href)) ? true : false;
    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={item.href}
        label={item.label}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={item.href}
        label={item.label}
        title={item.title}
      />
    );
  }

  return acc;
}

function NavBar({
  desktopMenuOpen,
  openMobile,
  onMobileClose,
  className,
  ...rest
}) {
  const classes = useStyles();
  const location = useLocation();
  const navMenu = [{
    items: [
      {
        title: 'Files group 1',
        href: '/dashboard',
        items: [
          {
            title: 'File1',
            href: '/file1',
          },
          {
            title: 'File2',
            href: '/file2',
            items: [
              {
                title: 'File21',
                href: '/file21',
              },
            ]
          }
        ]
      },
      {
        title: 'Files 2021.01.10',
        href: '/2021',
        items: [
          {
            title: 'File91',
            href: 'file91',
          },
        ]
      },
    ]
  }];

  const content = (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/* NAVIGATION MENU ITEMS */}
      <nav className={classes.navigation}>
        {navMenu.map((list) => renderNavItems({
          items: list.items,
          subheader: list.subheader,
          pathname: location.pathname,
          key: list.subheader,
        }))}
      </nav>
    </div>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{
            paper: classes.mobileDrawer
          }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{
            paper: classes.desktopDrawer
          }}
          open={true}
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
