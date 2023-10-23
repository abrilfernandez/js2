alert ("bienvenidos a la escuela nuestra senora de lourdes"); 
const notaFinaldiv = document.getElementById ("notafinal");

function informacionNecesaria (nombre, apellido, nota1, nota2, notafinal) {

   this.nombre= nombre;
   this.apellido = apellido;
   this.nota1 = nota1; 
   this.nota2= nota2;
   this.notafinal = notafinal;
}





function calcularPromedio (nota1, nota2) {
 
   

   const promedio = (parseFloat(nota1) + parseFloat (nota2))/2;
   notaFinaldiv.innerHTML = promedio
   return promedio
}

const notas = []


for (const nota of notas) {
   alert (`Nombre ${nota.nombre}, Apellido ${nota.apellido}, Primernota ${nota.nota1}, Segundanota ${nota.nota2}, Notafinal ${nota.notafinal}`)
}

const buscarNotaPorNombre = () => {

   const nombreBuscado = prompt ("Ingrese el nombre completo del alumno");
   const nombreEncontrado = notas.find (nota => {
        return nota.nombre + ' ' + nota.apellido === nombreBuscado;

   });

   if (nombreBuscado) {
      alert (`Nombre encontrado: Primernota ${nombreEncontrado.nota1}, Segundanota ${nombreEncontrado.nota2}, Notafinal ${nombreEncontrado.notafinal}`)
   } else {
      alert ("No se encontro ningun alumno con ese nombre.");
   }
}


const formulario = document.getElementById ('formulario');
formulario.addEventListener ('submit', (e) => enviarForm(e));

function enviarForm (e) {

  e.preventDefault()

  const nombre = document.getElementById ('nombre').value;
  const apellido = document.getElementById ('apellido').value;
  const nota1 = parseInt (document.getElementById ('nota1').value);
  const nota2 = parseInt (document.getElementById ('nota2').value)


  const notafinal = calcularPromedio (nota1, nota2);

  if (notafinal >= 7) {
   notaFinaldiv.innerHTML = `Usted ha aprobado ${nota1} ${nota2}`;

   const nota = informacionNecesaria (nombre, apellido, nota1, nota2, notafinal)
   notas.push (nota);

  } else if (notafinal <= 6) {
   notaFinaldiv.innerHTML = "Usted ha Desaprobado";}

   else {
   notaFinaldiv.innerHTML = "Por favor ingresar algun numero"
   }


   
  const informacionDelAlumno = {

   nombre: nombre,
   apellido: apellido,
   nota1: nota1,
   nota2: nota2,

 }
  localStorage.setItem ('alumno', JSON.stringify(informacionDelAlumno));
}

  





   



