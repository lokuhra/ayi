import React, { useReducer, useEffect, useRef, useMemo } from 'react';
import {
  curry,
  map,
  propEq,
  assoc,
  when,
  filter,
  where,
  equals,
  ascend,
  prop,
  descend,
  sort,
  pathSatisfies
} from 'ramda';
import moment from 'moment'

export const Context = React.createContext();
const { Provider } = Context;

const alter = curry((checked, id, items) =>
  map(when(propEq('id', id), assoc('checked', checked)), items)
);

const alterPaid = curry((checked, id, items) =>
    map(when(propEq('id', id), assoc('paid', checked)), items)
);

const alterDate = curry((checked, id, items) =>
    map(when(propEq('id', id), assoc('paid_date', checked)), items)
);



const filterByID = i => filter(where({ id: equals(i) }));
export const filterByPaid = (i) => filter(where({ paid: equals(i) }));

const changeAllChecks = i =>
  map(o => (o.checked === !i ? assoc('checked', i, o) : o));

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ON_PAID':
      const newData = alterPaid(
          true,
          payload,
          state.last_movements
      )
      return {
        ...state,
        last_movements: alterDate(
            moment().format('MM/DD/YYYY'),
            payload,
            newData
        )
      };
    case 'ON_CHECK':
      return {
        ...state,
        last_movements: alter(
          !filterByID(payload)(state.last_movements)[0].checked,
          payload,
          state.last_movements
        )
      };
    case 'ALL_CHECKS':
      return {
        ...state,
        last_movements: changeAllChecks(payload)(state.last_movements)
      };
    case 'ORDER_TYPE_ASC':
      return {
        ...state,
        last_movements: sort(ascend(prop('type')))(state.last_movements)
      };
    case 'ORDER_TYPE_DESC':
      return {
        ...state,
        last_movements: sort(descend(prop('type')))(state.last_movements)
      };
    case 'ORDER_DETAIL_ASC':
      return {
        ...state,
        last_movements: sort(ascend(prop('client')))(state.last_movements)
      };
    case 'ORDER_DETAIL_DESC':
      return {
        ...state,
        last_movements: sort(descend(prop('client')))(state.last_movements)
      };
    case 'ORDER_AMOUNT_ASC':
      return {
        ...state,
        last_movements: sort(ascend(prop('amount')))(state.last_movements)
      };
    case 'ORDER_AMOUNT_DESC':
      return {
        ...state,
        last_movements: sort(descend(prop('amount')))(state.last_movements)
      };
    case 'ORDER_DATE_ASC':
      return {
        ...state,
        last_movements: sort(ascend(prop('date')))(state.last_movements)
      };
    case 'ORDER_DATE_DESC':
      return {
        ...state,
        last_movements: sort(descend(prop('date')))(state.last_movements)
      };
    case 'FILTER_BY_SELECT':
      console.log(payload);
      return {
        ...state,
        last_movements: filter(pathSatisfies(equals(payload[0]), [payload[1]]))(
          state.last_movements
        )
      };

    default:
      throw new Error(`Action type ${type} unknown`);
  }
};

const AppProvider = ({ children }) => {
  console.log('Rendering <AppProvider />');
  const initialState = {
    last_movements: [
      {
        period:"2019/05-M",
        id: 4,
        type: 'Realizaste un pago en farmacoins todas las farmacias.',
        client: 'Luis Pasteur - Antitabaco',
        clientID: 'Código: 210 ',
        amount: '40.000,00',
        paid_date: '04/09/2019',
        checked: false,
        paid: false,
      },
      {
        id: 5,
        period:"2019/05-M",
        type: 'Realizaste un pago en farmacoins todas las farmacias.',
        client: 'Luis Pasteur - Antitabaco',
        clientID: 'Código: 210 ',
        amount: '50.000,00',
        paid_date: '25/09/2019',
        checked: false,
        paid: true,
      },
      {
        id: 3,
        period:"2019/05-M",
        type: 'Realizaste un pago en farmacoins todas las farmacias.',
        client: 'Luis Pasteur - Antitabaco',
        clientID: 'Código: 210 ',
        amount: '30.000,00',
        paid_date: '03/09/2019',
        checked: false,
        paid: false,
      },
      {
        id: 2,
        period:"2019/05-M",
        type: 'Realizaste un pago en farmacoins todas las farmacias.',
        client: 'Luis Pasteur - Antitabaco',
        clientID: 'Código: 210 ',
        amount: '30.000,00',
        paid_date: '22/09/2019',
        checked: false,
        paid: false,
      },
      {
        id: 1,
        period:"2019/05-M",
        type: 'Realizaste un pago en farmacoins todas las farmacias.',
        client: 'Luis Pasteur - Antitabaco',
        clientID: 'Código: 210 ',
        amount: '11.000,00',
        paid_date: '01/09/2019',
        checked: false,
        paid: false,
      }
    ]
  };

  function enchanceDispatchWithLogger(dispatch) {
    return function(action) {
      console.log('Action Type:', action.type);
      return dispatch(action);
    };
  }

  function useReducerWithLogger(...args) {
    let prevState = useRef(initialState);
    const [state, dispatch] = useReducer(...args);

    const dispatchWithLogger = useMemo(() => {
      return enchanceDispatchWithLogger(dispatch);
    }, [dispatch]);

    useEffect(() => {
      if (state !== initialState) {
        console.log('Prev state: ', prevState.current);
        console.log('Next state: ', state);
      }
      prevState.current = state;
    }, [state]);

    return [state, dispatchWithLogger];
  }

  const [state, dispatch] = useReducerWithLogger(reducer, initialState);

  const value = { state, dispatch };

  return <Provider value={value}>{children}</Provider>;
};

export default AppProvider;
