import React, {useState, useEffect} from "react";
import { Button } from "@mui/material";
import { styled as scStyled } from "styled-components"
import { handleClick2 } from "../home/Images.jsx"
import dark from "./images/dark.png"
import light from "./images/light.png"

const Image = scStyled.img`
    width: 20px;
`

function LightDarkButton(){
    const [theme, setTheme] = useState("light-theme");

    const handleClick1 = () => {
        if (theme === "light-theme"){
            setTheme("dark-theme");
            document.getElementById("themeImage").src = light;
        }
        else {
            setTheme("light-theme");
            document.getElementById("themeImage").src = dark;
        }
    }

    const handleClick = () =>{
        handleClick1();
        handleClick2();
    }

    useEffect(()=> {
        document.body.className = theme;
    }, [theme]);

    return (
        <Button variant = "outlined" onClick = {()=> handleClick()} style ={{backgroundColor: "white"}}>
            <Image src={dark} alt="theme" id="themeImage" />
        </Button>
    )
}

export default LightDarkButton;