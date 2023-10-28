import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import RelatedCard from './RelatedCard';

const Container = styled.div`
    border: 1px solid black;
    background: #FCF1D9;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    width: 70%;
`
const Header = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: 1px solid black;
    background: #41533E;
    margin-left: -2px;
    margin-top: -2px;
    ${mediaQueries.mobile}{
        height: 30px;
    }
`

const Title = styled.div`
    font-weight: 700;
    font-size: 32px;
    font-line-height: 30.62px;
    color: #FFFFFF;
    text-align: left;
    margin-left: 20px;
    margin-top: 12px;

    ${mediaQueries.mobile}{
        font-size: 14px;
        margin-left:10px;
        margin-top:5px;
    }
`

const Grid = styled.div`
    max-width: auto;
    margin: atuo;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-grap: 10px;
    row-gap: 10px;
    justify-items: center;
    ${mediaQueries.mobile}{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        margin: auto;
        align-items: center;
        column-gap: 2em;
        row-gap: 0.1em;
    }
    padding-bottom: 3em;

`;

const MobileFoodie = (props) => {
    return (
        <>
            <Container>
                <Header>
                    <Title>FOODIE FEATURES</Title>
                </Header>
                <Grid>
                    {props && props.mobile ? props.mobile.map((item) => {
                        return(
                            <RelatedCard
                                article_image={item.food_image}
                                article_url={item.food_url}
                                article_img_credit={item.food_image_credits}
                                article_title={item.food_name}
                                article_byline={item.food_byline}
                            />
                        );
                    })
                : null}
                </Grid>
            </Container>
        </>
    )
}

export default MobileFoodie;