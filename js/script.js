var moreContent = document.getElementById("moreContent");
moreContent.addEventListener("shown.bs.collapse", function() {
  let trigger = document.getElementById("moreTrigger");
  trigger.style.visibility = "hidden";
  this.scrollIntoView();
});

var counter = 0;
var hoverImages = [
  "images/profile/McFlurry.png",
  "images/profile/Sophie.png",
  "images/profile/Sofia.png",
  "images/profile/Mayo.png",
];

var profile = document.getElementById("profile");
profile.addEventListener("mouseenter", function() {
  this.src = hoverImages[counter];
  counter = (counter + 1) % hoverImages.length;
});
profile.addEventListener("mouseleave", function() {
  this.src = "images/profile/myself.webp";
});

var d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();
