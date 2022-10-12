// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "MT") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, MT is not the correct state.");
      }

      if ($(this).attr("id") == "CA") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, EdPuzzle is located in San Francisco, California.");
      }

      if ($(this).attr("id") == "TX") {
         $("#feedback").css("color","red");
         $("#feedback").html("No,TX is not the correct state.");
	  }
	   
	 if ($(this).attr("id") == "NC") {
         $("#feedback").css("color","red");
         $("#feedback").html("No,NC is not the correct state.");
      }

  $("#feedback").css("backgroundColor","yellow");
});
}); //end main jQuery function