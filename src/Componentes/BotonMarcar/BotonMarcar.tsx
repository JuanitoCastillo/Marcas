import React,{useState} from 'react';
import './style.css';

interface Props{
  onPress: (e:any) => void;
}



const BotonMarcar: React.FC<Props> = ({onPress}) => {
  return <input className = "botonMarcar" onClick = {onPress} value= "Marcar"  type = "button"/>
}

export default BotonMarcar