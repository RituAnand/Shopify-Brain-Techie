
/********************25.10 new code************************/

jQuery(document).ready(function ($) {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 677) {
      $('.mob-tab-pane').removeClass('tab-pane fade');

      $('.carousel').carousel({
        touch: true,
        interval: false
      });

      $('.remove-zoom').removeClass('easyzoom easyzoom--overlay is-ready');



    } else if (ww >= 678) {
      $('.mob-tab-pane').addClass('tab-pane');
      $('.remove-zoom').addClass('easyzoom easyzoom--overlay');
      $('.remove-zoom').addClass('easyzoom easyzoom--overlay is-ready');

      $('.carousel').carousel({
        touch: true,
        interval: false
      });

    };
  };

  $(window).resize(function () {
    alterClass();
  });

  alterClass();
});


/***************r-theme js*************************/
//product slider js

$(function() {
    var nextBtn = $("#next-slide"),
        prevBtn = $("#prev-slide");
  
    nextBtn.on('click', function(e) {
        var active = $(".is-active");
        var next = active.next('.slider__slide');
        if (next.length) {
            active.removeClass('is-active');
            next.addClass('is-active');
        }
      
      
    });
    prevBtn.on('click', function(e) {
        var active = $(".is-active");
        var prev = active.prev('.slider__slide');
        if (prev.length) {
            active.removeClass('is-active');
            prev.addClass('is-active');
        }
    });
     
   
});

$(document).ready(function(){
  $(".r-pass-forg").click(function(){
	$("#recover").show();
    $("#R-password-forgot").addClass("d-flex");
    $("#R-form-login").removeClass("d-flex");
    $("#login").removeClass("d-block")
  });
  
  $(".r-cancel").click(function(){
  $("#recover").hide();
  $("#R-password-forgot").removeClass("d-flex");
    $("#R-form-login").addClass("d-flex");
    $("#login").addClass("d-block")
  });
});
/***/
