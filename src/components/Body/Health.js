import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PostCards from '../Cards/BlogPostCards'
import health from '../../assets/health.jpg'

const Wrapper = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PostWrapper = styled.div`
    display: grid;
    min-height: 75vh;
    padding: 2em 0;
    width: 100%;
    
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

const Health = () => {
    return (
        <Wrapper>
            <h1>Health</h1>
            <PostWrapper>
              <PostCards title="Blog about health" category="health" img={health}/>
              <PostCards title="Blog about health" category="health" img={health}/>
              <PostCards title="Blog about health" category="health" img={health}/>
              <PostCards title="Blog about health" category="health" img={health}/>
              <PostCards title="Blog about health" category="health" img={health}/>
              <PostCards title="Blog about health" category="health" img={health}/>
              <PostCards title="Blog about health" category="health" img={health}/>
              <PostCards title="Blog about health" category="health" img={health}/>
            </PostWrapper>
            <Link to="/" style={{textDecoration: 'none', color: '#32453E'}} >Go Home</Link>
        </Wrapper>
    )
}

export default Health
