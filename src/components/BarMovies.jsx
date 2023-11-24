import styled from "styled-components"


const HeaderHome = styled.header`
font-family: sans-serif;
color: white;
background-color: #333;
display: flex;

`
const HomeH1 = styled.h1 `
  position: relative;
  left: 12%;
  font-size: 23px;
`

export const BarMovies = () => {
  return (
    <HeaderHome>
          <HomeH1>Movies</HomeH1>
    </HeaderHome>
  )
}
