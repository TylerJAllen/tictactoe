//BACK-END LOGIC
//player constructor
function Player(){
  this.captured = [];
}

Player.prototype.checkForWinner = function(length,index){
  if ((this.captured.includes("R1C1") === true && this.captured.includes("R1C2") === true
    && this.captured.includes("R1C3") === true) ||
    (this.captured.includes("R2C1") === true && this.captured.includes("R2C2") === true && this.captured.includes("R2C3") === true) ||
    (this.captured.includes("R3C1") === true && this.captured.includes("R3C2") === true && this.captured.includes("R3C3") === true) ||
    (this.captured.includes("R1C1") === true && this.captured.includes("R2C1") === true && this.captured.includes("R3C1") === true) ||
    (this.captured.includes("R1C2") === true && this.captured.includes("R2C2") === true && this.captured.includes("R3C2") === true) ||
    (this.captured.includes("R1C3") === true && this.captured.includes("R2C3") === true && this.captured.includes("R3C3") === true) ||
    (this.captured.includes("R1C1") === true && this.captured.includes("R2C2") === true && this.captured.includes("R3C3") === true) ||
    (this.captured.includes("R3C1") === true && this.captured.includes("R2C2") === true && this.captured.includes("R1C3") === true)) {
    $("button").hide();
    $(".container").fadeOut(4500);
    if (index === 1) {
      $(".goodGuyImage").fadeIn(5100);
    }
    else if (index === 2) {
      $(".badGuyImage").fadeIn(5100);
    }
  }
  else if (length === 9) {
    $(".container").fadeOut(4500);
    $("#drawImage").fadeIn(5100);
  }
  else {
    return "no winner";
  }
}

//UI LOGIC
$(document).ready(function() {

  var playerOne = new Player();
  var cpuTicTacToe = new Player();
  var boxesChecked = new Player();

  var availableSquares = ["R1C1", "R1C2", "R1C3", "R2C1", "R2C2", "R2C3", "R3C1", "R3C2", "R3C3"];
  var availableSquaresLocation = ["#R1C1", "#R1C2", "#R1C3", "#R2C1", "#R2C2", "#R2C3", "#R3C1", "#R3C2", "#R3C3"];
  var index = 1;

  //Player clicks square
  $("button").on("click", function(){
    var playerOnePosition = $(this).val();
    playerOne.captured.push(playerOnePosition);
    boxesChecked.captured.push(playerOnePosition);
    availableSquares.splice(availableSquares.indexOf(playerOnePosition), 1);
    availableSquaresLocation.splice(availableSquaresLocation.indexOf(playerOnePosition), 1);
    var isThereAWinner = playerOne.checkForWinner(boxesChecked.captured.length, index);
    $(this).parent().addClass('X');
    $(this).hide();
    index = 2;

    if (isThereAWinner === "no winner") {
      for( var i = 1; i < 2; i += 1) {
        console.log(availableSquares);
        //CPU selects random number
        var cpuRandomNumber = Math.floor(Math.random()*availableSquares.length);
        var cpuPosition = availableSquares.splice(cpuRandomNumber, 1);
        var cpuSquareLocation = $('#'+cpuPosition);

        // var cpuPositionLocation = availableSquaresLocation.splice(cpuRandomNumber, 1);
        cpuSquareLocation.parent().addClass('O');
        cpuSquareLocation.hide();
        cpuTicTacToe.captured.push(cpuPosition);
        boxesChecked.captured.push(cpuPosition);
        cpuTicTacToe.checkForWinner(boxesChecked.captured.length, index);
        index = 1;
        console.log(availableSquares);
      };
    };
  });
});
