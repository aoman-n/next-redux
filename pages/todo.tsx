import React from 'react';
import { NextFC } from 'next';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import Head from 'next/head';

import Todos from '../components/presentators/Todos';

interface Props {
  title: string;
}

const TodosPage: NextFC<Props & WithRouterProps> = ({ router }) => {
  return (
    <>
      <Head>
        <title>{router.query.title}</title>
      </Head>
      <Todos />
    </>
  );
};

export default withRouter(TodosPage);
