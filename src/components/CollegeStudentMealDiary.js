import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    border-color: black;
`

const Header = styled.div`
	background-color: #41533E;
	height: 8vh;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: solid;
    border-bottom-color: transparent;
    margin: 0 15vw 0;
    text-align: left; 
    line-height: 3vh;   
	h1 {
		font-family: 'Figtree', sans-serif;
        color: white;
        font-size: 25px;
        margin-left: 15px;
	}
`
/*
    display: inline-block;
    text-align: left;
    justify-content: center;
    text-align: left;

*/
const Body = styled.div`
    .wrapper{
        display: grid;
        border: solid;
        border-color: black;
        border-top: none;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px; 
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 25vh);
        margin: 0 15vw 0;
        
    }
    .PicOne {
        grid-column: 1;
        grid-row: 1;
        background-color: #7C2F18;
        overflow:hidden;
    }
    .CaptionOne {
        grid-column: 2;
        grid-row: 1;
        background-color: #FCF1D9;     
    }
    .PicTwo {
        grid-column: 2;
        grid-row: 2; 
        background-color: #7C2F18;
        border-bottom-right-radius: 7px;
        overflow:hidden;
    }
    .CaptionTwo {
        grid-column: 1;
        grid-row: 2; 
        background-color: #FCF1D9; 
        border-bottom-left-radius: 10px;  
    }
    .CaptionBox {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-rows: 7vh 8vh 1vh 8vh
    }

    .PicBox {
        display: inline-block;
        img {
            width: auto;
            height: 25vh;
            position: relative;
            z-index: 1;
        }
        h3 {
            font-family: 'Darker Grotesque', sans-serif;
            position: absolute;
            z-index: 4;
            font-size: 10px;
            margin-top: 19vh;
            margin-left: 2vw;
        }
        text-align: end;
        vertical-align: bottom;
    }

    .ArticleName {
        grid-row: 1;
        font-family: 'Lobster Two', sans-serif;
    }
    .ArticleCredit {
        grid-row: 2;
        font-family: 'DM Serif Display', serif;
    }
    .ArticleBar {
        border: solid;
        border-top-color: black;
        margin-left: 3vw;
        margin-right: 23vw;
        margin-bottom: 3vh;
        position: relative;
        width: 3vw;
        grid-row: 3;
        border-width: 1.5px;
    }

    .ArticleDescription {
        grid-row: 4;
        font-family: 'Source Sans 3', sans-serif;
    }
`

const CollegeStudentMediaDiary = (props) => {
  return (
    <React.Fragment>
        <Container>
        <Header>
            <h1>COLLEGE STUDENT MEAL DIARY</h1>
        </Header>
      <Body>
        <div class="wrapper">
            <div class="PicOne">
                <div class="PicBox">
                    <a href={props.article_top_url}>
                    <h3>{props.photo_top_credits}</h3>
                    <img src={props.photo_top}></img>
                    </a>
                </div>
            </div>

            <div class="CaptionOne">
                <div class="CaptionBox">
                    <h3 class="ArticleName">{props.article_top_title}</h3>
                    <div class="ArticleBar"></div>
                    <h3 class="ArticleCredit">{props.article_top_byline}</h3>
                    <h2 class="ArticleDescription">{props.article_top_text}</h2>
                </div>
            </div>
            <div class="CaptionTwo">
                <div class="CaptionBox">
                    <a href={props.article_bottom_url}><h3 class="ArticleName">{props.article_bottom_title}</h3></a>
                    <div class="ArticleBar"></div>
                    <h3 class="ArticleCredit">{props.article_bottom_byline}</h3>
                    <h2 class="ArticleDescription">{props.article_bottom_text}</h2>
                </div>
            </div>
            <div class="PicTwo">
                <div class="PicBox">
                <h3>{props.photo_bottom_credits}</h3>
                <img src={props.photo_bottom}></img>
                </div>
                </div>
        </div>
      </Body>
      </Container>
    </React.Fragment>
  )
}

export default CollegeStudentMediaDiary;