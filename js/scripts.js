$(document).ready(function() {
  $(".btn").click(function(event) {
    var cityInput = $("#city").val();
    var musicInput = $("#music").val();
    var tvInput = $("#tv").val();
    var philosopherInput = $("#philosopher").val();
    
    $(".city").text(cityInput);
    $(".music").text(musicInput);
    $(".tv").text(tvInput);
    $(".philosopher").text(philosopherInput);
    
    $("#answers").show();
    event.preventDefault();
  });
});