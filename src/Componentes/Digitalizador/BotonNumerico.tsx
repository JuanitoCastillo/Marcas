import React from 'react';

interface Props{
  valor: string;
  onPress: (e: any) => void;
}

const BotonNumerico: React.FC<Props> = ({valor, onPress}) =>{
  return <div>
    <input className = "boton" type = 'button' value = {valor} onClick = {onPress} />
  </div>
}

export default BotonNumerico;