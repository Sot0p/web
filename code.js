

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["59eb0166-3487-44a7-bddd-0b162bf08651","5ae5dae3-2cbd-4e14-b0b9-3528e404edde","3e0983e2-4335-465e-a7de-b8f890f137a6","ede4f8a4-25e6-49f2-be2a-243d1bf4e771","d42640d2-6b05-4816-a9c8-7bb5689e3bfe","a12cf2d0-2111-42cc-af2d-20c04d12e073","1cc4eb6f-d642-42bc-b288-cd7d3f08ec84","84a531a1-1409-450d-adab-18d20eff9942","6921f2e2-a2df-45b6-9486-1fe36f60d793","c793db54-6016-4afc-81f5-c11f9809f6cc","121642f4-41da-4a5d-ac57-2550cf21571b","2de93f4f-aa4a-4d1e-a495-8e96440556c2","55fced81-4e5f-4dd8-b077-0a2027a20f8e","90df2484-b828-407f-af73-ea2bc3c34110","bf971351-99a4-4df6-a143-18c1cf3c4d75","99d6d646-8dd9-450d-ba91-287eeb57eb11"],"propsByKey":{"59eb0166-3487-44a7-bddd-0b162bf08651":{"name":"Level_1_floor","sourceUrl":null,"frameSize":{"x":100,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"0P0GY9ic0i0gSyKFhBFU9RAAj2sMVkL.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":20},"rootRelativePath":"assets/59eb0166-3487-44a7-bddd-0b162bf08651.png"},"5ae5dae3-2cbd-4e14-b0b9-3528e404edde":{"name":"Level_1_Ocean","sourceUrl":null,"frameSize":{"x":100,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"jeEkGNj3iKz777FXvknOOkyt2U2HoY7d","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":20},"rootRelativePath":"assets/5ae5dae3-2cbd-4e14-b0b9-3528e404edde.png"},"3e0983e2-4335-465e-a7de-b8f890f137a6":{"name":"Level_1_floor_mirror","sourceUrl":null,"frameSize":{"x":100,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"lMHehtctrK3jPUrj2H9lkZMYbvZfQ052","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":20},"rootRelativePath":"assets/3e0983e2-4335-465e-a7de-b8f890f137a6.png"},"ede4f8a4-25e6-49f2-be2a-243d1bf4e771":{"name":"Level_1_Sky","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"4oj8awZQOrDMeUi7JonhMUXKivPd_OHE","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ede4f8a4-25e6-49f2-be2a-243d1bf4e771.png"},"d42640d2-6b05-4816-a9c8-7bb5689e3bfe":{"name":"Level_1_Sky_mirror","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"xmX5UuWhaVTBf5.b3.FGlEN5QReoEz3Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d42640d2-6b05-4816-a9c8-7bb5689e3bfe.png"},"a12cf2d0-2111-42cc-af2d-20c04d12e073":{"name":"Player_right","sourceUrl":null,"frameSize":{"x":36,"y":65},"frameCount":2,"looping":true,"frameDelay":12,"version":"LYXuqtn.XA2fYMYLmgm1hFGTs4_973DD","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":65},"rootRelativePath":"assets/a12cf2d0-2111-42cc-af2d-20c04d12e073.png"},"1cc4eb6f-d642-42bc-b288-cd7d3f08ec84":{"name":"Player_idle","sourceUrl":null,"frameSize":{"x":36,"y":65},"frameCount":2,"looping":true,"frameDelay":10,"version":"GB.JiwQOks1gP5J1J7r9tCDYVgc5kqPA","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":65},"rootRelativePath":"assets/1cc4eb6f-d642-42bc-b288-cd7d3f08ec84.png"},"84a531a1-1409-450d-adab-18d20eff9942":{"name":"Player_left","sourceUrl":null,"frameSize":{"x":36,"y":65},"frameCount":2,"looping":true,"frameDelay":12,"version":"cuYDSM.gBjOXoo8P2XJk9Wv28Q.sR8I3","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":65},"rootRelativePath":"assets/84a531a1-1409-450d-adab-18d20eff9942.png"},"6921f2e2-a2df-45b6-9486-1fe36f60d793":{"name":"Coin","sourceUrl":null,"frameSize":{"x":48,"y":46},"frameCount":2,"looping":true,"frameDelay":12,"version":"h.rT4JzkcgoO4y0fiR42n6ZcMB3S7H9f","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":92},"rootRelativePath":"assets/6921f2e2-a2df-45b6-9486-1fe36f60d793.png"},"c793db54-6016-4afc-81f5-c11f9809f6cc":{"name":"Marble","sourceUrl":null,"frameSize":{"x":46,"y":45},"frameCount":2,"looping":true,"frameDelay":12,"version":"xnJ7lD.UVqZa1IDIV5t7bJoNg2mTj7nq","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":90},"rootRelativePath":"assets/c793db54-6016-4afc-81f5-c11f9809f6cc.png"},"121642f4-41da-4a5d-ac57-2550cf21571b":{"name":"Level_1_Slime_Idle","sourceUrl":null,"frameSize":{"x":74,"y":68},"frameCount":2,"looping":true,"frameDelay":12,"version":"GbjN33Z9nz.x2.8WVxLMX7FRiuIyMIfk","loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":136},"rootRelativePath":"assets/121642f4-41da-4a5d-ac57-2550cf21571b.png"},"2de93f4f-aa4a-4d1e-a495-8e96440556c2":{"name":"Level_1_RedSlime_Idle_copy_1","sourceUrl":null,"frameSize":{"x":74,"y":68},"frameCount":2,"looping":true,"frameDelay":12,"version":"3e_Hl6neSQEEYTJIEusjkxoSfHfl7PFh","loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":136},"rootRelativePath":"assets/2de93f4f-aa4a-4d1e-a495-8e96440556c2.png"},"55fced81-4e5f-4dd8-b077-0a2027a20f8e":{"name":"Level_1_Slime","sourceUrl":null,"frameSize":{"x":74,"y":68},"frameCount":3,"looping":true,"frameDelay":12,"version":"Bqz0vT9aPOA8qULs.0RilprYKua.IP2v","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":136},"rootRelativePath":"assets/55fced81-4e5f-4dd8-b077-0a2027a20f8e.png"},"90df2484-b828-407f-af73-ea2bc3c34110":{"name":"Block","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"jLF7QlYC7P8CRXAVBSl4jRAqGahVipaP","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/90df2484-b828-407f-af73-ea2bc3c34110.png"},"bf971351-99a4-4df6-a143-18c1cf3c4d75":{"name":"Level_1_Boat","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"DX4zv078C4gQ9qntAde2MB1lwOkOnNdL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/bf971351-99a4-4df6-a143-18c1cf3c4d75.png"},"99d6d646-8dd9-450d-ba91-287eeb57eb11":{"name":"usefulbackground","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"drumGzjCGhUuKH9Bd4hDybmIvGMQOv_l","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/99d6d646-8dd9-450d-ba91-287eeb57eb11.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Create your variables here
var score = 0;
var marbles = 0;
var health = 30;
var lives = 3;
var playscreenbool = true;
var level1 = false;
var ingame = false;
var playerwalkspeed = 6;
var time = 0;
var timesave = 0;
var jumptime = 12;
var jump = false;
var canjump = true;
var jumpspeed = 10;
var walk = false;
var blockscale = 0.8;
var blockvelocity = 3;
//
var slimewalkspeed = 4;
var slimewalk = false;
var slimejump = false;
var slimewalktime = 0;
var slimejumptime = 0;
var slimejumpspeed = 15;
var slimecanjump = false;
var slimecanstuntime = 0;
var slimewalkspeedboost = 0;
//
var slime2walkspeed = 4;
var slime2walk = false;
var slime2jump = false;
var slime2walktime = 0;
var slime2jumptime = 0;
var slime2jumpspeed = 15;
var slime2canjump = false;
var slime2canstuntime = 0;
var slime2walkspeedboost = 0;
//
var difficulty = 1;
var stage = 1;
var gameoverbool = false;
var howtoplay = true;
var pausebool = false;
var fallingspeedsave = 0;
// Create your sprites here
var sky = createSprite(200,200);
var sky2 = createSprite(600,200);
var playscreenbackground = createSprite(200,360);
var playscreenbackground2 = createSprite(600,360);
var level1sky = createSprite(200,200);
var level1sky2 = createSprite(600,200);
var level1floor = createSprite(200,360);
var level1floor2 = createSprite(600,360);
var level1floor3 = createSprite(600,360);
var coin = createSprite();
var coin2 = createSprite();
var marble = createSprite();
var marble2 = createSprite();
var marbleattack = createSprite();
var slime = createSprite();
var slime2 = createSprite();
var player = createSprite(40,300);
var playerjumphitbox = createSprite();
var playerhitbox = createSprite();
var block = createSprite(150,260);
var block2 = createSprite(181,260);
var block3 = createSprite(212,260);
var block4 = createSprite(243,260);
var block5 = createSprite(184,160);
var block6 = createSprite(215,160);
var inviswall = createSprite();
var marbleicon = createSprite(105,15);
//
var slimejumphitbox = createSprite();
var slimehitbox = createSprite();
var slimehurthitbox = createSprite();
//
var slime2jumphitbox = createSprite();
var slime2hitbox = createSprite();
var slime2hurthitbox = createSprite();
//
var marbleattackbool = false;
inviswall.height = 500;
inviswall.x = -45;
inviswall.y = 200;
var inviswall2 = createSprite();
var pausebackgroundsprite = createSprite(200,200);
var scoreicon = createSprite(15,15);
inviswall2.height = 500;
inviswall2.x = 445;
inviswall2.y = 200;
inviswall.visible = false;
inviswall2.visible = false;
player.visible = false;
playscreenbackground.visible = false;
playscreenbackground2.visible = false;
sky.visible = false;
sky2.visible = false;
level1floor.visible = false;
level1floor.setCollider("rectangle",0,3,95,15);
level1floor.debug = false;
///
level1floor2.visible = false;
level1floor2.setCollider("rectangle",0,3,95,15);
level1floor2.debug = false;
//
level1floor3.visible = false;
level1floor3.setCollider("rectangle",0,3,95,15);
level1floor3.debug = false;
//
playerjumphitbox.scale = 0.5;
playerjumphitbox.width = 60;
playerjumphitbox.visible = false;
//
slimejumphitbox.scale = 0.5;
slimejumphitbox.width = 30;
slimejumphitbox.visible = false;
//
slime2jumphitbox.scale = 0.5;
slime2jumphitbox.width = 30;
slime2jumphitbox.visible = false;
//
playerhitbox.width = 10;
playerhitbox.height = 10;
playerhitbox.visible = false;
//
slimehitbox.width = 60;
slimehitbox.height = 20;
slimehitbox.visible = false;
//
slime2hitbox.width = 60;
slime2hitbox.height = 20;
slime2hitbox.visible = false;
//
slimehurthitbox.width = 30;
slimehurthitbox.height = 15;
slimehurthitbox.visible = false;
//
slime2hurthitbox.width = 30;
slime2hurthitbox.height = 15;
slime2hurthitbox.visible = false;
//
pausebackgroundsprite.setAnimation("usefulbackground");
pausebackgroundsprite.scale = "4";
pausebackgroundsprite.alpha = "0.5";
pausebackgroundsprite.visible = false;
//
level1sky.visible = false;
level1sky2.visible = false;
scoreicon.visible = false;
marbleicon.visible = false;
block.visible = false;
block2.visible = false;
block3.visible = false;
block4.visible = false;
block5.visible = false;
block6.visible = false;
coin.visible = false;
coin2.visible = false;
marble.visible = false;
marble2.visible = false;
slime.visible = false;
slime2.visible = false;
player.setCollider("rectangle",0,0,30,65,0);
player.debug = false;
marbleattack.visible = false;

function draw() {
  // draw background
background("black");
if (pausebool == false){
time += 1;
}
  // update sprites
backgroundplayscreen();
level1sprites();
movelevel1background();
playermovement();
slimemovement();
slime2movement();
coinandmarblelive();
gameover();
  drawSprites();
  guide();
  pause();
  playscreentext();
  showgametext();
}
function pause(){
  if (playscreenbool == false){
  if (gameoverbool == false){
  if (howtoplay == false){
  if (pausebool){
    //
    player.velocityX = 0;
  level1floor.velocityX = 0;
    level1floor2.velocityX = 0;
    level1sky.velocityX = 0;
    level1sky2.velocityX = 0;
    block.velocityX = 0;
     block2.velocityX = 0;
     block3.velocityX = 0;
     block4.velocityX = 0;
     block5.velocityX = 0;
     coin.velocityX = 0;
     coin2.velocityX = 0;
     block6.velocityX = 0;
     marble.velocityX = 0;
     marble2.velocityX = 0;
      slime.velocityX = 0;
      slime2.velocityX = 0;
      //
      player.velocityY = 0;
      level1floor.velocityY = 0;
    level1floor2.velocityY = 0;
    level1sky.velocityY = 0;
    level1sky2.velocityY = 0;
    block.velocityY = 0;
     block2.velocityY = 0;
     block3.velocityY = 0;
     block4.velocityY = 0;
     block5.velocityY = 0;
     coin.velocityY = 0;
     coin2.velocityY = 0;
     block6.velocityY = 0;
     marble.velocityY = 0;
     marble2.velocityY = 0;
      slime.velocityY = 0;
      slime2.velocityY = 0;
      //
      fill("white");
      textSize(35);
  text("Pause",150,200);
  fill(rgb(217, 219, 55));
  textSize(15);
  stroke("black");
  strokeWeight(1);
  textSize(20);
  text("Coins:",50,250);
  text(score,110,250);
  ///
  fill("white");
  text("Stage:",155,250);
  text(stage,220,250);
  ///
   fill("White");
  stroke("black");
  strokeWeight(1);
  textSize(20);
  text("Health:", 250, 250);
  fill("green");
  if (health  < 10){
   fill("red");
   }
   if (health  >= 10){
   fill("yellow");
   }
   if (health  >= 20){
   fill("lime");
   }
  text (health, 315, 250);
  //
  textSize(16);
  fill("white");
  stroke("black");
  text("Press [Enter] to unpause",110,350);
      //
  if (keyWentDown("Enter")){
      pausebool = false;
      ingame = true;
      pausebackgroundsprite.visible = false;
      scoreicon.x = 15;
      scoreicon.y = 15;
      if (jump == false){
      player.velocityY = fallingspeedsave;
      }
    }
  }else{
    if (keyWentDown("Enter")){
      pausebool = true;
      ingame = false;
      pausebackgroundsprite.visible = true;
      scoreicon.x = 30;
      scoreicon.y = 243;
      scoreicon.scale = 0.5;
      fallingspeedsave = player.velocityY;
    }
  }
  }
  }
  }
}
function guide(){
  if (playscreenbool == false){
  if (howtoplay){
    ingame = false;
    //
    player.velocityX = 0;
  level1floor.velocityX = 0;
    level1floor2.velocityX = 0;
    level1sky.velocityX = 0;
    level1sky2.velocityX = 0;
    block.velocityX = 0;
     block2.velocityX = 0;
     block3.velocityX = 0;
     block4.velocityX = 0;
     block5.velocityX = 0;
     coin.velocityX = 0;
     coin2.velocityX = 0;
     block6.velocityX = 0;
     marble.velocityX = 0;
     marble2.velocityX = 0;
      slime.velocityX = 0;
      slime2.velocityX = 0;
      //
      player.velocityY = 0;
      level1floor.velocityY = 0;
    level1floor2.velocityY = 0;
    level1sky.velocityY = 0;
    level1sky2.velocityY = 0;
    block.velocityY = 0;
     block2.velocityY = 0;
     block3.velocityY = 0;
     block4.velocityY = 0;
     block5.velocityY = 0;
     coin.velocityY = 0;
     coin2.velocityY = 0;
     block6.velocityY = 0;
     marble.velocityY = 0;
     marble2.velocityY = 0;
      slime.velocityY = 0;
      slime2.velocityY = 0;
      //
    scoreicon.visible = false;
    noStroke();
    fill("black");
    rect(80,100,250,250);
    fill("white");
    textSize(20);
    text("Before playing",140,120);
    textSize(12);
    text("You move with [A,S]/[LEFT,RIGHT} keybinds",90,150);
    textSize(11);
    text("You can jump on enemies with [W]/[UP] keybinds",90,180);
    textSize(12);
    text("You can pause the game by pressing [Enter]",89,200);
    textSize(15);
    text("Press [Enter] to continue",115,340);
    if (keyDown("ENTER")){
      howtoplay = false;
      ingame = true;
    }
  }
  }
}
function gameover(){
  if (gameoverbool){
  level1floor.visible = false;
   level1floor2.visible = false;
    level1sky.visible = false;
     level1sky2.visible = false;
     player.visible = false;
     slime.visible = false;
  player.velocityY = 0;
  player.velocityX = 0;
  block.visible = false;
  block2.visible = false;
  block3.visible = false;
  block4.visible = false;
  block5.visible = false;
  block6.visible = false;
  scoreicon.visible = false;
  marbleicon.visible = false;
  background("black");
  fill("red");
  textSize(50);
  text("Game over",75,200);
  fill("yellow");
  textSize(30);
  text("Coins:",150,250);
  text(score,245,250);
  }else{
    if (health < 1){
      gameoverbool = true;
    }
  }
}
function slime2movement(){
  if (gameoverbool == false){
  if (level1){
  if (ingame){
    slime2jumphitbox.x = slime2.x;
    slime2jumphitbox.y = slime2.y + 1;
    slime2hitbox.x = slime2.x;
    slime2hitbox.y = slime2.y + 15;
    slime2hurthitbox.x = slime2.x;
    slime2hurthitbox.y = slime2.y - 15;
  if (slime2.visible){
  if (playerhitbox.isTouching(slime2hitbox)){
   if (time - slime2canstuntime > 5){
     slime2canstuntime = time;
     health -= randomNumber(3,5);
   }
  }
  if (playerhitbox.isTouching(slime2hurthitbox)){
   score += 1;
   slime2.visible = false;
  }
  slime2canjump = false;
    slime2.collide(level1floor);
  slime2.collide(level1floor2);
  slime2.collide(level1floor3);
  //
  if (block.visible){
  slime2.collide(block);
  }
  if (block2.visible){
  slime2.collide(block2);
  }
  if (block3.visible){
  slime2.collide(block3);
  }
  if (block4.visible){
  slime2.collide(block4);
  }
  if (block5.visible){
  slime2.collide(block5);
  }
  if (block6.visible){
  slime2.collide(block6);
  }
  //
  if (slime2jumphitbox.isTouching(block)){
    if (block.visible){
    slime2.velocityY = 0;
    slime2canjump = true;
    }
  }
  if (slime2jumphitbox.isTouching(block2)){
    if (block2.visible){
    slime2.velocityY = 0;
    slime2canjump = true;
    }
  }
  if (slime2jumphitbox.isTouching(block3)){
    if (block3.visible){
    slime2.velocityY = 0;
    slime2canjump = true;
    }
  }
  if (slime2jumphitbox.isTouching(block4)){
    if (block4.visible){
    slime2.velocityY = 0;
    slime2canjump = true;
    }
  }
  if (slime2jumphitbox.isTouching(block5)){
    if (block5.visible){
    slime2.velocityY = 0;
    slime2canjump = true;
    }
  }
  if (slime2jumphitbox.isTouching(block6)){
    if (block6.visible){
    slime2.velocityY = 0;
    slime2canjump = true;
    }
  }
  if (slime2jumphitbox.isTouching(level1floor)){
    slime2.velocityY = 0;
    slime2canjump = true;
  }
  if (slime2jumphitbox.isTouching(level1floor2)){
    slime2.velocityY = 0;
    slime2canjump = true;
  }
  if (slime2jumphitbox.isTouching(level1floor3)){
    slime2.velocityY = 0;
    slime2canjump = true;
  }
  if (slime2.x < 450){
  if (slime2.x >= -50 ){
  if (slime2jump == false){
  slime2.velocityY += 1;
  }
  slime2.setAnimation("Level_1_Slime_Idle");
  if (slime2walk){
    slime2.setAnimation("Level_1_Slime");
    if (time - slime2walktime < 10){
      slime2.velocityX = - slime2walkspeed - slime2walkspeedboost;
      }else{
      slime2.velocityX = 0;
      slime2walk = false;
    }
  }
  if (slime2jump){
    slime2.setAnimation("Level_1_Slime");
    if (time - slime2jumptime < 10){
       slime2.velocityY = 0;
      slime2.velocityY = - slime2jumpspeed;
      }else{
      slime2.velocityY = 0;
      slime2jump = false;
    }
  }
  var walkschance = randomNumber(1,26);
  if (walkschance == 25){
    if (slime2walk == false){
    slime2walk = true;
    slime2walktime = time;
    }
  }
  var jumpchance = randomNumber(1,50);
  if (jumpchance == 25){
    if (slime2jump == false){
    if (slime2canjump){
    slime2jump = true;
    slime2jumptime = time;
    }
    }
  }
  }
  }
  }
  }
  }
  }
}
function slimemovement(){
  if (gameoverbool == false){
  if (level1){
  if (ingame){
    slimejumphitbox.x = slime.x;
    slimejumphitbox.y = slime.y + 1;
    slimehitbox.x = slime.x;
    slimehitbox.y = slime.y + 15;
    slimehurthitbox.x = slime.x;
    slimehurthitbox.y = slime.y - 15;
  if (slime.visible){
  if (playerhitbox.isTouching(slimehitbox)){
   if (time - slimecanstuntime > 5){
     slimecanstuntime = time;
     health -= randomNumber(3,5);
   }
  }
  if (playerhitbox.isTouching(slimehurthitbox)){
   score += 1;
   slime.visible = false;
  }
  slimecanjump = false;
    slime.collide(level1floor);
  slime.collide(level1floor2);
  slime.collide(level1floor3);
  //
  if (block.visible){
  slime.collide(block);
  }
  if (block2.visible){
  slime.collide(block2);
  }
  if (block3.visible){
  slime.collide(block3);
  }
  if (block4.visible){
  slime.collide(block4);
  }
  if (block5.visible){
  slime.collide(block5);
  }
  if (block6.visible){
  slime.collide(block6);
  }
  //
  if (slimejumphitbox.isTouching(block)){
    if (block.visible){
    slime.velocityY = 0;
    slimecanjump = true;
    }
  }
  if (slimejumphitbox.isTouching(block2)){
    if (block2.visible){
    slime.velocityY = 0;
    slimecanjump = true;
    }
  }
  if (slimejumphitbox.isTouching(block3)){
    if (block3.visible){
    slime.velocityY = 0;
    slimecanjump = true;
    }
  }
  if (slimejumphitbox.isTouching(block4)){
    if (block4.visible){
    slime.velocityY = 0;
    slimecanjump = true;
    }
  }
  if (slimejumphitbox.isTouching(block5)){
    if (block5.visible){
    slime.velocityY = 0;
    slimecanjump = true;
    }
  }
  if (slimejumphitbox.isTouching(block6)){
    if (block6.visible){
    slime.velocityY = 0;
    slimecanjump = true;
    }
  }
  if (slimejumphitbox.isTouching(level1floor)){
    slime.velocityY = 0;
    slimecanjump = true;
  }
  if (slimejumphitbox.isTouching(level1floor2)){
    slime.velocityY = 0;
    slimecanjump = true;
  }
  if (slimejumphitbox.isTouching(level1floor3)){
    slime.velocityY = 0;
    slimecanjump = true;
  }
  if (slime.x < 450){
  if (slime.x >= -50 ){
  if (slimejump == false){
  slime.velocityY += 1;
  }
  slime.setAnimation("Level_1_Slime_Idle");
  if (slimewalk){
    slime.setAnimation("Level_1_Slime");
    if (time - slimewalktime < 10){
      slime.velocityX = - slimewalkspeed - slimewalkspeedboost;
      }else{
      slime.velocityX = 0;
      slimewalk = false;
    }
  }
  if (slimejump){
    slime.setAnimation("Level_1_Slime");
    if (time - slimejumptime < 10){
       slime.velocityY = 0;
      slime.velocityY = - slimejumpspeed;
      }else{
      slime.velocityY = 0;
      slimejump = false;
    }
  }
  var walkschance = randomNumber(1,26);
  if (walkschance == 25){
    if (slimewalk == false){
    slimewalk = true;
    slimewalktime = time;
    }
  }
  var jumpchance = randomNumber(1,50);
  if (jumpchance == 25){
    if (slimejump == false){
    if (slimecanjump){
    slimejump = true;
    slimejumptime = time;
    }
    }
  }
  }
  }
  }
  }
  }
  }
}
function coinandmarblelive(){
   if (gameoverbool == false){
  coin.collide(block);
  coin.collide(block2);
  coin.collide(block3);
  coin.collide(block4);
  coin.collide(block5);
  coin.collide(block6);
  //
  coin2.collide(block);
  coin2.collide(block2);
  coin2.collide(block3);
  coin2.collide(block4);
  coin2.collide(block5);
  coin2.collide(block6);
  //
  marble.collide(block);
  marble.collide(block2);
  marble.collide(block3);
  marble.collide(block4);
  marble.collide(block5);
  marble.collide(block6);
  //
  marble2.collide(block);
  marble2.collide(block2);
  marble2.collide(block3);
  marble2.collide(block4);
  marble2.collide(block5);
  marble2.collide(block6);
  //
  coin.collide(marble);
  coin.collide(marble2);
  //
  coin2.collide(marble);
  coin2.collide(marble2);
  //
  marble.collide(coin);
  marble.collide(coin2);
  //
  marble2.collide(coin);
  marble2.collide(coin2);
  //
  coin.collide(coin2);
  marble.collide(marble2);
  if (ingame){
    if (coin.isTouching(player)){
      if (coin.visible){
      score += 1;
      coin.visible = false;
      }
    }
    if (coin2.isTouching(player)){
      if (coin2.visible){
      score += 1;
      coin2.visible = false;
      }
    }
    if (marble.isTouching(player)){
      if (marble.visible){
      marbles += 1;
      marble.visible = false;
      }
    }
    if (marble2.isTouching(player)){
      if (marble2.visible){
      marbles += 1;
      marble2.visible = false;
      }
    }
  }
  
}
}
function showgametext(){
   if (gameoverbool == false){
  if (ingame){
  scoreicon.visible = true;
  scoreicon.scale = 0.4;
  scoreicon.setAnimation("Coin");
  fill(rgb(217, 219, 55));
  textSize(15);
  stroke("black");
  strokeWeight(2);
  text("Coins:",30,21);
  text(score,75,21);
  fill("white");
   stroke("black");
  text("Stage:",100,21);
  text(stage,146,21);
  ///
  
 // stroke(rgb(82, 17, 11));
  // strokeWeight(2);
//marbleicon.visible = true;
  //fill(rgb(219, 107, 42));
 // marbleicon.scale = 0.4;
 // marbleicon.setAnimation("Marble");
   //text("Marbles:",120,21);
  // text(marbles,180,21);
   fill("white");
   stroke("black");
   text("HP:",300,21);
   if (health  < 10){
   fill("red");
   }
   if (health  >= 10){
   fill("yellow");
   }
   if (health  >= 20){
   fill("lime");
   }
   text(health,325,21);
  }
}
}
function movelevel1background(){
   if (gameoverbool == false){
  level1floor.displace(level1floor2);
  level1floor2.displace(level1floor);
  level1sky.displace(level1sky2);
  level1sky2.displace(level1sky);
  if (slime.x  < -200){
    slime.visible = false; 
    slime.velocityY = 0;
    slime.velocityX = 0;
    slime.x = randomNumber(552,560);
    slime.y = 300;
    var slimevisibilitychance = randomNumber(1,2);
    if (slimevisibilitychance == 1){
      slime.visible = true;
    }
  }
  if (slime2.x  < -200){
    slime2.visible = false; 
    slime2.velocityY = 0;
    slime2.velocityX = 0;
    slime2.x = randomNumber(552,560);
    slime2.y = 300;
    var slime2visibilitychance = randomNumber(1,2);
    if (slime2visibilitychance == 1){
      slime2.visible = true;
    }
  }
  if (coin.x < -200){
    coin.visible = false;
    coin.x = randomNumber(350,550) + 100; 
    coin.y = randomNumber(150,330); 
    var coinvisibilitychance = randomNumber(1,3);
    if (coinvisibilitychance  < 3){
      coin.visible = true;
    }
  }
  if (coin2.x < -200){
    coin2.visible = false;
    coin2.x = randomNumber(350,550) + 100; 
    coin2.y = randomNumber(150,330); 
    var coinvisibilitychance2 = randomNumber(1,3);
    if (coinvisibilitychance2 < 3){
      coin2.visible = true;
    }
  }
  if (marble.x < -200){
    marble.visible = false;
    marble.x = randomNumber(350,550) + 100; 
    marble.y = randomNumber(150,330); 
    var marblevisibilitychance = randomNumber(1,3);
    if (marblevisibilitychance < 3){
      marble.visible = false;
    }
  }
  if (marble2.x < -200){
    marble2.visible = false;
    marble2.x = randomNumber(350,550) + 100; 
    marble2.y = randomNumber(150,330); 
    var marblevisibilitychance2 = randomNumber(1,3);
    if (marblevisibilitychance2 < 3){
      marble2.visible = false;
    }
  }
  if (block.x < -200){
    var blockvisibilitychance = randomNumber(1,2);
    block.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;
    block5.visible = false;
    block6.visible = false;
    block.x += 595;
    block2.x += 595;
    block3.x += 595;
    block4.x += 595;
    block5.x += 595;
    block6.x += 595;
    if (blockvisibilitychance == 1){
      block.visible = true;
    }
    var blockvisibilitychance2 = randomNumber(1,3);
    if (blockvisibilitychance2 < 3){
      block2.visible = true;
    }
    var blockvisibilitychance3 = randomNumber(1,3);
    if (blockvisibilitychance3 < 3){
      block3.visible = true;
    }
    var blockvisibilitychance4 = randomNumber(1,3);
    if (blockvisibilitychance4  < 3){
      block4.visible = true;
    }
    var blockvisibilitychance5 = randomNumber(1,3);
    if (blockvisibilitychance5 < 3){
      block5.visible = true;
    }
    var blockvisibilitychance6 = randomNumber(1,3);
    if (blockvisibilitychance6 < 3){
      block6.visible = true;
    }
  }
  if (level1floor.x < -200){
  level1floor.x = 595;
}
if (level1floor2.x < -200){
  level1floor2.x = 595;
  stage += 1;
  var difficultychance = randomNumber(1,2);
  if (difficultychance == 1){
  difficulty = 0.5;
  }
  var slimespeedboostchance = randomNumber(1,2);
  if (slimespeedboostchance == 1){
  slimewalkspeedboost + 0.1;
  slime2walkspeedboost + 0.1;
}
}
 if (level1sky.x < -200){
  level1sky.x = 595;
}
if (level1sky2.x < -200){
  level1sky2.x = 595;
}
  if (player.x > 300){
    if (walk){
    level1floor.velocityX = -5;
     level1floor2.velocityX = -5;
     level1sky.velocityX = -1;
     level1sky2.velocityX = -1;
     block.velocityX = -blockvelocity;
     block2.velocityX = -blockvelocity;
     block3.velocityX = -blockvelocity;
     block4.velocityX = -blockvelocity;
     block5.velocityX = -blockvelocity;
     block6.velocityX = -blockvelocity;
     coin.velocityX = -blockvelocity;
     coin2.velocityX = -blockvelocity;
     marble.velocityX = -blockvelocity;
     marble2.velocityX = -blockvelocity;
      slime.velocityX = -blockvelocity;
      slime2.velocityX = -blockvelocity;
     player.x = 300;
    }else{
      level1floor.velocityX = 0;
    level1floor2.velocityX = 0;
    level1sky.velocityX = 0;
    level1sky2.velocityX = 0;
    block.velocityX = 0;
     block2.velocityX = 0;
     block3.velocityX = 0;
     block4.velocityX = 0;
     block5.velocityX = 0;
     block6.velocityX = 0;
     coin.velocityX = 0;
     coin2.velocityX = 0;
     marble.velocityX = 0;
     marble2.velocityX = 0;
     slime.velocityX = 0;
     slime2.velocityX = 0;
    }
  }else{
    level1floor.velocityX = 0;
    level1floor2.velocityX = 0;
    level1sky.velocityX = 0;
    level1sky2.velocityX = 0;
    block.velocityX = 0;
     block2.velocityX = 0;
     block3.velocityX = 0;
     block4.velocityX = 0;
     block5.velocityX = 0;
     coin.velocityX = 0;
     coin2.velocityX = 0;
     block6.velocityX = 0;
     marble.velocityX = 0;
     marble2.velocityX = 0;
      slime.velocityX = 0;
      slime2.velocityX = 0;
  }
}
}
function level1sprites(){
   if (gameoverbool == false){
  if (level1){
  player.visible = true;
  level1floor.visible = true;
  level1floor.scale = 4;
   level1floor2.visible = true;
   level1sky.visible = true;
level1sky2.visible = true;
  level1floor.setAnimation("Level_1_floor");
  level1floor2.scale = 4;
  level1floor2.setAnimation("Level_1_floor_mirror");
  level1sky.setAnimation("Level_1_Sky");
level1sky2.setAnimation("Level_1_Sky_mirror");
level1sky.scale = 4;
level1sky2.scale = 4;
//block.visible = true;
//block2.visible = true;
//block3.visible = true;
//block4.visible = true;
//block5.visible = true;
//block6.visible = true;
block.scale = blockscale;
block2.scale = blockscale;
block3.scale = blockscale;
block4.scale = blockscale;
block5.scale = blockscale;
block6.scale = blockscale;
block.setAnimation("Block");
block2.setAnimation("Block");
block3.setAnimation("Block");
block4.setAnimation("Block");
block5.setAnimation("Block");
block6.setAnimation("Block");
coin.scale = 0.6;
coin2.scale = 0.6;
marble.scale = 0.7;
marble2.scale = 0.7;
coin.setAnimation("Coin");
coin2.setAnimation("Coin");
marble.setAnimation("Marble");
marble2.setAnimation("Marble");
slime.scale = 0.6;
slime2.scale = 0.6;
marbleattack.scale = 0.45;
marbleattack.setAnimation("Marble");
  }
}
}
function playermovement(){
   if (gameoverbool == false){
  if (ingame){
  //the actual hitbox of the player///
  canjump = false;
  playerhitbox.x = player.x;
  playerhitbox.y = player.y + 30;
  playerjumphitbox.x = player.x;
  playerjumphitbox.y = player.y + 15;
  // collide
  player.collide(inviswall);
  player.collide(inviswall2);
  player.collide(level1floor);
  player.collide(level1floor2);
  if (block.visible){
  player.collide(block);
  }
   if (block2.visible){
  player.collide(block2);
  }
  if (block3.visible){
  player.collide(block3);
  }
  if (block4.visible){
  player.collide(block4);
  }
  if (block5.visible){
  player.collide(block5);
  }
  if (block6.visible){
  player.collide(block6);
  }
  if (playerjumphitbox.isTouching(level1floor)){
    canjump = true;
    player.velocityY = 0;
  }
  if (playerjumphitbox.isTouching(level1floor2)){
    canjump = true;
    player.velocityY = 0;
  }
  if (playerjumphitbox.isTouching(block)){
   if (block.visible){
  player.collide(block);
  
    canjump = true;
    player.velocityY = 0;
    }
  }
  if (playerjumphitbox.isTouching(block2)){
    if (block2.visible){
    canjump = true;
    player.velocityY = 0;
    }
  }
  if (playerjumphitbox.isTouching(block3)){
    if (block3.visible){
    canjump = true;
    player.velocityY = 0;
    }
  }
  if (playerjumphitbox.isTouching(block4)){
    if (block4.visible){
    canjump = true;
    player.velocityY = 0;
    }
  }
  if (playerjumphitbox.isTouching(block5)){
    if (block5.visible){
    canjump = true;
    player.velocityY = 0;
    }
  }
  if (playerjumphitbox.isTouching(block6)){
    if (block6.visible){
    canjump = true;
    player.velocityY = 0;
    }
  }
  walk = false;
  // walking to the left
  if (ingame){
    player.setAnimation("Player_idle");
  if (keyDown("a")){
    player.velocityX = -playerwalkspeed;
    player.setAnimation("Player_left");
  }
  if (keyWentUp("a")){
    player.velocityX = 0;
  }
  if (keyDown("left")){
    player.velocityX = -playerwalkspeed;
     player.setAnimation("Player_left");
  }
  if (keyWentUp("left")){
    player.velocityX = 0;
  }
  // walking to the right
  if (keyDown("d")){
    player.velocityX = playerwalkspeed;
     player.setAnimation("Player_right");
     walk = true;
  }
  if (keyWentUp("d")){
    player.velocityX = 0;
  }
  if (keyDown("right")){
    player.velocityX = playerwalkspeed;
    player.setAnimation("Player_right");
    walk = true;
  }
  if (keyWentUp("right")){
    player.velocityX = 0;
  }
  if (jump){
    if (time - timesave < jumptime){
      player.velocityY = -jumpspeed;
      }else{
      player.velocityY = 0;
      jump = false;
      canjump = false;
    }
  }
  player.velocityY += 1;
  if (keyDown("w")){
    if (jump != true){
      if (canjump){
      jump = true;
      timesave = time;
      }
    }
  }
  if (keyWentUp("w")){
    player.velocityX = 0;
  }
  if (keyDown("up")){
    if (jump != true){
      if (canjump){
      jump = true;
      timesave = time;
      }
    }
  }
  if (keyWentUp("up")){
    player.velocityX = 0;
  }
  }
  }
   }
}
function playscreentext(){
   if (gameoverbool == false){
   if (playscreenbool){
  fill(rgb(74,103,65));
  strokeWeight(5);
  stroke(rgb(34,49,29));
  rect(150,250, 100,50);
  fill("green");
  stroke("black");
  strokeWeight("3");
  textSize(35);
  text("Play", 165,290);
  if (World.mouseX < 250){
    if (World.mouseY < 300){
       if (World.mouseX > 150){
    if (World.mouseY > 250){
      if (mouseWentDown("left")){
        playscreenbool = false;
        level1 = true;
        ingame = true;
      }   
  }
       }
    }
  }
   }
}
}
function backgroundplayscreen(){
   if (gameoverbool == false){
  if (playscreenbool){
  playscreenbackground.setAnimation("Level_1_floor");
playscreenbackground.scale = 4;
  playscreenbackground2.setAnimation("Level_1_floor_mirror");
playscreenbackground2.scale = 4;
sky.setAnimation("Level_1_Sky");
sky2.setAnimation("Level_1_Sky_mirror");
sky.scale = 4;
sky2.scale = 4;
playscreenbackground.visible = true;
playscreenbackground2.visible = true;
sky.visible = true;
sky2.visible = true;
// floor movement
playscreenbackground2.velocityX = -5;
playscreenbackground.velocityX = -5;
playscreenbackground2.displace(playscreenbackground);
playscreenbackground.displace(playscreenbackground2);
if (playscreenbackground.x < -200){
  playscreenbackground.x = 595;
}
if (playscreenbackground2.x < -200){
  playscreenbackground2.x = 595;
}
// sky movement
sky.velocityX = -1;
sky2.velocityX = -1;
sky2.displace(sky);
sky.displace(sky2);
if (sky.x < -200){
  sky.x = 595;
}
if (sky2.x < -200){
 sky2.x = 595;
}
}else{
playscreenbackground.visible = false;
playscreenbackground2.visible = false;
sky.visible = false;
sky2.visible = false;
sky.velocityX = 0;
sky2.velocityY = 0;
playscreenbackground.velocityY = 0;
playscreenbackground2.velocityY = 0;
}
}
}

// Create your functions here
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
