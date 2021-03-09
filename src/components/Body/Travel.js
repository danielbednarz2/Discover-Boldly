import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PostCards from '../Cards/BlogPostCards'
import travel from '../../assets/travel.jpg'

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

const Travel = () => {
    return (
        <Wrapper>
            <h1>Travel</h1>
            <PostWrapper>
                <PostCards title="Blog about travel" category="travel" img={travel}/>
                <PostCards title="Blog about travel" category="travel" img={travel}/>
                <PostCards title="Blog about travel" category="travel" img={travel}/>
                <PostCards title="Blog about travel" category="travel" img={travel}/>
                <PostCards title="Blog about travel" category="travel" img={travel}/>
                <PostCards title="Blog about travel" category="travel" img={travel}/>
                <PostCards title="Blog about travel" category="travel" img={travel}/>
                <PostCards title="Blog about travel" category="travel" img={travel}/>
            </PostWrapper>

            <Link to="/" style={{textDecoration: 'none', color: '#32453E'}} >Go Home</Link>
        </Wrapper>
    )
}

export default Travel
