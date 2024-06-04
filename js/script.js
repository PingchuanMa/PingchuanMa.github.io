// More content

var moreContent = document.getElementById("more-content");
moreContent.addEventListener("shown.bs.collapse", function() {
  let trigger = document.getElementById("more-trigger");
  trigger.style.visibility = "hidden";
  this.scrollIntoView();
});

// Profile

var counter = 0;
var hoverImages = [
  "assets/profile/cuda.webp",
  "assets/profile/mcflurry.webp",
];

var profile_credit = document.getElementById("profile-credit");
var profile = document.getElementById("profile");

function profile_enter() {
  profile.src = hoverImages[counter];
  counter = (counter + 1) % hoverImages.length;
}

function profile_leave() {
  profile.src = "assets/profile/myself.webp";
}

profile_credit.addEventListener("mouseenter", profile_enter);
profile_credit.addEventListener("mouseleave", profile_leave);
profile_leave();

// Footer year

var d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();

// Clipboard

var snippets = document.querySelectorAll('.snippet');

[].forEach.call(snippets, function(snippet) {
  snippet.firstChild.insertAdjacentHTML('beforebegin', '<button class="btn" data-clipboard-snippet><i class="bi bi-copy"></i></button>');
});

var clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
  target: function(trigger) {
    return trigger.nextElementSibling;
  }
});

clipboardSnippets.on('success', function(e) {
  e.clearSelection();
});
