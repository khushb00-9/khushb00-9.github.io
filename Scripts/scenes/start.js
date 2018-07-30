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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._welcomeLabel = new objects.Label("Marino ", "60px", "Consolas", "#FF0000", 360, 120, true);
            this._welcomeLabelby = new objects.Label("By Tidal Wave ", "40px", "Consolas", "#000000", 360, 240, true);
            this._startButton = new objects.Button("StartButton", 320, 360, true);
            this._settingButton = new objects.Button("SettingButton", 710, 550, true);
            this._infoButton = new objects.Button("InfoButton", 0, 550, true);
            this._ocean = new objects.Ocean();
            this.Main();
        };
        Start.prototype.Update = function () {
            this._ocean.Update();
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Starting - START SCENE");
            // adding the ocean to the scene
            this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            this.addChild(this._welcomeLabelby);
            this.addChild(this._startButton);
            this.addChild(this._settingButton);
            this.addChild(this._infoButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
                var buttonSound = createjs.Sound.play("button");
            }, this);
            this._settingButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.SETTING;
                var buttonSound = createjs.Sound.play("button");
            }, this);
            this._infoButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INFORMATION;
                var buttonSound = createjs.Sound.play("button");
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map