import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuSharp from '@material-ui/icons/MenuSharp';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import './header.module.css';

import FarmapagoLogo from './../../assets/imagenes/Farmapago.svg';
import DesconectarLogo from './../../assets/iconos/desconectar.svg';
import NotificacionesLogo from './../../assets/iconos/notificaciones_recibidas.svg';
import FarmaAvatar from './../../assets/iconos/avatar_farmalink.svg';
import Notificacion1 from './../../assets/imagenes/notificacion1.png';
import Notificacion2 from './../../assets/imagenes/notificacion2.png';
import Notificacion3 from './../../assets/imagenes/notificacion3.png';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { abrirNavbar, cerrarNavbar } from './../../actions/indexAction';
import { mostrarNotificaciones } from './../../actions/headerAction';

const style = {
  background: `url(${FarmaAvatar})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '-60% 45%',
  backgroundSize: '90px 90px'
};

const Header = props => {
  const navBar = () => {
    if (props.showNavbar) {
      props.abrirNavbar();
    } else {
      props.cerrarNavbar();
    }
  };
  const verNotificaciones = () => {
    props.mostrarNotificaciones();
  };
  const notificacionClass = props.showNotificaciones
    ? 'notificacionesDropdownShow'
    : 'notificacionesDropdownHide';
  return (
    <div className={`headerContainer`}>
      <div className={`leftHeader`}>
        <IconButton className={'actionButton'} onClick={navBar}>
          <MenuSharp />
        </IconButton>
        <figure>
          <img src={FarmapagoLogo} alt="logo"></img>
        </figure>
        <div className={`texto`}>Back Office Intranet</div>
      </div>
      <div className={`rightHeader`}>
        <div className={`desconectar`}>
          <figure>
            <img
              src={DesconectarLogo}
              style={{ cursor: 'pointer' }}
              alt="logo"
            ></img>
          </figure>
        </div>
        <div className={`notificacion`}>
          <figure style={{ margin: 0 }}>
            <img
              onClick={() => verNotificaciones()}
              src={NotificacionesLogo}
              alt="logo"
            ></img>
          </figure>
          <div className={`notificacionesDropdown ${notificacionClass}`}>
            <div className={`tituloNotificaciones`}>Notificaciones</div>
            <div className={`notificacionItem`}>
              <div>
                <figure className={`figure`}>
                  <img
                    className={`iconImg`}
                    src={Notificacion1}
                    alt="Logo"
                  ></img>
                </figure>
              </div>
              <div>
                <div className={`notificacionMensaje`}>
                  Haz recibido una solicitud de transferencia por{' '}
                  <strong>$55.000</strong> de parte de{' '}
                  <strong>Laboratorios Bagó</strong>.
                </div>
                <div className={`verNotificacion`}>
                  <p>Ver solicitudes</p>
                  <KeyboardArrowRight></KeyboardArrowRight>
                </div>
              </div>
            </div>
            <div className={`notificacionItem`}>
              <div>
                <figure className={`figure`}>
                  <img
                    className={`iconImg`}
                    src={Notificacion2}
                    alt="Logo"
                  ></img>
                </figure>
              </div>
              <div>
                <div className={`notificacionMensaje`}>
                  Haz recibido una solicitud de transferencia por{' '}
                  <strong>$55.000</strong> de parte de{' '}
                  <strong>Laboratorios Bagó</strong>.
                </div>
                <div className={`verNotificacion`}>
                  <p>Ver solicitudes</p>
                  <KeyboardArrowRight></KeyboardArrowRight>
                </div>
              </div>
            </div>
            <div className={`notificacionItem`}>
              <div>
                <figure className={`figure`}>
                  <img
                    className={`iconImg`}
                    src={Notificacion3}
                    alt="Logo"
                  ></img>
                </figure>
              </div>
              <div>
                <div className={`notificacionMensaje`}>
                  Haz recibido una solicitud de transferencia por{' '}
                  <strong>$55.000</strong> de parte de{' '}
                  <strong>Laboratorios Bagó</strong>.
                </div>
                <div className={`verNotificacion`}>
                  <p>Ver solicitudes</p>
                  <KeyboardArrowRight></KeyboardArrowRight>
                </div>
              </div>
            </div>
            <div className={`verMas`}>
              Ver Más
              <KeyboardArrowRight></KeyboardArrowRight>
            </div>
          </div>
        </div>
        <div className={`headerButton`}>Farmalink</div>
      </div>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    showNavbar: store.IndexReducer.showNav,
    showNotificaciones: store.HeaderReducer.showNotificaciones
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      abrirNavbar,
      cerrarNavbar,
      mostrarNotificaciones
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
