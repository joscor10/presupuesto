import React,{Fragment,useState} from 'react';
import PropTypes from 'prop-types';

import Error from './Error'
const Pregunta = ({setPresupuesto,setRestante,setMostrarPregunta}) => {

    //definir state



    const [cantidad,setCantidad] = useState(0);

    const [error,setError] = useState(false);

    const definirPresupuesto= e =>{
        
        setCantidad(parseInt(e.target.value,10));
    }
    // su
    const agregarPresupuesto= e=>{
        e.preventDefault();

        if(cantidad<1 || isNaN(cantidad)){
            setError(true);
            return;
        }

        setError(false);

        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error? <Error mensaje="El Presupuesto es Incorrecto"/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Colcoa tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <button
                    type="submit"
                    className="button-primary u-full-width"
                  
                >Definir Presupuesto</button>
            </form>
        </Fragment>
     );
}
Pregunta.propTypes={
    setPresupuesto:PropTypes.func.isRequired,
    setRestante:PropTypes.func.isRequired,
    setMostrarPregunta:PropTypes.func.isRequired
    
}
export default Pregunta;