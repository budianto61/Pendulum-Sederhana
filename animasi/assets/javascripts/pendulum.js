$('#set_variables_form').submit(function (e) {
  e.preventDefault();
  
  //console.log($('#mass1').val());
  m1     = 30;	
  Phi1   = 65/180*(Math.PI);
  len1 = $('#leng').val();	//Untuk mengambil nilai panjang tali dari range
  teta = 65;
  g1 = $('#gr').val(); 
	  if(g1>=1 && g1<=10) 
		  g1 = 9.1;
		  else if(g1 >=11 && g1 <= 20)
			  g1 = 9.2;
		  else if(g1 >=21 && g1 <= 30)
			  g1 = 9.3;
		  else if(g1 >=31 && g1 <= 40)
			  g1 = 9.4;
		  else if(g1 >=41 && g1 <= 50)
			  g1 = 9.5;
		  else if(g1 >=51 && g1 <= 60)
			  g1 = 9.6;
		  else if(g1 >=61 && g1 <= 70)
			  g1 = 9.7;
		  else if(g1 >=71 && g1 <= 80)
			  g1 = 9.8;
		  else if(g1 >=81 && g1 <= 90)
			g1 = 9.9;
	  else
		g1 = 10;
  d2Phi1 = 0;
  dPhi1  = 0;
 
 document.getElementById('Len').innerHTML = len1;	//untuk menampilkan panjang tali
// document.getElementById('Mas').innerHTML = m1;		//untuk menampilkan massa
 document.getElementById('Gra').innerHTML = g1;		//untuk menampilkan gravitasi
 //document.getElementById('sudut').innerHTML = teta;
 hasil = 2 * Math.PI * (Math.sqrt(len1/g1));		//rumus mencari periode
 run();
});

function drawCircle(myCircle, context) {			//fungsi untuk membuat bola
  context.beginPath();
  context.arc(myCircle.x, myCircle.y, myCircle.mass, 0, 2 * Math.PI, false);
  context.fillStyle = 'rgba(0,0,0,1)';
  context.fill();
}

function drawLine2(myLine, context) {		//fungsi untuk membuat garis horizontal
  context.beginPath();
  context.moveTo(250, myLine.y0);
  context.lineTo(450, myLine.y0);
  context.strokeStyle = '#170f0f';	//warna tali
  context.lineWidth = 5;		//lebar tali
  context.stroke();
}

function drawLine(myLine, context) {		//fungsi untuk membuat garis
  context.beginPath();
  context.moveTo(myLine.x0, myLine.y0);
  context.lineTo(myLine.x, myLine.y);
  context.strokeStyle = '#170f0f';	//warna tali
  context.lineWidth = 3;		//lebar tali
  context.stroke();
}

function getPhi1(){      //Untuk mendapatkan nilai X
	mu      =  1+m1/m2; //*1000
	d2Phi1  =  (g*(Math.sin(Phi2)*Math.cos(Phi1-Phi2)-mu*Math.sin(Phi1))-(l2*dPhi2*dPhi2+l1*dPhi1*dPhi1*Math.cos(Phi1-Phi2))*Math.sin(Phi1-Phi2))/(l1*(mu-Math.cos(Phi1-Phi2)*Math.cos(Phi1-Phi2)));
	dPhi1   += d2Phi1*time;
	Phi1    += dPhi1*time;
	return Phi1;
}

function getXz(){							//Mendapatkan nilai semua X
	return X0+l1*Math.sin(getPhi1());
}

function getNumAnim(myCircle1, myCircle2, myLine1, myLine2, canvas, context, t) {
  mu      =  1+m1/m2; 
  d2Phi1  =  (g*(Math.sin(Phi2)*Math.cos(Phi1-Phi2)-mu*Math.sin(Phi1))-(l2*dPhi2*dPhi2+l1*dPhi1*dPhi1*Math.cos(Phi1-Phi2))*Math.sin(Phi1-Phi2))/(l1*(mu-Math.cos(Phi1-Phi2)*Math.cos(Phi1-Phi2)));
  
  dPhi1   += d2Phi1*time;
  Phi1    += dPhi1*time;
	
  myCircle1.x = X0+l1*Math.sin(Phi1);
  myCircle1.y = Y0+l1*Math.cos(Phi1);
 
  myLine1.x  = myCircle1.x;
  myLine1.y  = myCircle1.y;
}

function animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context, t) {
  document.getElementById('timerz').innerHTML = t;	//menampilkan waktu ke layar
  mu      =  1+m1/m2; //*1000
  d2Phi1  =  (g*(Math.sin(Phi2)*Math.cos(Phi1-Phi2)-mu*Math.sin(Phi1))-(l2*dPhi2*dPhi2+l1*dPhi1*dPhi1*Math.cos(Phi1-Phi2))*Math.sin(Phi1-Phi2))/(l1*(mu-Math.cos(Phi1-Phi2)*Math.cos(Phi1-Phi2)));
  
  dPhi1   += d2Phi1*time;
  Phi1    += dPhi1*time;
	
  myCircle1.x = X0+l1*Math.sin(Phi1);
  myCircle1.y = Y0+l1*Math.cos(Phi1);

  myLine1.x  = myCircle1.x;
  myLine1.y  = myCircle1.y;

  context.clearRect(0, 0, canvas.width, canvas.height);

  drawLine(myLine1, context);
  drawLine2(myLine1, context);
  
  drawCircle(myCircle1, context);
}

var d2Phi1 = 0;
var dPhi1  = 0;
var dPhi2  = 0;
var Phi2   = 2.1*(Math.PI)/2;
var m2     = 0.00001;
var l1     = 0;
var l2     = 0;
var X0     = 350;
var Y0     = 60;
var g      = 10;
var time   = 0.05;
var P = 0;
var canvas  = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var init    = {};
var animasi = 0;
var animasiperiode = 0;
function countPhase(){
}

function run(){
	
  var myLine1 = {x0: X0, y0: Y0, x: 0, y: 0};
  var myLine2 = {x0: 0, y0: 0, x: 0, y: 0};

  var myCircle1 = {x: X0+l1*Math.sin(Phi1), y: Y0+l1*Math.cos(Phi1), mass: m1};
  var myCircle2 = {x: X0+l1*Math.sin(Phi1)+l2*Math.sin(Phi2), y: Y0+l1*Math.cos(Phi1)+l2*Math.cos(Phi2), mass: m2};
  var t = new Date().getTime();	//Waktu awal tombol start di klik
  l1 = len1;
  g = g1;
 // Per = P;
  Anime = animasi;
  as = animasiperiode;
  var curre = 0;
  var stop = 1;
  var xStop = 0;
  var xAwal = getXz();
  var status;
  var set = false;
  var res = hasil; //set hasil yang di tampung di res (untuk implementasi rumus)
  //document.getElementById('xz').innerHTML = Math.round(xAwal);

  clearInterval(init);  //menghapus garis yang di looping
  
  context.clearRect(0, 0, canvas.width, canvas.height);		//Menghapus line yang sebelumnya yang telah ada
  
  while(!((myCircle1.x) - X0 >= (xAwal - X0)))	//lloping untuk mencari jlh animasi
  {
	//  curre = (new Date().getTime() - t)/1000;
	  getNumAnim(myCircle1, myCircle2, myLine1, myLine2, canvas, context, curre);	//untuk memisahkan fungsi yang mencari jumlah animasi
	  animasi++;
  }
	  var setAnim = animasi;
	  animasi = 0;
	  
  init = setInterval(function(){	//Loping untuk melakukan animasi
    document.getElementById('waktu').innerHTML = "2 * " + (Math.PI).toFixed(2) + " akar " + l1 + "/" + g + " = " + (res).toFixed(2);	//menampilkan periode ke layar
	curre = (new Date().getTime() - t)/1000;	//untuk mencari looping yang sekarang dan selisihnya dengan waktu awal		
    if((myCircle1.x) - X0 >= (xAwal - X0)){		//Untuk menghitung jumlah periode
		P++; //penghitung
		document.getElementById('Per').innerHTML = Math.round(P/3); 	//Menampilkan jumlah ayunan
    }
	animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context, curre);	
  }, res/setAnim); 

}
