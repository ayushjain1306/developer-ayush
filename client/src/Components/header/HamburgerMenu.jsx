import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { Link } from "react-scroll";
import { styled as scStyled } from "styled-components";

const NewBox = styled(Box)`
    background-color: var(--second-section-box);
    width: 10%;
    margin-left: 9%;
    margin-right: 7%;
    cursor: pointer;

    @media screen and (min-width: 600px) and (max-width: 1100px){
        width: 7%;
    }

    @media screen and (min-width: 1100px){
        display: none;
    }
`

const FirstDiv = scStyled.div`
    border: 2px solid var(--first-section-typo-color);
    margin-bottom: 2px;
    border-radius: 10px;
`

const SecondDiv = scStyled.div`
    border: 2px solid var(--second-section-box);
    border-radius: 10px;
    width: 20%;
    position: absolute;
    top: 16px;
    right: 25px;

    
`

const AnotherBox = styled(Box)`
    width: 70%;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: var;
    height: 100vh;
    z-index: 1;
    transition: 0.5s;

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 40%;
    }
`

const List = scStyled.ul`
    background-color: var(--first-section-typo-color);
    font-family: 'Arial';
    text-align: center;
    padding: 0px;
    margin: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    jusify-content: center;
    padding-top: 40%;
`

const ListItems = scStyled.li`
    background-color: var(--first-section-typo-color);
    color: var(--second-section-box);
    text-decoration: none;
    list-style: none;
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: bold;
    width: 38%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
`

function HamburgerMenu() {
    const [menu, setMenu] = useState("close");

    const handleOpen = () =>{
        setMenu("open");
    }

    const handleClose = () =>{
        setMenu("close")
    }

    return (
        <>
            <NewBox onClick= {()=> handleOpen()}>
                <FirstDiv></FirstDiv>
                <FirstDiv></FirstDiv>
                <FirstDiv></FirstDiv>
            </NewBox>

            {
                menu === "open" &&
                    <AnotherBox>
                        <Button variant = "text" onClick = {() => handleClose()} style ={{
                            position: "absolute",
                            height: "5%",
                            top: "17px",
                            right: "45px",
                        }}>
                            <SecondDiv style = {{transform: "rotate(45deg)"}}></SecondDiv>
                            <SecondDiv style = {{transform: "rotate(-45deg)"}}></SecondDiv>
                        </Button>
                        
                        <List>
                            <Link to = "home" smooth = {true} offset = {0} duration = {900} onClick = {()=>handleClose()}><ListItems>Home</ListItems></Link>
                            <Link to = "about" smooth = {true} offset = {0} duration = {900} onClick = {()=>handleClose()}><ListItems>About</ListItems></Link>
                            <Link to = "skills" smooth = {true} offset = {0} duration = {900} onClick = {()=>handleClose()}><ListItems>Skills</ListItems></Link>
                            <Link to = "projects" smooth = {true} offset = {0} duration = {900} onClick = {()=>handleClose()}><ListItems>Projects</ListItems></Link>
                            <Link to = "contact" smooth = {true} offset = {0} duration = {900} onClick = {()=>handleClose()}><ListItems>Contact Me</ListItems></Link>
                        </List>
                    </AnotherBox>
            }
        </>
    )
}

export default HamburgerMenu;