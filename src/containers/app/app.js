import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./app.routes";

import store from "../../redux/store";
import "./styles/app.scss";

function App() {
    return (
        <div data-testid="container-app" className="app">
            <Provider store={store}>
                <Router>
                    <AppRoutes />
                </Router>
            </Provider>
        </div>
    );
}

export default App;
