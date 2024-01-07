import React from "react"
import { Box, Typography, styled } from "@mui/material";

const NewBox = styled(Box)`
    width: 45%;
    background-color: var(--first-section-box);
`

const NewTypo = styled(Typography)`
    background-color: var(--first-section-typo-bgcolor);
    color: var(--first-section-typo-color);
    font-family: 'Segoe Script', cursive;
    font-weight: bold;
    font-size: 1.5em;
    margin-left: 30px;

    @media screen and (max-width: 700px){
        font-size: 1.5em;
        margin-left: 10px;
    }
`

function FirstSection(){
    const name = "<Ayush Jain />"

    return (
        <NewBox>
            <NewTypo>
                {name}
            </NewTypo>
        </NewBox>
    )
}

export default FirstSection;