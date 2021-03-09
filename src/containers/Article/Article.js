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
`
const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
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
                return (
                    <Wrapper>
                        <ImgWrapper>
                            <img src={`http://localhost:1337${articles[id-1].image.url}`} alt='Blog Post' style={{'width': '80%'}} />         
                        </ImgWrapper>
                        <ContentWrapper>
                            <h1 style={{'padding': '1em 0'}}>{articles[id-1].title}</h1>
                            <div>
                                <ReactMarkdown source={articles[id-1].content} />
                                <p style={{'font-weight': 'bold', 'padding': '1em 0'}}>
                                    <Moment format="MMM Do, YYYY">
                                        {articles[id-1].published_at}
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
