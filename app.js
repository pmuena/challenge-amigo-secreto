//Variables
//Array de amigosSorteados infinita
let amigo = [];

//Agregar Amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    //Sin nombre, alerta
    if (nombreAmigo === ''){
        alert('Por favor, inserte un nombre');
        return;
    }
    else {
    //Agregar amigo al array
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
    }
}

//Renderizar amigos
function renderizarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++){
        let item = document.createElement('li');
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    } 
}

//Sortear amigos
function sortearAmigo(){
    //Número insuficiente de amigos
    if (amigo.length < 2){
        alert('No hay suficientes amigos para sortear');
        return;
    }
    else {
        let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

        //Limpiar lista de amigos
        let limpiarLista = document.getElementById('listaAmigos');
        limpiarLista.innerHTML = '';
        return;
    }  
}