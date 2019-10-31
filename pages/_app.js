import React, { Fragment } from 'react';
import App from 'next/app';
import ThemeProvider from '../src/components/ThemeProvider';
import Layout from '../src/components/Layout_';
import Provider from '../src/components/Provider';
import { Reset } from 'styled-reset';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Reset />
        <ThemeProvider>
          {/*<Layout>*/}
          <Provider>
            <Component {...pageProps} />
          </Provider>
          {/*</Layout>*/}
        </ThemeProvider>
      </Fragment>
    );
  }
}
