import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./pages/Router";


const App = () => (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
);

export default App;
