import React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';

interface Props {
  title: string;
  errorCode: number | undefined;
}

class Error extends React.Component<Props> {
  static async getInitialProps({ res }: NextContext): Promise<Props> {
    return {
      title: `Error: ${res!.statusCode}`,
      errorCode: res!.statusCode,
    };
  }

  render() {
    const { title, errorCode } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        {errorCode}
      </>
    );
  }
}

export default Error;
