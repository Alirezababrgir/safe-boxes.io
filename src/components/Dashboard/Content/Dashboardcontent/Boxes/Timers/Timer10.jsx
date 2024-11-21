import { useEffect, useState } from "react";
import { useGetTimeMutation } from "../../../../../../api/apiSlice";

const TimerTEN = () => {

    const [GetNowTime, { isLoading, isError }] = useGetTimeMutation();

    const [nowDate, setnowDate] = useState(0)
    const [expire, setexpire] = useState(0)
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        const getnowtime = async () => {
            const nowtime = await GetNowTime({ time_zone: "UTC", time_format: "timestamp" })
            setnowDate(nowtime.data.time)
        }
        getnowtime();
        setCountdown(expire);

        //SET TIMER
        const interval = setInterval(() => {
            setexpire(nowDate - nowDate + 10)
            setCountdown((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
        }, 1000);
        return () => clearInterval(interval);
    }, [expire, GetNowTime, nowDate]);

    //CONVERING
    const days = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
    const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((countdown % (60 * 60)) / 60);
    const seconds = Math.floor((countdown % 60));

    //FORMAT 00 
    const formatNumber = (number) => {
        return number < 10 ? '0' + number : number;
    };
    const formattedDays = formatNumber(days);
    const formattedHours = formatNumber(hours);
    const formattedMinutes = formatNumber(minutes);
    const formattedSecounds = formatNumber(seconds);

    return (
        <main style={{ padding: "0 4rem " }}>
            <div class="container center">
                <section class="countdown-timer">
                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-day" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="days" class="primary">{expire > 0 ? formattedDays : <span>00</span>}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">Days</p>
                    </div>
                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-day" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="days" class="primary">{expire > 0 ? formattedHours : <span>00</span>}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">HOURS</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-hour" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="hours" class="primary">{expire > 0 ? formattedMinutes : <span>00</span>}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">MINUTES</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-min" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="minutes" class="primary">{expire > 0 ? formattedSecounds : <span>00</span>}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">SECOUND</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default TimerTEN;