import { useEffect, useRef, useState } from "react"

function Countdown() {
    const finishDate = useRef(new Date("09/12/2021").getTime())
    const [timeLeft, setTimeLeft] = useState("00 días : 00 horas : 00 mínutos : 00 segundos");

    // Realizar el calculo del tiempo restante cada segundo desde el momento en el que se muestra el componente
    useEffect(() => {
        setInterval(() => iterateCountdown(), 1000);
      }, []);

    const iterateCountdown = () => {
        const currentTime = new Date().getTime();
        const difference = finishDate.current - currentTime;

        // El cociente del resultado son los días, calculamos el residuo entre 3600s (1h) y así consecutivamente para obtener las otras variables
        let d = Math.floor(difference / (1000 * 60 * 60 * 24));
        let s = Math.floor((difference % (1000 * 60)) / 1000);
        let m = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60),
          );
        let h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );

        // Agregar un "0" si el número solo tiene un digito
        
        if(d.toString().length < 2) {
            d = `0${d}`;
        }
        if(h.toString().length < 2) {
            h = `0${h}`;
        }
        if(m.toString().length < 2) {
            m = `0${m}`;
        }
        if(s.toString().length < 2) {
            s = `0${s}`;
        }
        setTimeLeft(`${d} días : ${h} horas : ${m} mínutos : ${s} segundos`);
    }
    return (
        <>
            <p id="countdown-text">50% dto en envíos espaciales: <span>{timeLeft}</span></p>
        </>
    )
}


export default Countdown