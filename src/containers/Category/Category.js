import React from 'react'
import { useParams } from 'react-router'
import Query from '../../components/Query/Query'
import Articles from '../../components/Articles/Articles'
import CATEGORY_ARTICLE_QUERY from '../../queries/categories/articles'
import styled from 'styled-components'

const Wrapper = styled.div`
    min-height: 100vh;
`

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    margin: 1em 0;
`

const Category = () => {
    let { id } = useParams();
    return (
        <Wrapper>
            <Query query={CATEGORY_ARTICLE_QUERY} id={id}>
                {({data: { category } }) => {
                    return (
                            <div>
                                <BodyWrapper>
                                    <Title>{category.name}</Title>
                                    <Articles articles={category.articles} />
                                </BodyWrapper>
                            </div>
                        )
                    }
                }
            </Query>
        </Wrapper>
    )
}

export default Category
