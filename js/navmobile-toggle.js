$(function() {
  $('#menuToggle').on('click', function() {
    $('.navmobile').fadeToggle(100);
    $(this).toggleClass('icon-menu icon-close');
  });
});
