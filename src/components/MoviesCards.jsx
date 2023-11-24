
import  { useState } from "react";
import styled from "styled-components";
import data from "../assets/sample.json";

const entries = data.entries;

const MainMoviesCards = styled.div`
  background-color: #ffffff;
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const SecondMoviesCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieCard = styled.div`
  width: 180px;
  height: 280px;
  font-family: sans-serif;
  font-size: 10px;
  background-color: #1878ff;
  text-align: center;
  border: 2px solid black;
  margin-right: 18px;
  margin-bottom: 80px;
  transition: opacity 0.3s ease, border 0.3s ease;

  &:hover {
    opacity: 0.8;
    border: 2px solid #fff;
  }
`;

const MovieImg = styled.img`
  background-color: black;
  width: 180px;
  height: 280px;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 2px solid black;
  z-index: 1000;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  font-family: sans-serif;
  text-align: center;
`;

export const MoviesCards = () => {
  const checkedProgram = entries.filter((entry) => entry.programType === "movie");
  const checkedYear = checkedProgram.filter((entry) => entry.releaseYear >= 2010);
  const first20Movies = checkedYear.slice(0, 20);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const openPopup = (movie) => {
    setSelectedMovie(movie);
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <MainMoviesCards>
      <SecondMoviesCards>
        {first20Movies.map((entry) => (
          <MovieCard key={entry.title} onClick={() => openPopup(entry)}>
            <MovieImg src={entry.images["Poster Art"].url} alt={entry.title} />
            <h2>{entry.title}</h2>
          </MovieCard>
        ))}
      </SecondMoviesCards>
      <Popup isOpen={selectedMovie !== null} onClick={closePopup}>
        {selectedMovie && (
          <>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
            <p>Release Year: {selectedMovie.releaseYear}</p>
            <MovieImg src={selectedMovie.images["Poster Art"].url} alt={selectedMovie.title} />
          </>
        )}
      </Popup>
    </MainMoviesCards>
  );
};
