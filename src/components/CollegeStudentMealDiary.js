import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    border-color: black;
    width: 896px;
    margin: auto;

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

const Header = styled.div`
    background-color: #41533E;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: 2px solid black;
    margin-left: -2px;
    margin-top: -2px;
    h1 {
        width: 100%;
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
        margin-top: 15px;
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
        width: 100%;
        display: grid;
        border: solid;
        border-color: black;
        border-top: none;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px; 
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2);
        
    }
    .PicOne {
        grid-column: 1;
        grid-row: 1;
        background-color: #7C2F18;
        overflow: hidden;
        position: relative;
        p {
            font-family: 'Darker Grotesque', sans-serif;
            position: absolute;
            color: white;
            font-size: 10px;
            right: 1em;
            bottom: -0.5em;
            text-transform: uppercase;
        }
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
        overflow: hidden;
        position: relative;
        p {
            font-family: 'Darker Grotesque', sans-serif;
            position: absolute;
            color: white;
            font-size: 10px;
            right: 1em;
            bottom: -0.5em;
            text-transform: uppercase;
        }
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
        text-decoration: none;
        text-align: left;
        padding: 2em;
    }

    .PicBox {
        display: inline-block;
        position: relative;
        padding: 2em;
        // vertical-align: middle;
        // align-items:center;
        // display: flex;
        // justify-content: center;
        img {
            width: auto;
            height: 25vh;
            padding: 2 em;
            position: aboslute;
        
        }
    }

    .ArticleName {
        grid-row: 1;
        font-family: 'Lobster Two', sans-serif;
        font-size: 28px;
        text-decoration: none;
    }
    .ArticleCredit {
        grid-row: 2;
        font-family: 'DM Serif Display', serif;
        text-transform: uppercase;
    }
    .ArticleBar {
        border: solid;
        border-top-color: black;
        margin-right: 23vw;
        margin-top: 1em;
        margin-bottom: 1em;

        position: relative;
        width: 3vw;
        border-width: 1.5px;
    }

    .ArticleDescription {
        grid-row: 4;
        font-family: 'Source Sans 3', sans-serif;
        font-size: 12px;
        padding-bottom: 2em;
    }
`

const CollegeStudentMediaDiary = (props) => {
    console.log(props)
  return (
    <div>
        <Container>
        <Header>
            <h1>COLLEGE STUDENT MEAL DIARY</h1>
        </Header>
      <Body>
        <div class="wrapper">
            <div class="PicOne">
                <div class="PicBox">
                    <img src={props.articles.photo_top}></img>
                </div>
                <p>{props.articles.photo_top_credits}</p>
            </div>

            <div class="CaptionOne">
                <div class="CaptionBox">
                    <a style = {{textDecoration: 'none', color: 'black' }}href={props.articles.article_top_url}><div class="ArticleName">{props.articles.article_top_title}</div></a>
                    <div class="ArticleCredit">{props.articles.article_top_byline}</div>
                    <div class="ArticleBar"></div>
                    <div class="ArticleDescription">{props.articles.article_top_text}</div>
                </div>
            </div>
            <div class="CaptionTwo">
                <div class="CaptionBox">
                    <a style = {{textDecoration: 'none', color: 'black' }} href={props.articles.article_bottom_url}><div class="ArticleName">{props.articles.article_bottom_title}</div></a>
                    <div class="ArticleCredit">{props.articles.article_bottom_byline}</div>
                    <div class="ArticleBar"></div>
                    <div class="ArticleDescription">{props.articles.article_bottom_text}</div>
                </div>
            </div>
            <div class="PicTwo">
                <div class="PicBox">
                    <img src={props.articles.photo_bottom}></img>
                </div>
                <p>{props.articles.photo_bottom_credits}</p>
                </div>
        </div>
      </Body>
      </Container>
    </div>
  )
}

export default CollegeStudentMediaDiary;
