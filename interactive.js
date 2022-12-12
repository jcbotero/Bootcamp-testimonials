


function display1() {
    if (window.innerWidth > 1000) {
   document.getElementById("tanya").style.display = "inline-flex";
    } else {
   document.getElementById("tanya").style.display = "flex";
    }
   document.getElementById("john").style.display = "none";
}  /* con esta dos functions una por cada buton.. muevo las imagenes del slider para que en el onclick cambien*/
/* con este if puedo indicar que me despliegue el display de la img dependiendo del tamaño dela scrren*/
  /* el cambio de display debe ser al mismo que tengo en css, sino se me descuadra el diseño*/


function display2() {
    if (window.innerWidth > 1000) {
        document.getElementById("john").style.display = "inline-flex";
         } else {
        document.getElementById("john").style.display = "flex";
         }
    document.getElementById("tanya").style.display = "none";
 } 
 

