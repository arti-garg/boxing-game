var player1,player1img
var player2,player2img
var bg
var scene
var player1kick
var score=0
var h1
var h2
var h3
var h4
var h5
var heart
var emptyheart
var life = 10;

function preload(){
bg = loadImage("background-boxing-ring.png")
player1img=loadAnimation("Fighter 1-1.png")
player2img=loadAnimation("Fighter 2-1.png.png","Fighter 2-2.png.png","Fighter 2-3.png.png",)
player1kick=loadAnimation("Fighter 1-1.png","Fighter 1-2.png","Fighter 1-3.png","Fighter 1-4.png","Fighter 1-5.png")
heart=loadAnimation("heart-png.png")
emptyheart=loadImage("empty heart.png")

}
function setup(){
  createCanvas(600,600)
  scene = createSprite(300,300)
  scene.addImage(bg)
  player1=createSprite(100,300,20,20)
  player1.addAnimation("fighter",player1img)
  player1.addAnimation("kick",player1kick)
  player1.scale=0.9
  player2=createSprite(500,354,20,20)
  player2.addAnimation("fighters",player2img)
  player2.scale=0.6
  //hp=createSprite(400,254)
 // hp.addImage(heart)
  h1=createSprite(30,30)
  h1.addAnimation("h",heart)
  h1.addAnimation("E",emptyheart)
  h1.scale=0.1
  h2=createSprite(75,30)
  h2.addAnimation("h",heart)
  h2.addAnimation("EE",emptyheart)
  h2.scale=0.1
  h3=createSprite(120,30)
  h3.addAnimation("h",heart)
  h3.scale=0.1
  h4=createSprite(165,30)
  h4.addAnimation("h",heart)
  h4.scale=0.1
  h5=createSprite(210,30)
  h5.addAnimation("h",heart)
  h5.scale=0.1
  player1.debug=true
  player1.setCollider("rectangle",-50,50,80,80)
  player2.debug=true
  player2.setCollider("rectangle",0,0,80,80)
}
function draw(){
  background("black")
  //d=dist(player1.position.x,player1.position.y,player2.position.x,player2.position.y)
  
  if(player1.collide(player2) && life==10){
   
    h1.changeAnimation('E')
    life= 4
    player1.position.x =100
    player2.position.x =500
  
    //console.log(life)
  }
  console.log(life);

  if( life==4 && player1.collide(player2)){
   
    h2.changeAnimation('EE')
    life= 3;
    player1.position.x =100
    player2.position.x =500
  console.log("hi")
     }





  drawSprites()
}
function keyPressed(){
  if(keyCode == RIGHT_ARROW && player1.position.x<500){
    player1.position.x +=30
  }
  if(keyCode == LEFT_ARROW && player1.position.x>100){
    player1.position.x -=30
  
  }
  if(keyCode == 68 && player2.position.x<500){
    player2.position.x +=30
   // console.log("A")
  }
  if(keyCode == 65 && player2.position.x>100){
    player2.position.x -=30
   // console.log("D")
  }
}
function mousePressed(){
  player1.changeAnimation("kick",player1kick)
}
function mouseReleased(){
  player1.changeAnimation("fighter",player1img)
}