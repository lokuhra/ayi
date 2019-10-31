import React, { Fragment } from 'react';
import Table from './Table';
import Menu from '../../Menu';
import { useToggle } from 'react-use';

const TableIndex = () => {
  const [isCardView, toggleIsCardView] = useToggle(false);

  return (
    <Fragment>
      <Menu onCLickViewCard={toggleIsCardView} typeMenu={"Liquidaciones"} />
      <Table isCardView={isCardView} />
    </Fragment>
  );
};

export default TableIndex;
