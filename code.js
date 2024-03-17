var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"D5w0Ci764KTH1.y_IZHooKp6dpuTuWuy","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"NNR67hDVTLARu53h.jKzQ2Qh4Tc4okWT","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":null,"frameSize":{"x":320,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"clWOxlVQnYEGoQwmAPEhNjOVM4BjV7Pv","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":365},"rootRelativePath":"assets/dfc53be7-786c-4305-b8eb-81fa595e9903.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"tXWh7LqTdgQZF9OOrDVOFGrBUcoTU_ex","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/47fade86-5bd1-4789-87af-896fb1433a7b.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":388,"y":388},"frameCount":2,"looping":true,"frameDelay":12,"version":"5kIitfqbcbU4h.A71jfQcBBmsPFqv3Za","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":776},"rootRelativePath":"assets/043deebf-64b8-4795-be8d-db5055414f2f.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"maIXT3F0VNxop7kqJ8u10xvokGxMCrfa","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/c26b6449-0b6c-4483-8486-107c0091c26e.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"7Xz2yeTqfc8rQMlmpK6Bj6ynOyLVi9Wg","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/3221caad-ae37-4eec-92a8-56bae4769e66.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"SPjvLCPgk1UZb8h08ZMBQEQ71k3EgUqB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"}}};
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

var b = createSprite(200,200);
 b.setAnimation("b")
var nave  = createSprite(200,345,200,345)
nave.shapeColor="red"

var alien1 = createSprite(200,250,10,10)
alien1.shapeColor="red"

var alien2 = createSprite(200,150,10,10)
alien2.shapeColor="red"

var robot = createSprite(200,50,10,10)
robot.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

nave.setAnimation("hero1");
nave.scale=.2;
alien1.setAnimation("enemy");
alien1.scale=.1;
alien2.setAnimation("enemy2");
alien2.scale=.1;
robot.setAnimation("enemy3");
robot.scale=.1;

alien1.setVelocity(-6,0);
alien2.setVelocity(6,0);
robot.setVelocity(-6,0);


function draw() {
  
//fondo(b);

createEdgeSprites()




alien1.bounceOff(edges)
alien2.bounceOff(edges)
robot.bounceOff(edges)

if(keyDown(UP_ARROW)){
  nave.y=nave.y-3
}

if(keyDown(DOWN_ARROW)){
  nave.y=nave.y+3
}

if(keyDown(LEFT_ARROW)){
  nave.x=nave.x-3
}

if(keyDown(RIGHT_ARROW)){
  nave.x=nave.x+3
}

if(nave.isTouching(alien1)|| nave.isTouching(alien2)|| nave.isTouching(robot)){
playSound("assets/category_explosion/melodic_loss_6.mp3")
  nave.x=200
  nave.y=350
  death = death+1
}
if(nave.isTouching(net)){
 playSound("assets/category_notifications/puzzle_game_merge_echo_05.mp3")
  nave.x=200
  nave.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
drawSprites()
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
