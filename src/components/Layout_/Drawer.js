import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';

const MyItemMenu = ({ text, children, isOpenMenu }) => {
  const useStyles = makeStyles(theme => ({
    notPadding: {
      paddingLeft: '0px',
      paddingRight: '8px'
    },
    displayNone: {
      display: 'none'
    }
  }));
  const classes = useStyles();

  return (
    <MenuItem className={classes.notPadding}>
      {children}
      <p className={isOpenMenu ? classes.displayNone : ''}>{text}</p>
    </MenuItem>
  );
};

const DrawerComponent = ({ isOpenMenu }) => {
  const StyledDrawer = styled(Drawer)`
    .MuiPaper-root {
      top: auto;
    }
  `;
  return (
    <Box display={"flex"}>
      <StyledDrawer variant="permanent" bgcolor="primary.main">
        <MyItemMenu text={'buscar'} isOpenMenu={isOpenMenu}>
          <DeleteIcon />
        </MyItemMenu>
        <MyItemMenu text={'buscar'} isOpenMenu={isOpenMenu}>
          <DeleteIcon />
        </MyItemMenu>
        <MyItemMenu text={'buscar'} isOpenMenu={isOpenMenu}>
          <DeleteIcon />
        </MyItemMenu>
        <MyItemMenu text={'buscar'} isOpenMenu={isOpenMenu}>
          <DeleteIcon />
        </MyItemMenu>
        <MyItemMenu text={'buscar'} isOpenMenu={isOpenMenu}>
          <DeleteIcon />
        </MyItemMenu>
      </StyledDrawer>
      <p>asdDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</p>
    </Box>
  );
};

export default DrawerComponent;
