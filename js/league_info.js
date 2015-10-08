// $(document).ready(function() {
//   $('.main_img').hover(function() {
//     $(this).addClass('hover');
//   }, function() {
//     $(this).removeClass('hover');
//   });
// });


$(document).ready(function() {

  $('.main_img').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });

  $('.delete_image').hover(function() {
    $(this).addClass('delete_hover');
  }, function() {
    $(this.removeClass('delete_hover'));
  });
});
