$(function(){
  var imgHeight = $('.kv-img').outerHeight();
  var bgHeight = $('.kv').outerHeight();

  $(".burger-btn").on('click',function(){
    if($(window).scrollTop()<imgHeight -50){
      $('.bar').toggleClass('cross');
      $('.header__nav').toggleClass('open');
      $('body').toggleClass('noscroll');
    }else{
      $(this).toggleClass('black');
      $('.bar').toggleClass('cross');
      $('.header__nav').toggleClass('open');
      $('body').toggleClass('noscroll');
    }
  });

  $(window).on('load scroll', function(){
    if($(window).scrollTop() < imgHeight -50){
      $('.header__logo').removeClass('black');
    }
    else{
      $('header__logo').addClass('black');
    }

    if($(window).scrollTop() < bgHeight -50){
      $('.burger-btn').removeClass('black');
    }
    else{
      $('.burger-btn').addClass('black');
    }
  });

});