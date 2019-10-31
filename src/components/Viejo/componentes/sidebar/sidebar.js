import React, { Component } from 'react';

import './sidebar.module.css';

import { cerrarSidebar } from './../../actions/indexAction';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SinSaldoImagen from './../../assets/imagenes/no_saldo_transferir.svg';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarClass: `side sideHide`,
      overlayClass: '',
      step: 1
    };
    this.setClasses = this.setClasses.bind(this);
    this.hideSideBar = this.hideSideBar.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.showSidebar !== prevProps.showSidebar) {
      this.setClasses();
    }
  }

  hideSideBar() {
    this.props.cerrarSidebar();
    this.setState({
      overlayClass: `overlay overlayShow overlayHideOpacity`
    });
    setTimeout(() => {
      this.setState({
        overlayClass: '',
        step: 1
      });
    }, 420);
  }

  setClasses() {
    if (this.props.showSidebar) {
      this.setState({
        sidebarClass: `side sideShow`,
        overlayClass: `overlay overlayShow overlayShowOpacityz`
      });
    } else {
      this.setState({
        sidebarClass: `side sideHide`
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.state.sidebarClass}>
          <div className={`modalContainer`}>
            <img
              src={SinSaldoImagen}
              alt="sin_saldo"
              className={`sinSaldoImg`}
            ></img>
            <div className={`mensaje`}>
              No posee saldo en Farmacoins
              <br></br>
              para realizar una transferencia
            </div>
            <button
              className={`boton botonSecundario centrado centradoHor centradoVer`}
              onClick={() => this.hideSideBar()}
            >
              {' '}
              aceptar
            </button>
          </div>
        </div>
        <div className={this.state.overlayClass}></div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    showSidebar: store.IndexReducer.transferenciaSidebarShow
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      cerrarSidebar
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
