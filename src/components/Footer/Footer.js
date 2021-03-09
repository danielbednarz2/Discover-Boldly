import React from "react";
import styled from "styled-components";
import { Linkedin, Github, Twitter, Instagram } from "@styled-icons/boxicons-logos";

const Wrapper = styled.footer`
   min-height: 10vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
const Copyright = styled.p`
    font-size: 1rem;
    margin: 1rem 0;
    letter-spacing: .05rem;
`

const SocialMedia = styled.section`
    display: flex;
    margin-top: 1em;
`

const LinkedInIcon = styled(Linkedin)`
    height: 1.5rem;
    width: auto;
    margin-right: 1em;
    color: #32453E;

        &:hover {
            color: #2867B2;
        }
`
const GithubIcon = styled(Github)`
    height: 1.5rem;
    width: auto;
    color: #32453E;

        &:hover {
            color: #333;
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
`

const InstagramIcon = styled(Instagram)`
    height: 1.5rem;
    width: auto;
    margin-right: 1em;
    color: #32453E;

        &:hover {
            color: #C13584;
        }
`

const Footer = () => (
    <Wrapper>
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
        <hr />
        <Copyright> &#169; Daniel Walker {new Date().getFullYear()}</Copyright>
    </Wrapper>
)

export default Footer;