import React from 'react';
import { NextFC } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import Counter from '../containers/counterContainer';

const Component: NextFC = () => (
  <>
    <Title>Welcome yeaaaah!!!</Title>
    <Link href={{ pathname: '/todo', query: { title: 'todo page' } }}>
      <a>aboutへ！</a>
    </Link>
    <Counter />
  </>
);

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.green};
`;

export default Component;
