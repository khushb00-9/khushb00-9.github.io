namespace objects {
  export class Shark extends objects.GameObject {
    // member variables
    private _horizontalSpeed: number;

    /**
     * Creates an instance of Plane.
     * @memberof Plane
     */
    constructor() {
      super("shark");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.x < this.halfWidth) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.width;
      this.regY = this.height;
      this._horizontalSpeed = 5;
      this.Reset();
    }

    public Update(): void {
      this.x -= this._horizontalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.x = 1600;
      this.y = Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight);
    }
  }
}
