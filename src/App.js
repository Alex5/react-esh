import "./App.scss";
import Header from "./components/Header/Header";
import React from "react";
import Hero from "./components/Hero/Hero";

function App() {
    return (
        <>
            <Header/>
            <div className="container">
                <Hero/>
            </div>
        </>
    );
}

export default App;
