var moreContent = document.getElementById('moreContent');
moreContent.addEventListener('shown.bs.collapse', function () {
  let trigger = document.getElementById('moreTrigger');
  trigger.style.visibility = "hidden";
  this.scrollIntoView();
});

var counter = 0;
var hoverImages = [
  'images/McFlurry.png',
  'images/Sophie.png',
  'images/Sofia.png',
];

var profile = document.getElementById('profile');
profile.addEventListener('mouseenter', function() {
  this.src = hoverImages[counter];
  counter = (counter + 1) % hoverImages.length;
})
profile.addEventListener('mouseleave', function() {
  this.src = 'images/myself.png';
})
