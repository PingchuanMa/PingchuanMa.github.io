var moreContent = document.getElementById("moreContent");
moreContent.addEventListener("shown.bs.collapse", function() {
  let trigger = document.getElementById("moreTrigger");
  trigger.style.visibility = "hidden";
  this.scrollIntoView();
});

var counter = 0;
var hoverImages = [
  "images/profile/cuda.webp",
  "images/profile/daimi.webp",
  "images/profile/shomi.webp",
  "images/profile/mcflurry.webp",
];
var hoverCredits = [
  "Hello from <a title='CUDA' href='https://www.instagram.com/cudability/'>CUDA</a>",
  "Hello from <a title='Daimi' href='https://www.instagram.com/ragdolls_sophie_sofia/'>Daimi</a> <a title='Toru' href='https://toruowo.github.io/'>@Toru</a>",
  "Hello from <a title='Shomi' href='https://www.instagram.com/ragdolls_sophie_sofia/'>Shomi</a> <a title='Toru' href='https://toruowo.github.io/'>@Toru</a>",
  "Hello from McFlurry",
];

var profile_credit = document.getElementById("profile-credit");
var profile = document.getElementById("profile");
var credit = document.getElementById("credit");

profile_credit.addEventListener("mouseenter", function() {
  profile.src = hoverImages[counter];
  credit.innerHTML = hoverCredits[counter];
  counter = (counter + 1) % hoverImages.length;
});
profile_credit.addEventListener("mouseleave", function() {
  profile.src = "images/profile/myself.webp";
  credit.innerText = "Photo by @QC";
});

var d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();
