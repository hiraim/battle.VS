enchant();

window.onload = function(){
    var game = new Game(320,320);
  var score = 100;
    
    var label =  new Label("SCORE:" + score);
    label.font = "64px";
    label.x = 20;
    label.y = 20;

    /*
    var kougekico = new Sprite(150,150);
    
    kougekico.x = 120;
    kougekico.y = 120;
    
    kougekico.addEventListener(Event.TOUCH_START,function(e){
        score.toX = e.x - 16;
       
        /*
        var kougekico = new Sprite(100,50);
        kougekico.image = game.assets['images/kougekico.jpeg'];
        kougekico.x = 0;
        kougekico.y = 210;
        kougekico.scaleX = 0.5;
        kougekico.scaleY = 0.5;
        */
    /*
    });
*/
    game.preload('images/chara9.png','images/chara10.jpeg','images/back.jpeg','images/icon.jpeg','images/kougekico.jpeg');
    
    game.onload = function(){
        var human = new Sprite(200,200);
        human.image = game.assets['images/chara9.png'];
       human.x = 50;
       human.y = 180;
        human.scaleX = 0.3;
        human.scaleY = 0.3;
      
        var satan = new Sprite(70,100);
        satan.image = 
            game.assets['images/chara10.jpeg'];
        satan.x = 200;
        satan.y = 20;
        
        var scene = game.rootScene;
        
        
        var bg = new Sprite(320,320);
      bg.image = game.assets["images/back.jpeg"];
        
        
        var icon = new Sprite(200,240);
        icon.image =
            game.assets['images/icon.jpeg'];
        icon.x = -50;
        icon.y = 140;
        icon.scaleX = 0.5;
        icon.scaleY = 0.5;
        
    var kougekico = new Sprite(100,50);
        kougekico.image = 
            game.assets['images/kougekico.jpeg'];
        kougekico.x = 0;
        kougekico.y = 210;
        kougekico.scaleX = 0.5;
        kougekico.scaleY = 0.5;
        
        kougekico.addEventListener(Event.TOUCH_END,function(e){
           console.log("ma");
            score -= 10;
            label.text = "SCORE:"+score;
        });
        
        /*
        kougekico.ontotchend = function(){
            consol.log("ma");
            score -=10;
            label.text = "SCORE:"+score;
        };
        */
        game.rootScene.addChild(bg);
        game.rootScene.addChild(human);
        game.rootScene.addChild(satan);
        game.rootScene.addChild(label);
        game.rootScene.addChild(icon);
        game.rootScene.addChild(kougekico);
    };
    
    game.start();
};