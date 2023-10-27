import styled from 'styled-components'
import FoodieCard from './FoodieCard';

const Container = styled.div`
    border: 2px solid black;
    background: #FCF1D9;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    width: 896px;
    height: 633px;
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
                                food_name={item.food_name}
                                food_byline={item.food_byline}
                                food_image={item.food_image}
                                food_image_credits={item.food_image_credits}
                                food_text={item.food_text}
                                food_url={item.food_url}
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