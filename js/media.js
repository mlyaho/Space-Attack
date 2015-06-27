function preload_sounds(){
  //sounds
  var sounds = ["coin10","explosion1","explosion2","hit","laser1","laser2","mega1","invincibility","wingman","powerup","straight_gun"];
  sounds.forEach(function(snd){
    game.load.audio(snd,['res/sounds/'+snd+'.wav','res/sounds/'+snd+'.ogg','res/sounds/'+snd+'.mp3']);
  });

  //sprites
  var sprites = [
    "boss_blue",
    "boss_red",
    "boss_green",
    "bullet",
    "coin",
    "diagonal_gun",
    "enemy_blue",
    "enemy-bullet",
    "enemy_green",
    "enemy",
    "explode",
    "hud_loading",
    "life_up",
    "missile2",
    "missile",
    "player",
    "player_invincible",
    "repair",
    "straight_gun",
    "invincibility",
    "wingman",
    "wingman2",
    "wingman3"
  ];

  sprites.forEach(function(sprite){
    game.load.image(sprite,'res/sprites/'+sprite+'.png');
  });

}
