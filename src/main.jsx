import React from "react";
import ReactDOM  from "react-dom/client";
import './style.css'
import { CounterApp } from "./CounterApp";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp  valor= { 0 }/>
    </React.StrictMode>
)










































// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';
// import { CounterApp } from './CounterApp';
// import './style.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <CounterApp valor = { 0 } />
//     </React.StrictMode>
// )


// yarn dev