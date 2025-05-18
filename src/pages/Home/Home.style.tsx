import styled from "styled-components";

export const Main = styled.main`
margin-right:8%;
margin-left: 8%;
height: 95vh;
 overflow-x: hidden;
 display: flex;
 flex-direction: column;
`

export const Header =styled.header`
background-image: url("/banner.jpg");
height: 200px;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`

export const Body = styled.section`
/* display: flex; */
/* justify-content: space-around; */
`

export const Title =styled.h1`
text-align: center;
text-shadow: 18px 20px 7px grey ;

`

export const Footer=styled.footer`
width: 100%;

 margin-top: auto;
 display: flex;
gap: 0.7rem;
justify-content: end;
`

export const Img = styled.img`
width: 2rem;
height: 2rem;
object-fit: contain;

`