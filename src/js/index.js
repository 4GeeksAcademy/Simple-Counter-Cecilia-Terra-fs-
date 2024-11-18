//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
    const fourth = Math.floor(counter / 1000);
    const third = Math.floor(counter / 100);
    const second = Math.floor(counter / 10);
    const first = Math.floor(counter / 1);
    counter++;
    
    root.render(
        <Home digitfirst={first} digitsecond={second} digitthird={third} digitfourth={fourth} />
    );
}, 1000);
