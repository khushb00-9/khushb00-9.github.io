//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function(){
    // Game Variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let AssetManager: createjs.LoadQueue;
    let CurrentScene: objects.Scene;
    let CurrentState: config.Scene;
    let ScoreBoard: managers.ScoreBoard;

    let Manifest = [
        {id: "StartButton", src:"/Assets/images/play.png"},
        {id: "SettingButton", src:"/Assets/images/setting.png"},
        {id: "BackButton", src:"/Assets/images/BackButton.png"},
        {id: "CancelButton", src:"/Assets/images/cancel.png"},
        {id: "InfoButton", src:"/Assets/images/info.png"},
        {id: "ocean", src:"/Assets/images/tidalwave1.png"},
        {id: "BackButton", src:"/Assets/images/BackButton.png"},
        {id: "seahorse", src:"/Assets/images/seahorse.png"},
        {id: "red_fish", src:"/Assets/images/RedFish_small.png"},
        {id: "shark", src:"/Assets/images/sark.png"},
        {id: "orange_fish", src:"/Assets/images/OrangeFish.png"},
        {id: "die", src:"/Assets/audio/die.wav"},
        {id: "button", src:"/Assets/audio/button.wav"},
        {id: "thunder", src:"/Assets/audio/thunder.ogg"},
        {id: "background", src:"/Assets/audio/background.mp3"}
    ]


    function Init():void {
        console.log(`%c Assets Loading...`,"font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }

    function Start():void {
        console.log(`%c Game Initializing...`,"font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);

        managers.Game.Stage = stage; // create a reference to the stage class

        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;

        ScoreBoard = new managers.ScoreBoard;
        managers.Game.ScoreBoard = ScoreBoard;

        // This is where all the magic happens
        Main();
    }

    function Update():void {
        if(CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }

        CurrentScene.Update();

        stage.update();
    }

    function Main():void {
        console.log(`%c Switching Scenes...`,"font-style:italic; font-size:16px; color:blue;");

        if(CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
    
        switch(CurrentState) {
            case config.Scene.START:
            CurrentScene = new scenes.Start();
            break;

            case config.Scene.PLAY:
            CurrentScene = new scenes.Play();
            break;

            case config.Scene.END:
            CurrentScene = new scenes.End();
            break;

            case config.Scene.SETTING:
            CurrentScene = new scenes.Setting();
            break;

            case config.Scene.INFORMATION:
            CurrentScene = new scenes.Information();
            break;
        }

        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }

    window.addEventListener("load", Init);

})();