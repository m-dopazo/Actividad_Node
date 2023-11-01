//Inicial
//Hicimos npm init, npm install, npm install express
//Pusimos en package.json el script de start

const express = require("express"); //Llamamos al paquete a utilizar
const app = express();//app va a ser una instancia del paquete express
const port = 3000;//Se define el puerto a utilizar
app.use(express.json()); //Decimos q las peticiones en el body tienen formato JSON


//////////////
//La problematica
let tareas = []; //Definimos arreglo como un arreglo vacio.

//Hay que definir las funciones que modifiquen el arreglo

//Crear tarea. Tiene que tener "id" y "tarea". Se postea en el origen: localhost:3000/
app.post("/", (req, res) => {
    //Se pushea en el arreglo la tarea.
    tareas.push(req.body);
    //se responde un json con lo que se envió
    res.json(req.body);
});







// Esta línea inicia el servidor para que escuche peticiones en el puerto indicado. En este caso: localhost:3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
  