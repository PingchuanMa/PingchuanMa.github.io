$(document).ready(function() {
  $('#eduContent').on('hide.bs.collapse', function () {
    var trigger = document.getElementById('eduTrigger');
    trigger.innerText = '[show]';
    trigger.title = 'Show education';
  })

  $('#eduContent').on('show.bs.collapse', function () {
    var trigger = document.getElementById('eduTrigger');
    trigger.innerText = '[hide]';
    trigger.title = 'Hide education';
  })

  $('#expContent').on('hide.bs.collapse', function () {
    var trigger = document.getElementById('expTrigger');
    trigger.innerText = '[show]';
    trigger.title = 'Show experience';
  })

  $('#expContent').on('show.bs.collapse', function () {
    var trigger = document.getElementById('expTrigger');
    trigger.innerText = '[hide]';
    trigger.title = 'Hide experience';
  })
})
