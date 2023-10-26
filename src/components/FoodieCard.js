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
`;

const Image = styled.img`
    width: 65%;
    height: 30%;
    border: 1px solid black;
    position: relative;
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
    position: absolute;
    margin-top: 1em;
    margin-right: -15em;
    position: relative;
`
const Line = styled.div`
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 8em;
    border: 1px solid black;
    width: 100px;
    position: relative;
`
const FoodieCard = (props) => {
    return (
        <>
            <Container>
                <h1>Put Food Name Here {props.food_name}</h1>
                <Byline>BY {props.food_byline}</Byline>
                <Line></Line>
                <Image src ={props.food_image}/>
                <Credit>PHOTO | {props.food_image_credit}</Credit>
                <p>{props.food_text}</p>
                <p>{props.food_url}</p>
            </Container>
        </>
    )
}

export default FoodieCard;