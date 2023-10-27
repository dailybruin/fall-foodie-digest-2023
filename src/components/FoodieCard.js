import styled from 'styled-components'
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    width: 373px;
    height: 473px;
    border-radius: 10px;
    border: 1px solid black;
    left: 322px;
    background-color: white;
    margin: 50px auto 0px;
    ${mediaQueries.mobile}{
        width: 236px;
        height: 271px;
    }
`;

const Title = styled.div`
    font-weight: 16px;
    font-style: bold;
    margin-top: 1em;
    
`
const Image = styled.img`
    width: 80%;
    height: 50%;
    border: 1px solid black;
    position: relative;
    border-radius: 10px;
`
const Byline = styled.div`
    position: absolute;
    width: 30%;
    margin-left: 0.5em;
    position: relative;
    margin-top: 1em;
`
const Credit = styled.div`
    position: absolute;
    margin-top: 1em;
    margin-right: -15em;
    position: relative;
    font-size: 12px;
`
const Line = styled.div`
    margin-top: 1em;
    margin-left: 8em;
    border: 1px solid black;
    width: 100px;
    position: relative;
`
const FoodieCard = (props) => {
    return (
        <>
            <Container>
                <Title href = {props.food_url}>{props.food_name}</Title>
                <Byline>{props.food_byline}</Byline>
                <Line></Line>
                <Image src ={props.food_image}/>
                <Credit>PHOTO | {props.food_image_credit}</Credit>
                <p>{props.food_text}</p>
            </Container>
        </>
    )
}

export default FoodieCard;