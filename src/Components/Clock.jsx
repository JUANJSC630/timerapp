import React from "react";



export const Clock = () => {

    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    let percentageHours = hours / 12 * 360;

    if (hours <= 12) {
        percentageHours = hours / 24 * 360;
    }
    percentageHours += minutes / 60 * 30;
    let percentageMinutes = minutes / 60 * 360;
    let percentageSegundos = seconds / 60 * 360;


    const h = {
        transform: `rotate(${percentageHours}deg)`
    };
    const m = {
        transform: `rotate(${percentageMinutes}deg)`
    };
    const s = {
        transform: `rotate(${percentageSegundos}deg)`
    };

    return (
        <>
            
            <div className="Container-reloj">
                <div className="reloj">
                    {/* <span className="circle-2"></span> */}
                    <span className="circle"></span>
                    <div className="hours" style={h}></div>
                    <div src="./src/images/agujaMinutos.png" className="minutes" style={m}></div>
                    <div src="./src/images/agujaSegundos.png" className="seconds" style={s} ></div>
                    <div src="./src/images/giro.png" className="barras" ></div>
                </div>

            </div>
        </>
    )

}