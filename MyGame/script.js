enchant();

window.onload = function(){
    var game = new Game(320,320);
    
    game.preload('images/chara9.png');
    
    game.onload = function(){
        var human = new Sprite(50,55);
        human.image = 
            game.assets['images/chara9.png'];
      
        game.rootScene.addChild(human);
    };
    game.start();
};
