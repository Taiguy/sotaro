function explode(){
    Taishi("THE END");
    $('#explosion').html('<img src="explosion.gif"></img>');
    Sotaro("Start Over");
}
function Taishi(text){
    $('#Taishi').html(text);
}
function Sotaro(){
    $('#Sotaro').html('');
    for (var i = 0; i < arguments.length; i++) {
        $('#Sotaro').append('<button class="btn btn-outline-success" onclick="'+arguments[i].split(/[ .:;?!~,'|\r\n/\\]+/).join('')+'()">'+arguments[i]+'</button>');
      }
}
function StartOver(){
    console.log('startingover');
    Taishi("Happy Birthday!");
    $('#explosion img').remove();
    Sotaro("Thanks!","SHUT UP!");
}

// START
$(document).ready(function() {
    StartOver();
});
function Thanks(){
    Taishi("Ur welcome! How Old are u again?");
    Sotaro("Twelve", "One", "OVER 9000");
}
function SHUTUP(){
    Taishi("HEY! Thats not nice! No Cake for you!");
    Sotaro("OH NOOO!", "Sorry! I want cake!");
}
function Twelve(){
    Taishi("Ok! What do you want for your present?");
    Sotaro("BOMB","Game","Die!");
}
function Game(){
    Taishi("Ok! Here is a game for u, じゃんけんぽん！");
    Sotaro("Rock","Paper","Scissor");
}
function Rock(){
    Taishi("あいこでしょ！");
    Sotaro("Rock","Paper","Scissor");
}
function Paper(){
    Taishi("YOU WIN");
    Sotaro("やったー!","I win! I win! IIII win! You lose! You lose! loooose!");
}
function Scissor(){
    Taishi("YOU LOSE 俺の勝ち！なんで負けたか明日までに考えてください");
    Sotaro("明日考える","嫌だ","もう一回!");
}
function 明日考える(){
    Taishi("なんで負けましたか？");
    Sotaro("俺はバカ","たまたま");
}
function 俺はバカ(){
    Taishi("バカって言ったら自分がバカだよ");
    Sotaro("バカ");
}
function たまたま(){
    Taishi("玉たま！？You can't say that word!!");
    Sotaro("OH NOOO!");
}
function もう一回(){
    Taishi("一日一回勝負、ではまた明日");
    Sotaro("クソぉぉぉぉ!");
}
function やったー(){
    Taishi("やるやん！明日俺にリベンジさせて");
    Sotaro("No","OK!");
}
function　OK(){
    Taishi("YOU WIN! HAPPY BIRTHDAY!");
    Sotaro("Start Over");
    $('#explosion').html('<img src="win.gif"></img>');
}
function SorryIwantcake(){
    Taishi("Ok fine. What cake do you want?");
    Sotaro("Green Tea","Bomb cake","I don't want cake");
}
function GreenTea(){
    Taishi("Ok, here you go!")
    Sotaro("Thanks! Wait... this is spinach cake!!!");
}
function Idontwantcake(){
    Taishi("What?? You just said you wanted cake! What do you want then?");
    Sotaro("Math","Mine Turtle","Game");
}
function Math(){
    Taishi("Ok, Whats 6 - 3 / 3 ?");
    Sotaro("One","Three","OVER 9000");
}
function Three(){
    Taishi("Good, What is 8)_02^72?*x#2-l&?");
    Sotaro("What???","Your Mom","Unko");
}
function YourMom(){
    Taishi("My mom? That's your mom too!");
    Sotaro("Oh... You're Right")
}
function One(){explode();}
function OVER9000(){explode();}
function BOMB(){explode();}
function Die(){explode();}
function 嫌だ(){explode();}
function OHNOOO(){explode();}
function クソぉぉぉぉ(){explode();}
function バカ(){explode();}
function IwinIwinIIIIwinYouloseYouloseloooose(){explode();}
function ThanksWaitthisisspinachcake(){explode();}
function Bombcake(){explode();}
function MineTurtle(){explode();}
function What(){explode();}
function OhYoureRight(){explode();}
function Unko(){explode();}


