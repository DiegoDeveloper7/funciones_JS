
/* function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);


Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función */

/* 

Funcion modificada (M1), para recibir elemento clickeado.

function pintarM1(event) {
    event.target.style.backgroundColor = 'yellow';
  }

  const ele = document.getElementById("ele1");
  ele.addEventListener("click", pintarM1);
  
  */



  function pintarM2(elemento, color='#39FF14') {
    elemento.style.backgroundColor = color;
  }

  const ele = document.getElementById("ele1");

  // Al hacer clic, se ejecuta la función y se pasa 'yellow'
  ele.addEventListener("click", (event)=> {
    pintarM2(event.target, 'yellow');
  });

  pintarM2(ele); // Aplica 'green' de inmediato



