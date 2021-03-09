import React from 'react'
import styled from 'styled-components'
import PostCards from '../Cards/BlogPostCards'
import travel from '../../assets/travel.jpg'
import books from '../../assets/books.jpg'
import outdoors from '../../assets/outdoors.jpg'
import health from '../../assets/health.jpg'
import programming from '../../assets/programming.jpg'

const Wrapper = styled.div`
    height: auto;
    margin: 3rem auto;
    display: grid;
    
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 1.5em;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media (min-width: 60em) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const BlogPosts = () => {
    return (
        <Wrapper>
            <PostCards title="Blog about programming" category="programming" img={programming}/>
            <PostCards title="Blog about health" category="health" img={health}/>
            <PostCards title="Blog about books" category="books" img={books}/>
            <PostCards title="Blog about travel" category="travel" img={travel}/>
            <PostCards title="Blog about outdoors" category="outdoors" img={outdoors}/>
            <PostCards title="Second Blog about health" category="health" img={health}/>
        </Wrapper>
    )
}

export default BlogPosts