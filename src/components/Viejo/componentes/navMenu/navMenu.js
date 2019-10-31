import React from 'react';

import ArrowIcon from './../../assets/iconos/arrowNavIcon.svg';
import HomeIcon from './../../assets/iconos/homeNavIcon.svg';
import CheckIcon from './../../assets/iconos/checkNavIcon.svg';
import SolicitudesIcon from './../../assets/iconos/solicitudes.svg';
import LiquidacionesIcon from './../../assets/iconos/liquidacionesNavIcon.svg';

import './navMenu.module.css';

import { connect } from 'react-redux';

const NavMenu = props => {
  const labelClass = props.showNavbar ? 'navLabelShow' : 'navLabelHide';
  return (
    <div className={`navMenu`}>
      <div className={`temContainer`}>
        <div className={`navItem`}>
          <div className={`navIcon`}>
            <figure>
              <img src={HomeIcon} alt="logo"></img>
            </figure>
          </div>
          <div className={`navLabel ${labelClass}`}>Inicio</div>
        </div>
        <div className={`navItem`}>
          <div className={`navIcon`}>
            <figure>
              <img
                src={ArrowIcon}
                className={'transferenciaIcon'}
                alt="logo"
              ></img>
            </figure>
          </div>
          <div className={`navLabel} ${labelClass}`}>
            Transferencia en Farmacoins
          </div>
        </div>
        <div className={`navItem`}>
          <div className={`navIcon`}>
            <figure>
              <img src={ArrowIcon} alt="logo"></img>
            </figure>
          </div>
          <div className={`navLabel} ${labelClass}`}>Cargar Saldo en Pesos</div>
        </div>
        <div className={`navItem`}>
          <div className={`navIcon`}>
            <figure>
              <img src={LiquidacionesIcon} alt="logo"></img>
            </figure>
          </div>
          <div className={`navLabel} ${labelClass}`}>Liquidaciones</div>
        </div>
        <div className={`navItem`}>
          <div className={`navIcon`}>
            <figure>
              <img src={SolicitudesIcon} alt="logo"></img>
            </figure>
          </div>
          <div className={`navLabel} ${labelClass}`}>
            Solicitudes de Transferencia
          </div>
        </div>
        <div className={`navItem`}>
          <div className={`navIcon`}>
            <figure>
              <img src={CheckIcon} alt="logo"></img>
            </figure>
          </div>
          <div className={`navLabel} ${labelClass}`}>Últimos Movimientos</div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    showNavbar: store.IndexReducer.showNav
  };
}

export default connect(
  mapStateToProps,
  null
)(NavMenu);
