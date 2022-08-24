import { Foother } from "./Foother";


export const Clockdigital = () => {

    const time = new Date();
    const hour = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
    const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
    const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
    const year = time.getFullYear();

    
    const month = (time.getMonth()+1);
    const month2 = (month < 10) ? '0' + month : month; 



    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const day = time.getDate();

    return (
        <>
            <div className="Container-clock-digital">
                <div className="ClockDigital">
                    <p className="date">{day}-{month2}-{year} {week[time.getDay()]}</p>
                    <p className="time">{hour}:{minutes}:{seconds}</p>
                </div>
                <Foother/>
            </div>
        </>
    )
}