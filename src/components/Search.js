import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  padding-top: 2.5em;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.125em solid #c8ccd4;
  padding: 0.125em;
  border-radius: 1.25em;
  height: 3em;
  width: 50%;
  transition: box-shadow 0.25s ease-out, border-color 0.25s ease-out;
  &:hover {
    box-shadow: 0 0.063em 0.375em 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }
  @media (max-width: 767px) {
    width: 17.75rem;
  }
  @media (max-width: 425px) {
    width: 14rem;
  }
  @media (max-width: 375px) {
    width: 10rem;
  }
`;

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #444;
  &:focus {
    outline: inherit;
  }
  &:hover {
    font-size: 1em;
  }
`;

const StyledInput = styled.input`
  flex-grow: 2;
  padding: 0 1em 0 1em;
  border: none;
  text-align: center;
  font-size: 1.75em;
  background: transparent;
  &:focus {
    background: none
    outline: none
  }
  @media (max-width: 767px) {
    width: 17rem;
    padding: 0;
  }
  @media (max-width: 425px) {
    width: 14rem;
  }
  @media (max-width: 375px) {
    width: 10rem;
  }
`;

export default ({ setSearchInputValue, setSearchValue, searchInputValue }) => {

  const handleOnClick = (e) => {
    e.preventDefault();
    setSearchValue(searchInputValue);
    setSearchInputValue('');
  };

  return (
    <Form>
      <InputWrapper>
        <StyledInput
          type='text'
          onChange={e => setSearchInputValue(e.target.value)}
          value={searchInputValue}
          placeholder='Search'
        />
        <StyledButton type='submit' onClick={(e) => handleOnClick(e)} value="SEARCH">
          <i className='fa fa-search fa-2x' />
        </StyledButton>
      </InputWrapper>
    </Form>
  );
};
