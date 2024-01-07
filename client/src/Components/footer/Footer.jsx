import React from "react";
import { Typography, styled } from "@mui/material";
import scStyled from "styled-components";

const Foot = scStyled.footer`
    background-color: var(--footer-bg-color);
    color: var(--footer-text-color);
    height: 8vh;
    padding-top: 20px;
    box-shadow: 1px 1px 8px 4px var(--footer-box-shadow-color);

    @media screen and (max-height: 500px){
        height: 10vh;
    }
`

const Typo = styled(Typography)`
    text-align: center;
    font-size: 17px;
`

function Footer(){
    const symbol = '\u00A9';
    const year = new Date().getFullYear();

    return (
        <Foot>
            <Typo>
                {symbol} Copyright {year} | Created By Ayush Jain
            </Typo>
        </Foot>
    )
}

export default Footer;