// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}

// Used to toggle the menu on small screens when clicking on the menu button
$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
// Used to make search button to pull down menu//
$(".searchButton").on("click", function(){
  
  $(".searchButton").toggleClass("active");
  
   if ($(".searchButton").hasClass("active")) {
     
     $(".searchBar").css("height","100vh");   $("#searchForm").css("opacity","1");
$(".searchIcon").removeClass("fa-search").addClass("fa-times");     
     
  }
  else {
    
    $(".searchBar").css("height","0vh");   $("#searchForm").css("opacity","0");
$(".searchIcon").removeClass("fa-times").addClass("fa-search"); 
    
  }

  
});
// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Creating a loading function//
function fade(){
  $(".preloader").fadeOut("slow");
}
setTimeout(fade, 3000);
// function myMap() {
//   myCenter=new google.maps.LatLng(41.878114, -87.629798);
//   var mapOptions= {
//     center:myCenter,
//     zoom:12, scrollwheel: false, draggable: false,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
//   };
//   var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
//
//   var marker = new google.maps.Marker({
//     position: myCenter,
//   });
//   marker.setMap(map);
// }