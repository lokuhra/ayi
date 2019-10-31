import React from 'react';
import PropTypes from 'prop-types';
import './saldo.module.css';
import Icono from './../../assets/iconos/flechaDer.svg';
import FarmacoinIconoTitulo from './../../assets/iconos/farmacoin_blue.svg';
import FarmacoinIconoSaldo from './../../assets/iconos/farmacoinSaldo.svg';
import FarmacoinBackground from './../../assets/iconos/farmacoinBackground.svg';

import { abrirSidebar, cerrarSidebar } from './../../actions/indexAction';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const style = {
  background: `url(${FarmacoinBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '127% 57%',
  backgroundSize: '284px 262px'
};

const SaldoFarmacoin = props => {
  const containerWidth = props.showNavbar
    ? 'saldoContainerSm'
    : 'saldoContainerMd';
  return (
    <div className={`saldoContainer ${containerWidth}`} style={style}>
      <div className={`header`}>
        <div className={`icono centrado centradoVer centradoHor`}>
          <figure className={`farmacoinIcono centrado centradoVer centradoHor`}>
            <img
              className={`farmacoinIcono`}
              src={FarmacoinIconoTitulo}
              alt="logo"
            ></img>
          </figure>
        </div>
        <div className={`titulo centrado centradoVer`}>Saldo en Farmacoins</div>
      </div>
      <div className={`saldo centrado centradoVer`}>
        <figure className={`saldoIcono centrado centradoVer centradoHor`}>
          <img
            className={`imagenIcono`}
            src={FarmacoinIconoSaldo}
            alt="logo"
          ></img>
        </figure>
        <div id="saldo">{props.saldo}</div>
      </div>
      <div className={`acciones`}>
        <button
          className={`boton botonSecundario botonIcono centrado centradoVer`}
          onClick={() => props.abrirSidebar()}
        >
          <figure className={`margenIcono`}>
            <img src={Icono} alt="icono"></img>
          </figure>
          Transferir
        </button>
      </div>
    </div>
  );
};

SaldoFarmacoin.propTypes = {
  saldo: PropTypes.string.isRequired
};

function mapStateToProps(store) {
  return {
    showNavbar: store.IndexReducer.showNav
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      abrirSidebar,
      cerrarSidebar
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaldoFarmacoin);
