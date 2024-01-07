import React from "react";
import { Box, styled } from "@mui/material";
import { styled as scStyled } from "styled-components";
import submitApi from "../../service/submitApi.js";

const NewBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`

const NewButton = scStyled.button`
    background-color: #7f08b1;
    color: white;
    font-weight: bold;
    margin: 10px 15px;
    font-size: 20px;
    width: 10%;
    border-radius: 3px;
    border: 0px;
    height: 5vh;
    cursor: pointer;
    
    &:hover {
        background-color: #7f08b1c4;
    }

    @media screen and (max-width: 700px){
        width: 35%;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px){
        width: 20%;
    }

    @media screen and (max-height: 500px){
        height: 8vh;
    }
`

function Buttons({ inputData, fieldData, setFieldData }){
    const handleReset = ()=>{
        setFieldData(inputData);
    }

    const handleSubmit = (e) => {
        if (fieldData.name.trim() === "" || fieldData.mobile.trim() === "" || fieldData.email.trim() === " "|| fieldData.message.trim() === ""){
            alert("Please fill all the input fields.");
            return;
        }

        submitApi(fieldData);
        e.preventDefault();
    }

    return (
        <NewBox>
            <NewButton type = "submit" onClick = {(e) => handleSubmit(e)}>Submit</NewButton>
            <NewButton type = "reset" onClick = {() => handleReset()}>Reset</NewButton>
        </NewBox>
    )
}

export default Buttons;