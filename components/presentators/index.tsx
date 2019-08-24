import React from 'react';
import { NextFC } from 'next';
import styled from 'styled-components';
import Counter from '../containers/counterContainer';

const Component: NextFC = () => (
  <>
    <Title>Welcome yeaaaah!!!</Title>
    <Counter />
  </>
);

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.green};
`;

export default Component;
