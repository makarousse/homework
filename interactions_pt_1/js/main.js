// WHEN the user CLICKS  #openDropdown
// Slide toggle #dropdownMenu
$('#openDropdown').on('click', function(event) {
  $('#dropdownMenu').slideToggle(300);
});

// WHEN the user CLICKS the #question1
$('#question1').on('click', function(event) {});

$('#question1').on('click', function(event) {
  $('#answer1').slideDown(300);
  $('#answer2').slideUp(300);
  $('#question1').addClass('active');
  $('#question2').removeClass('active');
});

$('#question2').on('click', function(event) {});

$('#question2').on('click', function(event) {
  $('#answer2').slideDown(300);
  $('#answer1').slideUp(300);
  $('#question2').addClass('active');
  $('#question1').removeClass('active');
});
// WHEN the user CLICKS the #question2
// Slide down #answer2
// Slide up #answer1
// Add the active class to #question2
// Remove the active class from #question1

$('#showYellowCircles').on('click', function(event) {
  $('.yellow').show();
  $('.yellow').addClass('active');
  $('.blue').hide();
  $('.blue').removeClass('active');
});
// WHEN the user CLICKS the #showYellowCircles
// Hide .blue
// Show .yellow
$('#showBlueCircles').on('click', function(event) {
  $('.blue').show();
  $('.blue').addClass('active');
  $('.yellow').hide();
  $('.yellow').removeClass('active');
});

$('#openDropdown').on('click', function(event) {});
$('#dropdownMenu').slideToggle(300);
// WHEN the user CLICKS the #showBlueCircles
// Hide .yellow
// Show .blue

// WHEN the user CLICKS  #openDropdown
// Slide toggle #dropdownMenu