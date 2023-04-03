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
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;
    
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  });
});



// sidebar section in mobile view
$(document).ready(function(){
    $('#menu-primary').children().click(function(){
        $(this).children('.sub-menu').toggle();     
    });
});