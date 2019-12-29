import React from 'react';
import styled, { keyframes } from 'styled-components';


const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 140px;
  margin: 0 auto;
`;

const StyledSpan = styled.span`
  font-size: 1.75em;
`;

export default () => 
<DotWrapper>
  <StyledSpan>Loading</StyledSpan>
  <Dot delay="0s" />
  <Dot delay=".1s" />
  <Dot delay=".2s" />
</DotWrapper>;