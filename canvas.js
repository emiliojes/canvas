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
	lineas.stroke();

	lineas.moveTo(100,100);
	lineas.lineTo(200,100);
	lineas.strokeStyle = "#FF00FF";
	lineas.stroke();
}