import React, {useState} from 'react';
import FechaHora from './Componentes/FechaHora';
import BotonMarcar from './Componentes/BotonMarcar';
import Digitalizador from './Componentes/Digitalizador';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function App() {

 function handleMarcar(e: any){alert('Se registro la marca correctamente')}

 const [contrasena, setContrasena] = useState('');
 function handlePress(e: any){ setContrasena(contrasena + e.target.value);}
 function handleBorrar(e: any){setContrasena(contrasena.substring(0,contrasena.length-1))}
 const handleChanged = (e: any) => setContrasena(e.target.value);
 
 const [tipoTexto, setTipoTexto] = useState('password');
 function handleVer(e: any){setTipoTexto(tipoTexto == "password" ? 'text' : 'password')}


  return (
    <div className="App">
      <div className = {"row"}>
        <div className = {"col"}>
            <div className = {"columnaIzquierda"}>
             <input className = "passwordField" value = {contrasena} type = {tipoTexto} onChange = {handleChanged}/>
             <Digitalizador handleVer = {handleVer} handleBorrar = {handleBorrar} handlePress = {handlePress} contrasena = {contrasena}/>
            </div>
         </div>
        <div className = {"col"}> 
          <div className = {"columnaDerecha"}> 
            <div>
              <FechaHora/>
              <BotonMarcar onPress={handleMarcar}/>
            </div> 
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;