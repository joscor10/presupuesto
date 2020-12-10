import React,{useState,useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  // definir state

const [presupuesto,setPresupuesto]= useState(0);
const [restante,setRestante]= useState(0);
const [mostrarPregunta,setMostrarPregunta]= useState(true);
const [gastos,setGastos]=useState([]);
const [gasto,setgasto]=useState({});
const [crearGasto,setCrearGasto]=useState(false);
//actualziar retasnte

useEffect(()=>{
  if (crearGasto){
    //agrega el nuevo presupuesto
    setGastos([
    ...gastos,
    gasto
  ]);
  //restante
  const presupuestoRestante= restante-gasto.cantidad;
  setRestante(presupuestoRestante);
  setCrearGasto(false);
  }
  

},[gasto,crearGasto,gastos,restante]);

//funcion para agregar gasto


  return (
   <div className="container">
     <header>
       <h1>Gasto Semanal</h1>
       <div className="contenido-principal contenido">
         {mostrarPregunta? <Pregunta
        setPresupuesto={setPresupuesto}
        setRestante={setRestante}
        setMostrarPregunta={setMostrarPregunta}
       />       
       :       

        <div className="row">
        <div className="one-half column">
          <Formulario setgasto={setgasto} setCrearGasto={setCrearGasto}/>
        </div>

        <div className="one-half column">

          <Listado 
            gastos={gastos}
          />

          <ControlPresupuesto 
            presupuesto={presupuesto} 
            restante={restante}
            />
        </div>
      </div>     

        }
       
       </div>
      
     </header>
   </div>
  );
}

export default App;
