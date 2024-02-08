// Mandy McGinnis

$(document).ready(function(){
  
  //Move the image to the finish line
  console.log("Top: " + $("img").position().top + " Left: " + $("img").position().left);
  $("img").draggable({
    stop: function(){
      console.log("stopped");

      let dogeLeft = $("img").position().left;

      if (dogeLeft >= 1000){
        console.log("above 1000");
        $("#updates").text("You made it!");
      }
      else{
        console.log("under 1000");
        $("#updates").text("Almost there..");
      }
    } 
  }) 

  $("img").draggable({
    containment: "#containment-wrapper", 
    scroll: false
  });

  //Double click to reload the page
  $("img").dblclick(function(){
    location.reload();
  })
});