namespace scenes {
  export class Information extends objects.Scene {
    // member variables
    private _infoLabel: objects.Label;
    private _infoLabel1: objects.Label;
    private _infoLabel2: objects.Label;
    private _infoLabel3: objects.Label;
    private _infoLabel4: objects.Label;
    private _infoLabel5: objects.Label;
    private _infoLabel6: objects.Label;
    private _ocean: objects.Ocean;
    private _backButton: objects.Button;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._backButton = new objects.Button("BackButton", 360, 560, true);
      this._infoLabel = new objects.Label(
        "Marino",
        "60px",
        "Consolas",
        "#660066",
        config.Screen.HALF_WIDTH,
        50,
        true
      );
      this._infoLabel1 = new objects.Label(
        "Game version - ",
        "40px",
        "Consolas",
        " #ff0066",
        400,
        140,
        true
      );
      this._infoLabel2 = new objects.Label(
        "1.0",
        "30px",
        "Consolas",
        "#000066",
        400,
        180,
        true
      );
      this._infoLabel3 = new objects.Label(
        "Developers -",
        "40px",
        "Consolas",
        " #ff0066",
        400,
        230,
        true
      );
      this._infoLabel4 = new objects.Label(
        "   Chandni Patel - 300990555 \n\nKhushboo Sakervala - 300984318 \n\n   Piyush Sehli: 300984528\n\n",
        "30px",
        "Consolas",
        "#000066",
        400,
        340,
        true
      );
      this._infoLabel5 = new objects.Label(
        "Guided By -",
        "40px",
        "Consolas",
        " #ff0066",
        400,
        410,
        true
      );
      this._infoLabel6 = new objects.Label(
        "Prof. Tom Tsiliopoulos",
        "35px",
        "Consolas",
        "#000066",
        380,
        460,
        true
      );
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
      console.log(`Starting - Information SCENE`);
      this.addChild(this._ocean);
      this.addChild(this._backButton);
      this.addChild(this._infoLabel);
      this.addChild(this._infoLabel1);
      this.addChild(this._infoLabel2);
      this.addChild(this._infoLabel3);
      this.addChild(this._infoLabel4);
      this.addChild(this._infoLabel5);
      this.addChild(this._infoLabel6);

      this._backButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.START;
          let button = createjs.Sound.play("button");
        },
        this
      );
    }
  }
}
