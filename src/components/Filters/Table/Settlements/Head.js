import React, { useCallback, useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Row from './Row';
import { Context } from '../../../Provider';
import { useToggle } from 'react-use';
import { makeStyles } from '@material-ui/core';

const HeadTable = ({ isCardView }) => {
  const { dispatch } = useContext(Context);

  const [checked, setChecked] = useToggle(false);

  const handleChangeValue = useCallback(
    id => {
      dispatch({
        type: 'ALL_CHECKS',
        payload: id
      });
    },
    [dispatch]
  );

  const handleOnClick = () => {
    setChecked();
    handleChangeValue(!checked);
  };

  const useStyles = makeStyles(theme => ({
    displayNone: {
      display: 'none'
    }
  }));

  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-between"
      className={isCardView ? classes.displayNone : ''}
    >
      <Grid item xs="auto">
        <Checkbox color={'primary'} checked={checked} onClick={handleOnClick} />
      </Grid>
      <MenuTitle size={2} title={'Periodo'} action={'ORDER_TYPE'} />
      <MenuTitle size={4} title={'Detalle'} action={'ORDER_DETAIL'} />
      <MenuTitle size={2} title={'Montos'} action={'ORDER_AMOUNT'} />
      <MenuTitle size={2} title={'Estado'} action={'ORDER_DATE'} />
      <Row size={1}>ACCIONES</Row>
    </Grid>
  );
};

const MenuTitle = ({ size, title, action }) => {
  const { dispatch } = useContext(Context);
  const [bool, toggle] = useToggle(true);

  const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: 'flex-start',
      padding: 0
    }
  }));

  const handleChangeSort = useCallback(
    sort => {
      dispatch({
        type: action + sort,
        payload: sort
      });
    },
    [dispatch]
  );

  const handleOnClickHeadTable = () => {
    toggle();
    const sorType = !bool ? '_ASC' : '_DESC';
    console.log(action + sorType);
    handleChangeSort(sorType);
  };

  const classes = useStyles();

  return (
    <Row size={size}>
      <Button onClick={handleOnClickHeadTable} className={classes.root}>
        {title}
      </Button>
    </Row>
  );
};

export default HeadTable;
