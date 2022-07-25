$(document).ready(function(){

    var cur_width = $(window).width();

    $(window).resize(function(){
        if(($(window).width() <= 992 && cur_width > 992) || ($(window).width() <= 767 && cur_width > 767) || ($(window).width() <= 500 && cur_width > 500)){
            //reload
            location.reload();
        }
        else if(($(window).width() > 992 && cur_width <= 992) || ($(window).width() > 767 && cur_width <= 767) || ($(window).width() > 500 && cur_width <= 500)){
            //reload
            location.reload();
        }
    });

});

$(document).ready(function() {
  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $('.container-message').css({display:'block'});
      $('.form').css({display:'none'});
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});

$(function() {
    $('#nav-icon6').click(function(){
        $(this).toggleClass('open');

        if ($('#menu-list').css('opacity') == '0') {
          $('#menu-list').css('display', 'block');
          setTimeout(function() {$('#menu-list').css('opacity', '1');}, 10);
        } else {
          $('#menu-list').css('opacity', '0');
          setTimeout(function() {$('#menu-list').css('display', 'none');}, 10)
        }
    });
});

function lockScroll(){
  if (true  ) {}
    $html = $('html'); 
    $body = $('body'); 
    $mobOv = $('#mobile-overlay');

    if ($body.css('overflow') == 'hidden') {
      $body.css({'margin-right': marginR,'margin-bottom': marginB});
      $body.css('overflow', $body.data('previous-overflow'));
      $mobOv.css('display', 'none');
      var scrollPosition = $html.data('scroll-position');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);    

      $body.css({'margin-right': 0, 'margin-bottom': 0});
    }
    else{
      var initWidth = $body.outerWidth();
      var initHeight = $body.outerHeight();

      var scrollPosition = [
          self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
          self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      $html.data('scroll-position', scrollPosition);
      $body.data('previous-overflow', $html.css('overflow'));
      $body.css('overflow', 'hidden');
      $mobOv.css('display', 'block');

      window.scrollTo(scrollPosition[0], scrollPosition[1]);   

      var marginR = $body.outerWidth()-initWidth;
      var marginB = $body.outerHeight()-initHeight; 
    }
    
};

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
  e.preventDefault();
  var target = this.hash,
  $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 500, 'swing', function () {
    window.location.hash = target;
  });
});

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
  e.preventDefault();
  var target = this.hash,
  $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 500, 'swing', function () {
    window.location.hash = target;
  });
});


function noDigits(event) {
  if ("1234567890-/.,?<>|!#@^:;()".indexOf(event.key) != -1)
    event.preventDefault();
};

function noABC(event) {
  if ("qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролджэячсмитьбюё-/.,?<>|!#@^:;()".indexOf(event.key) != -1)
    event.preventDefault();
};


function openModal(modal){
  modal.style.display = "block";

  window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
  }
}
function closeModal(modal){
  modal.style.display = "none";
}

$(window).on('load', function () {
    $('.preloader').addClass("preloader-remove");     
});

if (window.matchMedia('(max-width: 992px)').matches) 
{
  $('#arrow-1').removeClass('arrow-right');
  $('#arrow-1').addClass('arrow-left');
  $('#arrow-2').removeClass('arrow-left');
  $('#arrow-2').addClass('arrow-right');
}

var itemListParent = document.querySelector('.why-us-js-list');
var itemList = document.querySelectorAll('.why-us-block');
if (window.matchMedia('(max-width: 992px)').matches) 
{
  itemListParent.insertBefore(itemList[4], itemList[2]);  
  itemListParent.insertBefore(itemList[3], itemList[2]);  
  itemListParent.insertBefore(itemList[4], itemList[6]);  
  
}
if (window.matchMedia('(max-width: 501px)').matches) 
{
  itemListParent.insertBefore(itemList[1], itemList[0]);
  itemListParent.insertBefore(itemList[5], itemList[6]);
}

if (window.matchMedia('(max-width: 500px)').matches) 
{
  var i = 0;
  for (var i = 0; i < 4; i++) {
    if(document.querySelector(`#arrow-${i}`).classList.contains('arrow-left'))
    { 
      $(`#arrow-${i}`).removeClass('arrow-left')
    } else if(document.querySelector(`#arrow-${i}`).classList.contains('arrow-right'))
    {
       $(`#arrow-${i}`).removeClass('arrow-right') 
    }
  }
}
