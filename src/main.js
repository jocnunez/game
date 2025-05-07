//alert("HOLA?")

// Todo List
let newTask = document.getElementById("task")
let addButton = document.getElementById("addButton")
let taskList = document.getElementById("taskList")

function saveTask(task) {
    console.log(task)
    // añadir a taskList una linea al final con la nueva tarea
} 

function addClickHandler() {
    saveTask(newTask.value)
    newTask.value = ""

    return true
}



addButton.addEventListener("click", addClickHandler)

//alert("El resultado es: ", newTask)