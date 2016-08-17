
/**
 * FileName: app.js
 *
 * @author Nidhi Thakkar
 * @date August 17, 2016
 *
 * StudentID: 300872151
 *
 * @description This file is the main javascript file for the web site
 */
var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var label;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        stage.update();
    }
    function main() {
        var Diceblank = new createjs.Bitmap("../Assets/images/blank.png");
        var Dice = new createjs.Bitmap("../Assets/images/blank.png");
        var Dice1 = new createjs.Bitmap("../Assets/images/1.png");
        var Dice2 = new createjs.Bitmap("../Assets/images/2.png");
        var Dice3 = new createjs.Bitmap("../Assets/images/3.png");
        var Dice4 = new createjs.Bitmap("../Assets/images/4.png");
        var Dice5 = new createjs.Bitmap("../Assets/images/5.png");
        var Dice6 = new createjs.Bitmap("../Assets/images/6.png");
        var rollButton = new createjs.Bitmap("../Assets/images/rollButton.png");
        var Buttonhelper = new createjs.ButtonHelper(rollButton,"normal","hover","clicked");
        rollButton.addEventListener('click', roll);
        stage.addChild(Diceblank);
        stage.addChild(Dice);
        stage.addChild(Dice1);
        stage.addChild(Dice2);
        stage.addChild(Dice3);
        stage.addChild(Dice4);
        stage.addChild(Dice5);
        stage.addChild(Dice6);
        stage.addChild(rollButton);
        <button onclick="rollDice()">Roll Dice</button>
        rollButton.x=200;
        rollButton.y=300;
        Diceblank.x=107.5;
        Diceblank.y=105;
        Dice.x=352.5;
        Dice.y=105;
        Dice1.x = 352.5;
        Dice1.y = 105;
        Dice2.x = 352.5;
        Dice2.y = 105;
        Dice3.x = 352.5;
        Dice3.y = 105;
        Dice4.x = 352.5;
        Dice4.y = 105;
        Dice5.x = 352.5;
        Dice5.y = 105;
   
    }
    function rollDice(){
        console.log("clicked");
        var randomNumber = Math.floor(Math.random()* 6);
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map