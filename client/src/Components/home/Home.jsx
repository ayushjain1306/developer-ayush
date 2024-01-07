import React from "react";
import { Box, styled } from "@mui/material"
import FirstSection from "./FirstSection.jsx"
import SecondSection from "./SecondSection.jsx"

const NewBox = styled(Box)`
    display: flex;
    background: url("https://e0.pxfuel.com/wallpapers/475/184/desktop-wallpaper-portfolio-background-portfolio-background-portfolio-and-career-portfolio.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    backgroundPostion: center;
    height: 85vh;
    padding-top: 15vh;

    @media screen and (max-width: 1100px){
        display: block;
    }

    @media screen and (max-height: 500px){
        height: 1000px;
    }
`

function Home(){
    return (
        <NewBox id = "home">
            <FirstSection />
            <SecondSection />
        </NewBox>
    )
}

export default Home;