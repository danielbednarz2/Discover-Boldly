import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'

const Wrapper = styled.div`
height: auto;
display: flex;
flex-wrap: wrap;
`

const Articles = ({ articles }) => {

    
    return (

       <Wrapper>
           <Card article={articles} key={`article_${articles.id}`} />
        </Wrapper>
    )
}

export default Articles