import React from 'react'
import styled from 'styled-components'
import MostRecent from './MostRecent.js'
import BlogPosts from './BlogPosts.js'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`


const Body = () => {
    return (
        <Wrapper>
            <MostRecent />
            <BlogPosts />
        </Wrapper>        
    )
}

export default Body;