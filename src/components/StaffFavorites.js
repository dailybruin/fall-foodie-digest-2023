import styled from 'styled-components';
import React from 'react';

const Container = styled("div")`
width: 896px;
height: 714px;
border: 2px solid black;
margin-right: auto;
margin-left: auto;
background-color: #000000;
border-radius: 10px;
`

const GreenBox = styled("div")`
  background-color: #41533E;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 2px solid black;
  margin-left: -2px;
  margin-top: -2px;
`;

const SFText = styled("div")`
width: 449px
height: 39px
top: 3938px
left: 292px
font-family: Gotham;
font-size: 32px;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: left;
background: #FFFFFF;
`

const WhiteBox = styled("div")`
  background-color: #FCF1D9;
  width: 896px;
  height: 714px; 
  border-radius: 10px;

`;

const StaffFavorites = () => {
  return (
    <Container>
         <WhiteBox>
         <GreenBox>
            <SFText>
            STAFF FAVORITES
            </SFText>
         </GreenBox>
         </WhiteBox>
    </Container>
  )
}

export default StaffFavorites;
