namespace objects {
  export class Green_fish extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;
    private _horizontalSpeed: number;

    /**
     * Creates an instance of Fish.
     * @memberof Green_fish
     */
    constructor() {
      super("green_fish");

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

      this.Reset();
    }

    public Update(): void {
      //this.y += this._verticalSpeed;
      this.x -= this._horizontalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      //this._verticalSpeed =  Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
      this._horizontalSpeed = Math.floor(Math.random() * 4 + 2); // between -2 and 2 ppf
      this.x = config.Screen.WIDTH;
      this.y = Math.floor(
        Math.random() * (config.Screen.HEIGHT - this.height) + this.halfHeight
      );
      console.log(this._horizontalSpeed);
    }
  }
}
