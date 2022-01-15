const d = document;

let $nombres = d.getElementById('name'),
    $apellidoPaterno = d.getElementById('last-name'),
    $apellidoMaterno = d.getElementById('last-namem'),
    $direccion = d.getElementById('direction'),
    $nacimiento = d.getElementById('date'),
    $grado = d.getElementById('grado'),
    $grupo = d.getElementById('grupo'),
    $boton = d.getElementById('enviar');

let array = [],
    arrayDos = [];
 




d.addEventListener('click', (e) => {
    if (e.target.matches('#enviar')) {
        e.preventDefault()

        array.push($nombres.value);
        array.push($apellidoPaterno.value);
        array.push($apellidoMaterno.value);
        array.push($direccion.value);
        array.push($nacimiento.value);
        array.push($grado.value);
        array.push($grupo.value);
        arrayDos.push(array);
        array = [];
        
        

        console.log(arrayDos);
        
        acomodar(arrayDos, arrayTres);
    }


})


};

