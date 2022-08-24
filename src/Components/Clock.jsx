import React from "react";



export const Clock = () => {

    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    let percentageHours;

    if (hours <= 12) {
        percentageHours = hours / 12 * 360;
    } else if ((hours >= 12)) {
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
    console.log(seconds);
    return (
        <>

            <div className="Container-reloj">
                <div className="reloj">
                    {/* <span className="circle-2"></span> */}
                    <span className="circle"></span>
                    <img src="/src/aguja.png" className="hours" style={h} />
                    <img src="/src/agujaMinutos.png" className="minutes" style={m} />
                    <img src="/src/agujaSegundos.png" className="seconds" style={s} />
                    <img src="/src/giro.png" className="barras" />
                </div>

            </div>
        </>
    )

}