var $navigation = $('.navigation');
var $children = $navigation.children();
var count = $children.length;
var angle = (Math.PI / 3) / count;
$('.hovertrap').hover(function() {
  $navigation.removeClass('hidden');
  $('.ball').css({
      'border-left': '350px transparent',
      'border-bottom': '350px transparent'
  });
  $children.each(function(i) {
    var $this = $(this);
    var localangle = angle * (i);
    var sin = 325 * Math.sin(localangle);
    var cos = 325 * Math.cos(localangle);
    $this.css({
        "top": sin,
        "left": -cos,
        "transform": 'rotate(-' + localangle + 'rad)'
    });
  });
  }, function() {
    $navigation.addClass('hidden');
    $children.each(function(i) {
      var $this = $(this);
      $this.css({
          "top": 0,
          "left": 0,
      });
    });

});
window.setTimeout(function() {
  $('.hovertrap').removeClass('pageenter');
  $('.navigation').addClass('hidden');
}, 500);
