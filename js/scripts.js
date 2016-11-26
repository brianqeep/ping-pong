$(document).ready(function(){
  $("#pingpong").submit(function(event){
    event.preventDefault();
    var num = $("#number").val();
    var result = [];
    for (var i = 1; i <= num; i++) {
      result.push(i);
      if (i%15==0) {
        result[i-1]="ping pong";
      }else if (i%5==0) {
        result[i-1]="pong";
      }
      else if (i%3==0) {
        result[i-1]="ping";
      }
    }
    var answer = result.join();
    $("#answer").append(answer);

  });
});
