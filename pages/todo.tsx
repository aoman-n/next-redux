import React from 'react';
import { NextFC, NextContext } from 'next';
import Head from 'next/head';

import Todos from '../components/presentators/Todos';

interface Props {
  title: string;
}

const TodosPage: NextFC<Props> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Todos />
    </>
  );
};

TodosPage.getInitialProps = async (ctx: any) => {
  const { title } = ctx.query;

  return { title };
};

export default TodosPage;
