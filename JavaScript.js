document.getElementById('enviar').addEventListener('click',function añadir(){
    const container=document.getElementById('div');
    const texto=document.getElementById('mensaje').value
    container.textContent=texto;
    document.getElementById('texto').appendChild(container);
    
});
function mostrar(){ document.getElementById('mostrar').classList.add('btn1');

}

document.getElementById("ocultar").addEventListener("click",function ocultarMensaje(){
    document.getElementById('contenido').innerHTML=""});

    document.getElementById("mostrar").addEventListener("click",function mostrarMensaje(){
        document.getElementById('contenido')});



   

document.addEventListener('keyup', function(event) {
    if (event.key ==='Enter') {
        event.preventDefault();
        añadir();
    }
});
function getRandomBotMessage () {
    const messages = [
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

    return messages[Math.floor(Math.random() * messages.length)];
}

contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;