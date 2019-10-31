import React, { useContext, useCallback } from 'react';
import HeadTable from './Head';
import Grid from '@material-ui/core/Grid';
import List from './List';
import { Context } from '../../../Provider';

const Table = ({ isCardView }) => {
  const { dispatch } = useContext(Context);


  const handleChangeValue = useCallback(
    id => {
      dispatch({
        type: 'ON_CHECK',
        payload: id
      });
    },
    [dispatch]
  );
  return (
    <Grid container alignItems="center">
      <HeadTable isCardView={isCardView}/>
      <List onClickCheck={handleChangeValue} isCardView={isCardView}/>
    </Grid>
  );
};

export default Table;
