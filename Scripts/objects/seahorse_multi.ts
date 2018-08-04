namespace objects {
  export class SeaHorse_multi extends objects.GameObject {
    /**
     * Creates an instance of Plane.
     * @memberof SeaHorse_multi
     */
    constructor() {
      super("seahorse_multi");
      console.log(this.width + " " + this.height);
      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check right boundary
      if (this.y > config.Screen.HEIGHT - this.halfHeight) {
        this.y = config.Screen.HEIGHT - this.halfHeight;
      }

      // check left boundary
      if (this.y < this.halfHeight) {
        this.y = this.halfHeight;
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth - 35;
      this.regY = this.halfHeight;
      this.y = 430;
    }

    public Update(): void {
      this.y = managers.Game.Stage.mouseY;
      this._checkBounds();
    }

    public Reset(): void {}
  }
}
