var bullet, wall
var speed, weight
var thickness


function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="white"

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(230,230,230);

}
 
function draw() {
  background(0); 


 if (hasCollided( bullet , wall ))

  
  {
    
    bullet.velocityX=0;

    var deformation =0.5 * weight * speed * speed /(thickness*thickness*thickness);
  if (deformation>10) 
  {
    wall.shapeColor=(255,0,0);
  }
  
  if (deformation<10);
  {
    wall.shapeColor="blue";
  }
  
  }
 
 
  

  


  

drawSprites();
}


function hasCollided(bullet,wall )
{


bulletRightEdge = bullet.x + bullet.width
wallLeftEdge = wall.x
if ( bulletRightEdge >= wallLeftEdge)
{
 return true 
}

return false;
}
