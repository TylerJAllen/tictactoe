//BACK-END LOGIC
function User(name) {
  this.name = name;
}

// User.prototype.appX = function() {
//   userOne.score = [];
//   if (score[0] === undefined) {
//
//   }
//   }
// User.prototype.app0 = function() {
//   if (score[1] === undefined) {
//
//   }
//   }

//UI LOGIC
$(document).ready(function() {

  var userOne = new User("testUserOne");
  // userOne.appX();
  var userOne = new User("testUserTwo");

    $("#top-Left").click(function(){
    var topLeft = $(this).val();
    alert(topLeft);
    $(this).toggle();
    });
    $("#top-Middle").click(function(){
    var topMiddle = $(this).val();
    $("#top-Middle").hide();
    });
    $("#top-Right").click(function(){
    var topRight = $(this).val();
    $("#top-Right").hide();
    });
    $("#midd-leLeft").click(function(){
    var middleLeft = $(this).val();
    $("#midd-leLeft").hide();
    });
    $("#middle-Middle").click(function(){
    var middleMiddle = $(this).val();
    $("#middle-Middle").hide();
    });
    $("#middle-Right").click(function(){
    var middleRight = $(this).val();
    $("#middle-Right").hide();
    });
    $("#bottom-Left").click(function(){
    var bottomLeft = $(this).val();
    $("#bottom-Left").hide();
    });
    $("#bottom-Middle").click(function(){
    var bottomMiddle = $(this).val();
    $("#bottom-Middle").hide();
    });
    $("#bottom-Right").click(function(){
    var bottomRight = $(this).val();
    $("#bottom-Right").toggle();
    });






});
