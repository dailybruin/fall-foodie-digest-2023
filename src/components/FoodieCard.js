import styled from 'styled-components'
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    width: 373px;
    border-radius: 10px;
    border: 1px solid black;
    left: 322px;
    background-color: white;
    margin: 50px auto 0px;
    ${mediaQueries.mobile}{
        width: 236px;
    }
`;

const Title = styled.div`
    font-weight: 16px;
    font-style: bold;
    margin-top: 0.5em;
    font-family: Lobster Two;
    font-size: 32px;

`
const Image = styled.img`
    width: 80%;
    height: 50%;
    border: 1px solid black;
    position: relative;
    border-radius: 10px;
`
const Byline = styled.div`
    font-size: 15px;
    font-family: DM Serif Display;
    text-transform: uppercase;

`
const Credit = styled.div`
    position: absolute;
    margin-top: 1em;
    position: relative;
    font-size: 9px;
    text-align: right;
    margin-right: 10%;
    text-transform: uppercase;
`
const Line = styled.div`
    margin-top: 1em;
    margin-left: 8em;
    margin-bottom: 1em;
    border: 1px solid black;
    width: 100px;
    position: relative;
`
const Description = styled.div`
    width: 80%;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    margin: auto;
    padding-top: 2em;
`
const FoodieCard = (props) => {
    return (
        <>
            <Container>
                <Title href = {props.food_url}>{props.food_name}</Title>
                <Byline>{props.food_byline}</Byline>
                <Line></Line>
                <Image src ={props.food_image}/>
                <Credit>PHOTO | {props.food_image_credits}</Credit>
                <Description>{props.food_text}</Description>
            </Container>
        </>
    )
}

export default FoodieCard;