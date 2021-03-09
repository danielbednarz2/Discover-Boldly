import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div` 
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    justify-content: center;
`

const StyledLink = styled(Link)`
    background: white;
    text-decoration: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
    width: 20rem;
    height: auto;
    margin: 1em;

    // hover effects
    position: relative;
    top: 0;
    transition: all .1s ease-in;

    &:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
    cursor: pointer;
    }
`

const Thumbnail = styled.img`
    object-fit: cover;
    height: 60%;

    @media (max-width: 400px) {
        height: 100px;
        width: 300px;
    }
`

const BlogInfo = styled.article`
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.h3`
    font-size: 1.2rem;
    margin: 0;
`
const BlogCategories = styled.div`
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
`

const Categories = styled.span`
    font-size: .6rem;
    color: #999;
    letter-spacing: .05rem;
`

const ReadMore = styled.span`
    font-size: .6rem;
    letter-spacing: .05rem;

    &:hover {
        color: #699184;
    }
`


const Card = ({ article }) => {    
    return (
        <Wrapper>

           { article.map(articles => {
            return (
            <StyledLink to={`/articles/${articles.id}`} style={{'textDecoration': 'none', 'color': '#32453E'}}>
                <Thumbnail src={`http://localhost:1337${articles.image.url}`} />
                <BlogInfo>
                    <Title>{articles.title}</Title>
                    <BlogCategories>
                        <Categories>{articles.category.name}</Categories>
                        <ReadMore>Read More</ReadMore>
                    </BlogCategories>
                </BlogInfo>
            </StyledLink>
            )
           })
        }
        </Wrapper>

    )
}

export default Card;