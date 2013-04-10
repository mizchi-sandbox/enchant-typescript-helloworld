///<reference path='types/underscore.d.ts'/>
///<reference path='types/enchant.d.ts'/>
declare var _ : underscore;
declare var enchant : enchant;

// In this context, enchant is module so it is not callable.
// Use window.enchant instead of 'enchant'.
interface Window {
  enchant:Function;
}
window.enchant();

module App {
  export class Bear extends enchant.Sprite {
    constructor(){
      super(32, 32);
      this.x = 8;
      this.y = 8;
      this.image = Game.game.assets['images/chara1.png'];

      var self = this;
      this.on('enterframe', () => self.update());
    }

    update(): void {
      var input = Game.game.input
      if (input.right) this.x += 2;
      if (input.left)  this.x -= 2;
      if (input.up)    this.y -= 2;
      if (input.down)  this.y += 2;
    }
  }

  export class Game extends enchant.Game {
    public static game: Game;
    constructor(){
      super()
      Game.game = this;
      this.fps = 24;
      this.fps = 24;
      this.preload('images/chara1.png');
      this.onload = () => {
        var bear = new Bear()
        this.rootScene.addChild(bear);
        var game = this;
      };
    }
  }
}

window.onload = () => {
  var game =  new App.Game();
  game.start();
};
