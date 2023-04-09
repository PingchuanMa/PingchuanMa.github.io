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
// var hoverCredits = [
//   "Hello from <a title='CUDA' href='https://www.instagram.com/cudability/' target='_blank' rel='noopener noreferrer'>@CUDA</a>",
//   "Hello from <a title='Daimi' href='https://www.instagram.com/ragdolls_sophie_sofia/' target='_blank' rel='noopener noreferrer'>@Daimi</a>",
//   "Hello from <a title='Shomi' href='https://www.instagram.com/ragdolls_sophie_sofia/' target='_blank' rel='noopener noreferrer'>@Shomi</a>",
//   "Hello from McFlurry",
// ];

var profile_credit = document.getElementById("profile-credit");
var profile = document.getElementById("profile");
// var credit = document.getElementById("credit");

function profile_enter() {
  profile.src = hoverImages[counter];
  // credit.innerHTML = hoverCredits[counter];
  counter = (counter + 1) % hoverImages.length;
}

function profile_leave() {
  profile.src = "images/profile/myself.webp";
  // credit.innerText = "Photo by Lijie Chen";
}

profile_credit.addEventListener("mouseenter", profile_enter);
profile_credit.addEventListener("mouseleave", profile_leave);
profile_leave();

var d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();
