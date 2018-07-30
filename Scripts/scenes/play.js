var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildFishes = function () {
            for (var count = 0; count < this._fishNum; count++) {
                this._fishes.push(new objects.Fish());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("background");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._seahorse = new objects.SeaHorse();
            // this._seehorse = new objects.SeeHorse();
            this._ocean = new objects.Ocean();
            this._shark = new objects.Shark();
            // creates an empty array of type Cloud
            this._fishes = new Array();
            this._fishNum = 3;
            this._buildFishes();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._seahorse.Update();
            //this._seehorse.Update();
            this._ocean.Update();
            this._shark.Update();
            managers.Collision.check(this._seahorse, this._shark);
            this._fishes.forEach(function (fish) {
                fish.Update();
                if (managers.Collision.check(_this._seahorse, fish)) {
                    console.log("collision");
                }
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._ocean);
            for (var _i = 0, _a = this._fishes; _i < _a.length; _i++) {
                var fish = _a[_i];
                this.addChild(fish);
            }
            // adding the seehorse to the scene
            this.addChild(this._seahorse);
            // adding the shark to the scene
            this.addChild(this._shark);
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map