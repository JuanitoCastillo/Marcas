import React, {useState} from 'react';
import BotonNumerico from './BotonNumerico';
import './style.css'

interface Props{
  contrasena: string;
  handlePress: (e:any) => void;
  handleBorrar: (e:any) => void;
  handleVer: (e:string) => void;
}

const Digitalizador: React.FC<Props> = ({handlePress,handleBorrar,handleVer, contrasena}) =>{



  return <div className = "digitalizador">
    <div className= "fila">
      <BotonNumerico onPress = {handlePress} valor = '1'/><BotonNumerico onPress = {handlePress} valor = '2'/><BotonNumerico onPress = {handlePress} valor = '3'/>
      <BotonNumerico  onPress = {handlePress}valor = '4'/><BotonNumerico onPress = {handlePress} valor = '5'/><BotonNumerico onPress = {handlePress} valor = '6'/>
      <BotonNumerico  onPress = {handlePress} valor = '8'/><BotonNumerico onPress = {handlePress} valor = '7'/><BotonNumerico onPress = {handlePress} valor = '9'/>
      <BotonNumerico onPress = {handleBorrar} valor = 'Borrar'/><BotonNumerico onPress = {handlePress} valor = '0'/><BotonNumerico onPress = {handleVer} valor = 'Ver'/>
      </div>
  
    <div ></div>
  </div>
}

export default Digitalizador;