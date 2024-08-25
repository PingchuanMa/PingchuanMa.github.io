// More content

var moreContent = document.getElementById("more-content");
moreContent.addEventListener("shown.bs.collapse", function() {
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
  snippet.firstChild.insertAdjacentHTML(
    'beforebegin',
    '<button class="btn" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-clipboard-snippet><i class="bi bi-clipboard"></i></button>');
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
  target: function(trigger) {
    return trigger.nextElementSibling;
  }
});

clipboardSnippets.on('success', function(e) {
  e.clearSelection();
  var icon = e.trigger.querySelector('i');
  icon.className = 'bi bi-check2';
  var tooltip = bootstrap.Tooltip.getInstance(e.trigger);
  tooltip.setContent({'.tooltip-inner': 'Copied!'});
  tooltip.show();
  setTimeout(function() {
    icon.className = 'bi bi-clipboard';
    tooltip.setContent({'.tooltip-inner': 'Copy to clipboard'});
    tooltip.hide();
  }, 2000);
});


// External links

document.addEventListener("DOMContentLoaded", function() {
  // Select all anchor tags with an href attribute
  const links = document.querySelectorAll('a[href]');

  // Iterate through each link
  links.forEach(function(link) {
    // Check if the href attribute does not start with '#'
    if (!link.getAttribute('href').startsWith('#')) {
        // Set the target and rel attributes
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});