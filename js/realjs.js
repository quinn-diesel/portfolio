console.log('loaded');


// $(document).ready(function() {
//   $('#about').on('click', function(){
//     console.log('clicked');
//     $('#section0').fullpage();
//   });
// });

$(document).ready(function() {
  $('#about').click(function() {
    $('html, body').animate({
      scrollTop: $('.about_info').offset().top
    }, 1200);
  });
});

$(document).ready(function() {
  $('#about').click(function() {
    $('html, body').animate({
      scrollTop: $('.about_info').offset().top
    }, 1200);
  });
});

$(document).ready(function() {
  $('#project_info').click(function() {
    $('html, body').animate({
      scrollTop: $('.projects').offset().top
    }, 1200);
  });
});

$(document).ready(function() {
  $('#contact_info').click(function() {
    $('html, body').animate({
      scrollTop: $('.contact').offset().top
    }, 1200);
  });
});
