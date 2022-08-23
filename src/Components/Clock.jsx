import React from "react";



export const Clock = () => {

    const time = new Date();
    const horas = time.getHours();
    const minutos = time.getMinutes();
    const segundos = time.getSeconds();
    let porcentajeHoras;

    if (horas >= 12) {
        porcentajeHoras = horas / 12 * 360;
    } else {
        porcentajeHoras = horas / 24 * 360;
    }

    porcentajeHoras += minutos / 60 * 30;
    let porcentajeMinutos = minutos / 60 * 360;
    let porcentajeSegundos = segundos / 60 * 360;


    const h = { 
        transform: `rotate(${porcentajeHoras}deg)` 
    };
    const m = { 
        transform: `rotate(${porcentajeMinutos}deg)` 
    };
    const s = { 
        transform: `rotate(${porcentajeSegundos}deg)` 
    };
console.log(segundos);


    return (

        <>
            <div className="flex">
                <div className="reloj">
                    {/* <span className="circle-2"></span> */}
                    <span className="circle"></span>
                    <img src="/src/assets/aguja.png" className="horas" id="Horas" style={h}/>
                    <img src="/src/assets/agujaMinutos.png" className="minutos" id="Minutos" style={m}/>
                    <img src="/src/assets/agujaSegundos.png" className="segundos" id="Segundos" style={s}/>
                    <img src="/src/assets/giro.png" className="barras" />
                </div>

            </div>
        </>
    )

}