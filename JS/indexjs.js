console.log("Starting")
// Bloque importar funciones externas

// Bloque variables y constantes

const FORMULARIO = document.querySelector('.FORMULARIO');
const Informacion = [];
let Registro = {};
 
 
// Bloque funciones


const validacionformulario = (e) => {
    e.preventDefault();

    const Nombre = document.querySelector('#Nombre').value;
    const Apellido = document.querySelector('#Apellido').value;
    const Grado = document.querySelector('#Grado').value;
    const Edad = document.querySelector('#Edad').value;
    var Sexo = document.querySelector('input[name="SEXO"]:checked').value;
    const Estado = document.querySelector('#ESTD-CVL').value;
    const Poblacion = document.querySelector('#PBV').value;
    const Localidad = document.querySelector('#UBICACION').value;
    
   guardarRegistro(Nombre, Apellido, Grado, Edad, Sexo, Estado, Poblacion, Localidad);
};



const guardarRegistro = (Nombre, Apellido, Grado, Edad, Sexo, Estado, Poblacion, Localidad) => {
    Registro = {

        "Nombre": Nombre,
        "Apellido": Apellido,
        "Grado": Grado,
        "Edad": Edad,
        "Sexo": Sexo,
        "Estado": Estado, 
        "Poblacion": Poblacion,
        "Localidad": Localidad

    };

    Informacion.push(Registro);
    console.table(Informacion)


}

const VERIFICAR = document.querySelector('#VERIFICAR')
VERIFICAR.addEventListener("submit", function (e) {
    e.preventDefault();
    let Contador = 0;
    let ContadorCurso6 = 0;
    let ContadorCurso7 = 0;
    let ContadorCurso8 = 0;
    let ContadorCurso9 = 0;
    let ContadorCurso10 = 0;
    let ContadorCurso11 = 0;
    let ContadorSexo1 = 0;
    let ContadorSexo2 = 0;
    let ContadorPoblacion = 0;
    let ContadorUbicacion1 = 0;
    let ContadorUbicacion2 = 0;
    let ContadorUbicacion3 = 0;
    let ContadorUbicacion4 = 0;

    Informacion.forEach(element => {

        if (element.Edad >= 18) {
            Contador++;
        }
        
        if (element.Grado == 6) {
            ContadorCurso6++;            
        }

        if (element.Grado == 7) {
            ContadorCurso7++;            
        }

        if (element.Grado == 8) {
            ContadorCurso8++;            
        }

        if (element.Grado == 9) {
            ContadorCurso9++;            
        }

        if (element.Grado == 10) {
            ContadorCurso10++;            
        }

        if (element.Grado == 11) {
            ContadorCurso11++;            
        }

        if (element.Sexo == "Masculino") {
            ContadorSexo1++;
        }

        if (element.Sexo == "Femenino") {
            ContadorSexo2++;
        }

        if (element.Poblacion == "Si") {
            ContadorPoblacion++;
        }

        if (element.Localidad == "La playa") {
            ContadorUbicacion1++;
        }

        if (element.Localidad == "Malambo") {
            ContadorUbicacion2++;
        }

        if (element.Localidad == "Barranquilla") {
            ContadorUbicacion3++;
        }

        if (element.Localidad == "Galapa") {
            ContadorUbicacion4++;
        }

        
    });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    var Mayores = document.getElementById("MA_ED")
    var CONT = Contador;
    Mayores.textContent = CONT

    var Curso1 = document.getElementById("GRADO1")
    var CONT2 = ContadorCurso6
    Curso1.textContent = CONT2

    var Curso2 = document.getElementById("GRADO2")
    var CONT3 = ContadorCurso7
    Curso2.textContent = CONT3

    var Curso3 = document.getElementById("GRADO3")
    var CONT4 = ContadorCurso8
    Curso3.textContent = CONT4

    var Curso4 = document.getElementById("GRADO4")
    var CONT5 = ContadorCurso9
    Curso4.textContent = CONT5

    var Curso5 = document.getElementById("GRADO5")
    var CONT6 = ContadorCurso10
    Curso5.textContent = CONT6

    var Curso6 = document.getElementById("GRADO6")
    var CONT7 = ContadorCurso11
    Curso6.textContent = CONT7

    var Sexo1 = document.getElementById("SEXO1")
    var CONT8 = ContadorSexo1
    Sexo1.textContent = CONT8 

    var Sexo2 = document.getElementById("SEXO2")
    var CONT9 = ContadorSexo2
    Sexo2.textContent = CONT9

    var Poblacion = document.getElementById("POBLACION")
    var CONT10 = ContadorPoblacion
    Poblacion.textContent = CONT10

    var Ubicacion1 = document.getElementById("UBICACION1")
    var CONT11 = ContadorUbicacion1
    Ubicacion1.textContent = CONT11

    var Ubicacion2 = document.getElementById("UBICACION2")
    var CONT12 = ContadorUbicacion2
    Ubicacion2.textContent = CONT12

    var Ubicacion3 = document.getElementById("UBICACION3")
    var CONT13 = ContadorUbicacion3
    Ubicacion3.textContent = CONT13

    var UBICACION4 = document.getElementById("UBICACION4")
    var CONT14 = ContadorUbicacion4
    UBICACION4.textContent = CONT14


})


// ESCUCHADOR DE EVENTOS

FORMULARIO.addEventListener("submit", validacionformulario);