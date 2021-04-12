import "./App.scss";
import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";

import {BrowserRouter as Router} from 'react-router-dom'


function App() {
    return (
        <Router>
            <Header/>
            <div className="container">
                <Hero/>
                <Search />
            </div>
        </Router>
    );
}

export default App;
