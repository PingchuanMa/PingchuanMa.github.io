var myCollapsible = document.getElementById('moreContent')
myCollapsible.addEventListener('shown.bs.collapse', function () {
  var trigger = document.getElementById('moreTrigger');
  trigger.style.visibility = "hidden";
  this.scrollIntoView();
})
