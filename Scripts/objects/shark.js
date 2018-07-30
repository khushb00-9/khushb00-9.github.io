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
    var Shark = /** @class */ (function (_super) {
        __extends(Shark, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Plane
         */
        function Shark() {
            var _this = _super.call(this, "shark") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Shark.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x < this.halfWidth) {
                this.Reset();
            }
        };
        // public methods
        Shark.prototype.Start = function () {
            this.regX = this.width;
            this.regY = this.height;
            this._horizontalSpeed = 5;
            this.Reset();
        };
        Shark.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Shark.prototype.Reset = function () {
            this.x = 1600;
            this.y = Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight);
        };
        return Shark;
    }(objects.GameObject));
    objects.Shark = Shark;
})(objects || (objects = {}));
//# sourceMappingURL=shark.js.map