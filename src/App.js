import React, { useState } from 'react';
import styled from 'styled-components';
import { uid } from 'react-uid';
import './App.css';
import { Header, Loader, Modal, Movie, MovieIcon, Search } from './components';
import { useFetchMovie, useFetchMovies } from './api';

const App = styled.div`
  min-height: calc(100vh - 70px);
`;

const StyledMoviesList = styled.div`
  padding-top: 1em;
  padding-bottom: 5.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppIntro = styled.p`
  padding-top: 1em;
  margin: 1rem;
  font-size: 1.4em;
`;

export default () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('woman')
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { moviesList: { movies, loading, errorMessage} } = useFetchMovies(searchValue);
  const { movieData } = useFetchMovie(selectedMovieId);

  const handleOnCLick = imdbID => {
    setShowModal(!showModal);
    setSelectedMovieId(imdbID);
  };

  const MoviesList = (
    <StyledMoviesList>
      {movies && movies.map(movie => (
          <div
            key={uid(movie)}
            onClick={() => handleOnCLick(movie.imdbID)}
          >
            <MovieIcon key={uid(movie)} movie={movie} />
          </div>
        ))}
    </StyledMoviesList>
  );

  return (
    <App>
      <Header text='MOVIES' />
      <Search setSearchInputValue={setSearchInputValue}  searchInputValue={searchInputValue} setSearchValue={setSearchValue}/>
      <AppIntro>Check the color palette of your favorite movies!</AppIntro>
      {loading || errorMessage ?
        <Loader loading={loading} errorMessage={errorMessage} />
        :
        MoviesList
      }
      <Modal
        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
      >
        <Movie movieData={movieData} />
      </Modal>
    </App>
  );
};
