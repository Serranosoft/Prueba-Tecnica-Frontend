import { useEffect, useState } from "react";

function Calc() {

    const initialState = {
        packages: 0,
        weight: 0
    }

    const [inputValues, setInputValues] = useState(initialState)

    let {packages, weight} = inputValues;

    const handleChange = (e) => {
        const {name, value} = e.target        
        setInputValues({...inputValues, [name]:parseInt(value)})
    }
    
    useEffect(() => {
        // Supuesto calculo: Cada paquete son 4€ y se multiplica por cada kg que haya que transportar
        if(!Number.isNaN(packages) && !Number.isNaN(weight)) {
            document.getElementById("calc-result").innerHTML = `${parseInt((packages*4)*(weight === 0 ? 1 : parseInt(weight)+1))}€`;
        }
    }, [inputValues])


    return (
        <div id="calc-wrapper">
            <h2 className="h2">Calcula tu presupuesto</h2>
            <h3 className="h3">Rellena los datos para obtener un presupuesto a medida</h3>
            <fieldset>
                <label>Número de paquetes a envíar
                    <input className="input" id="packages" type="number" name="packages" min="0" value={packages} onChange={handleChange} />
                </label>
                <label>Peso total de los paquetes (kg)
                    <input className="input" id="weight" type="number" name="weight" min="0" value={weight} onChange={handleChange} />
                </label>
            </fieldset>
            <span className="highlight-text">Precio total</span>
            <span id="calc-result">0€</span>
        </div>
    )
}

export default Calc;