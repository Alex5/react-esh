import React from "react";
import {Route, Switch} from "react-router-dom";
import {Header, FoundResults,Home} from "./components/index";
import {AppContainer} from "./AppStyle";

const App = () => {
    return (
        <>
            <Header/>
            <AppContainer>
                <Switch>
                    <Route path={["/recipes/result", "/ingredients/result"]} component={FoundResults}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </AppContainer>
        </>
    )

};

export default App;

{/*<ContainerSearch children={<Search/>} />*/}
{/*<ContainerResult children={<Result/>}/>*/}