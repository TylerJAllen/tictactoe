//BACK-END LOGIC
function User(name) {
  this.name = name;
}

User.prototype.pass = function() {

}

//UI LOGIC
$(document).ready(function() {

  $(".styleBox").click(function(){

    var topLeft = $(this).val();
    var topMiddle = $(this).val();
    var topRight = $(this).val();
    var middleLeft = $(this).val();
    var middleMiddle = $(this).val();
    var middleRight = $(this).val();
    var bottomLeft = $(this).val();
    var bottomMiddle = $(this).val();
    var bottomRight = $(this).val();

    $(".styleBox").append("X");
    $(".styleBox").toggle();
    $(".initiallyHidden").toggle();

  });
  $(".initiallyHidden").click(function(){

    var topLeft = $(this).val();
    var topMiddle = $(this).val();
    var topRight = $(this).val();
    var middleLeft = $(this).val();
    var middleMiddle = $(this).val();
    var middleRight = $(this).val();
    var bottomLeft = $(this).val();
    var bottomMiddle = $(this).val();
    var bottomRight = $(this).val();

    $(".initiallyHidden").append("O");
    $(".styleBox").toggle();
    $(".initiallyHidden").toggle();

  });
});
