document.getElementById("formulario").addEventListener('submit', (e) => {
    e.preventDefault();
    let deposito_inicial = document.getElementById('deposito_inicial').value;
    let contribucion_anual = document.getElementById('contribucion_anual').value;
    let anio = document.getElementById('anio').value;
    let interes = document.getElementById('interes').value;
    const vacios = [true, true, true, true]


    function validar() {
        document.getElementById('err_deposito_inicial').innerHTML = deposito_inicial == "" || deposito_inicial == null ? "Vacio" : "";
        document.getElementById('err_contribucion_anual').innerHTML = contribucion_anual == "" || contribucion_anual == null ? "Vacio" : "";
        document.getElementById('err_anio').innerHTML = anio == "" || anio == null == null ? "Vacio" : "";
        document.getElementById('err_interes').innerHTML = interes == "" || interes == null ? "Vacio" : ""; 

        vacios[0] = deposito_inicial == "" || deposito_inicial == null ? true : false;
        vacios[1] = contribucion_anual == "" || contribucion_anual == null? true : false;
        vacios[2] =  anio == "" || anio == null == null == null ? true : false;
        vacios[3] = interes == "" || interes == null ? true : false;
        document.getElementById('cantidad_ganada').innerText = "";

        return vacios;
    }

    validar()

    if (vacios[0] == false && vacios[1] == false && vacios[2] == false && vacios[3] == false) {
        let cantidad_final = 0;
        interes = parseInt(1) + parseFloat(interes); 
        cantidad_invertida = parseFloat(deposito_inicial) + parseFloat(contribucion_anual);

        for(let i = 0; i < Math.abs(anio); i++) {
            cantidad_final = parseFloat(cantidad_invertida) * parseFloat(interes);
            cantidad_invertida = parseFloat(cantidad_final) + parseFloat(contribucion_anual);
            console.log(i + " || " + cantidad_final)
        }
        document.getElementById('cantidad_ganada').innerText = `Has ganado ${Math.round(cantidad_final, 2)}`;
    }
})