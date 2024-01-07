import React, { useState } from "react";
import { Box, Typography, TextField, styled } from "@mui/material";
import Buttons from "./Buttons.jsx";

const NewBox = styled(Box)`
    height: 100vh;
    padding-top: 60px;

    @media screen and (max-width: 700px){
        padding-top: 80px;
    }

    @media screen and (max-height: 500px){
        height: 700px;
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
    margin-top: 60px;

    @media screen and (max-width: 700px){
        margin-top: 80px;
    }
`

const TextFieldInput = styled(TextField)`
    width: 50%;
    margin-bottom: 20px;

    @media screen and (max-width: 700px){
        width: 80%;
    }
`

const inputData = {
    name: "",
    mobile: "",
    email: "",
    message: "",
}

function Contact(){
    const [fieldData, setFieldData] = useState(inputData);

    const handleChange = (e) => {
        setFieldData({...fieldData, [e.target.id]: e.target.value});
    }

    return (
        <NewBox id = "contact">
            <HeadingTypo>
                Contact Me
            </HeadingTypo>

            <AnotherBox>
                <form action = "/" style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <TextFieldInput 
                        required 
                        id = "name" 
                        label = "Enter your Name" 
                        variant = "outlined" 
                        onChange = {(e) => handleChange(e) } />
                    <TextFieldInput 
                        required 
                        id = "mobile" 
                        label = "Enter your Mobile Number" 
                        variant = "outlined" 
                        onChange = {(e) => handleChange(e) } />
                    <TextFieldInput 
                        required 
                        id = "email"  
                        label = "Enter your Email-Id" 
                        variant = "outlined" 
                        onChange = {(e) => handleChange(e) } />
                    <TextFieldInput 
                        required 
                        id = "message"
                        label = "Type your message here" 
                        multiline
                        rows= {4}
                        variant = "outlined" onChange = {(e) => handleChange(e) } />

                    <Buttons inputData = {inputData} fieldData = {fieldData} setFieldData = {setFieldData} />
                </form>
            </AnotherBox>

            
        </NewBox>
    )
}

export default Contact;