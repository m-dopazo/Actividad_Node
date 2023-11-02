//Inicial
//Hicimos npm init, npm install, npm install express
//Pusimos en package.json el script de start

const express = require("express"); //Llamamos al paquete a utilizar
const app = express();//app va a ser una instancia del paquete express
const port = 3000;//Se define el puerto a utilizar
app.use(express.json()); //Decimos q las peticiones en el body tienen formato JSON

//////////////
//Ctrl + C para cerrar sv en consola
//La problematica
let tareas = []; //Definimos arreglo como un arreglo vacio.

//Hay que definir las funciones que modifiquen el arreglo

//Crear tarea. Tiene que tener "id" y "tarea". Se postea en el origen: localhost:3000/
//Req == request: lo que entra
//RES == response: lo que sale
app.post("/", (req, res) => { 
    //Se pushea en el arreglo la tarea.
    tareas.push(req.body);
    //se responde un json con lo que se envió
    res.json(req.body);
    //res.json(tareas);
});

//Obtener la lista entera de tareas (GET)
app.get("/", (req, res) => {
    res.json(tareas);
});

//Actualizar una tarea existente (PUT) segun su posicion en la lista
app.put("/:lugar", (req,res) => {

    //El if verifica que el lugar este dentro del largo de la lista. Pq sino, crea un elemento, en vez de actualizar.
    if (req.params.lugar <= tareas.length ){
        //Ir a la tarea en el espacio "lugar" y cambiar su contenido por el body.
        tareas [(req.params.lugar)-1] = req.body;
        //Devolvemos lo que actualizamos
        res.json(req.body);
    }
    res.json(tareas);
});

//Eliminar una tarea (DELETE) segun su ubicacion
app.delete("/:lugar", (req,res) => {

    //SPLICE: Borrar en la lista tareas un elemento en la posicion "lugar"
    tareas.splice((req.params.lugar)-1, 1);
    //Mostrar lista entera
    res.json(tareas);
});


// Esta línea inicia el servidor para que escuche peticiones en el puerto indicado. En este caso: localhost:3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
  