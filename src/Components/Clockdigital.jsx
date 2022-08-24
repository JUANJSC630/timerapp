import { Foother } from "./Foother";


export const Clockdigital = () => {

    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const year = time.getFullYear();
    const month = time.getUTCMonth()+1;

    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const day = time.getDate();

    return (
        <>
            <div className="Container-clock-digital">
                <div className="ClockDigital">
                    <p className="date">{day}-{month}-{year}  {week[time.getDay()]}</p>
                    <p className="time">{hour}:{minutes}:{seconds}</p>
                </div>
                <Foother/>
            </div>
        </>
    )
}