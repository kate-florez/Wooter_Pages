jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
  };

$(document).ready(function() {

  // Image Popup
  $('.main_img').click(function() {
    $('#background').css({"opacity" : '0.7'}).fadeIn('fast');
    $("#large").html("<img src='"+$(this).parent().attr("href")+"' alt='"+$(this).attr("alt")+"' /><br/>"+$(this).attr("rel")+"").center().fadeIn('fast');
    return false;
  });

  // Video Popup
  $('.video_img').click(function() {
    $('#background').css({ "opacity" : '0.7'}).fadeIn('fast');
    $('#large').html("<video width='960px' height='540px' controls>" + "<source src='https://cdn.streamable.com/video/7k0q.webm' type='video/webm'>" + "<source src='videos/Aliens(1986).ogg' type='video/ogg'>" + "</video>").center().fadeIn('fast');
    return false;
  });

  // Press a key to hide image
  $(document).keypress(function(e) {
    if(e.keyCode==27) {
      $("#background").fadeOut('fast');
      $('#large').fadeOut('fast');
      $('.delete_image').fadeIn('fast');
    }
  });
  $(document).keypress(function() {
    $('#background').fadeOut('fast');
    $('#large').fadeOut('fast');
  });

// Click background to go back to gallery
  $('#background').click(function() {
    $('#background').fadeOut('fast');
    $('#large').fadeOut('fast');
    $('.delete_image').fadeIn('fast');
  });

// Click large image to go back to gallery
  // $('#large').click(function() {
  //   $('#background').fadeOut('fast');
  //   $('#large').fadeOut('fast');
  //   $('.delete_image').fadeIn('fast');
  // });

  // Hover over gallery image to reveal clear
  // image and delete button
  $('.main_img').hover(function() {
    $(this).toggleClass('hover');
  });

  $('.video_img').hover(function() {
    $(this).toggleClass('hover');
  });

  // $('.delete_image').hover(function() {
  //   $(this).addClass('delete_hover');
  // }, function() {
  //   $(this.removeClass('delete_hover'));
  // });
  $('.delete_image').click(function() {
    $('.main_img').fadeOut(500);
  });


  // Select venue and de-select other
  $('li#venue').hover(function() {
    if ($('li#venue_2').hasClass('active-venue')) {
      $('li#venue_2').removeClass('active-venue');
      $('#venue-btns_2').addClass('hide');
      $(this).addClass('active-venue');
      $('#venue-btns').removeClass('hide');
    } else {
      $('li#venue').toggleClass('active-venue');
      $('#venue-btns').toggleClass('hide');
    }
  });

  $('li#venue_2').hover(function() {
    if ($('li#venue').hasClass('active-venue')) {
      $('li#venue').removeClass('active-venue');
      $('#venue-btns').addClass('hide');
      $(this).addClass('active-venue');
      $('#venue-btns_2').removeClass('hide');
    } else {
      $('li#venue_2').toggleClass('active-venue');
      $('#venue-btns_2').toggleClass('hide');
    }
  });

  // hide/delete venues
  $('#delete-button').click(function() {
    $('li#venue').slideToggle(250);
  });

  $('#delete-button_2').click(function() {
    $('li#venue_2').slideToggle(250);
  });

  $('#add-venue').click(function() {
    $('li#venue').slideToggle(10);
    $('li#venue_2').slideToggle(10);
  });

  // Change active venue
  // $('li#venue').click(function() {
  //   $(this).toggleClass('active-venue');
  //   $('#venue-btns').toggleClass('hide');
  // });

  // $('li#venue_2').click(function() {
  //   $(this).toggleClass('active-venue');
  //   $('#venue-btns_2').toggleClass('hide');
  // });

});
