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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._endLabel = new objects.Label("Game Over!", "60px", "Consolas", "#000000", config.Screen.HALF_WIDTH, 200, true);
            this._backButton = new objects.Button("BackButton", 320, 400, true);
            this._ocean = new objects.Ocean();
            this.Main();
        };
        End.prototype.Update = function () {
            this._ocean.Update();
        };
        End.prototype.Reset = function () { };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Starting - END SCENE");
            // adding the ocean to the scene
            this.addChild(this._ocean);
            this.addChild(this._endLabel);
            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map