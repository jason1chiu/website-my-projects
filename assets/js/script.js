$(function() {
  // Select all cards and hide them initially
  $(".row").hide();

  // Slide down each card with a delay
  $(".row").each(function(i) {
    $(this).delay(1000 * i).slideDown();
  });

  const phoneIcon = $('.social-icon--phone');
  const tooltip = new bootstrap.Tooltip(phoneIcon, {
  placement: 'bottom',
  title: '(123) 456-7890'
  });
});