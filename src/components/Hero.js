import logo from "../images/planetExpress.png"

function Hero() {

    const moveToCalc = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    return (
        <section className="wrapper">
            <div id="hero" className="grid-2-columns">
                <div>
                    <span>PLANET EXPRESS</span>
                    <h1 className="h1">Envíos espaciales diseñados para trabajar por ti</h1>
                    <p className="hero-text">Diseñamos las mejores rutas para hacer llegar tu producto</p>
                    <p className="hero-text">Últimas tecnologías aplicadas a nuestros sistemas de detección de rutas y envíos de paquetes automatizados</p>
                    <button className="btn" onClick={moveToCalc}>Calcula tu presupuesto</button>
                </div>
                <div id="logo">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#1F2937"
                            d="M49.4,-69.3C63.8,-57.5,75.2,-42.8,81.8,-25.8C88.4,-8.8,90.3,10.6,85.1,28C79.9,45.5,67.8,61,52.4,72.4C37.1,83.9,18.5,91.2,0.4,90.7C-17.8,90.2,-35.5,81.8,-49.5,69.9C-63.5,58,-73.8,42.7,-79.7,25.6C-85.7,8.6,-87.3,-10.2,-82.4,-27.2C-77.5,-44.2,-65.9,-59.5,-51.1,-71.2C-36.2,-82.8,-18.1,-90.8,-0.3,-90.4C17.5,-89.9,34.9,-81,49.4,-69.3Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                    <img src={logo} alt="Planet Express" />
                </div>
            </div>
        </section>
    )
}

export default Hero;