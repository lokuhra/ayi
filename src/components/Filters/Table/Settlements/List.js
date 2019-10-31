import React, { useContext, useCallback, Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Context } from '../../../Provider';
import RowTable from './RowTable';

const RowMap = ({ onClickCheck, isCardView, onClickPaid }) => {
  const { state } = useContext(Context);

  const data = state.last_movements;

  const handleChangeValue = useCallback(id => onClickCheck(id), [onClickCheck]);
  const handleOnClickPaid = useCallback((id, paid) => onClickPaid(id, paid), [
    onClickPaid
  ]);
  return (
    <Fragment>
      <Grid container justify="space-between" alignItems="center">
        {data.map(i => (
          <RowTable
            key={i.id}
            {...i}
            onClickCheck={handleChangeValue}
            isCardView={isCardView}
            onClickPaid={handleOnClickPaid}
          />
        ))}
      </Grid>
    </Fragment>
  );
};

export default RowMap;
