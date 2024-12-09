function agregarTarea() {
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;
    if(nuevaTareaTexto === "") {
        alert("Porfavor ingresa una Tarea");
        return;
    }

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";


    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() { nuevaTarea.remove();}

    nuevaTarea.appendChild(botonEliminar);

    document.getElementById("listaTareas").appendChild(nuevaTarea);

    document.getElementById("nuevaTarea").value = "";

}