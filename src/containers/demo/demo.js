import "./styles/demo.scss";

import {Button, Card} from "@pacificoseguros/pixie/react";

import Header from "./components/header";
import React from "react";
import logoImage from "../../assets/images/logo-pacifico.png";

export default function Demo() {
    const changeTheme = (type) => () => {
        if (type) document.body.setAttribute("data-theme", type);
        else document.body.removeAttribute("data-theme");
    };
    return (
        <div className="demo">
            <Header></Header>
            <main className="demo__container">
                <img src={logoImage} alt="logo" width="200" />

                <Card distance={1} rounded className="demo__card">
                    <h1>Bienvenidos a Pacífico seguros boilerplate</h1>
                    <p>
                        Un boilerplate basado en <strong>create-react-app</strong> que
                        adiciona herramientas de performance y librerias que facilitan el
                        desarrollo de apps
                    </p>
                    <Button kind="primary" onClick={changeTheme()}>
                        Determinado por el sistema
                    </Button>
                    &nbsp;
                    <Button kind="secondary" onClick={changeTheme("light")}>
                        Tema Light
                    </Button>
                    &nbsp;
                    <Button kind="warning" onClick={changeTheme("dark")}>
                        Tema Dark
                    </Button>
                </Card>
            </main>
            <footer>Footer</footer>
        </div>
    );
}
