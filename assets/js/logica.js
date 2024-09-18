document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector("input[type='text']");
    const sendButton = document.querySelector(".fa-paper-plane");
    const chatBody = document.querySelector(".chat-body");
    const chatList = document.querySelector(".list-group");

    // Función para obtener la hora actual
    function obtenerFechaHora() {
        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, "0");
        const minutos = ahora.getMinutes().toString().padStart(2, "0");
        return `${horas}:${minutos}`;
    }

    function crearMensajeEnviado(mensaje) {
        const nuevoMensaje = document.createElement("div");
        nuevoMensaje.classList.add("mensaje", "enviado");

        const mensajeContenido = document.createElement("div");
        mensajeContenido.classList.add("mensaje-contenido");

        const textoMensaje = document.createElement("p");
        textoMensaje.textContent = mensaje;

        const horaMensaje = document.createElement("small");
        horaMensaje.classList.add("mensaje-hora");
        horaMensaje.textContent = obtenerFechaHora();

        mensajeContenido.appendChild(textoMensaje);
        mensajeContenido.appendChild(horaMensaje);
        nuevoMensaje.appendChild(mensajeContenido);

        chatBody.appendChild(nuevoMensaje);
    }

   

    sendButton.addEventListener("click", () => {
        const mensaje = inputField.value.trim();

        if (mensaje !== "") {
            crearMensajeEnviado(mensaje);
            actualizarUltimoMensaje(mensaje);
            inputField.value = ""; 
        }
    });

    chatList.addEventListener("click", (event) => {
        // Encuentra el elemento que fue clickeado dentro de chatList
        const item = event.target.closest(".list-group-item");

        if (item) {
            // Encuentra el elemento h6 dentro del item
            const h6 = item.querySelector("h6");

            if (h6) {
                // Cambia el font-weight de negrita a normal
                if (h6.classList.contains("texto-negrita")) {
                    h6.classList.remove("texto-negrita");
                    h6.classList.add("texto-normal");
                }
            }
        }


})});
