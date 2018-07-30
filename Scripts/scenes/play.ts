module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _seahorse:objects.SeaHorse;
        //private _seehorse:objects.SeeHorse;
        private _ocean:objects.Ocean;
        private _shark:objects.Shark;
        private _fishes:objects.Fish[];
        private _fishNum:number;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildFishes():void {
            for (let count = 0; count < this._fishNum; count++) {
                this._fishes.push(new objects.Fish());
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("background");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;


            this._seahorse = new objects.SeaHorse();
           // this._seehorse = new objects.SeeHorse();
            this._ocean = new objects.Ocean();
            this._shark = new objects.Shark();

            // creates an empty array of type Cloud
            this._fishes = new Array<objects.Fish>();
            this._fishNum = 3;

            this._buildFishes();
           
            this.Main();
        }

        public Update():void {
            this._seahorse.Update();
            //this._seehorse.Update();
            this._ocean.Update();
            this._shark.Update();

            managers.Collision.check(this._seahorse, this._shark);

            this._fishes.forEach(fish => {
                fish.Update();
                if(managers.Collision.check(this._seahorse, fish)){
                    console.log("collision");
                }
            });
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._ocean);
           
            for (const fish of this._fishes) {
                this.addChild(fish);
            }
            
            // adding the seehorse to the scene
            this.addChild(this._seahorse);

            // adding the shark to the scene
            this.addChild(this._shark);

            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        }
    }
}