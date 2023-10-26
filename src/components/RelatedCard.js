import styled from 'styled-components'
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    width: 236px;
    height: 271px;
    border-radius: 10px;
    border: 1px solid black;
    left: 322px;
    background-color: white;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    border: 1px solid black;
    position: relative;
    margin-top: 1em;
`
const Byline = styled.div`
    position: absolute;
    width: 30%;
    margin-left: 0.5em;
    margin-top: 1em;
    margin-bottom: 1em;
    position: relative;
`
const Credit = styled.div`
    margin-top: -1em;
    margin-right: -2em;
`
const RelatedCard = (props) => {
    return (
        <>
            <Container>
                <Image src = {props.article_image}/>
                <h1>{props.article_title}</h1>
                <Credit>PHOTO | {props.article_image_credit}</Credit>
                <Byline>By {props.article_byline}</Byline>
                <p>{props.article_url}</p>
            </Container>
        </>
    )
}

export default RelatedCard;