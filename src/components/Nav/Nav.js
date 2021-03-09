import React from 'react'; 
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Linkedin, Github, Twitter, Instagram } from "@styled-icons/boxicons-logos";
import { Link } from 'react-router-dom';
import Query from '../Query/Query'

import CATEGORIES_QUERY from '../../queries/categories/categories'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const SiteTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    user-select: none;

    @media (max-width: 500px) {
        justify-content: center;
        min-height: 10vh;
    }
`

const SiteLogo = styled.img`
    width: 4rem;
    height: auto;
    filter: invert(1) invert(23%) sepia(15%) saturate(554%) hue-rotate(106deg) brightness(98%) contrast(94%);

    @media (max-width: 500px) {
        display: none;
    }
`

const SiteName = styled.h1`
    margin-left: 2rem;
    color: #32453E;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: .25em;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

const SocialMedia = styled.section`
    display: flex;

    @media (max-width: 500px) {
        display: none;
    }
`

const LinkedInIcon = styled(Linkedin)`
height: 1.5rem;
width: auto;
margin-right: 1em;
color: #32453E;

    &:hover {
        color: #2867B2;
    }

    @media (max-width: 768px) {
        height: 1rem;
    }

    @media (max-width: 1024px) {
        height: 1.25rem;
        margin-right: .5em;
    }
`
const GithubIcon = styled(Github)`
height: 1.5rem;
width: auto;
color: #32453E;

    &:hover {
        color: #333;
    }

    @media (max-width: 768px) {
        height: 1rem;
    }

    @media (max-width: 1024px) {
        height: 1.25rem;
    }
`

const TwitterIcon = styled(Twitter)`
height: 1.5rem;
width: auto;
margin-right: 1em;
color: #32453E;

    &:hover {
        color: #1DA1F2;
    }

    @media (max-width: 768px) {
        height: 1rem;
    }

    @media (max-width: 1024px) {
        height: 1.25rem;
        margin-right: .5em;
    }
`

const InstagramIcon = styled(Instagram)`
height: 1.5rem;
width: auto;
margin-right: 1em;
color: #32453E;

    &:hover {
        color: #C13584;
    }

    @media (max-width: 768px) {
        height: 1rem;
    }

    @media (max-width: 1024px) {
        height: 1.25rem;
        margin-right: .5em;
    }
`

const Head = styled.header`
    width: 75vw;
    min-height: 7.5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid;

    @media (min-width: 992px) {
        width: 60vw;
    }

    @media (min-width: 1200px) {
        width: 50vw;
    }

    @media (min-width: 1440px) {
        justify-content: space-evenly;
    }
`

const NavLink = styled(Link)`
    font-weight: 400;
    font-size: .8rem;
    letter-spacing: .1rem;
    text-decoration: none;
    color: #32453E;
    
    &:hover {
        color: #699184;
    }

    @media (max-width: 768px) {
        font-size: .6rem;
    }

    @media (min-width: 1440px) {
        font-size: 1rem;
    }
`

const Header = ()  => {


    return (
        <Wrapper>
            <SiteTitle>
                <Link to="/">
                    <SiteLogo src={logo}></SiteLogo>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <SiteName>DISCOVER BOLDLY</SiteName> 
                </Link>
                <SocialMedia>
                    <a href="https://linkedin.com/in/daniel-bednarz" target="_blank" rel="noreferrer"> 
                    <LinkedInIcon size="20" title="LinkedIn"/>
                    </a>
                    <a href="https://twitter.com/danielwalkerdev" target="_blank" rel="noreferrer">
                    <TwitterIcon size="20" title="Twitter"/>
                    </a>
                    <a href="https://instagram.com/danielwalkerdev" target="_blank" rel="noreferrer">
                    <InstagramIcon size="20" title="Instagram"/> 
                    </a>
                    <a href="https://github.com/danielbednarz2" target="_blank" rel="noreferrer">
                    <GithubIcon size="20" title="Github"/> 
                    </a>
                </SocialMedia>
            </SiteTitle>
            <Head>
                <Query query={CATEGORIES_QUERY} id={null}>
                    {
                    ({ data: {categories}}) => {
                        return (
                            <>
                            <NavLink to="/" >Home</NavLink>
                                {
                                    categories.map((category) => {
                                        return (
                                            <NavLink key={category.id} to={`/category/${category.id}`}>
                                                {category.name}
                                            </NavLink> 
                                        )
                                    })
                                }
                            </>
                      )
                    }
                    }
                </Query>
            </Head>
        </Wrapper>
    )
    
};

export default Header;