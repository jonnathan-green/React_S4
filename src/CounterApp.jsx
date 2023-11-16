import {useState}  from "react";
import PropTypes  from "prop-types";


export const CounterApp = ({ valor }) => {

    const [ counter, setCounter ] = useState( valor );
    const handle = () => {
        setCounter( counter +1)
    }
    const handleSubtract = () => setCounter( counter -1 )
    const handleReset= () => setCounter( valor )

    return (
        <>
        <h1> Contador </h1>
        <h2> { counter }</h2>
        <button onClick={ handle }> Suma </button>
        <button onClick={ handleSubtract }> Resta </button>
        <button onClick={ handleReset}> Resetear al valor inicial </button>
        </>
    )
}

CounterApp.propTypes ={
    valor: PropTypes.number.isRequired
}














































// import { useState } from "react";
// import  PropTypes from "prop-types";

// export const CounterApp = ({ valor }) =>{

//     const [counter,setCounter] = useState(valor);
//     const hanlead = () =>{
//         setCounter(counter +1);
//     }
//     const decrease = () => setCounter( counter -1);
//     const reset = () => setCounter( valor );
    

//     return (
//         <>
//         <h1>Counter App</h1>
//         <h2> { counter }</h2>
        
//         <button onClick={hanlead}>+1 </button>
//         <button onClick={decrease}> -1 </button>
//         <button onClick={ reset } > Reset </button>
//         </>
//     )
// }

// CounterApp.propTypes = {
//     valor: PropTypes.number.isRequired
// }