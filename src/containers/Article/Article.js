import React from 'react'
import { useParams } from 'react-router'
import Query from '../../components/Query/Query'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import ARTICLE_QUERY from '../../queries/articles/articles'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    line-height: 2em;

    @media (min-width: 1400px) {
        width: 60vw;
    }
`
const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
`

const ContentWrapper = styled.div`
    justify-content: space-between;
    align-items: flex-start;
`

const Article = () => {
    let { id } = useParams();
    return (
        <Query query={ARTICLE_QUERY} id={id}>
            {({data: { articles } }) => {
                const article = articles.filter(i => i.id === id)
                return (
                    <Wrapper>
                        {console.log(article)}
                        <ImgWrapper>
                            <img src={article[0].image.url} alt='Blog Post' style={{'width': '60%'}} />         
                        </ImgWrapper>
                        <ContentWrapper>
                            <h1 style={{'padding': '1em 0'}}>{article[0].title}</h1>
                            <div>
                                <ReactMarkdown source={article[0].content} />
                                <p style={{'fontWeight': 'bold', 'padding': '1em 0'}}>
                                    <Moment format="MMM Do, YYYY">
                                        {article[0].published_at}
                                    </Moment>
                                </p>
                            </div>
                        </ContentWrapper>
                    </Wrapper>
                    )
                }
            }
        </Query>
    )
}

export default Article
