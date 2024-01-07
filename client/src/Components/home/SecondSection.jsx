import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { useTypewriter } from "react-simple-typewriter";
import Images from "./Images.jsx";


const NewBox = styled(Box)`
    width: 50%;
    padding-top: 90px;

    @media screen and (max-width: 1100px){
        width: 100%;
        text-align: center; 
        padding-top: 50px;
    }
`

const FirstTypo = styled(Typography)`
    font-size: 4vw;
    color: white;

    @media screen and (max-width: 700px){
        text-align: center;
        font-size: 8vw;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        font-size: 6vw;
        text-align: center;
    }
`

const SecondTypo = styled(Typography)`
    font-size: 4vw;
    color: #af09f7;

    @media screen and (max-width: 700px){
        text-align: center;
        font-size: 10vw;
        color: #af09f7;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        text-align: center;
        font-size: 8vw;
        color: #af09f7;
    }
`

const ThirdTypo = styled(Typography)`
    font-size: 3vw;
    color: white;
    display: inline;

    @media screen and (max-width: 1100px){
        text-align: center;
        font-size: 6vw;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        text-align: center;
        font-size: 4vw;
    }
`

function SecondSection() {

    const [text] = useTypewriter({
        words: ['Web Developer', 'React Frontend Developer', 'MERN Stack Developer'],
        loop: {},
        typeSpeed: 30,
        deleteSpeed: 30,
    })

    return(
        <NewBox>
            <FirstTypo>Hi, I am</FirstTypo>
            <SecondTypo>Ayush Jain</SecondTypo>
            <ThirdTypo>{text}</ThirdTypo>
            <Images />
        </NewBox>
    )
}

export default SecondSection;