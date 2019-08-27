var div = document.getElementById("div");
window.addEventListener('load', function() {
  var obj = [[]];
  var text = "";
  $.ajax({
    type: "POST",
    url: "./getscratchdata.php",
    succes = function(data) {
      obj = JSON.parse(data);
      
          