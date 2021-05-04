class Form{
    constructor(){

    }

    display(){
        var title=createElement("h2");
        title.html("CAR RACING MATCH");
        title.position(50,50);

        var input=createInput("ENTER YOUR NAME");
        var button=createButton("Go");
        var greeting=createElement("h3");

        input.position(50,200);
        button.position(50,300);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();

            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Welcome "+name);
            greeting.position=200;
        })
    }

}