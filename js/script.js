window.addEventListener('scroll', function(){
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '80%',
        '30%',
        '65%',
        '40%'
    ];

    progressBars.forEach((progress, index)=>{
        progress.style.width = values[index];
    });
});


$(document).ready(function(){
    
    $(".directional-icon-down a, .nav-container ul a, .directional-icon-up a").on('click', function(event) {
      if (this.hash !== "") {

        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });