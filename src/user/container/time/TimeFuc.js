import React, { useState, useEffect } from 'react';
import style from './Time.module.css';

function TimeFuc(props) {
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    };

    useEffect(() => {
        const date = setInterval(tick, 10000);


        return () => {
            clearInterval(date);

        };
    }, []);

    return (
        <div className={style.time}>
            <h1>Digital Clock</h1>
            <p className={style.digital}>{time.toLocaleTimeString()}</p>
            <div className={style.clock}>Current Time</div>
            <div className={style.button}>
                <button className={style.button} onClick={tick}>
                    Refresh Time
                </button>
            </div>
        </div>
    );
}

export default TimeFuc;