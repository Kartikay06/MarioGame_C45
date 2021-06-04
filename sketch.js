var ground,groundImg;
var mario,marioStandingImg,marioJumpingImg;
var invisibleGround;
var tube,tubeImg;
var cloudsImg,clouds;
var enemy,enemy2,enemyImg;
var brick,brick2,brick3,brick4,brick5,brick6,brickImg;

function preload(){

    groundImg=loadImage("Images/ground.png");
    marioStandingImg=loadImage("Images/Mario_right.png");
    tubeImg=loadImage("Images/Tube.png");
    //cloudsImg=loadImage("Image/cloud.png");
    marioJumpingImg=loadImage("Images/Mario_jumping.png");
    enemyImg=loadImage("Images/enemy.png");
    brickImg=loadImage("Images/Brick.png");
}


function setup(){
    createCanvas(1200,600);
    ground = createSprite(600,500,400,20);
    //ground.addImage("ground",groundImg);
    image(groundImg,0,-displayWidth*4, displayWidth*5, displayHeight);
    //image(groundImg,0,-displayHeight*4, displayWidth, displayHeight*5);
    ground.x = ground.width /2;
   // ground.velocityX = -2;
    //ground.scale = 2.0;

    mario = createSprite(50,400,20,50);
    mario.addImage("marioStanding",marioStandingImg);
    mario.scale = 0.05;

    invisibleGround = createSprite(0,450,2500,20);
    invisibleGround.visible = false;

    tube = createSprite(600,400,40,50);
    tube.addImage("tube",tubeImg);
    tube.scale = 0.10;

    //clouds = createSprite(600,100,40,10);
    //clouds.addImage("clouds",cloudsImg);
    //clouds.scale = 0.90;

    enemy = createSprite(800,400,20,50);
    enemy.addImage("enemy",enemyImg);
    enemy.scale = 0.10;

    enemy2 = createSprite(900,400,20,50);
    enemy2.addImage("enemy",enemyImg);
    enemy2.scale = 0.10;

   /* brick = createSprite(250,250,20,50);
    brick.addImage("brick",brickImg);
    brick.scale = 0.05;

    brick2 = createSprite(300,250,20,50);
    brick2.addImage("brick2",brickImg);
    brick2.scale = 0.05;

    brick3 = createSprite(350,250,20,50);
    brick3.addImage("brick3",brickImg);
    brick3.scale = 0.05;

    brick4 = createSprite(400,250,20,50);
    brick4.addImage("brick4",brickImg);
    brick4.scale = 0.05;

    brick5 = createSprite(300,100,20,50);
    brick5.addImage("brick",brickImg);
    brick5.scale = 0.05;

    brick6 = createSprite(350,100,20,50);
    brick6.addImage("brick",brickImg);
    brick6.scale = 0.05;
    */
    
}
    function draw(){
    background("cyan");
    console.log(mario.x);
    image(groundImg,0,-displayWidth*4, displayWidth*5, displayHeight);
    if(mario.x > 800){
    ground.x = ground.width/2;
    //ground.velocityX=-2;
    console.log("mario>800",ground.x);
    camera.position.x = displayWidth/2;
    //camera.position.y = cars[index-1].y
    }

    if(keyDown("space")&& mario.y >= 100) {
        mario.addImage("marioJumping",marioJumpingImg);
        mario.velocityY = -13;
      }
        mario.velocityY = mario.velocityY + 0.8;
        enemy.velocityX = -1;
        enemy2.velocityX = -1;
        enemy.velocityY = enemy.velocityY + 0.8;
        enemy2.velocityY = enemy2.velocityY + 0.8;

      if(keyDown(39)){
          mario.velocityX = +2;
      }
      spawnBricks();

      if(enemy.isTouching(tube)&&enemy2.isTouching(tube)){
          enemy.velocityX = +1;
          enemy2.velocityX = +1;
      }

         mario.collide(invisibleGround);
         mario.collide(tube);
         mario.collide(enemy);
         mario.collide(enemy2);
         /*mario.collide(brick);
         mario.collide(brick2);
         mario.collide(brick3);
         mario.collide(brick4);
         mario.collide(brick5);
         mario.collide(brick6);
         */
         enemy.collide(invisibleGround);
         enemy.collide(tube);
         enemy2.collide(invisibleGround);
         enemy2.collide(tube);
         enemy2.collide(enemy);


    drawSprites();
}

    function spawnBricks(){
        if (frameCount % 60 === 0) {
            brick = createSprite(250,250,20,50);
         brick.addImage("brick",brickImg);
            brick.scale = 0.05;
            mario.collide(brick);

           brick.y = Math.round(random(10,60));
           //brick.lifetime = 134;
         }
    }

    function spawnEnemys(){

    }

    function spawnTubes(){

    }