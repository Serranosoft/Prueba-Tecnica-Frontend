import { useEffect, useState } from "react";

function Employees() {

    const [employees, setEmployees] = useState([]);
    let employees_aux = [];

    useEffect(() => {
        fetch("https://futuramaapi.herokuapp.com/api/v2/characters/", {
            mode: 'cors'
        })
            .then(function (response) {
                return response.json();
            }).then(function (response) {
                response.forEach(el => {
                    if (employees_aux.length < 5) {
                        employees_aux.push(el);
                    }
                })
                setEmployees(employees_aux)
            }).catch(function (err) {
                console.log(err);
            });
    }, [])
    return (
        <section className="wrapper">
            <h2 className="h2">Nos encargamos de hacer llegar tu producto</h2>
             <div id="employees-grid">
                {employees.length !== 0 &&
                employees.map(el => {
                    return (
                        <div className="employee">
                            <img src={el.PicUrl} />
                            <p>{el.Name}</p>
                        </div>
                    )
                    })
                }
            </div>
        </section>
    )
}

export default Employees;