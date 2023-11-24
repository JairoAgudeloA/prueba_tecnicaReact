import  { useState } from "react";
import styled from "styled-components";
import data from "../assets/sample.json";

const entries = data.entries;

const MainSeriesCards = styled.div`
  background-color: #ffffff;
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const SecondSeriesCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SerieCard = styled.div`
  width: 180px;
  height: 280px;
  font-family: sans-serif;
  font-size: 12px;
  background-color: #1878ff;
  text-align: center;
  border: 2px solid black;
  margin-right: 18px;
  margin-bottom: 20px;
  transition: opacity 0.3s ease, border 0.3s ease;

  &:hover {
    opacity: 0.8;
    border: 2px solid #fff;
  }
`;

const SerieImg = styled.img`
  background-color: black;
  width: 180px;
  height: 180px;
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

export const SeriesCards = () => {
  const checkedProgram = entries.filter((entry) => entry.programType === "series");
  const checkedYear = checkedProgram.filter((entry) => entry.releaseYear >= 2010);
  const first20Series = checkedYear.slice(0, 20);

  const [selectedSeries, setSelectedSeries] = useState(null);

  const openPopup = (series) => {
    setSelectedSeries(series);
  };

  const closePopup = () => {
    setSelectedSeries(null);
  };

  return (
    <MainSeriesCards>
      <SecondSeriesCards>
        {first20Series.map((entry) => (
          <SerieCard key={entry.title} onClick={() => openPopup(entry)}>
            <SerieImg src={entry.images["Poster Art"].url} alt={entry.title} />
            <h2>{entry.title}</h2>
          </SerieCard>
        ))}
      </SecondSeriesCards>
      <Popup isOpen={selectedSeries !== null} onClick={closePopup}>
        {selectedSeries && (
          <>
            <h2>{selectedSeries.title}</h2>
            <p>{selectedSeries.description}</p>
            <p>Release Year: {selectedSeries.releaseYear}</p>
            <SerieImg src={selectedSeries.images["Poster Art"].url} alt={selectedSeries.title} />
          </>
        )}
      </Popup>
    </MainSeriesCards>
  );
};
