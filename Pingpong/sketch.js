//bola
let xbolinha = 300
  let ybolinha = 200
  let dbolinha = 25
  let raio = dbolinha /2
  
///velociaade da bola  
  let xvelocidade = 6
  let yvelocidade = 6
  
//raquete
  let xraquete=5
  let comprimentoraquete=10
  let alturaraquete=90
let yraquete=150
let yvelocidaderaquete =2
let colidiu = false

//raquete do inimigo
let xraqueteinimigo=585
let yraqueteinimigo=150
let comprimentoraqueteinimigo=10
let velocidadeinimigo
let chanceerro=0
    
//pontos
let meuspontos =0
let pontosinimigo=0

//sons
let raquetada
let ponto
let trilha

function setup() {
  createCanvas(600,400);
  trilha.loop()
}
function draw() {
  background(0)
  bola(0)
  movimentaçaobola()
  colisaoparede()
  raquete(xraquete,yraquete)
  movimentaçaoraquete() 
  colisaobiblioteca(xraquete,yraquete)
  raquete(xraqueteinimigo,yraqueteinimigo)
  colisaobiblioteca(xraqueteinimigo,yraqueteinimigo)
  movimentaçaoraqueteinimigo()
  placar()
  marcapontos()
  }
  function preload(){
  trilha=loadSound("trilha.mp3")
  raquetada=loadSound("raquetada.mp3")
  ponto=loadSound("ponto.mp3")
  }

function bola()
{
fill(255)
  circle(xbolinha,ybolinha,dbolinha)  
}
function movimentaçaobola()
{
  xbolinha+=xvelocidade
  ybolinha+=yvelocidade
}
function colisaoparede()
{
  if (xbolinha+raio> width||xbolinha-raio<0)
{
  xvelocidade *=-1
}
  if(ybolinha+raio>height||ybolinha-raio < 0)
    {
      yvelocidade*=-1
}
}
function raquete(x,y)
{
  rect (x,y,comprimentoraquete,alturaraquete)
}
function movimentaçaoraquete()
{
 if (keyIsDown(40) === true) 
 {
   yraquete +=5
 }  
  if (keyIsDown(UP_ARROW)== true)
    {
      yraquete +=-5
    }
}
function movimentaçaoraqueteinimigo(){
  if(keyIsDown(83)==true){
    yraqueteinimigo +=5
  }
  if(keyIsDown(87)==true){
    yraqueteinimigo +=-5
  }
}
function colisaobiblioteca(x,y){
colidiu=  collideRectCircle(x,y,comprimentoraquete,alturaraquete,xbolinha,ybolinha, raio);
  if (colidiu){
    xvelocidade*=-1
raquetada.play()
  }
}
function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill(80,200,120)
  rect(150,10,40,20)
  rect(449,10,40,20)
  fill(255)
  text(pontosinimigo,470,26)
  text(meuspontos,170,26)
  

}
function marcapontos(){
  if(xbolinha>584){
     meuspontos+=1
    ponto.play();

  }
   
    if(xbolinha<15){
      pontosinimigo+=1
      ponto.play()
    }

}



