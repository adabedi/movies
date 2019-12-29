import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

const ErrorMessage = styled.div`
  margin: auto;
  font-weight: bold;
  color: rgb(161, 15, 15);
`;

export default ({
    loading,
    errorMessage
}) => 
    loading ?
    <Spinner />
    :
    errorMessage ?
    <ErrorMessage>{errorMessage}</ErrorMessage>
    : null
