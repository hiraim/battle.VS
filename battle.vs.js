enchant();

window.onload = function(){
    var game = new Game(320,320);
    
    game.preload('batle.VS/MyGame/images/zemi.jpeg');
    
    game.onload = function(){
        var human = new Sprite(32,32);
        human.image = 
            game.assets['battle.VS/MyGame/images/zemi.ipeg'];
      
        game.rootScene.addChild(human);
    };
    game.start();
};
