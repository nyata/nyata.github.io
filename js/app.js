$(function() {
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
