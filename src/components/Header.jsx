import styled from "styled-components"

const HeaderStyle = styled.header`
    background-color: #1878ff;
    width: 100%;
    height: 70px;
    color: white;
    display: flex;
    justify-content: space-around;
    font-family: sans-serif;
    
`
const NameSide = styled.div `
    margin-right: 20%;
`
const AccessDiv = styled.div`

  position: relative;
  top: 30%;

`
const LoginBtn = styled.button`

  border: none;
  background-color: #1878ff ;
  color: white;
  font-family: sans-serif;

`
const FreeButton = styled.button `

  background-color  : #3f3f3f ;
  color: white;
  font-family: sans-serif;
  padding: 5px;
`

export const Header = () => {
  return (
    <HeaderStyle>
        <NameSide>
            <h1>DEMO Streaming</h1>
        </NameSide>
        <AccessDiv>
            <LoginBtn>Log In</LoginBtn>
            <FreeButton>Start your free trial</FreeButton>
        </AccessDiv>
    </HeaderStyle>
  )
}
