// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres
const Amigos = []
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado");

//Función para agregar un amigo
function agregarAmigo(){

//Validar la entrada para que el campo no este vacio
    if(inputAmigo.value === ""){
        alert("Por favor, inserte un nombre.");
        return;
    } 
// Avisar si el nombre que va a añadir ya fue agregado
    if(Amigos.includes(inputAmigo.value)){
        alert("Este nombre ya ha sido agregado");
        inputAmigo.value = "";
        return;
    }
//Actualizar el array de amigos utilizando el metodo .push():
    Amigos.push(inputAmigo.value);

// Llama a la función para actualizar la lista
    actualizarAmigos();  

//Limpiar el campo de entrada
    inputAmigo.value = "";

 }
//Actualizar la lista de amigos
function actualizarAmigos(){
    listaAmigos.innerHTML = "";
    Amigos.forEach(amigo =>{
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    })
 }

function sortearAmigo(){
//Validar que haya amigos disponibles
    if(Amigos.length < 2){
        alert("Por favor, agregue al menos 2 nombres para realizar el sorteo.");
        resultadoSorteo.innerHTML = "";
        return;
    }
//Generar un índice aleatorio y obtener el nombre sorteado
    const random = Math.floor(Math.random() * Amigos.length);
    const amigoSecreto = Amigos[random];
//Mostrar el resultado del sorteo
    resultadoSorteo.innerHTML = `<li> Tu amigo secreto es: ${amigoSecreto}</li>`;
 }