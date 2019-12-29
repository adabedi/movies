import React from 'react';
import styled from 'styled-components';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg";

const Thumbnail = styled.div`
  position: relative;
  width: 300px;
  height: 370px;
  overflow: hidden;
  cursor: pointer;
  padding: 10px;
  display: inline-block;
`;

const MovieIcon = styled.img`
  ${Thumbnail}:hover & {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-filter: blur(4px);
    filter: blur(4px);
  }
`;

const ThumbnailText = styled.span`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  height: 370px;
  width: 300px;
  max-width: 350px;
  padding-top: 100px;
  text-align: center;
  opacity: 0;
  position: absolute;
  font-size: large;
  ${Thumbnail}:hover & {
    opacity: 1;
    z-index: 100;
  }
`;

export default ({ movie: { Poster, Title, Year } }) => (
  <Thumbnail>
    <ThumbnailText>
      #{Title} ({Year})
    </ThumbnailText>
    <MovieIcon
      width='300'
      alt={`The movie titled: ${Title}`}
      src={Poster || DEFAULT_PLACEHOLDER_IMAGE}
    />
  </Thumbnail>
);
