import React from "react"
import { Box, styled } from "@mui/material";
import { Link } from "react-scroll";
import { styled as scStyled } from "styled-components";
import LightDarkButton from "./Button.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";

const NewBox = styled(Box)`
    width: 50%;
    display: flex;
    align-items: center;
    background-color: var(--second-section-box);

    @media screen and (max-width: 1100px){
        justify-content: flex-end;
    }
`

const List = scStyled.ul`
    background-color: var(--second-section-ul);
    display: flex;
    font-family: 'Arial';
    justify-content: space-around;
    align-items: center;
    width: 90%;

    @media screen and (max-width: 1100px){
        display: none;
    }
`

const ListItems = scStyled.li`
    background-color: var(--second-section-li);
    color: var(--second-section-li-color);
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    font-weight: bold;
`

function SecondSection(){
    return (
        <NewBox>
            <List>
                <Link to = "home" smooth = {true} offset = {0} duration = {900} style = {{cursor: "pointer"}}><ListItems>Home</ListItems></Link>
                <Link to = "about" smooth = {true} offset = {0} duration = {900} style = {{cursor: "pointer"}}><ListItems>About</ListItems></Link>
                <Link to = "skills" smooth = {true} offset = {0} duration = {900} style = {{cursor: "pointer"}}><ListItems>Skills</ListItems></Link>
                <Link to = "projects" smooth = {true} offset = {0} duration = {900} style = {{cursor: "pointer"}}><ListItems>Projects</ListItems></Link>
                <Link to = "contact" smooth = {true} offset = {0} duration = {900} style = {{cursor: "pointer"}}><ListItems>Contact Me</ListItems></Link>
            </List>

            <LightDarkButton />

            <HamburgerMenu />
        </NewBox>
    )
}

export default SecondSection;