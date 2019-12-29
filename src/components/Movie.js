import React from 'react';
import styled from 'styled-components';
import ColorPalette from './ColorPalette';
import { usePalette } from 'react-palette';
import Loader from './Loader';


const StyledMovieIcon = styled.div`
  margin: 0 auto;
`;

const StyledIcon = styled.img`
  margin: 0 auto;
  margin-bottom: 25px
  width: 400px;
  @media (max-width: 767px) {
    width: 200px;
  }
  @media (max-width: 425px) {
    width: 150px;
  }
`;

const H2 = styled.h2`
  color: #282c34;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin 0 auto;
`;

export default ({ movieData: { movie, loading, errorMessage } }) => {
  const colors = usePalette(movie ? movie.Poster : {}) 

  return (
    loading || errorMessage ?
    <Loader loading={loading} errorMessage={errorMessage} />
       :
    <StyledMovieIcon>      
      <H2>{movie.Title} ({movie.Year})</H2>
      <Section>
        <StyledIcon
          alt={`The movie titled: ${movie.Title}`}
          src={movie.Poster}
        />
        <ColorPalette colors={colors} />
      </Section>
    </StyledMovieIcon>
  );
};
