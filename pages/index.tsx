import React from 'react';
import Head from 'next/head';
import Component from '../components/presentators';

interface Props {
  title: string;
}

class App extends React.Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return { title: 'Hello world' };
  }

  render() {
    const { title } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Component />
      </>
    );
  }
}

export default App;
