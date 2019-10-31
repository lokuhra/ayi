import React, { useCallback, useContext } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Context } from '../../Provider';
import {
  pluck,
  sortBy,
  prop,
  compose,
  uniq,
} from 'ramda';

const SelectCOmp = ({ type, filterType }) => {
  const { state, dispatch } = useContext(Context);

  const filterData = compose(
    uniq,
    pluck(filterType),
    sortBy(prop(filterType))
  )(state.last_movements);


  const handleChangeSelect = useCallback(
    (value, prop) => {
      dispatch({
        type: 'FILTER_BY_SELECT',
        payload: [value, prop]
      });
    },
    [dispatch]
  );

  return (
    <FormControl>
      <InputLabel htmlFor={`${filterType}-required`}>{type}</InputLabel>
      <Select
        displayEmpty
        value={filterData[0]}
        inputProps={{
          id: `${filterType}-required`
        }}
        onChange={({ target: { value } }) =>
          handleChangeSelect(value, filterType)
        }
      >
        {filterData.map((i, y) => (
          <MenuItem key={y} value={i}>
            {i}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCOmp;
