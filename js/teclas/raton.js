var cuadro = document.getElementById("area_de_dibujo");

var papel = cuadro.getContext("2d");

document.addEventListener("mousedown",inicioMouse);
document.addEventListener("mousemove",dibujarMouse);
document.addEventListener("mouseup", finalMouse);

var x = 150;
var y = 150;


dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth= 3
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function inicioMouse(evento_a)
{
   //console.log("inicioMouse");
   var color = "blue";
   var movimiento = 10;
   switch(evento.keyCode)
  {
   case evento_a
      dibujarLinea(color, x- movimiento, y, papel);
      x = x -movimiento;
   break;
  }
}


function dibujarMouse(evento_b)
{
   //console.log("dibujarMouse");
   
  
  
}

function finalMouse(evento_c)
{
   //console.log("finalMouse");

   f=0;
  
}


