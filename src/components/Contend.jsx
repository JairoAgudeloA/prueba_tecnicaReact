import styled from "styled-components"
import placeholder from "../assets/placeholder.png"
import { Link } from "react-router-dom"


const MainContend = styled.main `
min-height: 400px;
`
const SubContend = styled.div`
display: flex;
margin-top: 25px;
margin-left: 100px;
`
const MiniContend = styled.div`
background-color: #171717;
width: 150px;
height: 220px;
margin: 10px;
`
const PlaceHolder = styled.img`
position: relative;
margin-top: 15px;
left: -60px;
`
const PlaceHolderP = styled.p`
color:white;
font-family: sans-serif;
position: relative;
top: -110px;
left: 22px;
font-size: 25px;
`
const DetailPlace = styled.p`
color: black;
`
const StyledLink = styled(Link)`
text-decoration: none;
`

export const Contend = () => {
  return (
    <MainContend>
        <SubContend>
            <StyledLink to="/Series">
                <MiniContend>
                    <div>
                        <PlaceHolder src={placeholder}/>
                        <PlaceHolderP>SERIES</PlaceHolderP>
                    </div>
                        <DetailPlace>Popular Series</DetailPlace>
                </MiniContend>
            </StyledLink>
            <StyledLink to ="/Movies">
                <MiniContend>
                    <div>
                        <PlaceHolder src={placeholder}/>
                        <PlaceHolderP>MOVIES</PlaceHolderP>
                    </div>
                    <DetailPlace>Popular Movies</DetailPlace>
                </MiniContend>
            </StyledLink>
        </SubContend>
    </MainContend>
  )
}
