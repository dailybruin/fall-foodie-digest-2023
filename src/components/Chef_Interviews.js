import speech_bubble_left from '../images/speech_bubble_left.svg';
import speech_bubble_right from '../images/speech_bubble_right.svg';

import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

/*

NOTES

Things that this code doesn't account for:

  (1) An article title longer than 1 line (unclear from Figma how to handle this edge case)
  (2) Responsive sizing for the speech bubbles if you shrink the screen (assumed unecessary due to mobile layout)

*/

const OuterContainer = styled.div`
  background-color: #fcf1d9;
  height: 790px;
  width: 896px;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

// border not exactly same as Figma
const TitleContainer = styled.div`
  background-color: #41533e;
  height: 60px;
  top: 0;
  border-bottom: 2px solid black;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  color: white;
  font-size: 32px;
  font-family: 'Figtree', sans-serif;
  text-align: left;
  padding-left: 20px;
`;

const ContentContainer = styled.div`
  // background-color: #c3b1e1;
  height: 100%;
  border-radius: 10px;
  flex: 1;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

const TopContentDiv = styled.div`
  // background: red;
  display: flex;
`;

const BottomContentDiv = styled.div`
  // background: orange;
  display: flex;
`;

const TopLeftSpeechBubble = styled.div`
  // background-color: #ff6961;
  flex: 60%;
  box-sizing: border-box;
  padding: 52px 20px 25px 50px;
`;

const TopRightGif = styled.div`
  // background-color: #ffa368;
  flex: 40%;
  box-sizing: border-box;
  padding: 60px 50px;
`;

const BottomLeftGif = styled.div`
  // background-color: #ffe5b4;
  flex: 40%;
  box-sizing: border-box;
  padding: 50px 50px;
`;

const BottomRightSpeechBubble = styled.div`
  // background-color: #77dd77;
  flex: 60%;
  box-sizing: border-box;
  padding: 25px 50px 52px 20px;
`;

const SpeechBubble = styled.div`
  // background-color: #c3b1e1;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Gif = styled.img`
  background-color: #ff6961;
  max-width: 100%;
  max-height: 100%;
`;

const SpeechBubbleOverlay = styled.div`
  //background-color: rgba(195, 177, 225, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: left;
`;

const InterviewTitle = styled.a`
  display: block;
  text-decoration: none;
  margin: 15px 30px 5px 30px;
  font-family: 'Lobster Two', sans-serif;
  font-size: 32px;
  color: black;
`;

const ByLine = styled.div`
  display: block;
  font-family: 'DM Serif Display', serif;
  font-size: 15px;
  margin: 5px 30px 10px 30px;
  text-transform: uppercase;
`;

const ArticleImage = styled.img`
  width: 43%;
  height: 37%;
  object-fit: cover;
  display: block;
  background-color: #7c2f18;
  margin-left: 225px;
  // margin-right: 30px;
  border-radius: 10px;
`;

const PhotoCredits = styled.div`
  display: block;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 6px;
  text-align: right;
  font-color: black;
  box-sizing: border-box;
  padding-right: 45px;
  margin-top: 8px;
  text-transform: uppercase;
`;

const Chef_Interviews = (props) => {
  let data = props.interviews;
  console.log(data);
  return (
    <OuterContainer>
      <TitleContainer>
        <TitleText>CHEF INTERVIEWS</TitleText>
      </TitleContainer>
      <ContentContainer>
        <TopContentDiv>
          <TopLeftSpeechBubble>
            <SpeechBubble>
              <img
                src={speech_bubble_left}
                alt="speech bubble"
                // style={{ height: 'auto', maxWidth: '100%' }}
              />
              <SpeechBubbleOverlay>
                <InterviewTitle href={data.interview_top_url}>
                  {data.interview_top_name}
                </InterviewTitle>
                <ByLine>{data.interview_top_byline}</ByLine>
                <ArticleImage
                  src={data.interview_top_image}
                  alt="article image"
                />
                <PhotoCredits>PHOTO | {data.interview_top_img_credits}</PhotoCredits>
              </SpeechBubbleOverlay>
            </SpeechBubble>
          </TopLeftSpeechBubble>
          <TopRightGif>
            <Gif src={data.gif_top} alt="article gif" />
          </TopRightGif>
        </TopContentDiv>
        <BottomContentDiv>
          <BottomLeftGif>
            <Gif src={data.gif_bottom} alt="article gif" />
          </BottomLeftGif>
          <BottomRightSpeechBubble>
            <SpeechBubble>
              <img
                src={speech_bubble_right}
                alt="speech bubble"
                // style={{ height: 'auto', maxWidth: '100%' }}
              />
              <SpeechBubbleOverlay>
                <InterviewTitle href={data.interview_bottom_url}>
                  {data.interview_bottom_name}
                </InterviewTitle>
                <ByLine>{data.interview_bottom_byline}</ByLine>
                <ArticleImage
                  src={data.interview_bottom_image}
                  alt="article image"
                />
                <PhotoCredits>PHOTO | {data.interview_bottom_img_credits}</PhotoCredits>
              </SpeechBubbleOverlay>
            </SpeechBubble>
          </BottomRightSpeechBubble>
        </BottomContentDiv>
      </ContentContainer>
    </OuterContainer>
  );
};

export default Chef_Interviews;
