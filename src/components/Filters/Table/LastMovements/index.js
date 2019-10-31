import React, { Fragment } from 'react';
import Table from './Table';
import Menu from '../../Menu';
import { useToggle } from 'react-use';
import {makeStyles} from "@material-ui/core";

const TableIndex = () => {
  const [isCardView, toggleIsCardView] = useToggle(false);
    const useStyles = makeStyles(theme => ({
        margin: {
            marginTop: "51px",
        },

    }));
    const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Menu onCLickViewCard={toggleIsCardView} typeMenu={"Últimos Movimientos"} />
      <Table isCardView={isCardView} />
    </div>
  );
};

export default TableIndex;
