jQuery.noConflict();
jQuery(document).ready(function($) {
  $("#price-range").slider({
  range: true,
  min: 0, 
  max: 700, 
  values: [0, 700],
  slide: function(event, ui) {
  $("#priceRange").val(ui.values[0] + " руб. - " + ui.values[1] + " руб.");
  }
  });
  $("#priceRange").val($("#price-range").slider("values", 0) + " руб. - " + $("#price-range").slider("values", 1) + " руб.");
  
});