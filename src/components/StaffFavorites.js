import styled from 'styled-components';
import React from 'react';

const Container = styled("div")`
width: 896px;
height: 714px;
border: 2px solid black;
margin-right: auto;
margin-left: auto;
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
width: 449px;
height: 39px;
color: white;
font-family: 'DM Serif Display', serif;
font-family: 'Figtree', sans-serif;
font-size: 32px;
font-weight: 700;
line-height: 31px;
letter-spacing: 0.01em;
text-align: left;
margin-left: 20px;
margin-top: 12px;
`

const WhiteBox = styled("div")`
  background-color: #FCF1D9;
  width: 896px;
  height: 714px; 
  border-radius: 10px;

`;

const BrownBox = styled("div")`
width: 720px;
height: 387px;
background-color: #7C2F18;
border-radius: 10px;
margin-left: auto;
margin-right: auto;
margin-top: 10px;   
`

const LittleBox = styled("div")`
width: 740px;
height: 407px;
margin-left: auto;
margin-right: auto;
border-radius: 10px;
margin-top: 40px;
border: 2px solid black;
z-index: 1;
`

const Caption = styled("div")`
width: 719px;
height: 66px;
margin-top: 20px;
margin-left: 90px;
font-family: Lobster Two;
font-size: 32px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0.07em;
text-align: left;
color: black;
z-index: 1;
position: relative;
`

const SubCaption = styled("div")`
font-family: DM Serif Display;
font-size: 28px;
font-weight: 400;
letter-spacing: 0.105em;
text-align: left;
margin-left: 90px;
margin-top: 32px;

`

const StaffFavorites = (props) => {
  return (
    <Container>
         <WhiteBox>
         <GreenBox>
            <SFText>
            STAFF FAVORITES
            </SFText>
         </GreenBox>
            <LittleBox>
            <BrownBox>
                <video width="100%" height="100%" controls>
                    <source src={props.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </BrownBox>
            </LittleBox>
            <Caption>{props.video_name}</Caption>
            <SubCaption>{props.video_byline}</SubCaption>
         </WhiteBox>
    </Container>
  )
}

export default StaffFavorites;