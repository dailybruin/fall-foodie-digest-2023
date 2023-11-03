import styled from 'styled-components'
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    width: 236px;
    border-radius: 10px;
    border: 1px solid black;
    left: 322px;
    background-color: white;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
    a{
        text-decoration: none;
        color: black;
    }

    ${mediaQueries.mobile}{
        width: 80%;
    }
`;

const Title = styled.div`
    margin-top: 1em;
    font-family: Lobster Two;
    text-align: left;
    padding-left: 10%;
    font-size: 18px;
`
const Image = styled.img`
    width: 80%;
    height: 50%;
    position: relative;
    margin-top: 1em;
    border-radius: 10px;
`
const Byline = styled.div`
    position: absolute;
    text-align: left;
    margin-bottom: 1em;
    position: relative;
    font-family: DM Serif Display;
    text-transform: uppercase;
    padding-left: 10%;
    font-size: 11px;

`
const Credit = styled.div`
    margin-top: 1em;
    text-align: right;
    margin-right: 10%;
    font-size: 6px;
    text-transform: uppercase;
`

const RelatedCard = (props) => {
    console.log(props)
    return (
        <>
            <Container>
                <a href={props.article_link}>
                    <Image src = {props.article_image}/>
                    <Credit> PHOTO | {props.article_img_credit} </Credit>
                    <Title>{props.article_title}</Title>
                    <Byline>{props.article_byline}</Byline>
                </a>
            </Container>
        </>
    )
}

export default RelatedCard;