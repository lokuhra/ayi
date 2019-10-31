import React, { Component } from 'react';

import HomeFarmalink from './home/homeFarmalink';
import NavMenu from './../componentes/navMenu/navMenu';
import Header from '../componentes/header/header';

import './index.module.css';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { abrirNavbar, cerrarNavbar } from './../actions/indexAction';

class Index extends Component {

    render() {
        const navClass = this.props.showNavbar ? 'menuContainerShow' : 'menuContainerHide';
        const homeClass = this.props.showNavbar ? 'homeContainerMd' : 'homeContainerLg';
        return (
            <div>
                <Header />
                <div className={`appContainer`}>
                    <div className={navClass} onClick={this.changeNavState}>
                        <NavMenu />
                    </div>
                    <div className={homeClass}>
                        <HomeFarmalink />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        showNavbar: store.IndexReducer.showNav
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            abrirNavbar,
            cerrarNavbar
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);