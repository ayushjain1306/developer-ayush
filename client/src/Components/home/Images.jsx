import React from "react";
import { Box, Link, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import facebookWhite from "./images/facebook-white.png";
import instagramWhite from "./images/instagram-white.png";
import linkedinWhite from "./images/linkedin-white.png";
import githubWhite from "./images/github-white.png";

const NewBox = styled(Box)`
    display: flex;
    margin-top: 20px;
    
    @media screen and (max-width: 1100px){
        justify-content: center;
    }
`

const Image = scStyled.img`
    width: 100%;
`

const NewLink = styled(Link)`
    width: 5%;
    margin-right: 10px;
    margin-left: 10px;

    @media screen and (max-width: 700px){
        width: 8%;
        margin-right: 15px;
        margin-left: 15px;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 7%;
        margin-right: 15px;
        margin-left: 15px;
    }
`

export const handleClick2 = () =>{
    
}

function Images(){
    return(
        <NewBox>
            <NewLink href = "https://www.facebook.com/profile.php?id=100072097902877">
                <Image id = "facebook" src={facebookWhite} alt="facebook" />
            </NewLink>
            <NewLink href = "https://instagram.com/itz_ashu.1306?utm_source=qr&igshid=MzNINGNkZWQ4Mg%3D%3D">
                <Image id = "instagram" src={instagramWhite} alt="instagram" />
            </NewLink>
            <NewLink href = "https://www.linkedin.com/in/ayush-jain-7b193622b">
                <Image id = "linkedin" src={linkedinWhite} alt="linkedin" />
            </NewLink>
            <NewLink href = "https://github.com/ayushjain1306">
                <Image id = "github" src={githubWhite} alt="github" />
            </NewLink>
        </NewBox>
    )
}

export default Images;