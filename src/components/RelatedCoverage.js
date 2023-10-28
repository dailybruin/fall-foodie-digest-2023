import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import RelatedCard from './RelatedCard';

const Container = styled.div`
    border: 2px solid black;
    background: #FCF1D9;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    width: 63%;
    ${mediaQueries.mobile}{
        margin: auto;
        width: 70%;
        border: 1px solid black;
    }
`
const Header = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: 2px solid black;
    background: #41533E;
    margin-left: -2px;
    margin-top: -2px;
    ${mediaQueries.mobile}{
        height: 30px;
        border: 1px solid black;
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
    row-gap: 10px;
    justify-items: center;
    ${mediaQueries.mobile}{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        margin: auto;
        align-items: center;
        column-gap: 1em;
        row-gap: 0.1em;
    }
    padding-bottom: 3em;
`;

const RelatedCoverage = (props) => {
    return (
        <>
            <Container>
                <Header>
                    <Title>RELATED COVERAGE</Title>
                </Header>
                <Grid>
                    {props && props.coverage ? props.coverage.map((item) => {
                        return(
                            <RelatedCard
                                article_title={item.article_title}
                                article_image={item.article_image}
                                article_url={item.article_url}
                                article_byline={item.article_byline}
                                article_img_credit={item.article_img_credit}
                            />
                        );
                    })
                : null}
                </Grid>
            </Container>
        </>
    )
}

export default RelatedCoverage;