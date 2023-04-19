// This is Javascript File.
console.log('working done');

function changeBg(){
   var navbar = document.getElementById('menuWrapper');
   var scrollValue = window.scrollY;
   if(scrollValue < 150){
    navbar.classList.remove('bgColor');
   }else{
    navbar.classList.add('bgColor');
   }
}
window.addEventListener('scroll',changeBg);




                                                                                                                                                                                                                                                                                                                                              

// footer accordion section 


function toggleCRC (thisChevron,thisID,thisHead) {
  if($(thisChevron).hasClass("on")) {
      $(thisChevron).removeClass("on");
      $(thisChevron).css("transform","rotate(0deg)");
  } else {
    
    $(thisChevron).addClass("on");
      $(thisChevron).css("transform","rotate(90deg)");
  }
  $("#"+thisID).slideToggle( 600, "swing", function() {
  });
}

/* open accordian */
$(".acc-head").click(function() {
  
  var expandThisID = $(this).data("section");
  var thisHead = $('.acc-head[data-section=' + expandThisID +']');
  var chevron = $('i[data-section=' + expandThisID +']');
  // close open chevrons
  $(".crc-chevron").each (function() {
    if ($(this).hasClass("on")) {
    }
  })
  // close open accordions
  
   $(".acc-body").each(function() {
     if ($(this).data("section") != expandThisID && $(this).is(":visible")) {
        $("#"+$(this).data("section")).slideToggle( 600, "swing", function() {
        });
        $("i[data-section=" + $(this).data("section") + ']').removeClass("on");
        $("i[data-section=" + $(this).data("section") + ']').css("transform","rotate(0deg)");
      }
    });
  
  $("#"+expandThisID+" button").removeClass("crc-close-anim");
  
  toggleCRC(chevron,expandThisID,thisHead);   
});

/* X functionality */
$('.close').click(function() { // fa-times class
  $(this).addClass("crc-close-anim");
  var collapseThisID = $(this).data("section");
  //console.log(collapseThisID);
  var chevron = $('i[data-section=' + collapseThisID +']');
  var thisHead = $('.acc-head[data-section=' + collapseThisID +']');
  toggleCRC(chevron,collapseThisID,thisHead)	
});







// sidebar section in mobile view
$(document).ready(function(){
    $('#menu-primary').children().click(function(){
        $(this).children('.sub-menu').toggle();     
    });
});