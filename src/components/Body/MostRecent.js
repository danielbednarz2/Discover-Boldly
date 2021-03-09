import React from 'react'
import styled from 'styled-components'
import temp from '../../assets/temp.jpg'
import profile from '../../assets/profile.jpg'

const Wrapper = styled.div`
    height: 37.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: auto;
    padding: 2em 0;

    @media (max-width: 500px) {
        height: auto;
    }
`

const MostRecentPost = styled.div`
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    max-width: 600px;
`

const MostRecentTitle = styled.h2`
    font-size: 1.25rem;
    letter-spacing: .1em;
    font-weight: 500;

    @media (max-width: 500px) {
        font-size: 1rem;
    }
    @media (max-width: 360px) {
        font-size: .8rem;
    }
`

const MostRecentTopic = styled.p`
    font-size: .6rem;
    margin-top: .5rem;
`

const MostRecentImage = styled.img`
    height: auto;
    width: 100%;
    margin: 1em 0;
`


const MostRecentDescription = styled.p`
    font-size: .75rem;
    line-height: 1.25rem;

    @media (max-width: 500px) {
        font-size: .5rem;
        line-height: 1rem;
    }
`

const AboutMe = styled.aside`
    width: 25%;
    height: auto;
    max-width: 325px;
    text-align: center;

    @media (max-width: 500px) {
        display: none;
    }
`

const AboutMeTitle = styled.h3`
    font-weight: 600;
    letter-spacing: .05rem;
`

const AboutMeInfo = styled.div`
`

const AboutImage = styled.img`
    width: 75%;
    height: auto;
    margin: 1rem 0;
`

const AboutDescription = styled.div`
    font-size: .65rem;
`

const MostRecent = () => {
    return (    
        <Wrapper>
            <MostRecentPost>
                <MostRecentTitle>How I Learned Web Development</MostRecentTitle>
                <MostRecentTopic>programming</MostRecentTopic>
                <MostRecentImage src={temp} />
                <MostRecentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat tincidunt massa et condimentum. Quisque elementum, enim ac consectetur pulvinar, sapien urna tempus eros, sit amet tempor ligula sem in magna. Mauris nec enim at tellus sollicitudin gravida. Praesent sodales magna sit amet eleifend faucibus. Etiam blandit faucibus massa non maximus. Integer posuere nec diam quis facilisis. Curabitur vitae sem venenatis, sollicitudin lorem eget, gravida augue. Sed accumsan feugiat leo. Fusce non condimentum nibh.</MostRecentDescription>
            </MostRecentPost>
            <AboutMe>
                <AboutMeTitle>About Me</AboutMeTitle>
                <AboutMeInfo>
                    <AboutImage src={profile} />
                    <AboutDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat tincidunt massa et condimentum. .</AboutDescription>
                </AboutMeInfo>
            </AboutMe>
        </Wrapper>
    )

}

export default MostRecent;