//Variables
//Array de amigosSorteados infinita
let amigos = [];

function agregarAmigo() {
    let amigoSorteado = document.getElementById('amigo').value;
    console.log(amigoSorteado);
    if (amigoSorteado == ''){
        alert('Por favor, inserte un nombre');
    }
    else {
    amigos.push('amigoSorteado');
    return;
}
}

let botonAgregar = document.getElementById('agregar'); 