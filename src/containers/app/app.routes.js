import React, {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import Loading from "../../components/loading";

const Demo = lazy(() => import("../demo/demo"));

export default function AppRoutes() {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/" component={Demo} />
            </Switch>
        </Suspense>
    );
}
