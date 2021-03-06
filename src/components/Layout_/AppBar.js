import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  appBarContentLeft: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    alignItems: 'center'
  },
  appBarContentRigth: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '50%'
  },
  menuButton: {
    padding: '12px 12px 12px 24px'
  },
  title: {
    flexGrow: 1
  }
}));

export default function MenuAppBar({ onClickMenu }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color={'secondary'}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={onClickMenu}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.appBarContent}>
          <div className={classes.appBarContentLeft}>
            <Typography variant="h6" className={classes.title}>
              Photos
            </Typography>
          </div>
          <div className={classes.appBarContentRigth}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>asd</MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
