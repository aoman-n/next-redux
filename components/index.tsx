import React from 'react';
import { NextFC } from 'next';
import styled from 'styled-components'

// interface Props {
//   className?: string;
// }

const Component: NextFC = () => (
  <>
    <Title>Welcome yeaaaah!!!</Title>
  </>
)

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.green};
`

export default Component;