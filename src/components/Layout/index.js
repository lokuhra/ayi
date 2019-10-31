import React, { useState } from 'react';
import { Root, Header, Nav, Content, presets } from 'mui-layout';
import NavContent from './Drawer';
import HeaderEx from './AppBar';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core';

const App = ({ children }) => {
  const [preset, setPreset] = useState('createStandardLayout');

  const useStyles = makeStyles(theme => ({
    backgroundColor: {
      backgroundColor: "#2b42a4",
    },
    marginRightListItem:{
      marginRight: "10px"
    }
  }));
  const classes = useStyles();

  return (
    <Root
      config={presets[preset]({ headerPosition: 'relative' })}
      style={{ minHeight: '100vh' }}
    >
      <Header
        renderMenuIcon={open => (open ? <ChevronLeft /> : <ChevronRight />)}
      >
        {({ screen, collapsed }) => (
          <HeaderEx
            screen={screen}
            collapsed={collapsed}
          />
        )}
      </Header>
      <Nav renderIcon={open => (open ? <ChevronRight /> : <ChevronLeft />)} className={classes.backgroundColor}>
        <NavContent  />
      </Nav>
      <Content>{children}</Content>
    </Root>
  );
};

export default App;
