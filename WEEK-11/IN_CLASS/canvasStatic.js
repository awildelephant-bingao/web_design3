const canvas= document.getElementById("staticCanvas")
const cntx= canvas.getContext('2d');

cntx.fillStyle = "darkblue";
cntx.fillRect(20, 140, 200, 300);


cntx.fillStyle = "orange";

cntx.beginPath();
cntx.moveTo(200,75);
cntx.lineTo(350,200);
cntx.lineTo(150,100);
cntx.lineTo(200,75);
cntx.fill();
cntx.closePath();


cntx.beginPath();
cntx.fillStyle="teal";
cntx.arc(500, 300, 100, 0, Math.PI*2/3, true);
cntx.fill();
cntx.closePath();


cntx.strokeStyle ="red";
cntx.font = "49px Airal, Helvetica, san-serif";
cntx.textAlign= "center";
cntx.strokeText("Text on Canvas", 400, 400);

