var dibujo, lineas;
function inicio()
{
	dibujo = document.getElementById("area");
	lineas = dibujo.getContext("2d");
	lineas.moveTo(0,0);
	lineas.lineTo(300,0);
	lineas.lineTo(300,300);
	lineas.lineTo(0,300);
	lineas.lineTo(0,0);
	lineas.strokeStyle = "#FF00FF";
	lineas.stroke();

/*
	Trazo nuevo para el circulo.
*/

	lineas.beginPath();
	lineas.strokeStyle = "#FF00FF";
	/*Parametros de arc = */
	lineas.arc(150,150,100, (Math.PI * 2), false);
	lineas.closePath();
	lineas.stroke();
}