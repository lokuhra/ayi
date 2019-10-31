import React, { useContext, useCallback, Fragment, useState } from 'react';
import HeadTable from './Head';
import Grid from '@material-ui/core/Grid';
import List from './List';
import { Context } from '../../../Provider';
import { makeStyles } from '@material-ui/core';
import ErrorIcon from '@material-ui/core/SvgIcon/SvgIcon';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const Table = ({ isCardView }) => {
  const { dispatch } = useContext(Context);

    const [snackBars, setOpenSnackBars] = useState(false);

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBars(false);
    };

  const handleChangeValue = useCallback(
    id => {
      dispatch({
        type: 'ON_CHECK',
        payload: id
      });
    },
    [dispatch]
  );

  const handleOnClickPaid = useCallback(
    (id, paid) => {
      paid ? setOpenSnackBars(true) :
        dispatch({
          type: 'ON_PAID',
          payload: id
        });
    },
    [dispatch]
  );



  return (
    <Grid container alignItems="center">
      <HeadTable isCardView={isCardView} />
      <List
        onClickCheck={handleChangeValue}
        isCardView={isCardView}
        onClickPaid={handleOnClickPaid}
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={snackBars}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
      >
        <MySnackbarContentWrapper
          onClose={handleCloseSnackBar}
          variant="error"
          message="El pago se realizo con anterioridad."
        />
      </Snackbar>
    </Grid>
  );
};

function MySnackbarContentWrapper(props) {
  const useStyles1 = makeStyles(theme => ({
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.main
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  }));

  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = ErrorIcon;

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

export default Table;
