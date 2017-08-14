
// Figure animations
$(document).ready(function() {
  $('#one').on({
    mouseenter: function(){
      $('#img1').css("height", "75px")
      $('#img1').css("opacity", "1")
    }
  });
  $('#one, #two, #three, #four, #five, #six').on({
    mouseleave: function(){
    $('figcaption').css("height", "0px")
    $('figcaption').css("opacity", "0")
    }
  });
});

$(document).ready(function() {
  $('#two').on({
    mouseenter: function(){
      $('#img2').css("height", "75px")
      $('#img2').css("opacity", "1")
    }
  })
});

$(document).ready(function() {
  $('#three').on({
    mouseenter: function(){
      $('#img3').css("height", "75px")
      $('#img3').css("opacity", "1")
    }
  })
});

$(document).ready(function() {
  $('#four').on({
    mouseenter: function(){
      $('#img4').css("height", "75px")
      $('#img4').css("opacity", "1")
    }
  })
});


// figcaption doesn't show up under 960px. Should get better performance on mobile.
$(document).ready(function() {
  $(window).resize(function() {
 if ($(window).width() < 960) {
    $('figcaption').css('display', 'none')
 }
 else {
   $('figcaption').css('display', 'block')
}
});
});

$("#myModal").modal()


// Give Figcaption an ID and on MouseEnter And Leave use CSS properties #work
