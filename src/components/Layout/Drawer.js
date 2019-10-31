import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const list = [
  {
    primaryText: 'Inicio',
    icon: 'home',

  },
  {
    primaryText: 'Transferencias en Farmacoins',
    icon: 'redo'
  },
  {
    primaryText: 'Cargar Saldo en Pesos',
    icon: 'reply'
  },
  {
    primaryText: 'Liquidaciones',
    icon: 'web'
  },
  {
    primaryText: 'Solicitudes de Transferencia',
    icon: 'mobile_screen_share'
  },
  {
    primaryText: 'Últimos movimientos',
    icon: 'check_circle_outline'
  }
];




const Drawer = () => {
  const [selectSection, setSelectSection] = useState(0);

  const useStyles = makeStyles(theme => ({
    overflowX: {
      overflowX: 'hidden',
      backgroundColor: "#2b42a4",
      height:"100%",
      paddingTop:"51px"
    },
    marginRightListItem:{
      marginRight: "10px"
    },
    colorWhite:{
      color:"#f5f5f5"
    }
  }));
  const classes = useStyles();

  const Item = ({ primaryText, icon, index }) => (
    <ListItem
      selected={index === selectSection}
      button
      onClick={() => setSelectSection(index)}

    >
      <ListItemIcon className={classes.colorWhite}>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText
          className={classes.colorWhite}
        primary={primaryText}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  );
  return (
    <List className={classes.overflowX}>
      {list.map(({ primaryText, icon }, index) => (
        <Item
          key={primaryText}
          index={index}
          primaryText={
            <Typography
                component="span"
                variant="body2"
                className={classes.colorWhite}
                color="textPrimary"
            >
              {primaryText}
            </Typography>
          }
          icon={icon}
        />
      ))}
    </List>
  );
};

Drawer.propTypes = {};
Drawer.defaultProps = {};

export default Drawer;
