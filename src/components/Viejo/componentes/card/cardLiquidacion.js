import React, { Component } from 'react';
import MoreHorizRounded from '@material-ui/icons/MoreHorizRounded';
import styles from './card.module.css';
import stylesComponents from './../components.module.css';
import CheckRounded from '@material-ui/icons/CheckRounded';
import Autorenew from '@material-ui/icons/Autorenew';
import FarmaLogoNegro from './../../assets/iconos/farmacoin_negro.svg';
import FarmaLogoSelect from './../../assets/iconos/farmacoin_seleccionado.svg';
import RemoveRedEyeOutlined from '@material-ui/icons/RemoveRedEyeOutlined';
import TableCheckbox from './../inputs/checkbox';
import PropTypes from 'prop-types';

class CardLiquidacion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verAcciones: -1,
      hoverSelect: -1
    };
    this.seleccionarAccion = this.seleccionarAccion.bind(this);
    this.onHover = this.onHover.bind(this);
    this.outHover = this.outHover.bind(this);
  }

  seleccionarAccion(indice) {
    const currentAccion = this.state.verAcciones;
    if (currentAccion === indice) {
      this.setState({
        verAcciones: -1,
        hoverSelect: -1
      });
    } else {
      this.setState({
        verAcciones: indice
      });
    }
  }

  onHover(indice) {
    this.setState({
      hoverSelect: indice
    });
  }

  outHover() {
    this.setState({
      hoverSelect: -1
    });
  }

  render() {
    const accionMostrar = this.state.verAcciones;
    const onHover = this.state.hoverSelect;
    return (
      <div className={`${styles.cardContainer}`}>
        <div className={`${styles.acciones}`}>
          <div className={`${stylesComponents.dropdownContainer}`}>
            <MoreHorizRounded
              style={{ cursor: 'pointer' }}
              onClick={() => this.seleccionarAccion(0)}
            ></MoreHorizRounded>
            <div
              className={`${stylesComponents.dropdown} ${
                accionMostrar === 0
                  ? stylesComponents.dropdownShow
                  : stylesComponents.dropdownHide
              }`}
            >
              <div
                className={`${stylesComponents.dropdownItem} ${styles.item}`}
              >
                <RemoveRedEyeOutlined
                  style={{ marginRight: 8 }}
                ></RemoveRedEyeOutlined>
                Ver detalle
              </div>
              <div
                className={`${stylesComponents.dropdownItem} ${styles.item}`}
                onMouseOver={() => this.onHover(0)}
                onMouseOut={this.outHover}
              >
                <figure>
                  <img
                    src={
                      onHover === 0 && accionMostrar === 0
                        ? FarmaLogoSelect
                        : FarmaLogoNegro
                    }
                    alt="logo"
                  ></img>
                </figure>
                Pagar en Farmacoins
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.entidadContainer}`}>
          <div>
            <TableCheckbox />
          </div>
          <div>
            <div className={`${styles.entidad}`}>
              <div className={`${styles.primerDetalle}`}>
                Luis Pasteur- Personal de Dirección
              </div>
              <div>Código: 696</div>
            </div>
            <div className={`${styles.periodo}`}>Período 2019/05-M</div>
          </div>
        </div>
        <div className={`${styles.footer}`}>
          <div className={`${styles.monto}`}>$100.000,00</div>

          {this.props.pendiente ? (
            <div
              className={`${stylesComponents.estadoContainer} ${stylesComponents.estadoPendiente} ${styles.estado}`}
            >
              Pendiente
              <Autorenew style={{ transform: 'rotate(137deg)' }} />
            </div>
          ) : (
            <div
              className={`${stylesComponents.estadoContainer} ${stylesComponents.estadoFinalizado} ${styles.estado}`}
            >
              Finalizada
              <CheckRounded />
            </div>
          )}
        </div>
      </div>
    );
  }
}

CardLiquidacion.propTypes = {
  pendiente: PropTypes.bool.isRequired
};

export default CardLiquidacion;
