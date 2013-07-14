enchant();

window.onload = function(){
    var game = new Game(320,320);
  var HP = 100;
    
    var label =  new Label("HP:" + HP);
    label.fontSize = "100px";
    label.x = 150;
    label.y = 20;

   
 game.preload('images/chara9.png','images/chara10.jpeg','images/back.jpeg','images/icon.jpeg','images/kougekico.jpeg','images/thunderstormco.jpeg','images/guardco.jpeg','images/shirkco.jpeg',"images/bar.png");
    
    game.onload = function(){
        
        var scene = game.rootScene;
        
        
        var bar = new enchant.ui.Bar(200,15);
        bar.image = game.assets["images/bar.png"];
        bar.value = 100;
        bar.maxvalue = 100;
        bar.on("enterframe",function(){
            if(this.age % 60 == 0){
                this.value -= 1;
            }

        });
        
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
        satan.y = 30;
        
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
          
            HP -= 10;
            label.text = "HP:"+HP;
        });
        
        
        var thunderstormco = new Sprite(170,50);
        thunderstormco.image = 
            game.assets['images/thunderstormco.jpeg'];
        thunderstormco.x = -28;
        thunderstormco.y = 231;
        thunderstormco.scaleX = 0.4;
        thunderstormco.scaleY = 0.4;
        
        thunderstormco.addEventListener(Event.TOUCH_END,function(e){
          
            HP -= 10;
            label.text = "HP:"+HP;
        
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
        game.rootScene.addChild(bar);
       
    };
    
    game.start();
};
