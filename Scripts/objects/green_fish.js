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
    var Green_fish = /** @class */ (function (_super) {
        __extends(Green_fish, _super);
        /**
         * Creates an instance of Fish.
         * @memberof Green_fish
         */
        function Green_fish() {
            var _this = _super.call(this, "green_fish") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Green_fish.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x < this.halfWidth) {
                this.Reset();
            }
        };
        // public methods
        Green_fish.prototype.Start = function () {
            this.regX = this.width;
            this.regY = this.height;
            this.Reset();
        };
        Green_fish.prototype.Update = function () {
            //this.y += this._verticalSpeed;
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Green_fish.prototype.Reset = function () {
            //this._verticalSpeed =  Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
            this._horizontalSpeed = Math.floor(Math.random() * 4 + 2); // between -2 and 2 ppf
            this.x = config.Screen.WIDTH;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height) + this.halfHeight);
            console.log(this._horizontalSpeed);
        };
        return Green_fish;
    }(objects.GameObject));
    objects.Green_fish = Green_fish;
})(objects || (objects = {}));
//# sourceMappingURL=green_fish.js.map