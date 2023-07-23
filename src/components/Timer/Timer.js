import { useEffect, useState } from "react";

const Timer = ({ deadline }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div role="timer">
            <div style={{display:'inline-block'}} id="day">{days < 10 ? "0"+  days : days}D:</div>
            <div style={{display:'inline-block'}} id="hour">{hours < 10 ? "0"  +hours : hours}H:</div>
            <div style={{display:'inline-block'}} id="minute">{minutes < 10 ? "0" + minutes : minutes}M</div>
        </div>
    );
};
export default Timer