var pad1;
var pad1Active = false;

function create_controls(){
  //add input for touch screen use
  game.input.addPointer();
  
  //add game controller
  game.input.gamepad.start();
  pad1 = game.input.gamepad.pad1;
}

function update_controls(){
  //follow cursor if no gamepad
  if(!pad1Active){
    game.physics.arcade.moveToPointer(player, 400);
    
    //stop movement when player reaches cursor
    if (Phaser.Rectangle.contains(player.body, game.input.x, game.input.y))
    {
        player.body.velocity.setTo(0, 0);
    }

  }

  mouseControls();
  checkGamepad();  
  update_gamepad(); 
}

function checkGamepad(){
  //check for gamepad
  if(game.input.gamepad.supported && game.input.gamepad.active && game.input.gamepad.pad1.connected && !pad1Active) {
    pad1Active = true;
    player.body.velocity.setTo(0, 0);
    var snd = game.add.audio("gamepad_detected");
    snd.play();
    
    message("hud_gamepad",3000);
    setTimeout(function(){
      var snd = game.add.audio("mouse_deactivated");
      snd.play();
      message("hud_mouse_disabled",3000);
    },2000)
  }
  
  //mouse controls
}

function mouseControls(){
  //shoot once on mouse click or touch screen press or gamepad button
  if (game.input.mousePointer.isDown && click == 0 && player.alive
  ||game.input.pointer1.isDown && click == 0 && player.alive){
    click = 1;
    player_shoot();
  }else if(game.input.mousePointer.isUp
  && game.input.pointer1.isUp
  &&!pad1._rawPad.buttons[3].pressed
  && pad1._buttons[0].isUp){
    //on triger release all for shooting again
    click = 0;
  }
  
}

function update_gamepad(){
  //left right movements
  if(pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) 
  || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1){
      player.body.velocity.x = gamepadSpeed;
      
  }else if(pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) 
  || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1){
      player.body.velocity.x = -gamepadSpeed;
    
  }else{
    player.body.velocity.x = 0;
  }
  
  //up down movements
  if(pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) 
  || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1){
      player.body.velocity.y = gamepadSpeed;
      
  }else if(pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) 
  || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1){
      player.body.velocity.y = -gamepadSpeed;
    
  }else{
    player.body.velocity.y = 0;
  }
  
  //shoot once on mouse click or touch screen press or gamepad button
  if (pad1._buttons[0].isDown && click == 0 && player.alive
  ||pad1._rawPad.buttons[3].pressed && click == 0 && player.alive){
    click = 1;
    player_shoot();
  }else if(game.input.mousePointer.isUp
  && game.input.pointer1.isUp
  &&!pad1._rawPad.buttons[3].pressed
  && pad1._buttons[0].isUp){
    //on triger release all for shooting again
    click = 0;
  }
}

