import React, {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import Loading from "../../components/loading";

const Login = lazy(() => import("../login/login"));

export default function AppRoutes() {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/" component={Login} />
            </Switch>
        </Suspense>
    );
}
