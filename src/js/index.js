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
const accordionHeaders = document.querySelectorAll('.accodion__icon');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-body');
    const isActive = accordionItem.classList.contains('active');

    accordionHeaders.forEach(header => {
      header.parentElement.classList.remove('active');
    });

    if (!isActive) {
      accordionItem.classList.add('active');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionItem.classList.remove('active');
      accordionContent.style.maxHeight = null;
    }
  });
});


// sidebar section in mobile view
$(document).ready(function(){
    $('#menu-primary').children().click(function(){
        $(this).children('.sub-menu').toggle();     
    });
});