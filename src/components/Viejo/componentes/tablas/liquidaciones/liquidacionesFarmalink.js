import React, { Component } from 'react';
import MoreHorizRounded from '@material-ui/icons/MoreHorizRounded';
import RemoveRedEyeOutlined from '@material-ui/icons/RemoveRedEyeOutlined';
import './../tablas.module.css';
import './liquidacionesFarmalink.module.css';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CheckRounded from '@material-ui/icons/CheckRounded';
import Autorenew from '@material-ui/icons/Autorenew';
import FarmaLogoNegro from './../../../assets/iconos/farmacoin_negro.svg';
import FarmaLogoSelect from './../../../assets/iconos/farmacoin_seleccionado.svg';

class LiquidacionesFarmalink extends Component {
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
      <div className={`tableContainer`}>
        <table className={`table`}>
          <thead className={`thead`}>
            <tr>
              <td className={`columnaPeriodo`}>Período</td>
              <td className={`columnaEntidad`}>Entidad</td>
              <td className={`columnaMonto`}>Montos</td>
              <td className={`columnaEstado`}>Estado</td>
              <td className={`columnaAcciones`}>Acciones</td>
            </tr>
          </thead>
          <tbody className={`tbody`}>
            <tr>
              <td className={`columnaPeriodo`}>2019/05-M</td>
              <td className={`columnaEntidad`}>
                <div className={`entidadContainer`}>
                  <span className={`entidadNombre`}>OBSBA</span>
                  <span>Código: 696</span>
                </div>
              </td>
              <td className={`columnaMonto`}>
                <span>$</span>
                <span>100.000,00</span>
              </td>
              <td className={`columnaEstado`}>
                <div className={`estadoAlign`}>
                  <div className={`estadoContainer estadoPendiente`}>
                    Pendiente
                    <Autorenew style={{ transform: 'rotate(137deg)' }} />
                  </div>
                </div>
              </td>
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
              <td className={`columnaPeriodo`}>2019/05-M</td>
              <td className={`columnaEntidad`}>
                <div className={`entidadContainer`}>
                  <span className={`entidadNombre`}>Swiss Medical Art S.A</span>
                  <span>Código: 207</span>
                </div>
              </td>
              <td className={`columnaMonto`}>
                <span>$</span>
                <span>40.000,00</span>
              </td>
              <td className={`columnaEstado`}>
                <div className={`estadoAlign`}>
                  <div className={`estadoContainer estadoFinalizado`}>
                    Finalizada
                    <CheckRounded></CheckRounded>
                  </div>
                </div>
              </td>
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
              <td className={`columnaPeriodo`}>2019/05-M</td>
              <td className={`columnaEntidad`}>
                <div className={`entidadContainer`}>
                  <span className={`entidadNombre`}>
                    Luis Pasteur- Personal de Dirección
                  </span>
                  <span>Código: 209</span>
                </div>
              </td>
              <td className={`columnaMonto`}>
                <span>$</span>
                <span>85.000,00</span>
              </td>
              <td className={`columnaEstado`}>
                <div className={`estadoAlign`}>
                  <div className={`estadoContainer estadoFinalizado`}>
                    Finalizada
                    <CheckRounded></CheckRounded>
                  </div>
                </div>
              </td>
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
              <td className={`columnaPeriodo`}>2019/05-C/ COMPLEMENTO</td>
              <td className={`columnaEntidad`}>
                <div className={`entidadContainer`}>
                  <span className={`entidadNombre`}>
                    Luis Pasteur- Personal de Dirección
                  </span>
                  <span>Código: 209</span>
                </div>
              </td>
              <td className={`columnaMonto`}>
                <span>$</span>
                <span>23.000,00</span>
              </td>
              <td className={`columnaEstado`}>
                <div className={`estadoAlign`}>
                  <div className={`estadoContainer estadoFinalizado`}>
                    Finalizada
                    <CheckRounded></CheckRounded>
                  </div>
                </div>
              </td>
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

export default LiquidacionesFarmalink;
