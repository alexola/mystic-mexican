// get the random word of the array

var rndWords = ["PONCHE", "COOPERACHA", "TEQUILA", "XOLOITZCUINTLE", "NOPAL", "VOCHO", "TORTA", "MOLE", "CATRINA", "TLACUACHE"];

var random;

function startGame(){

      random = rndWords[Math.floor(Math.random() * rndWords.length)];
      var cut = random.split("");
      //Gets random words to image display and remove to get new (works)
      $('#foto').remove();
      var image = "./img/" + random + ".jpg";
      $(".row").after($('<img id="foto">').attr("src", image));

      console.log(cut);
      $('#hidden-word').empty('letters');
      for (var i = 0; i < cut.length; i++)
          $('#hidden-word').append("<p class='letters'>" + cut[i] + "</p>");
      $("p").hide();
}


$("#randomWord").on('click', function() {
startGame();
});


$("#show").click(function() {
    alert("No manches!,perdiste!");
    $("p.letters").show();
    counter = 6;


});
//Get to work the keypress to compare values with the random word (work in progress)
// need to make it align so it doesnt gets crowded
var counter = 6 ;

$(document).keypress(function(event) {
    var keyPressed = event.key;
    var keyPressedCap = keyPressed.toUpperCase();
    var exist = false;

    $('.letters').each(function(index, letter, array) {
        if (keyPressedCap === $(letter).text()) {
            $(letter).show();
            $(letter).attr("data-visible", "true");
            console.log(keyPressedCap);
            exist = true;
        }
    });
    // when total value of the random word is fill with correct keys press throws
    if(random.length === $("[data-visible='true']").length){
      $("#loser").append("<div class='loser'><img src='img/pinata.jpg' class='img-responsive pinata-img'><h2>YOU WON !!!</h2><br><button  id='refresh' class ='btn btn-info btn-lg'>PLAY AGAIN</button></div>");
      alert ("¡¡¡ GANASTE !!!");
      $("#refresh").click(function(){
        $(".loser").remove();
        startGame();
        counter = 6;
      });

    }


    if (exist) {
        console.log("guay");
        console.log(counter);
        counter +=1;
        $('span').text(counter);
        exist = false;
    }
    else {
      console.log("no guay");
      counter -=1;
      $('span').text(counter);
      if(counter === 0){
        alert("you loose");


        counter = 6;
      }

    }





});
// test button to go next works doesnt reset score

$("#randomWord1").on('click', function() {
startGame();

});


// will show the number of keys pressed (working)
i = 0;
$(document).ready(function() {
    // $(document).keypress(function() {
    //     $("span").text(i += 1);
    //     if (i === false) {
    //         alert("you dont know spanish");
    //     }
    // });
});
//
