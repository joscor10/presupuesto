import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({setgasto,setCrearGasto}) => {

    const [nombre,setNombre]=useState('');
    const [cantidad,setCantidad]=useState(0);
    const [error,setError]= useState(false)

    const agregarGasto= e =>{
        e.preventDefault();


        //validar
        if(cantidad<1 || isNaN(cantidad) || nombre.trim()===''){
            setError(true);
            return;
        }

        setError(false);
        // construir gasto
        const gasto={
            nombre,
            cantidad,
            id:shortid.generate()
        }      

        //pasar gasto al component principal
        setgasto(gasto);
        setCrearGasto(true);

        //resetear form

        setNombre('');
        setCantidad(0);
    }

    return (  
<form onSubmit={agregarGasto}>
    <h2>Agrega tus datos aquí</h2>
    {error? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto"/>: null}
    <div className="campo">
        <label>Nombre Gasto</label>
        <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={nombre}
            onChange={e=>setNombre(e.target.value)}
        />
    </div>

    <div className="campo">
        <label>Cantidad Gasto</label>
        <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidad}
            onChange={e=>setCantidad(parseInt(e.target.value,10))}
        />
    </div>

    <button
        type="submit"
        className="button-primary u-full-width"
    >Agregar Gasto</button>
    
</form>

    );
}
Formulario.propTypes={
    setgasto: PropTypes.func.isRequired,
    setCrearGasto:  PropTypes.func.isRequired
}
export default Formulario;