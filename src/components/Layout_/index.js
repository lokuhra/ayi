import React, { Fragment } from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';
import { useToggle } from 'react-use';

const Layout = ({ children }) => {
  const [isOpenMenu, toggleIsOpenMenu] = useToggle(false);

  const handleOnClickMenu = () =>
  {
      toggleIsOpenMenu()

  }

  return (
    <Fragment>
      <AppBar onClickMenu={handleOnClickMenu} />
      <Drawer isOpenMenu={isOpenMenu}/>
      {children}
    </Fragment>
  );
};

export default Layout;
