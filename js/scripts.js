$(document).ready(function() {
  var highNumber = parseInt(prompt("Give me a number to ping pong to."));
  for (var x=1; x<= highNumber; x++) {
    if ( x % 3 && x % 5 ) {
       $("p").append(x);
    } else {
      if (x % 3 == 0) {
        $("p").append("ping");
      }
      if ( x % 5 == 0) {
        $("p").append("pong");
      }
    }
    $("p").append("<br>");
  }
});





