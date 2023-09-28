lottie.loadAnimation({
  container: document.getElementById("lottie-hero"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/assets/animations/Qubic Header illustration FIX 2.json' // the path to the animation json
});
lottie.loadAnimation({
  container: document.getElementById("lottie-connect"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/assets/animations/1. Connect 2.json' // the path to the animation json
});
lottie.loadAnimation({
  container: document.getElementById("lottie-mine"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/assets/animations/anim-mine.json' // the path to the animation json
});
lottie.loadAnimation({
  container: document.getElementById("lottie-earn"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/assets/animations/anim-earn.json' // the path to the animation json
});
lottie.loadAnimation({
  container: document.getElementById("lottie-services"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/assets/animations/our_service_1.json' // the path to the animation json
});
lottie.loadAnimation({
  container: document.getElementById("lottie-contact"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/assets/animations/contact_us_1.json' // the path to the animation json
});

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("btn-nav");
  const targetElement = document.getElementById("myNavbar");

  toggleButton.addEventListener("click", function() {
      // Toggle the "active" class on the target element
      targetElement.classList.toggle("active");
  });
});