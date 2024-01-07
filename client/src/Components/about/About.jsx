import React from "react";
import { Box, Typography, Button, styled } from "@mui/material"

const NewBox = styled(Box)`
    background-color: var(--about-bg-color);
    color: var(--about-text-color);
    height: 100vh;
    padding-top: 60px;

    @media screen and (max-height: 500px){
        height: 900px;
    }
`

const HeadingTypo = styled(Typography)`
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;

    @media screen and (min-width: 700px) and (max-width: 1100px){
        font-size: 5rem;
    }
`

const ContentTypo = styled(Typography)`
    font-family: "Georgia";
    text-align: justify;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 8%;
    padding-right: 8%;
    font-size: 20px;

    @media screen and (max-width: 700px){
        font-size: 15px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        font-size: 23px;
    }
`

const NewButton = styled(Button)`
    margin-top: 20px;
    background-color: #7f08b1;
    font-weight: bold;
    color: white;

    &:hover {
        background-color: #7f08b1c4;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        font-size: 20px;
    }
`

function About(){
    return (
        <NewBox id = "about">
            <HeadingTypo>
                About Me
            </HeadingTypo>
            <ContentTypo>
                Hi! I am Ayush Jain, a MERN Stack Developer and a student, currently pursuing Bachelor's in Technology in Computer Science and Engineering. I am creating various web applications from 6 months now. I am specialized in MongoDB, React.JS, Node.JS and Express.JS. I can develop a website from interactive user interfaces to implementing server-side logics. I have also studied the concept of Data Structures and Algorithms and like to solve various DSA problems in Java.
            </ContentTypo>
            <ContentTypo>
                I have started my coding journey in my 11th standards where I learn to code in Python and continued to learn more concepts of Python in my 12th standards. In 2021, I started my college journey with the basic concepts of C and C++. Before starting my 3rd semester, I shift to Java and also done the concepts of DSA in Java. Then, I move on to Web Development and now, I am creating various web applications through MERN Stack.
            </ContentTypo>
            <Box style = {{textAlign: "center"}}>
                <NewButton variant = "contained">Connect with me</NewButton>
            </Box>
        </NewBox>
    )
}

export default About;