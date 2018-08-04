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
    var SeaHorse_multi = /** @class */ (function (_super) {
        __extends(SeaHorse_multi, _super);
        /**
         * Creates an instance of Plane.
         * @memberof SeaHorse_multi
         */
        function SeaHorse_multi() {
            var _this = _super.call(this, "seahorse_multi") || this;
            console.log(_this.width + " " + _this.height);
            _this.Start();
            return _this;
        }
        // private methods
        SeaHorse_multi.prototype._checkBounds = function () {
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
        SeaHorse_multi.prototype.Start = function () {
            this.regX = this.halfWidth - 35;
            this.regY = this.halfHeight;
            this.y = 430;
        };
        SeaHorse_multi.prototype.Update = function () {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        };
        SeaHorse_multi.prototype.Reset = function () { };
        return SeaHorse_multi;
    }(objects.GameObject));
    objects.SeaHorse_multi = SeaHorse_multi;
})(objects || (objects = {}));
//# sourceMappingURL=seahorse_multi.js.map