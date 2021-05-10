import React from "react";
import {Route, Switch} from "react-router-dom";
import {Header, FoundResults, Result, Search} from "./components/index";
import {AppContainer, ContainerResult, ContainerSearch} from "./AppStyle";

const App = () => {
    return (
        <>
            <Header/>
            <AppContainer>
                <Switch>
                    <Route path={["/recipes/result", "/ingredients/result"]} component={FoundResults}/>
                    <Route path="/">
                        <ContainerSearch>
                            <Search/>
                        </ContainerSearch>
                        <ContainerResult>
                            <Result/>
                        </ContainerResult>
                    </Route>
                </Switch>
            </AppContainer>
        </>
    )

};

export default App;
