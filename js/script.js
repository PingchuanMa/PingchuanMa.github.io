var myCollapsible = document.getElementById('moreContent')
myCollapsible.addEventListener('show.bs.collapse', function () {
  var trigger = document.getElementById('moreTrigger');
  trigger.style.visibility = "hidden";
})
