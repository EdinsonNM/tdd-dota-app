import React, {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {Button, TextField} from "@pacificoseguros/pixie/react";

import "./styles/login.scss";
import logo from "../../assets/images/logo.png";
import {useDispatch} from "react-redux";
import {loginAction} from "../../redux/login/actions";

export default function Login() {
    const {handleSubmit, errors, control} = useForm();
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        console.log("se llamo...");
        dispatch(loginAction(data.userid));
    };

    return (
        <div data-testid="Login" className="login">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="login__form"
                data-testid="login-form"
            >
                <div>
                    <img src={logo} title="logo" alt="logo" />
                </div>
                <div className="login__title">Mi perfil gamer</div>

                <Controller
                    control={control}
                    name="userid"
                    rules={{required: true}}
                    defaultValue={""}
                    as={
                        <TextField
                            data-testid="userid"
                            type="text"
                            placeholder="Ingresa tu id de usuario"
                            fluid
                        />
                    }
                />

                {errors.userid && <div role="alert">api key es requerido</div>}
                {error && <div role="alert">api key es icorrecto</div>}
                <Button type="submit" kind="primary" fluid>
                    Ingresar
                </Button>
            </form>
        </div>
    );
}
