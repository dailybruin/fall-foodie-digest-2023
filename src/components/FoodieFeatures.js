import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import FoodieCard from './FoodieCard';

const Container = styled.div`
    border: 2px solid black;
    background: #FCF1D9;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    width: 896px;
    height: 633px;
    ${mediaQueries.mobile}{
        margin: auto;
        height: 1200px;
        width: 400px;
    }
`
const Header = styled.div`
    width: 100%;
    border-radius: 10px;
    border: 2px solid black;
    background: #41533E;
    margin-left: -2px;
    margin-top: -2px;
`

const Title = styled.div`
    width: 449px;
    height: 39px;
    margin-top: 20px;
    margin-right: 20px;
    font-weight: 700;
    font-size: 32px;
    font-line-height: 30.62px;
    color: #FFFFFF;
`

const Grid = styled.div`
    max-width: auto;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 10px;
    row-gap: 10px;
    justify-items: center;
    ${mediaQueries.mobile}{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        margin: auto;
        align-items: center;
        column-gap: 2em;
        row-grap: 1em;
    }
`;

const FoodieFeatures = (props) => {
    return (
        <>
            <Container>
                <Header>
                    <Title>FOODIE FEATURES</Title>
                </Header>
                <Grid>
                    {props && props.related ? props.related.map((item) => {
                        return(
                            <FoodieCard
                                food_name={props.related.food_name}
                                food_byline={props.related.food_byline}
                                food_image={props.related.food_image}
                                food_image_credits={props.related.food_image_credits}
                                food_text={props.related.food_text}
                                food_url={props.related.food_url}
                            />
                        );
                    })
                : null}
                </Grid>
            </Container>
        </>
    )
}

export default FoodieFeatures;