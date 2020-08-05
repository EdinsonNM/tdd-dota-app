import React from "react";
import "../styles/header.scss";
import {NavBar} from "@pacificoseguros/pixie/react";
export default function Header() {
    return (
        <NavBar layoutWidth={1280} className="demo-header">
            INICIO
        </NavBar>
    );
}
