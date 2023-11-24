import styled from 'styled-components';
import faceBookWhite from "../assets/facebook-white.svg"
import twitterWhite from "../assets/twitter-white.svg"
import instagramWhite from "../assets/instagram-white.svg"
import appStore from "../assets/app-store.svg"
import playStore from "../assets/play-store.svg"
import windowsStore from "../assets/windows-store.svg"
import { Link } from 'react-router-dom';

const FooterStyle = styled.footer`
background-color: #171717;
  color: #b5b5b5;
  font-family: sans-serif;
  font-size: 10px;
  min-height: 15px; 
  display: flex;
  flex-direction: column;
  
`
const UlFooter = styled.ul `
display:flex;
position: relative;
margin-top: 30px;
left: 15%;
list-style: none;
`
const LiFooter = styled.li `

text-decoration: none;
  margin-right: 10px;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: relative;
    top: 50%;
    right: 0;
    height: 50%;
    border-right: 1px solid #333;
  }
`
const PFooter = styled.p`
  display:flex;
  position: relative;
  top: 10%;
  left: 18%;
`
const SocialFooter = styled.div`
display: flex;
justify-content: space-between;
`

const ImgFooterF = styled.img `
width: 15px;
height: 15pxs;
margin: 10px;
`
const ImgFooterT = styled.img `
width: 26px;
height: 26px;
margin: 10px;
`
const ImgFooterI = styled.img `
width: 25px;
height: 25pxs;
margin: 10px;
`
const ImgFooterA = styled.img`
width: 100px;
height: 100px;
margin: 10px;
`
const ImgFooterP = styled.img`
width: 100px;
height: 100px;
margin: 10px;
`
const ImgFooterW = styled.img`
width: 85px;
height: 85px;
margin: 10px;
position: relative;
top: -7px;
`
const DivFooterRed = styled.div`
position: relative;
left: 19%;
margin-top: 34px;
`
const DivFooterApp = styled.div`
position: relative;
left: -15%;
`
const StyledLink = styled(Link)`
text-decoration: none;
`
export const Footer = () => {
  return (
    <FooterStyle>
        <UlFooter>
            <LiFooter><StyledLink to="/">Home</StyledLink></LiFooter>
            <LiFooter>Terms and conditions</LiFooter>
            <LiFooter>Privacy PoLicy</LiFooter>
            <LiFooter>Collection Statement</LiFooter>
            <LiFooter>Help</LiFooter>
            <LiFooter>Manage Account</LiFooter>
        </UlFooter>
        <PFooter>Copyright © 2016 DEMO Streaming. All Right Reserved.</PFooter>
        <SocialFooter>
          <DivFooterRed>
            <ImgFooterF src={faceBookWhite} alt="" />
            <ImgFooterT src={twitterWhite} alt="" />
            <ImgFooterI src={instagramWhite} alt="" />
          </DivFooterRed>
          <DivFooterApp>
            <ImgFooterA src={appStore} alt="" />
            <ImgFooterP src={playStore} alt="" />
            <ImgFooterW src={windowsStore} alt="" />
          </DivFooterApp>
        </SocialFooter>
    </FooterStyle>
  )
}
