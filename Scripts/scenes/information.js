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
    var Information = /** @class */ (function (_super) {
        __extends(Information, _super);
        // constructors
        function Information() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Information.prototype.Start = function () {
            this._backButton = new objects.Button("BackButton", 360, 560, true);
            this._infoLabel = new objects.Label("Marino", "60px", "Consolas", "#660066", config.Screen.HALF_WIDTH, 50, true);
            this._infoLabel1 = new objects.Label("Game version - ", "40px", "Consolas", " #ff0066", 400, 140, true);
            this._infoLabel2 = new objects.Label("1.0", "30px", "Consolas", "#000066", 400, 180, true);
            this._infoLabel3 = new objects.Label("Developers -", "40px", "Consolas", " #ff0066", 400, 230, true);
            this._infoLabel4 = new objects.Label("   Chandni Patel - 300990555 \n\nKhushboo Sakervala - 300984318 \n\n   Piyush Sehli: 300984528\n\n", "30px", "Consolas", "#000066", 400, 340, true);
            this._infoLabel5 = new objects.Label("Guided By -", "40px", "Consolas", " #ff0066", 400, 410, true);
            this._infoLabel6 = new objects.Label("Prof. Tom Tsiliopoulos", "35px", "Consolas", "#000066", 380, 460, true);
            this._ocean = new objects.Ocean();
            this.Main();
        };
        Information.prototype.Update = function () {
            this._ocean.Update();
        };
        Information.prototype.Reset = function () { };
        Information.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Information.prototype.Main = function () {
            console.log("Starting - Information SCENE");
            this.addChild(this._ocean);
            this.addChild(this._backButton);
            this.addChild(this._infoLabel);
            this.addChild(this._infoLabel1);
            this.addChild(this._infoLabel2);
            this.addChild(this._infoLabel3);
            this.addChild(this._infoLabel4);
            this.addChild(this._infoLabel5);
            this.addChild(this._infoLabel6);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
                var button = createjs.Sound.play("button");
            }, this);
        };
        return Information;
    }(objects.Scene));
    scenes.Information = Information;
})(scenes || (scenes = {}));
//# sourceMappingURL=information.js.map