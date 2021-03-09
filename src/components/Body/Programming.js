import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PostCards from '../Cards/BlogPostCards'
import programming from '../../assets/programming.jpg'

const Wrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const PostWrapper = styled.div`
    display: grid;
    min-height: 75vh;
    padding: 2em 0;
    
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 1.5em;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1400px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const Programming = () => {
    return (
        <Wrapper>
            <h1>Programming</h1>
            <PostWrapper>
              <PostCards title="Blog about programming" category="programming" img={programming}/>
              <PostCards title="Blog about programming" category="programming" img={programming}/>
              <PostCards title="Blog about programming" category="programming" img={programming}/>
              <PostCards title="Blog about programming" category="programming" img={programming}/>
              <PostCards title="Blog about programming" category="programming" img={programming}/>
              <PostCards title="Blog about programming" category="programming" img={programming}/>
              <PostCards title="Blog about programming" category="programming" img={programming}/>
              <PostCards title="Blog about programming" category="programming" img={programming}/>
            </PostWrapper>
            <Link to="/" style={{textDecoration: 'none', color: '#32453E'}} >Go Home</Link>
        </Wrapper>
    )
}

export default Programming
