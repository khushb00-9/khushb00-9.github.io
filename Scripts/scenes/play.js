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
        Play.prototype._buildRedFishes = function () {
            for (var count = 0; count < this._redFishNum; count++) {
                this._redFishes.push(new objects.Red_fish());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Play.prototype._buildOrangeFishes = function () {
            for (var count = 0; count < this._orangeFishNum; count++) {
                this._orangeFishes.push(new objects.Orange_fish());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Play.prototype._buildGreenFishes = function () {
            for (var count = 0; count < this._greenFishNum; count++) {
                this._greenFishes.push(new objects.Green_fish());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Play.prototype._buildPurpleFishes = function () {
            for (var count = 0; count < this._purpleFishNum; count++) {
                this._purpleFishes.push(new objects.Purple_fish());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Play.prototype._buildBonus = function () {
            for (var count = 0; count < this._bonusNum; count++) {
                this._bonus.push(new objects.Bonus());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Play.prototype._buildLife = function () {
            for (var count = 0; count < this._lifeNum; count++) {
                this._life.push(new objects.Life());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Play.prototype._buildShark = function () {
            for (var count = 0; count < this._sharkNum; count++) {
                this._shark.push(new objects.Shark());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("background");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._yellowSeahorse = new objects.SeaHorse_yellow();
            this._ocean = new objects.Ocean();
            // creates an empty array of type Cloud
            this._redFishes = new Array();
            this._redFishNum = 2;
            this._greenFishes = new Array();
            this._greenFishNum = 2;
            this._orangeFishes = new Array();
            this._orangeFishNum = 2;
            this._purpleFishes = new Array();
            this._purpleFishNum = 2;
            this._bonus = new Array();
            this._bonusNum = 2;
            this._life = new Array();
            this._lifeNum = 2;
            this._shark = new Array();
            this._sharkNum = 4;
            this._buildBonus();
            this._buildGreenFishes();
            this._buildOrangeFishes();
            this._buildShark();
            this._buildRedFishes();
            this._buildPurpleFishes();
            this._buildLife();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._yellowSeahorse.Update();
            this._ocean.Update();
            this._redFishes.forEach(function (fish) {
                fish.Update();
                if (managers.Collision.check(_this._yellowSeahorse, fish)) {
                    console.log("collision");
                }
            });
            this._greenFishes.forEach(function (fish) {
                fish.Update();
                if (managers.Collision.check(_this._yellowSeahorse, fish)) {
                    console.log("collision");
                }
            });
            this._orangeFishes.forEach(function (fish) {
                fish.Update();
                if (managers.Collision.check(_this._yellowSeahorse, fish)) {
                    console.log("collision");
                }
            });
            this._purpleFishes.forEach(function (fish) {
                fish.Update();
                if (managers.Collision.check(_this._yellowSeahorse, fish)) {
                    console.log("collision");
                }
            });
            this._bonus.forEach(function (fish) {
                fish.Update();
                if (managers.Collision.check(_this._yellowSeahorse, fish)) {
                    console.log("collision");
                }
            });
            this._life.forEach(function (fish) {
                fish.Update();
                if (managers.Collision.check(_this._yellowSeahorse, fish)) {
                    console.log("collision");
                }
            });
            this._shark.forEach(function (fish) {
                fish.Update();
                if (managers.Collision.check(_this._yellowSeahorse, fish)) {
                    console.log("collision");
                }
            });
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._ocean);
            for (var _i = 0, _a = this._redFishes; _i < _a.length; _i++) {
                var fish = _a[_i];
                this.addChild(fish);
            }
            for (var _b = 0, _c = this._orangeFishes; _b < _c.length; _b++) {
                var fish = _c[_b];
                this.addChild(fish);
            }
            for (var _d = 0, _e = this._greenFishes; _d < _e.length; _d++) {
                var fish = _e[_d];
                this.addChild(fish);
            }
            for (var _f = 0, _g = this._purpleFishes; _f < _g.length; _f++) {
                var fish = _g[_f];
                this.addChild(fish);
            }
            for (var _h = 0, _j = this._bonus; _h < _j.length; _h++) {
                var fish = _j[_h];
                this.addChild(fish);
            }
            for (var _k = 0, _l = this._life; _k < _l.length; _k++) {
                var fish = _l[_k];
                this.addChild(fish);
            }
            for (var _m = 0, _o = this._shark; _m < _o.length; _m++) {
                var fish = _o[_m];
                this.addChild(fish);
            }
            // adding the seehorse to the scene
            this.addChild(this._yellowSeahorse);
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map