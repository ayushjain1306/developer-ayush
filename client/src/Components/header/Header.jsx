import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";

const Appbar = styled(AppBar)`
    background-color: var(--app-bar);
    width: 100vw;
`

const ToolBar = styled(Toolbar)`
    background-color: var(--tool-bar);
    width: 100vw;
`

function Header() {
    return (
        <Appbar>
            <ToolBar>
                <FirstSection />
                <SecondSection />
            </ToolBar>
        </Appbar>
    )
}

export default Header;