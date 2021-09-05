import { useState } from "react";

function Newsletter() {

    const [email, setEmailInput] = useState("");


    const handleChange = (e) => {
        setEmailInput(e.target.value)
    }

    const subscribe = (e) => {
        e.preventDefault();
        let pattern = new RegExp(/.+@.+\..+/);
        if (!pattern.test(email)) {
            document.getElementById("newsletter-info").setAttribute("style", "color: rgb(240, 12, 12)");
            document.getElementById("newsletter-info").innerHTML = `Introduce un email válido`;
        } else {
            document.getElementById("newsletter-info").setAttribute("style", "color: rgb(45, 138, 51)");
            document.getElementById("newsletter-info").innerHTML = `Te has suscrito correctamente con el email ${email}`;
        }
    }

    return (
        <section id="newsletter-section">
            <aside id="newsletter-wrapper">
                <div className="flex-column-center">
                    <p className="h2">Suscribete a nuestra newsletter</p>
                    <span className="h3">Recibe notificaciones y ofertas de nuestros servicios</span>
                </div>
                <form id="newsletter-form">
                    <fieldset>
                        <label for="emailInput">Dirección de correo electrónico
                            <input id="emailInput" className="input" type="email" name="email" value={email} placeholder="manuel@manu-scholz.com" onChange={handleChange} required={true} />
                        </label>
                    </fieldset>
                    <span id="newsletter-info"></span>
                    <input id="newsletter-submit" type="submit" value="Suscribirme" onClick={subscribe} />
                </form>
            </aside>
        </section>
    )
}

export default Newsletter;