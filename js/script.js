var moreContent = document.getElementById("moreContent");
moreContent.addEventListener("shown.bs.collapse", function() {
  let trigger = document.getElementById("moreTrigger");
  trigger.style.visibility = "hidden";
  this.scrollIntoView();
});

var counter = 0;
var hoverImages = [
  "images/profile/mcflurry.webp",
  "images/profile/daimi.webp",
  "images/profile/shomi.webp",
  "images/profile/mayo.webp",
];
var hoverCredits = [
  "Hello from McFlurry",
  "Hello from Daimi",
  "Hello from Shomi",
  "Hello from Mayo",
];

var profile = document.getElementById("profile");
var credit = document.getElementById("credit");
profile.addEventListener("mouseenter", function() {
  this.src = hoverImages[counter];
  credit.innerText = hoverCredits[counter];
  counter = (counter + 1) % hoverImages.length;
});
profile.addEventListener("mouseleave", function() {
  this.src = "images/profile/myself.webp";
  credit.innerText = "Photo by @QC";
});

var d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();
