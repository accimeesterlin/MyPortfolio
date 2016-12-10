





function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('body').animate({scrollTop: aTag.offset().top},'slow');
}



function down(quantity, element){
  $(element).css('margin-top',quantity);
}


// Scrolling effects

$(document).ready(function(){
  
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var total = windowHeight + windowScrollTop;
    
    $.fn.revealOnScroll = function(direction, speed){
      
      return this.each(function(){
        var objectOffSet = $(this).offset();
        var objectOffSetTop = objectOffSet.top;
        
        if(!$(this).hasClass('hidden')){
          
          if(direction === 'right'){
            $(this).css({
              'opacity':0,
              'right':'700px'
            });
          }

          else if(direction === 'left'){
          	$(this).css({
              'opacity':0,
              'right':'700px'
            });
          }
          
          else{
            $(this).css({
              'opacity':0
            });
          }
          $(this).css('opacity', 0).addClass('hidden');
        }
        
        
       if(!$(this).hasClass('animation-complete')){
         if(total > objectOffSetTop){
            $(this).animate({"opacity":1, "right":0}, speed).addClass('animation-complete');
        } // second if statement
    
    } // first if statement

    
      });
  }; // reveal on scroll function
  
 

  
  $(window).scroll(function(){
    windowHeight = $(window).height();
    windowScrollTop = $(window).scrollTop();
    total = windowHeight + windowScrollTop;

     // $('.content--container--services').revealOnScroll('', 1000);
     // $('.content--container--services').revealOnScroll('left', 2000);

  

    $('.achievement--logo').revealOnScroll('left', 2000);
      $('.achievement--container--list li').revealOnScroll('', 4000);
      $('.achievement img').revealOnScroll('', 1500);
      $('.project').revealOnScroll('right', 1900);
      $('.view').revealOnScroll('', 3000);


    $('.skills--container--languages').revealOnScroll('', 3000);

    $('.contact').revealOnScroll('', 3000);
    $('footer').revealOnScroll('', 3000);
 
  }); // scroll function
});



 var toggle = function() {
            
            var bodyEl = $('body'),
                navToggleBtn = bodyEl.find('.header--container--toggle');
            
            navToggleBtn.on('click', function(e) {
                bodyEl.toggleClass('active-nav');
              
                $('.menu-line').toggleClass('hide');
                 $('.one').toggleClass('happy');
                e.preventDefault();
            });
            
            
            
        };

toggle();


$('.showBtn').on('click', function(){
  $('.containerPop, .closePop').addClass('showPop').removeClass('hidePop');
  $('.showBtn').addClass('hidePop').removeClass('showPop');
});


$('.closePop').on('click', function(){
  $('.containerPop, .closePo').addClass('hidePop').removeClass('showPop');
  $('.showBtn').addClass('showPop').removeClass('hidePop');
});











