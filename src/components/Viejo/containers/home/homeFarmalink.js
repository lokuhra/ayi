import React from 'react';

import SaldoPesos from './../../componentes/cuadro-saldo/saldoPesos';
import SaldoFarmacoin from './../../componentes/cuadro-saldo/saldoFarmacoin';
import Sidebar from '../../componentes/sidebar/sidebar';
import UltimosMovimientosFarmalink from './../../componentes/tablas/ultimosMovimientos/ultimosMovFarmalink';
import LiquidacionesFarmalink from './../../componentes/tablas/liquidaciones/liquidacionesFarmalink';
import Add from '@material-ui/icons/Add';

import './home.module.css';

import { connect } from "react-redux";

const HomeFarmalink = (props) => {
    const homeClass = props.showNavbar ? 'homeContainerMain' : 'homeContainerAux';
    return (
        <div className={homeClass}>
            <div className={`titulo tituloResumen`}>
                Resumen de cuenta
            </div>
            <div className={`saldoContainer`}>
                <SaldoPesos saldo="0,00" />
                <SaldoFarmacoin saldo="0,00" />
            </div>
            <div className={`titulo cargaNuevaContainer`}>
                Liquidaciones
                <button className="boton-lg botonPrincipal botonIcono centrado centradoVer">
                    <Add></Add>
                    Carga Nueva
                </button>
            </div>
            <LiquidacionesFarmalink />
            <div className={`titulo`}>
                Últimos Movimientos
            </div>
            <div style={{ marginBottom: 20 }}>
                <UltimosMovimientosFarmalink />
            </div>
            <Sidebar />
        </div>
    );
}

function mapStateToProps(store) {
    return {
        showNavbar: store.IndexReducer.showNav
    };
}

export default connect(mapStateToProps, null)(HomeFarmalink);