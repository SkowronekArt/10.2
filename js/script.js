var span = $("span:not('#js-absoluteDiv')");
span.each(function(index, element) {
  if (index % 2 == 0) {
    $(element).css('color', 'red');
  };
});


var par = $("p");
par.each(function(index, element) {
  var button = '<br><button class="btn btn-danger" data-tmp="' + index + '">Click me ' + index + '</button>';
  $(element).append(button);
});


$("button").click(function() {
  $('#js-absoluteDiv').html('index tego buttonu to: ' + $(this).attr("data-tmp"));

});