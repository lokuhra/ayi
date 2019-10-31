import React, { useContext, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import { Context, filterByPaid } from '../../../Provider';
import RowTable from './RowTable';

const RowMap = ({ onClickCheck, isCardView }) => {
  const { state } = useContext(Context);

  const data = filterByPaid(true)(state.last_movements);

  const handleChangeValue = useCallback(id => onClickCheck(id), [onClickCheck]);
  return (
    <Grid container justify="space-between" alignItems="center">
      {data.map(i => (
        <RowTable
          key={i.id}
          {...i}
          onClickCheck={handleChangeValue}
          isCardView={isCardView}
        />
      ))}
    </Grid>
  );
};

export default RowMap;
