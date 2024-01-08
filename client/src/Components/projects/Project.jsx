import React from "react";
import { Box, Typography, Link, styled } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import projectData from "../../data/projectData.js";

const NewBox = styled(Box)`
    height: 70vh;
    background-color: var(--projects-bg-color);
    color: var(--projects-text-color);
    padding-top: 60px;

    @media screen and (max-width: 700px){
        padding-top: 80px;
        min-height: 70vh;
        padding-bottom: 20px;
    }

    @media screen and (max-height: 500px){
        height: 500px;
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
    width: 25%;
    border-radius: 10px;
    box-shadow: 9px 8px 0px 0px rgb(172, 169, 169);
    background-color: var(--projects-box-bg-color);
    margin-right: 20px;

    @media screen and (max-width: 700px){
        width: 75%;
        margin: auto;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 50%;
    }
`

const FirstBox = styled(Box)`
    border-radius: 10px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    color: black;

    @media screen and (max-width: 500px){
        display: none;
    }
`

const SecondBox = styled(Box)`
    border-radius: 10px;
    margin-top: 80px;
    display: none;
    color: black;

    @media screen and (max-width: 500px){
        display: block;
    }
`

const Typo = styled(Typography)`
    text-align: center;
    color: #7f08b1;
    font-size: 20px;
    font-weight: 600;
`

const AnotherTypo = styled(Typography)`
    text-align: justify;
    font-size: 13px;
    margin: 10px 15px;
`

const NewLink = styled(Link)`
    display: block;
    text-align: center;
    margin-bottom: 10px;
`

function Projects(){
    return (
        <NewBox id  = "projects">
            <HeadingTypo>Projects</HeadingTypo>
            <FirstBox>
                {
                    projectData.map((project) => {
                        return (
                            <AnotherBox key = {project.title}>
                                <Typo>
                                    {project.title}
                                </Typo>
                                <AnotherTypo>
                                    {project.description}
                                </AnotherTypo>
                                <NewLink href = {project.link.website} target = "_blank">Website Link</NewLink>
                                <NewLink href = {project.link.github} target = "_blank">Github Link</NewLink>
                            </AnotherBox>
                        )
                    })
                }
            </FirstBox>
            <SecondBox>
                {
                    projectData.map((project) =>{
                        return (
                            <AnotherBox key = {project.title}>
                                <Typo>{project.title}</Typo>
                                <AnotherTypo>{project.description}</AnotherTypo>
                                <NewLink href = {project.link.website}>Website Link</NewLink>
                                <NewLink href = {project.link.github} style={{marginBottom: "0px"}}>Github Link</NewLink>
                            </AnotherBox>
                        )
                    })
                }
            </SecondBox>
        </NewBox>
    )
}

export default Projects;