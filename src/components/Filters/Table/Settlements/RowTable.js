import React, { memo, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Row from './Row';
import Chip from '../../Chip';
import { makeStyles } from '@material-ui/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  root: {
    background: '#fafafa',
    border: 0,
    borderRadius: 0,
    boxShadow: 'none',
    color: 'black'
  },
  gridMobile: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
});

const TableRow = ({
  checked,
  period,
  client,
  clientID,
  amount,
  paid,
  onClickCheck,
  onClickPaid,
  id,
  isCardView
}) => {
  const viewCardGrid = isCardView ? { xs: 5 } : { container: true };

  const classes = useStyles();
  console.log('Rendering <RowTable />');

  return (
    <Grid
      {...viewCardGrid}
      justify="space-between"
      className={isCardView ? classes.gridMobile : ''}
    >
      <Grid item size={1}>
        <Checkbox
          color={'primary'}
          checked={checked}
          onClick={() => onClickCheck(id)}
        />
      </Grid>
      <Row size={isCardView ? 11 : 2}>{period}</Row>
      <Row size={isCardView ? 12 : 4}>{`${client} - ${clientID}`}</Row>
      <Row size={isCardView ? 6 : 2}>{amount} </Row>
      <Row size={isCardView ? 6 : 2}>
        <Chip paid={paid} />
      </Row>
      <Row size={isCardView ? 12 : 1}>
        <Actions onClickPaid={onClickPaid} id={id} paid={paid}/>
      </Row>
    </Grid>
  );
};

function Actions({ onClickPaid, id, paid }) {
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles(theme => ({
    root: {
      position: 'relative'
    },
    paper: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: -100,
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
            <MoreHoriz />
          </Button>

          {open ? (
            <Paper className={classes.paper}>
              <MenuItem>
                <VisibilityIcon />
                Ver Detalle
              </MenuItem>
              <MenuItem onClick={()=>{onClickPaid(id, paid);handleClickAway()}}>Pagar en Farmacoins</MenuItem>
            </Paper>
          ) : null}
        </Grid>
      </ClickAwayListener>
    </Grid>
  );
}

export default memo(TableRow);
