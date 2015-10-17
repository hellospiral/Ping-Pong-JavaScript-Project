$(document).ready(function() {
  var highNumber = parseInt(prompt("Give me a number to ping pong to."));
  for (var x=1; x<= highNumber; x++) {
    if ( x % 3 && x % 5 ) {
      document.write(x);
    } else {
      if (x % 3 == 0) {
        document.write("ping");
      }
      if ( x % 5 == 0) {
        document.write("pong");
      }
    }
    document.write('<br>');
  }
});

