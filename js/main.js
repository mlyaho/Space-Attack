var game = new Phaser.Game(720, 1280, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update});
var centerx = game.width / 2;
var centery = game.height / 2;

function preload() {
  preload_level();
  preload_player();
  preload_enemy();
}

function create() {
  create_level();
  create_player();
  create_enemy();
}

function update(){
  update_level();
  update_player();
  update_enemy();
}


