$(document).ready(function () {

  var source = $('#post-template').html();

  var template = Handlebars.compile(source);

  var context = {};

  var html;

  $.getJSON('http://www.freecodecamp.com/news/hot', function(resp) {
    context.entries = resp;
    html = template(context);
    $('#feed').html(html);
  });
})
;
