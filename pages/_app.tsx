import React from 'react';
import { Provider } from 'react-redux';
import App, { Container, NextAppContext } from 'next/app';
import withRedux from 'next-redux-wrapper'
import { ThemeProvider } from 'styled-components';

import { initStore } from '../store';
import { theme } from '../constants/theme';

class AppComponent extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
        <Container>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Component { ...pageProps } />
            </ThemeProvider>
          </Provider>
        </Container>
    )
  }
}

export default withRedux(initStore)(AppComponent);