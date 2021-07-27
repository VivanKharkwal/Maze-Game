var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4c8d558e-994d-4343-a3cb-4c5ea4bbefaf","6cbd5f80-1eca-4ded-8a4f-510a3e64f7c8"],"propsByKey":{"4c8d558e-994d-4343-a3cb-4c5ea4bbefaf":{"name":"award_trophy1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png","frameSize":{"x":312,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qYuvwscvicUp26fkvQOaDTrPjKxv1BlU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png"},"6cbd5f80-1eca-4ded-8a4f-510a3e64f7c8":{"name":"soccer_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png"}}};
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

var ball = createSprite(100,50,10,20);
ball.setAnimation("soccer_blue_1");
ball.scale = 0.06;
ball.setCollider("circle", -10, 0, 175);

var wall1 = createSprite(10, 200, 3, 390);
var wall2 = createSprite(390, 180, 3, 350);
var wall3 = createSprite(200, 5, 380, 3);
var wall4 = createSprite(200, 395, 380, 3);
var wall5 = createSprite(35, 50, 50, 3);
var wall6 = createSprite(60,85,3,70);
var wall7 = createSprite(85,80,50,3);
var wall8 = createSprite(150,50,100,3);
var wall9 = createSprite(200,103,3,103);
var wall10=createSprite(247,85,90,3);
var wall11= createSprite(275,20,100,3);
var wall12= createSprite(325,70,3,100);
var wall13= createSprite(355,120,3,150);
var wall14= createSprite(110,125,3,90);
var wall15= createSprite(184,195,220,3);
var wall16= createSprite(277.5,155,157,3);
var wall17= createSprite(340,225,95,3);
var wall18= createSprite(295,210,3,30);
var wall19= createSprite(155,125,86,3);
var wall20= createSprite(40,275,3,175);
var wall21= createSprite(350,330,3,130);
var wall22= createSprite(60,315,40,3);
var wall23= createSprite(85,372,3,45);
var wall24= createSprite(160,350,150,3);
var wall25= createSprite(115,325,3,50);
var wall26= createSprite(133,300,40,3);
var wall27= createSprite(130,270,3,60);
var wall28= createSprite(78,255,3,120);
var wall29= createSprite(337,265,30,3);
var wall30= createSprite(323,295,3,60);
var wall31= createSprite(300,325,50,3);
var wall32= createSprite(237,372,3,45);
var wall33= createSprite(150,240,60,3);
var wall34= createSprite(170,280,3,80);
var wall35= createSprite(208,320,80,3);
var wall36= createSprite(250,297,3,50);
var wall37= createSprite(260,270,40,3);
var wall38= createSprite(210,225,3,60);
var wall39= createSprite(277,298,3,52);
var wall40= createSprite(260,247,3,45);

var gameState = "serve";

var trophy = createSprite(380,380,20,20);
trophy.setAnimation("award_trophy1_1");
trophy.scale = 0.1;

wall1.shapeColor ="black";
wall2.shapeColor ="black";
wall3.shapeColor ="black";
wall4.shapeColor ="black";
wall5.shapeColor ="black";
wall6.shapeColor ="black";
wall7.shapeColor ="black";
wall8.shapeColor ="black";
wall9.shapeColor ="black";
wall10.shapeColor ="black";
wall11.shapeColor ="black";
wall12.shapeColor ="black";
wall13.shapeColor ="black";
wall14.shapeColor ="black";
wall15.shapeColor ="black";
wall16.shapeColor ="black";
wall17.shapeColor ="black";
wall18.shapeColor ="black";
wall19.shapeColor ="black";
wall20.shapeColor ="black";
wall21.shapeColor ="black";
wall22.shapeColor ="black";
wall23.shapeColor ="black";
wall24.shapeColor ="black";
wall25.shapeColor ="black";
wall26.shapeColor ="black";
wall27.shapeColor ="black";
wall28.shapeColor ="black";
wall29.shapeColor ="black";
wall30.shapeColor ="black";
wall31.shapeColor ="black";
wall32.shapeColor ="black";
wall33.shapeColor ="black";
wall34.shapeColor ="black";
wall35.shapeColor ="black";
wall36.shapeColor ="black";
wall37.shapeColor ="black";
wall38.shapeColor ="black";
wall39.shapeColor ="black";
wall40.shapeColor ="black";

ball.shapeColor="blue";
trophy.shapeColor = "yellow";

function draw() {
  background("skyblue");
  createEdgeSprites();

  if(gameState === "serve"){
    textSize(35);
    fill("yellow");
    text("Press Space Key to Play", 10, 200);
    
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    wall16.visible = false;
    wall17.visible = false;
    wall18.visible = false;
    wall19.visible = false;
    wall20.visible = false;
    wall21.visible = false;
    wall22.visible = false;
    wall23.visible = false;
    wall24.visible = false;
    wall25.visible = false;
    wall26.visible = false;
    wall27.visible = false;
    wall28.visible = false;
    wall29.visible = false;
    wall30.visible = false;
    wall31.visible = false;
    wall32.visible = false;
    wall33.visible = false;
    wall34.visible = false;
    wall35.visible = false;
    wall36.visible = false;
    wall37.visible = false;
    wall38.visible = false;
    wall39.visible = false;
    wall40.visible = false;
    }
  
  if(keyWentDown("space") && gameState === "serve"){
    
    gameState = "play";
    
    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    wall5.visible = true;
    wall6.visible = true;
    wall7.visible = true;
    wall8.visible = true;
    wall9.visible = true;
    wall10.visible = true;
    wall11.visible = true;
    wall12.visible = true;
    wall13.visible = true;
    wall14.visible = true;
    wall15.visible = true;
    wall16.visible = true;
    wall17.visible = true;
    wall18.visible = true;
    wall19.visible = true;
    wall20.visible = true;
    wall21.visible = true;
    wall22.visible = true;
    wall23.visible = true;
    wall24.visible = true;
    wall25.visible = true;
    wall26.visible = true;
    wall27.visible = true;
    wall28.visible = true;
    wall29.visible = true;
    wall30.visible = true;
    wall31.visible = true;
    wall32.visible = true;
    wall33.visible = true;
    wall34.visible = true;
    wall35.visible = true;
    wall36.visible = true;
    wall37.visible = true;
    wall38.visible = true;
    wall39.visible = true;
    wall40.visible = true;
  }
  
  if(keyDown(UP_ARROW) && gameState === "play") {
    ball.velocityX = 0;
    ball.y = ball.y-2;
    
  }
  
  if (keyDown("down") && gameState === "play") {
    ball.y = ball.y+3;
   ball.velocityX = 0;
   
  }
  
  if (keyDown("right") && gameState === "play") {
    ball.x = ball.x+3;
    ball.velocityY =0;
  }
  
  if (keyDown("left") && gameState === "play") {
    ball.x = ball.x-3;
    ball.velocityY =0;
  }
  
 if (ball.isTouching(wall1) || ball.isTouching(wall2) || ball.isTouching(wall3) || ball.isTouching(wall4) || ball.isTouching(wall5) || ball.isTouching(wall6) || ball.isTouching(wall7) || ball.isTouching(wall8) || ball.isTouching(wall9) || ball.isTouching(wall10) || ball.isTouching(wall11)  || ball.isTouching(wall12) || ball.isTouching(wall13) || ball.isTouching(wall14) || ball.isTouching(wall15) || ball.isTouching(wall16) || ball.isTouching(wall17) || ball.isTouching(wall18) || ball.isTouching(wall19) || ball.isTouching(wall21) || ball.isTouching(wall21) || ball.isTouching(wall22) || ball.isTouching(wall23) || ball.isTouching(wall24) || ball.isTouching(wall25) || ball.isTouching(wall26) || ball.isTouching(wall27) || ball.isTouching(wall28) || ball.isTouching(wall29) || ball.isTouching(wall30) || ball.isTouching(wall31) || ball.isTouching(wall32) || ball.isTouching(wall33) || ball.isTouching(wall34) || ball.isTouching(wall35) || ball.isTouching(wall36) || ball.isTouching(wall37) || ball.isTouching(wall38) || ball.isTouching(wall39) || ball.isTouching(wall40)) {
    ball.x =30;
    ball.y =30;
    ball.velocityX =0;
    ball.velocityY =0;
  }
   
   if (ball.isTouching(trophy)) {
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    wall13.destroy();
    wall14.destroy();
    wall15.destroy();
    wall16.destroy();
    wall17.destroy();
    wall18.destroy();
    wall19.destroy();
    wall20.destroy();
    wall21.destroy();
    wall22.destroy();
    wall23.destroy();
    wall24.destroy();
    wall25.destroy();
    wall26.destroy();
    wall27.destroy();
    wall28.destroy();
    wall29.destroy();
    wall30.destroy();
    wall31.destroy();
    wall32.destroy();
    wall33.destroy();
    wall34.destroy();
    wall35.destroy();
    wall36.destroy();
    wall37.destroy();
    wall38.destroy();
    wall39.destroy();
    wall40.destroy();
    
    gameState = "Over";
    
    ball.velocityX = 0;
    ball.velocityY = 0;

    textSize(75);
    fill("yellow");
    text("You win", 75, 200);

  }
  
  
  drawSprites();
}

  
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
