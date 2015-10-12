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
  $(document).keypress(function() {
    $('#background').fadeOut('slow');
    $('#large').fadeOut('slow');
  });

// Click background to go back to gallery
  $('#background').click(function() {
    $('#background').fadeOut('slow');
    $('#large').fadeOut('slow');
    $('.delete_image').fadeIn('slow');
  });

// Click large image to go back to gallery
  $('#large').click(function() {
    $('#background').fadeOut('slow');
    $('#large').fadeOut('slow');
    $('.delete_image').fadeIn('slow');
  });

  // Hover over gallery image to reveal clear
  // image and delete button
  $('.main_img').hover(function() {
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
  $('li#venue').click(function() {
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

  $('li#venue_2').click(function() {
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

  $('#delete-button').click(function() {
    $('li#venue').fadeOut(250);
  });

  $('#delete-button_2').click(function() {
    $('li#venue_2').fadeOut(250);
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
