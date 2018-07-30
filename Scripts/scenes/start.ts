module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _welcomeLabelby: objects.Label;
        private _startButton: objects.Button;
        private _settingButton: objects.Button;
        private _infoButton: objects.Button;
        private _ocean:objects.Ocean;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._welcomeLabel = new objects.Label("Marino ", "60px", "Consolas", "#FF0000", 360, 120, true);
            this._welcomeLabelby = new objects.Label("By Tidal Wave ", "40px", "Consolas", "#000000", 360, 240, true);
            this._startButton = new objects.Button("StartButton", 320, 360, true);
            this._settingButton = new objects.Button("SettingButton", 710, 550, true);
            this._infoButton = new objects.Button("InfoButton", 0, 550, true);
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

        public Main():void {
            console.log(`Starting - START SCENE`);
             // adding the ocean to the scene
            this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            this.addChild(this._welcomeLabelby);
            this.addChild(this._startButton);
            this.addChild(this._settingButton);
            this.addChild(this._infoButton);


            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
                let buttonSound = createjs.Sound.play("button");
            }, this);

            this._settingButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.SETTING;
                let buttonSound = createjs.Sound.play("button");
            }, this);

            this._infoButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INFORMATION;
                let buttonSound = createjs.Sound.play("button");
            }, this);
        
        }
    }
}