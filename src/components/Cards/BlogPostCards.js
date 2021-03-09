import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    
`

const Card = styled.div`
 
`

const Href = styled.a`
    background: white;
    text-decoration: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    min-height: 100%;

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

const Thumbnail = styled.div`
    padding-bottom: 60%;
    height: 200px;
    width: 300px;
    background-size: cover;
    background-position: center;

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
    font-size: 1rem;
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

const PostCards = ({title, category, img}) => {
    return (
        <Wrapper>
            <Card>
                <Href>
                    <Thumbnail style={{'backgroundImage': `url(${img})`}}/>
                    <BlogInfo>
                        <Title>{title}</Title>
                        <BlogCategories>
                            <Categories>{category}</Categories>
                            <ReadMore>Read More</ReadMore>
                        </BlogCategories>
                    </BlogInfo>
                </Href>
            </Card>
        </Wrapper>
    )
}

export default PostCards