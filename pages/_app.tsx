import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '../constants/theme';

export default class extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Component { ...pageProps } />
        </Container>
      </ThemeProvider>
    )
  }
}
