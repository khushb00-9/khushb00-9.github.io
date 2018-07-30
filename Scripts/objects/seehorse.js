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
var objects;
(function (objects) {
    var SeaHorse = /** @class */ (function (_super) {
        __extends(SeaHorse, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Plane
         */
        function SeaHorse() {
            var _this = _super.call(this, "seahorse") || this;
            console.log(_this.width + " " + _this.height);
            _this.Start();
            return _this;
        }
        // private methods
        SeaHorse.prototype._checkBounds = function () {
            // check right boundary
            if (this.y > config.Screen.HEIGHT - this.halfHeight) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            // check left boundary
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        // public methods
        SeaHorse.prototype.Start = function () {
            this.regX = this.halfWidth - 35;
            this.regY = this.halfHeight;
            this.y = 430;
        };
        SeaHorse.prototype.Update = function () {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        };
        SeaHorse.prototype.Reset = function () { };
        return SeaHorse;
    }(objects.GameObject));
    objects.SeaHorse = SeaHorse;
})(objects || (objects = {}));
//# sourceMappingURL=seehorse.js.map