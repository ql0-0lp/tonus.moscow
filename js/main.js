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

$(window).on("scroll", function() {
            var nav = $("nav");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
  
                if (scroll <= 700) {
                  nav.css('transition', 'background 0.5s')
                } else {
                  nav.css('transition', 'none')
                }

                if (scroll >= 155) {
                    nav.css('background', '#000')
                } else {
                    nav.css('background', 'none')
                }
            });
        });

$(document).ready(function(){
    $(this).scrollTop(0);
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

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
  e.preventDefault();
  var target = this.hash,
  $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top-100
  }, 1000, 'swing', function () {
    window.location.hash = target-100;
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
