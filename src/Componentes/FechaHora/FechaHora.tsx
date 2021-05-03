import React,{useState} from "react"
import "./style.css"


interface Props {

}

function getMes(mes: number){
  switch (mes){
    case 0:
      return 'Enero'
    break;
    case 1:
      return 'Febrero'
    break;
    case 2:
      return 'Marzo'
    break;
    case 3:
      return 'Abril'
    break;
    case 4:
      return 'Mayo'
    break;
    case 5:
      return 'Junio'
    break;
    case 6:
      return 'Julio'
    break;
    case 7:
      return 'Agosto'
    break;
    case 8:
      return 'Setiembre'
    break;
    case  9:
      return 'Octubre'
    break;
    case 10:
      return 'Noviembre'
    break;
    default:
    return 'Diciembre'
    break;
  }
}

function getFecha(){
  return new Date().getDate() + ' de ' + getMes(new Date().getMonth()) + ', ' + new Date().getFullYear();
}

function getSaludo(){
  let saludo = 'Buenos días';
  let hora = new Date().getHours();
  if(hora < 18 && hora > 12){
    saludo = 'Buenas tardes';
  } else if(hora> 0){
    saludo = 'Buenas noches';
  }

  return saludo;
}

const FechaHora: React.FC<Props> = () => {

 const [horaActual,setHoraActual] = useState(new Date().toLocaleTimeString());
 const [fechaActual,setFechaActual] = useState(getFecha())

 const actualizarTiempo = () =>{ 
    setHoraActual(new Date().toLocaleTimeString());
    setFechaActual(getFecha());
  }

 setInterval( actualizarTiempo ,1000);

return(<div className = {"divFecha"} >
  <label className = "saludo"> {getSaludo()} </label>
  <label className = "fecha"> {fechaActual} </label>
  <label className = "hora"  > {horaActual} </label>  
  </div>);

}

export default FechaHora;