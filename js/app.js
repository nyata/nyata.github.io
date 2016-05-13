$(function() {
  // menu
  function scrollToPage(pageTop) {
    var speed = 500;
    var position = pageTop.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  }

  $('li#menu-cover').on('click touchstart', function(){
    scrollToPage($('#cover'));
  });
  $('li#menu-experience').on('click touchstart', function(){
    scrollToPage($('#experience'));
  });
  $('li#menu-skill').on('click touchstart', function(){
    scrollToPage($('#skill'));
  });
  $('li#menu-project').on('click touchstart', function(){
    scrollToPage($('#project'));
  });
  $('li#menu-contact').on('click touchstart', function(){
    scrollToPage($('#contact'));
  });

  // experience
  var point_num = 11;
  var timeline_count = 1;
  $('.arrow-up').on('click', function(){
    if(timeline_count > 1) {
      $('ul#timeline li:nth-child('+timeline_count+')').show();
      timeline_count--;
    }
  });
  $('.arrow-down').on('click', function(){
    if(timeline_count < 10) {
      $('ul#timeline li:nth-child('+timeline_count+')').hide();
      timeline_count++;
    }
  });
});
