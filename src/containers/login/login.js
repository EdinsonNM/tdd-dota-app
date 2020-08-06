import React, {useState} from "react";
import {useForm} from "react-hook-form";

export default function Login() {
    const {register, handleSubmit, watch, errors} = useForm();
    const [error, setError] = useState(false);
    const onSubmit = (data) => {
        if (data.apikey !== "123") {
            setError("Data es requerida");
        }
    };

    return (
        <div data-testid="Login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <img src="" title="logo" />
                <div>Mi perfil gamer</div>
                <input
                    name="apikey"
                    ref={register({required: true})}
                    type="text"
                    placeholder="Ingresa tu api key"
                />
                {errors.apikey && <div role="alert">api key es requerido</div>}
                {error && <div role="alert">api key es icorrecto</div>}
                <button>Ingresar</button>
            </form>
        </div>
    );
}
