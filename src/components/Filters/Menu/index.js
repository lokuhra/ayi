import React, { Fragment, useState } from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { FaFilePdf, FaFileExcel, FaFileWord } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useToggle } from 'react-use';
import SubMenu from './SubMenu';

const MyFab = ({ children }) => {
  const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1)
    },
    buttons: {
      background: '#fafafa',
      border: 0,
      borderRadius: 'none',
      boxShadow: 'none',
      color: 'black'
    }
  }));



  const classes = useStyles();

  return (
    <Fab
      variant="extended"
      aria-label="delete"
      className={classes.buttons}
      size={'small'}
      color={'inherit'}
    >
      {children}
    </Fab>
  );
};

const SelectCOmp = () => (
  <FormControl>
    <InputLabel htmlFor="age-required">Fechas</InputLabel>
    <Select
      displayEmpty
      value={'Último Mes'}
      inputProps={{
        id: 'age-required'
      }}
    >
      <MenuItem value={'Último Mes'}>Último Mes</MenuItem>
      <MenuItem value={'Periodo Actual'}>Periodo Actual</MenuItem>
      <MenuItem value={'Hoy'}>Hoy</MenuItem>
      <MenuItem value={'Ayer'}>Ayer</MenuItem>
      <MenuItem value={'Última Semana'}>Última Semana</MenuItem>
      <MenuItem value={'Últimos 15 días'}>Últimos 15 días</MenuItem>
      <MenuItem value={'Otro Periodo'}>Otro Periodo</MenuItem>
      <MenuItem value={'Últimos años'}>Últimos años</MenuItem>
    </Select>
  </FormControl>
);

function Download() {
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles(theme => ({
    root: {
      position: 'relative'
    },
    paper: {
      position: 'absolute',
      top: 36,
      right: 0,
      left: 0,
      zIndex: 1500
    }
  }));

  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <Grid className={classes.root}>
      <ClickAwayListener
        onClickAway={handleClickAway}
        className={classes.zIndex}
      >
        <Grid container alignItems={'center'}>
          <Button onClick={handleClick}>
            <Fragment>
              <CloudDownloadOutlinedIcon />
              Descargar
            </Fragment>
          </Button>

          {open ? (
            <Paper className={classes.paper}>
              <MenuItem>
                <FaFilePdf />
                .pdf
              </MenuItem>
              <MenuItem>
                <FaFileExcel />
                .xls
              </MenuItem>
              <MenuItem>
                <FaFileWord />
                .doc
              </MenuItem>
            </Paper>
          ) : null}
        </Grid>
      </ClickAwayListener>
    </Grid>
  );
}

const Menu = ({ onCLickViewCard, typeMenu }) => {
  const [isOpenSub, toggleIsOpenSub] = useToggle(false);
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems={'center'}
    >
      <Grid item xs={2} alignItems={'center'} container>
        <Typography variant="subtitle1">{typeMenu}</Typography>
      </Grid>
      <Grid
        item
        xs={10}
        container
        justify="space-between"
        direction="row"
        alignItems={'stretch'}
      >
        <Grid container xs={2} alignItems={'center'}>
          <Input endAdornment={<SearchOutlinedIcon />} />
        </Grid>
        <Grid container xs={2} alignItems={'center'}>
          <SelectCOmp />
        </Grid>
        <Grid
          container
          xs={2}
          alignItems={'center'}
          direction="row"
          onClick={toggleIsOpenSub}
        >
          <MyFab>
            <TuneIcon />
            Filtrar
          </MyFab>
        </Grid>
        <Grid container xs={2} alignItems={'center'} onClick={onCLickViewCard}>
          <MyFab>
            <ViewModuleIcon />
            Vista Card
          </MyFab>
        </Grid>
        <Grid container xs={2} alignItems={'center'}>
          <Download />
        </Grid>
      </Grid>
      {isOpenSub && (
        <Grid container alignItems={'center'} justify="space-around">
          <SubMenu type={'Periodo'} filterType={'period'} />
          <SubMenu type={'Detalle'} filterType={'client'} />
          <SubMenu type={'Monto'} filterType={'amount'} />
        </Grid>
      )}
    </Grid>
  );
};

export default Menu;
