import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000003a;
  transition: opacity 0.2s ease;
  z-index: 100;
  ${props => props.display};
  `;

const Section = styled.section`
  width: 50%;
  position: relative;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  transform: translateY(3%);
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px 3px;
  font-family: Helvetica, Arial, sans-serif;
  ${props => props.display};
`;

const CloseModalButton = styled.button`
  position: absolute;
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 1px 1px 1px #0000003a;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.562);
`;

Wrapper.defaultProps = {
  display: 'display: none'
}

Section.defaultProps = {
  display: 'display: none'
}

export default ({ handleCloseModal, showModal, children }) => {

  const display = showModal ? null : 'display: none';

  return (
    <Wrapper display={display}>
      <Section display={display}>
        <CloseModalButton onClick={handleCloseModal}>X</CloseModalButton>
        {children}
      </Section>
    </Wrapper>
  );
};
