//BACK-END LOGIC
//player constructor
function Player(){
  this.captured = [];
}

Player.prototype.checkForWinner = function(){
  console.log(this.captured);
  if (this.captured.includes("R1C1") === true && this.captured.includes("R1C2") === true &&   this.captured.includes("R1C3") === true) {
    alert("ROW 1 WINNER");
  }
  else if (this.captured.includes("R2C1") === true && this.captured.includes("R2C2") === true       && this.captured.includes("R2C3") === true) {
    alert("ROW 2 WINNER");
  }
  else if (this.captured.includes("R3C1") === true && this.captured.includes("R3C2") === true       && this.captured.includes("R3C3") === true) {
    alert("ROW 3 WINNER");
  }
  else if (this.captured.includes("R1C1") === true && this.captured.includes("R2C1") === true       && this.captured.includes("R3C1") === true) {
    alert("COLUMN 1 WINNER");
  }
  else if (this.captured.includes("R1C2") === true && this.captured.includes("R2C2") === true       && this.captured.includes("R3C2") === true) {
    alert("COLUMN 2 WINNER");
  }
  else if (this.captured.includes("R1C3") === true && this.captured.includes("R2C3") === true       && this.captured.includes("R3C3") === true) {
    alert("COLUMN 3 WINNER");
  }
  else if (this.captured.includes("R1C1") === true && this.captured.includes("R2C2") === true       && this.captured.includes("R3C3") === true) {
    alert("DIAGONAL TOP LEFT");
  }
  else if (this.captured.includes("R3C1") === true && this.captured.includes("R2C2") === true       && this.captured.includes("R1C3") === true) {
    alert("DIAGONAL BOTTOM LEFT");
  }
}

Player.prototype.checkForDraw = function() {
  if (this.captured.length === 9) {
    alert("DRAW MUTHA FUCKA");
  }
}

//UI LOGIC
$(document).ready(function() {

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
      playerOne.checkForWinner();
      index = 2;
    }
    else if (index === 2) {
      $(this).parent().addClass('O');
      $(this).hide();
      var playerTwoPosition = $(this).val();
      playerTwo.captured.push(playerTwoPosition);
      boxesChecked.captured.push(playerTwoPosition);
      playerTwo.checkForWinner();
      index = 1;
    }
    boxesChecked.checkForDraw();
    console.log(boxesChecked.captured);
  });
});
