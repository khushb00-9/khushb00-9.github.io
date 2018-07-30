module scenes {
    export class Information extends objects.Scene {
        // member variables
        private _infoLabel: objects.Label;
        private _infoLabel1: objects.Label;
        private _ocean:objects.Ocean;
        private _backButton: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
    

        // public methods
        public Start():void {
            this._backButton = new objects.Button("BackButton", 360, 560, true);
            this._infoLabel = new objects.Label("Marino ", "60px", "Consolas", "#FF0000", config.Screen.HALF_WIDTH, 120, true);
            this._infoLabel1 = new objects.Label("\n\nGame version: 1.0 - Alpha\n\n\nDeveloped By:\n\n"+
            "Chandni Patel: 300990555\n\n"+
            "Piyush Sehli: 300984528\n\n"+
            "Khushboo Sakervala: 300984318\n\n\n"+
            "Guided By:\n\n\nProf. Tom Tsiliopoulos", "20px", "Consolas", "#000000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._ocean = new objects.Ocean();
            this.Main();

        }

        public Update():void {
            
            this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void
        {
            console.log(`Starting - Information SCENE`);
            this.addChild(this._ocean);
            this.addChild(this._backButton);
            this.addChild(this._infoLabel);
            this.addChild(this._infoLabel1);

            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.START;
                let button = createjs.Sound.play("button");
            }, this);
        }
            
    }
}
