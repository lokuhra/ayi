import React, { Component } from 'react';
import './../tablas.module.css';
import './ultimosMovFarmalink.module.css';
import './../../components.module.css';
import MoreHorizRounded from '@material-ui/icons/MoreHorizRounded';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import FarmaLogoNegro from './../../../assets/iconos/farmacoin_negro.svg';
import FarmaLogoSelect from './../../../assets/iconos/farmacoin_seleccionado.svg';
import RemoveRedEyeOutlined from '@material-ui/icons/RemoveRedEyeOutlined';

class UltimosMovimientosFarmalink extends Component {
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
        verAcciones: -1
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
      <div className={`tableContainer`}>
        <table className={`table`}>
          <thead className={`thead`}>
            <tr>
              <td className={`columnaTipo`}>Tipo</td>
              <td className={`columnaDetalle`}>Detalle</td>
              <td className={`columnaMonto`}>Monto</td>
              <td className={`columnaFecha`}>Fecha</td>
              <td className={`columnaAcciones`}>Acciones</td>
            </tr>
          </thead>
          <tbody className={`tbody`}>
            <tr>
              <td className={`columnaTipo`}>
                <div className={`tipoContainer`}>
                  Realizaste un pago en farmacoins a todas las farmacias.
                </div>
              </td>
              <td className={`columnaDetalle`}>
                <div className={`detalleContainer`}>
                  <span className={`detalle`}>Luis Pasteur - Antitabaco</span>
                  <span>Código: 210 </span>
                </div>
              </td>
              <td className={`columnaMonto saldo`}>
                <div className={`montoContainer`}>
                  <figure>
                    <img src={FarmaLogoNegro} alt="logo"></img>
                  </figure>
                  30.000,00
                </div>
              </td>
              <td className={`columnaFecha`}>06/08/2019</td>
              <td className={`columnaAcciones`}>
                <div className={`dropdownContainer`}>
                  <MoreHorizRounded
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.seleccionarAccion(0)}
                  ></MoreHorizRounded>
                  <div
                    className={`dropdown ${
                      accionMostrar === 0 ? 'dropdownShow' : 'dropdownHide'
                    }`}
                  >
                    <div className={`dropdownItem`}>
                      <RemoveRedEyeOutlined
                        style={{ marginRight: 8 }}
                      ></RemoveRedEyeOutlined>
                      Ver detalle
                    </div>
                    <div
                      className={`dropdownItem`}
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
              </td>
            </tr>
            <tr>
              <td className={`columnaTipo`}>
                <div className={`tipoContainer`}>
                  Realizaste un pago en farmacoins a todas las farmacias.
                </div>
              </td>
              <td className={`columnaDetalle`}>
                <div className={`detalleContainer`}>
                  <span className={`detalle`}>Seros</span>
                  <span>Código: 600 </span>
                </div>
              </td>
              <td className={`columnaMonto saldo`}>
                <div className={`montoContainer`}>
                  <figure>
                    <img src={FarmaLogoNegro} alt="logo"></img>
                  </figure>
                  40.000,00
                </div>
              </td>
              <td className={`columnaFecha`}>06/08/2019</td>
              <td className={`columnaAcciones`}>
                <div className={`dropdownContainer`}>
                  <MoreHorizRounded
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.seleccionarAccion(1)}
                  ></MoreHorizRounded>
                  <div
                    className={`dropdown ${
                      accionMostrar === 1 ? 'dropdownShow' : 'dropdownHide'
                    }`}
                  >
                    <div className={`dropdownItem`}>
                      <RemoveRedEyeOutlined
                        style={{ marginRight: 8 }}
                      ></RemoveRedEyeOutlined>
                      Ver detalle
                    </div>
                    <div
                      className={`dropdownItem`}
                      onMouseOver={() => this.onHover(1)}
                      onMouseOut={this.outHover}
                    >
                      <figure>
                        <img
                          src={
                            onHover === 1 && accionMostrar === 1
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
              </td>
            </tr>
            <tr>
              <td className={`columnaTipo`}>
                <div className={`tipoContainer`}>
                  Realizaste un pago en farmacoins a todas las farmacias.
                </div>
              </td>
              <td className={`columnaDetalle`}>
                <div className={`detalleContainer`}>
                  <span className={`detalle`}>Seros</span>
                  <span>Código: 600 </span>
                </div>
              </td>
              <td className={`columnaMonto saldo`}>
                <div className={`montoContainer`}>
                  <figure>
                    <img src={FarmaLogoNegro} alt="logo"></img>
                  </figure>
                  85.000,00
                </div>
              </td>
              <td className={`columnaFecha`}>06/08/2019</td>
              <td className={`columnaAcciones`}>
                <div className={`dropdownContainer`}>
                  <MoreHorizRounded
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.seleccionarAccion(2)}
                  ></MoreHorizRounded>
                  <div
                    className={`dropdown ${
                      accionMostrar === 2 ? 'dropdownShow' : 'dropdownHide'
                    }`}
                  >
                    <div className={`dropdownItem`}>
                      <RemoveRedEyeOutlined
                        style={{ marginRight: 8 }}
                      ></RemoveRedEyeOutlined>
                      Ver detalle
                    </div>
                    <div
                      className={`dropdownItem`}
                      onMouseOver={() => this.onHover(2)}
                      onMouseOut={this.outHover}
                    >
                      <figure>
                        <img
                          src={
                            onHover === 2 && accionMostrar === 2
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
              </td>
            </tr>
            <tr>
              <td className={`columnaTipo`}>
                <div className={`tipoContainer`}>
                  Realizaste un pago en farmacoins a todas las farmacias.
                </div>
              </td>
              <td className={`columnaDetalle`}>
                <div className={`detalleContainer`}>
                  <span className={`detalle`}>Seros</span>
                  <span>Código: 600 </span>
                </div>
              </td>
              <td className={`columnaMonto saldo`}>
                <div className={`montoContainer`}>
                  <figure>
                    <img src={FarmaLogoNegro} alt="logo"></img>
                  </figure>
                  23.000,00
                </div>
              </td>
              <td className={`columnaFecha`}>06/08/2019</td>
              <td className={`columnaAcciones`}>
                <div className={`dropdownContainer`}>
                  <MoreHorizRounded
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.seleccionarAccion(3)}
                  ></MoreHorizRounded>
                  <div
                    className={`dropdown ${
                      accionMostrar === 3 ? 'dropdownShow' : 'dropdownHide'
                    }`}
                  >
                    <div className={`dropdownItem`}>
                      <RemoveRedEyeOutlined
                        style={{ marginRight: 8 }}
                      ></RemoveRedEyeOutlined>
                      Ver detalle
                    </div>
                    <div
                      className={`dropdownItem`}
                      onMouseOver={() => this.onHover(3)}
                      onMouseOut={this.outHover}
                    >
                      <figure>
                        <img
                          src={
                            onHover === 3 && accionMostrar === 3
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
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className={`columnaAcciones`}>
                <div className={`accionesContainer`}>
                  Ver todos
                  <KeyboardArrowRight />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UltimosMovimientosFarmalink;
