$(document).ready(function() {
    var slideIndex = 0;
    var slides = $('.slider-container img');
    
    function showSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
      
      $('.slider-container').css('transform', 'translateX(-' + (index * 100) + '%)');
      slideIndex = index;
    }
    
    $('.previous-button').click(function() {
      showSlide(slideIndex - 1);
    });
    
    $('.next-button').click(function() {
      showSlide(slideIndex + 1);
    });
    
    showSlide(slideIndex);
  });