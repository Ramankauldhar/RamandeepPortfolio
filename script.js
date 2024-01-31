document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
        left:dets.x,
        top:dets.y
    })
})

function showProjectContent(contentId) {
        document.getElementById(contentId).style.display = 'block';
}

function hideProjectContent(contentId) {
        document.getElementById(contentId).style.display = 'none';
}

function toggleMobileMenu() {
    let navBarLeft = document.getElementById("navBarLeft");
    navBarLeft.classList.toggle("show");
}

function handleAnimation() {
  const animations = document.querySelectorAll(".animation");
  const windowHeight = window.innerHeight;
  const elementVisible = 1; 

  animations.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("animationFromBottom");
    } else {
      element.classList.remove("animationFromBottom");
    }
  });
}

// Throttle the scroll event to improve performance
const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Attach the throttled function to the scroll event
window.addEventListener("scroll", throttle(handleAnimation, 200));


