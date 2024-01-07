import React from 'react';
import { Box, Typography, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";

import html from "./images/html.png";
import css from "./images/css.png";
import javascript from "./images/javascript.png";
import react from "./images/react.png";
import node from "./images/node.png";
import express from "./images/express.png";
import mongodb from "./images/mongodb.png";
import java from "./images/java.png";
import python from "./images/python.png";
import c from "./images/c++.png";

const NewBox = styled(Box)`
    height: 100vh;
    background-color: var(--skills-bg-color);
    color: var(--skills-text-color);
    padding-top: 80px; 

    @media screen and (max-width: 700px){
        padding-top: 40px;
    }
    
    @media screen and (max-height: 500px){
        height: 700px;
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

const AnotherBox = styled(Box)`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    margin-top: 80px;

    @media screen and (max-width: 700px){
        grid-template-columns: 33% 33% 33%;
        margin-top: 40px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        grid-template-columns: 25% 25% 25% 25%;
    }
`
const Image = scStyled.img`
    width: 40%;
    height: 110px;
    margin-bottom: 10px;

    @media screen and (max-width: 700px){
        height: 90px;
        width: 60%;
    }
`

const InsideBox = styled(Box)`
    text-align: center;
    margin-bottom: 40px;
`

const AnotherImage = scStyled.img`
    width: 70%;
    height: 110px;
    margin-bottom: 10px;

    @media screen and (max-width: 700px){
        height: 90px;
        width: 100%;
    }
`

const images = [
    {title: "HTML", picture: html},
    {title: "CSS", picture: css},
    {title: "JavaScript", picture: javascript},
    {title: "React", picture: react},
    {title: "Node", picture: node},
    {title: "Express", picture: express},
    {title: "MongoDB", picture: mongodb},
    {title: "Java", picture: java},
    {title: "Python", picture: python},
    {title: "C++", picture: c}
]

function Skills(){
    return(
        <NewBox id = "skills">
            <HeadingTypo>Skills</HeadingTypo>
            <AnotherBox>
                {
                    images.map((image) => {
                        return (
                            <InsideBox key = {image.title}>
                                {
                                    image.title !== "Express"
                                    ?
                                    <Image src={image.picture} alt="logo" />
                                    :
                                    <AnotherImage src={image.picture} alt="logo" />
                                }
                                <Typography style = {{fontWeight: "bold"}}>{image.title}</Typography>
                            </InsideBox>
                        )
                    })
                }
            </AnotherBox>
        </NewBox>
    )
}

export default Skills;