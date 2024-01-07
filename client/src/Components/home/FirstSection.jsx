import React from "react";
import { Box, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import profile from "./images/profile.jpg";

const NewBox = styled(Box)`
    width: 50%;
    text-align: center;

    @media screen and (max-width: 1100px){
        width: 100%;
    }
`

const Image = scStyled.img`
    width: 60%;
    border: 6px solid white;
    border-radius: 50%;
    padding: 4px;

    @media screen and (max-width: 700px){
        width: 65%;
        border: 4px solid white;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 47%;
        border: 6px solid white;
    }
`

function FirstSection() {
    return(
        <NewBox>
            <Image src={profile} alt="profile" />
        </NewBox>
    )
}

export default FirstSection;