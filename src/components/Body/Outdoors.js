import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PostCards from '../Cards/BlogPostCards'
import outdoors from '../../assets/outdoors.jpg'

const Wrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Outdoors = () => {
    return (
        <Wrapper>
            <h1>Outdoors</h1>
            <PostWrapper>
              <PostCards title="Blog about outdoors" category="outdoors" img={outdoors}/>
              <PostCards title="Blog about outdoors" category="outdoors" img={outdoors}/>
              <PostCards title="Blog about outdoors" category="outdoors" img={outdoors}/>
              <PostCards title="Blog about outdoors" category="outdoors" img={outdoors}/>
              <PostCards title="Blog about outdoors" category="outdoors" img={outdoors}/>
              <PostCards title="Blog about outdoors" category="outdoors" img={outdoors}/>
              <PostCards title="Blog about outdoors" category="outdoors" img={outdoors}/>
              <PostCards title="Blog about outdoors" category="outdoors" img={outdoors}/>
            </PostWrapper>
            <Link to="/" style={{textDecoration: 'none', color: '#32453E'}} >Go Home</Link>
        </Wrapper>  
    )
}

export default Outdoors
