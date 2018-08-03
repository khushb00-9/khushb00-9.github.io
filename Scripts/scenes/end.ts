namespace scenes {
  export class End extends objects.Scene {
    // member variables
    private _endLabel: objects.Label;
    private _backButton: objects.Button;
    private _ocean: objects.Ocean;
    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._endLabel = new objects.Label(
        "Game Over!",
        "60px",
        "Consolas",
        "#000000",
        config.Screen.HALF_WIDTH,
        200,
        true
      );
      this._backButton = new objects.Button("BackButton", 320, 400, true);
      this._ocean = new objects.Ocean();
      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - END SCENE`);
      // adding the ocean to the scene
      this.addChild(this._ocean);
      this.addChild(this._endLabel);
      this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
      this.addChild(this._backButton);

      this._backButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.PLAY;
        },
        this
      );
    }
  }
}
