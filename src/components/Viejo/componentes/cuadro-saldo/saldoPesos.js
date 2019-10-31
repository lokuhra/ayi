import React from 'react';
import PropTypes from 'prop-types';
import  './saldo.module.css';
import Icono from './../../assets/iconos/flechaIzq.svg';

import { connect } from "react-redux";

const SaldoPesos = (props) => {
    const containerWidth = props.showNavbar ? 'saldoContainerSm' : 'saldoContainerMd';
    return (
        <div className={`saldoContainer ${containerWidth}`}>
            <div className={`header`}>
                <div className={`icono iconoBackground centrado centradoVer centradoHor`}>$</div>
                <div className={`titulo centrado centradoVer`}>Saldo en Pesos</div>
            </div>
            <div className={`saldo}`}>
                <span>$</span>
                <div id="saldo">
                    {props.saldo}
                </div>
            </div>
            <div className={`acciones`}>
                <button className={`boton botonPrincipal botonIcono centrado centradoVer`}>
                    <figure className={`margenIcono`}>
                        <img src={Icono} alt="icono"></img>
                    </figure>
                    Cargar
                </button>
            </div>
        </div>
    );
}

SaldoPesos.propTypes = {
    saldo: PropTypes.string.isRequired,
}

function mapStateToProps(store) {
    return {
        showNavbar: store.IndexReducer.showNav
    };
}

export default connect(mapStateToProps, null)(SaldoPesos);