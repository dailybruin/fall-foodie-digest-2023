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

const Title = styled.div`
    margin-top: 1em;
`
const Image = styled.img`
    width: 80%;
    height: 50%;
    border: 1px solid black;
    position: relative;
    margin-top: 1em;
    border-radius: 10px;
`
const Byline = styled.div`
    position: absolute;
    width: 30%;
    margin-bottom: 1em;
    position: relative;
`
const Credit = styled.div`
    margin-top: 1em;
    margin-right: 1em;
    font-size: 10px;
    margin-right: -15em;
`
const RelatedCard = (props) => {
    return (
        <>
            <Container>
                <Image src = {props.article_image}/>
                <Credit>PHOTO | {props.article_image_credit}</Credit>
                <Title href = {props.article_url}>{props.article_title}</Title>
                <Byline>{props.article_byline}</Byline>
            </Container>
        </>
    )
}

export default RelatedCard;