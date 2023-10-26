import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import RelatedCard from './RelatedCard';

const Container = styled.div`
    border: 2px solid black;
    background: #FCF1D9;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    width: 896px;
    height: 401px;
    ${mediaQueries.mobile}{
        margin: atuo;
        height: 1200px;
        width: 400px;
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
        row-grap: 1em;
    }
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
                                article_title={props.coverage.article_title}
                                article_image={props.coverage.article_image}
                                article_url={props.coverage.article_url}
                                article_byline={props.coverage.article_byline}
                                article_img_credit={props.coverage.article_img_credit}
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