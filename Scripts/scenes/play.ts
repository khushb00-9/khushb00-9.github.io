namespace scenes {
  export class Play extends objects.Scene {
    // member variables
    private _yellowSeahorse: objects.SeaHorse_yellow;
    private _pinkSeahorse: objects.SeaHorse_pink;
    private _orangeSeahorse: objects.SeaHorse_orange;
    private _multiSeahorse: objects.SeaHorse_multi;

    private _ocean: objects.Ocean;
    private _shark: objects.Shark[];
    private _sharkNum: number;

    private _redFishes: objects.Red_fish[];
    private _redFishNum: number;

    private _orangeFishes: objects.Orange_fish[];
    private _orangeFishNum: number;

    private _greenFishes: objects.Green_fish[];
    private _greenFishNum: number;

    private _purpleFishes: objects.Purple_fish[];
    private _purpleFishNum: number;

    private _bonus: objects.Bonus[];
    private _bonusNum: number;

    private _life: objects.Life[];
    private _lifeNum: number;

    private engineSound: createjs.AbstractSoundInstance;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods
    private _buildRedFishes(): void {
      for (let count = 0; count < this._redFishNum; count++) {
        this._redFishes.push(new objects.Red_fish());
        //this._clouds[count] = new objects.Cloud();
      }
    }

    private _buildOrangeFishes(): void {
      for (let count = 0; count < this._orangeFishNum; count++) {
        this._orangeFishes.push(new objects.Orange_fish());
        //this._clouds[count] = new objects.Cloud();
      }
    }
    private _buildGreenFishes(): void {
      for (let count = 0; count < this._greenFishNum; count++) {
        this._greenFishes.push(new objects.Green_fish());
        //this._clouds[count] = new objects.Cloud();
      }
    }
    private _buildPurpleFishes(): void {
      for (let count = 0; count < this._purpleFishNum; count++) {
        this._purpleFishes.push(new objects.Purple_fish());
        //this._clouds[count] = new objects.Cloud();
      }
    }
    private _buildBonus(): void {
      for (let count = 0; count < this._bonusNum; count++) {
        this._bonus.push(new objects.Bonus());
        //this._clouds[count] = new objects.Cloud();
      }
    }
    private _buildLife(): void {
      for (let count = 0; count < this._lifeNum; count++) {
        this._life.push(new objects.Life());
        //this._clouds[count] = new objects.Cloud();
      }
    }

    private _buildShark(): void {
      for (let count = 0; count < this._sharkNum; count++) {
        this._shark.push(new objects.Shark());
        //this._clouds[count] = new objects.Cloud();
      }
    }

    // public methods
    public Start(): void {
      this.engineSound = createjs.Sound.play("background");
      this.engineSound.loop = -1;
      this.engineSound.volume = 0.1;

      this._yellowSeahorse = new objects.SeaHorse_yellow();

      this._ocean = new objects.Ocean();

      // creates an empty array of type Cloud
      this._redFishes = new Array<objects.Red_fish>();
      this._redFishNum = 2;

      this._greenFishes = new Array<objects.Green_fish>();
      this._greenFishNum = 2;

      this._orangeFishes = new Array<objects.Orange_fish>();
      this._orangeFishNum = 2;

      this._purpleFishes = new Array<objects.Purple_fish>();
      this._purpleFishNum = 2;

      this._bonus = new Array<objects.Bonus>();
      this._bonusNum = 2;

      this._life = new Array<objects.Life>();
      this._lifeNum = 2;

      this._shark = new Array<objects.Shark>();
      this._sharkNum = 4;

      this._buildBonus();
      this._buildGreenFishes();
      this._buildOrangeFishes();
      this._buildShark();
      this._buildRedFishes();
      this._buildPurpleFishes();
      this._buildLife();

      this.Main();
    }

    public Update(): void {
      this._yellowSeahorse.Update();

      this._ocean.Update();

      this._redFishes.forEach(fish => {
        fish.Update();
        if (managers.Collision.check(this._yellowSeahorse, fish)) {
          console.log("collision");
        }
      });

      this._greenFishes.forEach(fish => {
        fish.Update();
        if (managers.Collision.check(this._yellowSeahorse, fish)) {
          console.log("collision");
        }
      });
      this._orangeFishes.forEach(fish => {
        fish.Update();
        if (managers.Collision.check(this._yellowSeahorse, fish)) {
          console.log("collision");
        }
      });
      this._purpleFishes.forEach(fish => {
        fish.Update();
        if (managers.Collision.check(this._yellowSeahorse, fish)) {
          console.log("collision");
        }
      });
      this._bonus.forEach(fish => {
        fish.Update();
        if (managers.Collision.check(this._yellowSeahorse, fish)) {
          console.log("collision");
        }
      });

      this._life.forEach(fish => {
        fish.Update();
        if (managers.Collision.check(this._yellowSeahorse, fish)) {
          console.log("collision");
        }
      });

      this._shark.forEach(fish => {
        fish.Update();
        if (managers.Collision.check(this._yellowSeahorse, fish)) {
          console.log("collision");
        }
      });
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - PLAY SCENE`);

      // adding the ocean to the scene
      this.addChild(this._ocean);

      for (const fish of this._redFishes) {
        this.addChild(fish);
      }

      for (const fish of this._orangeFishes) {
        this.addChild(fish);
      }
      for (const fish of this._greenFishes) {
        this.addChild(fish);
      }
      for (const fish of this._purpleFishes) {
        this.addChild(fish);
      }
      for (const fish of this._bonus) {
        this.addChild(fish);
      }
      for (const fish of this._life) {
        this.addChild(fish);
      }
      for (const fish of this._shark) {
        this.addChild(fish);
      }

      // adding the seehorse to the scene
      this.addChild(this._yellowSeahorse);

      this.addChild(managers.Game.ScoreBoard.LivesLabel);
      this.addChild(managers.Game.ScoreBoard.ScoreLabel);
    }
  }
}
