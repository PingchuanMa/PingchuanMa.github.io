$(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      return '<img class="img-fluid" width="100px" src="'+$(this).data('img') + '" />';
    }
  })
})

$(document).ready(function() {
  $('#eduContent').on('hide.bs.collapse', function () {
    var trigger = document.getElementById('eduTrigger');
    trigger.innerText = '[show]';
  })

  $('#eduContent').on('show.bs.collapse', function () {
    var trigger = document.getElementById('eduTrigger');
    trigger.innerText = '[hide]';
  })

  $('#expContent').on('hide.bs.collapse', function () {
    var trigger = document.getElementById('expTrigger');
    trigger.innerText = '[show]';
  })

  $('#expContent').on('show.bs.collapse', function () {
    var trigger = document.getElementById('expTrigger');
    trigger.innerText = '[hide]';
  })
})