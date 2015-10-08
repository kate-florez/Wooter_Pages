jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
  };

$(document).ready(function() {

  // Image Popup
  $('.main_img').click(function() {
    $('#background').css({"opacity" : '0.7'}).fadeIn('slow');
    $("#large").html("<img src='"+$(this).parent().attr("href")+"' alt='"+$(this).attr("alt")+"' /><br/>"+$(this).attr("rel")+"").center().fadeIn('slow');
    return false;
  });

  $(document).keypress(function(e) {
    if(e.keyCode==27) {
      $("#background").fadeOut('slow');
      $('#large').fadeOut('slow');
      $('.delete_image').fadeIn('slow');
    }
  });

  $('#background').click(function() {
    $('#background').fadeOut('slow');
    $('#large').fadeOut('slow');
    $('.delete_image').fadeIn('slow');
  });

  $('#large').click(function() {
    $('#background').fadeOut('slow');
    $('#large').fadeOut('slow');
    $('.delete_image').fadeIn('slow');
  });

  // Hover over gallery image
  $('.main_img').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });

  // $('.delete_image').hover(function() {
  //   $(this).addClass('delete_hover');
  // }, function() {
  //   $(this.removeClass('delete_hover'));
  // });
  $('#img_delete_btn').click(function() {
    $(this).toggle();
  });

});
