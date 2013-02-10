$(document).ready(function(){




jQuery(window).resize(function() {
  var width = jQuery(document).width();
  var margin = (833-width)/-2;
  jQuery('.logo').css('margin-left', (margin)+'px');
});

});