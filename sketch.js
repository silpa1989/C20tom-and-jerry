var tom;
var jerry;
var background;

function preload() {
   bg = loadImage("garden.png");
   cat = loadAnimation("cat1.png");
   cat1 = loadAnimation("cat2.png","cat3.png");
   cat2 = loadAnimation("cat4.png");
   mouse = loadAnimation("mouse1.png");
   mouse1 = loadAnimation("mouse2.png","mouse3.png");
   mouse2 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870,600);
    jerry = createSprite(200,600);
    tom.addAnimation("catready",cat);
    tom.scale = 0.2;

    jerry.addAnimation("mouseready",mouse);
    jerry.scale = 0.15

}

function draw() {

    background(bg);
    if(tom.x - jerry.x < (tom.width-jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("catdone",cat2);
        tom.changeAnimation("catdone");
        tom.scale = 0.2;
        tom.x=300;
        jerry.addAnimation("mousedone",mouse2);
        jerry.changeAnimation("mousedone")
    }
    

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -2;
      tom.addAnimation("catwalk",cat1);
      tom.changeAnimation("catwalk");

      jerry.addAnimation("mousewalk",mouse1);
      jerry.changeAnimation("mousewalk");
  }


}
