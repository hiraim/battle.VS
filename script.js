enchant();

window.onload = function(){
    var game = new Game(320,320);
  var score = 100;
    
    var label =  new Label("SCORE:" + score);
    label.font = "64px";
    label.x = 20;
    label.y = 20;

   
 game.preload('images/chara9.png','images/chara10.jpeg','images/back.jpeg','images/icon.jpeg','images/kougekico.jpeg','images/thunderstormco.jpeg','images/guardco.jpeg','images/shirkco.jpeg');
    
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
        kougekico.y = 208;
        kougekico.scaleX = 0.4;
        kougekico.scaleY = 0.4;
    
        kougekico.addEventListener(Event.TOUCH_END,function(e){
          
            score -= 10;
            label.text = "SCORE:"+score;
        });
        
        
        var thunderstormco = new Sprite(170,50);
        thunderstormco.image = 
            game.assets['images/thunderstormco.jpeg'];
        thunderstormco.x = -28;
        thunderstormco.y = 231;
        thunderstormco.scaleX = 0.4;
        thunderstormco.scaleY = 0.4;
        
        thunderstormco.addEventListener(Event.TOUCH_END,function(e){
          
            score -= 10;
            label.text = "SCORE:"+score;
        
        });
            
        var guardco = new Sprite(150,50);
        guardco.image = 
            game.assets['images/guardco.jpeg'];
        guardco.x = -14;
        guardco.y = 248;
        guardco.scaleX = 0.4;
        guardco.scaleY = 0.4;
        
    var shirkco = new Sprite(150,50);
        shirkco.image = 
            game.assets['images/shirkco.jpeg'];
        shirkco.x = -20;
        shirkco.y = 268;
        shirkco.scaleX = 0.4;
        shirkco.scaleY = 0.4;
        
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
        game.rootScene.addChild(thunderstormco);
        game.rootScene.addChild(guardco);
        game.rootScene.addChild(shirkco);
   
    };
    
    game.start();
};
