//BACK-END LOGIC
//player constructor
function Player(){
  this.captured = [];
}

Player.prototype.checkForWinner = function(length,index){
  if (this.captured.includes("R1C1") === true && this.captured.includes("R1C2") === true &&   this.captured.includes("R1C3") === true) {
    alert("ROW 1 WINNER");
    $("button").hide();
    $(".container").fadeOut(4500);
    if (index === 1) {
      $(".locustGif").fadeIn(5100);
    }
    else if (index === 2) {
      $(".cogGif").fadeIn(5100);
    }
  }
  else if (this.captured.includes("R2C1") === true && this.captured.includes("R2C2") === true       && this.captured.includes("R2C3") === true) {
    alert("ROW 2 WINNER");
    $("button").hide();
    $(".container").fadeOut(4500);
    if (index === 1) {
      $(".locustGif").fadeIn(5100);
    }
    else if (index === 2) {
      $(".cogGif").fadeIn(5100);
    }
  }
  else if (this.captured.includes("R3C1") === true && this.captured.includes("R3C2") === true       && this.captured.includes("R3C3") === true) {
    alert("ROW 3 WINNER");
    $("button").hide();
    $(".container").fadeOut(4500);
    if (index === 1) {
      $(".locustGif").fadeIn(5100);
    }
    else if (index === 2) {
      $(".cogGif").fadeIn(5100);
    }
  }
  else if (this.captured.includes("R1C1") === true && this.captured.includes("R2C1") === true       && this.captured.includes("R3C1") === true) {
    alert("COLUMN 1 WINNER");
    $("button").hide();
    $(".container").fadeOut(4500);
    if (index === 1) {
      $(".locustGif").fadeIn(5100);
    }
    else if (index === 2) {
      $(".cogGif").fadeIn(5100);
    }
  }
  else if (this.captured.includes("R1C2") === true && this.captured.includes("R2C2") === true       && this.captured.includes("R3C2") === true) {
    alert("COLUMN 2 WINNER");
    $("button").hide();
    $(".container").fadeOut(4500);
    if (index === 1) {
      $(".locustGif").fadeIn(5100);
    }
    else if (index === 2) {
      $(".cogGif").fadeIn(5100);
    }
  }
  else if (this.captured.includes("R1C3") === true && this.captured.includes("R2C3") === true       && this.captured.includes("R3C3") === true) {
    alert("COLUMN 3 WINNER");
    $("button").hide();
    $(".container").fadeOut(4500);
    if (index === 1) {
      $(".locustGif").fadeIn(5100);
    }
    else if (index === 2) {
      $(".cogGif").fadeIn(5100);
    }
  }
  else if (this.captured.includes("R1C1") === true && this.captured.includes("R2C2") === true       && this.captured.includes("R3C3") === true) {
    alert("DIAGONAL TOP LEFT");
    $("button").hide();
    $(".container").fadeOut(4500);
    if (index === 1) {
      $(".locustGif").fadeIn(5100);
    }
    else if (index === 2) {
      $(".cogGif").fadeIn(5100);
    }
  }
  else if (this.captured.includes("R3C1") === true && this.captured.includes("R2C2") === true       && this.captured.includes("R1C3") === true) {
    alert("DIAGONAL BOTTOM LEFT");
    $("button").hide();
    $(".container").fadeOut(4500);
    if (index === 1) {
      $(".locustGif").fadeIn(5100);
    }
    else if (index === 2) {
      $(".cogGif").fadeIn(5100);
    }
  }
  else if (length === 9) {
    $(".container").fadeOut(4500);
    $("#drawGif").fadeIn(5100);
  }
}

// Player.prototype.checkForDraw = function() {
// }

//UI LOGIC
$(document).ready(function() {

  // $(vs user button).click(function(){
    var playerOne = new Player();
    var playerTwo = new Player();
    var boxesChecked = new Player();

    var index = 1;

    $("button").on("click", function(){

      if (index === 1) {
        $(this).parent().addClass('X');
        $(this).hide();
        var playerOnePosition = $(this).val();
        playerOne.captured.push(playerOnePosition);
        boxesChecked.captured.push(playerOnePosition);
        playerOne.checkForWinner(boxesChecked.captured.length, index);
        index = 2;
      }
      else if (index === 2) {
        $(this).parent().addClass('O');
        $(this).hide();
        var playerTwoPosition = $(this).val();
        playerTwo.captured.push(playerTwoPosition);
        boxesChecked.captured.push(playerTwoPosition);
        playerTwo.checkForWinner(boxesChecked.captured.length, index);
        index = 1;
      }
      // boxesChecked.checkForDraw();
      console.log(boxesChecked.captured);
    });
  // });
});
