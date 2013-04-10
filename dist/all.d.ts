interface Window {
    enchant: Function;
}
module App {
    class Bear extends enchant.Sprite {
        constructor();
        public update(): void;
    }
    class Game extends enchant.Game {
        static game: Game;
        constructor();
    }
}
