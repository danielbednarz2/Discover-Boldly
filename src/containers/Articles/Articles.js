import React from 'react'
import Query from '../../components/Query/Query'
import Articles from '../../components/Articles/Articles'
import ARTICLES_QUERY from '../../queries/articles/articles'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    margin: 1em 0;
`

const Home = () => {

    return (
        <Wrapper>
            <Query query={ARTICLES_QUERY}>
                {
                    ({ data: { articles } }) => {
                        return <Articles articles={articles} />
                    }
                }
            </Query>
        </Wrapper>
    )
}

export default Home