import { useEffect, useState } from "react";
const Timerunilevel = ({ timer }) => {

    const [nowDate, setnowDate] = useState(0)
    const [expire, setexpire] = useState(0)
    const [countdown, setCountdown] = useState(0);

    let unix_timestamp = 1782875825;

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    var date = new Date(expire * 1000);

    // Hours part from the timestamp
    var hou = date.getHours();

    // Minutes part from the timestamp
    var min = "0" + date.getMinutes();

    // Seconds part from the timestamp
    var sec = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = (hou + ':' + min.substr(-2) + ':' + sec.substr(-2));
    const initialTime = Math.abs(formattedTime = hou * 3600 + Number(min.substr(-2)) * 60 + Number(sec.substr(-2)))


    useEffect(() => {
        setCountdown(initialTime);
        //console.log(formattedTime)
        setnowDate(new Date().getTime() / 1000);

        const interval = setInterval(() => {
            setexpire(unix_timestamp - nowDate)

            setCountdown((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
        }, 1000);
        return () => clearInterval(interval);

    }, [expire, formattedTime, initialTime, unix_timestamp, nowDate]);

    const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((countdown % (60 * 60)) / 60);
    const seconds = Math.floor((countdown % 60));

    //FORMAT 00 
    // const formatNumber = (number) => {
    //   return number < 10 ? number : number;
    //};
    //const formattedDays = formatNumber(hours);
    //const formattedHours = formatNumber(minutes);
    //const formattedMinutes = formatNumber(seconds);
    //console.log(formattedDays)


    return (
        <main style={{ padding: "0 4rem " }}>
            <div class="container center">
                <section class="countdown-timer">
                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-day" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="days" class="primary text-danger">{hours ? hours : <span>00</span>}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">HOURS</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-hour" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="hours" class="primary">{minutes ? minutes : <span>00</span>}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">MINUTES</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-min" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="minutes" class="primary">{seconds ? seconds : <span>00</span>}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">SECOUND</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Timerunilevel;