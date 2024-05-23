const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  lerp: 0.04,
});

// const disabledKeys = ["u"];

// const showAlert = (e) => {
//   e.preventDefault();
//   return alert("This feature is restricted!");
// };

// document.addEventListener("contextmenu", showAlert);

// document.addEventListener("keydown", (e) => {
//   if ((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
//     showAlert(e);
//   }
// });

// page preloader animation

const svg = document.getElementById("svg");
const tl = gsap.timeline({
  onComplete: () => {
    document.body.style.overflow = "visible";
  },
});

const curve = "M0 502S195 620 365 466s331-81 444 4 228 123 376-21V0H0Z";
const flat = "M0 502S195 620 365 466s331-81 444 4 228 123 376-21V0H0Z";

tl.from(".loader-wrap-heading h1", {
  delay: 0.5,
  y: 200,
  skewY: 20,
}).to(".loader-wrap-heading h1", {
  delay: 0.5,
  y: -200,
  skewY: 20,
});
tl.to(svg, {
  duration: 0,
  attr: { d: curve },
  ease: "power2.easeIn",
}).to(svg, {
  duration: 0,
  attr: { d: flat },
  ease: "power2.easeOut",
});
tl.to(".loader-wrap", {
  y: -500,
});
tl.to(".loader-wrap", {
  zIndex: -1,
  display: "none",
});
tl.from(
  ".main",
  {
    y: 100,
    opacity: 0,
  },
  "-=0.9"
);

tl.from(
  "nav",
  {
    duration: 1,
    opacity: 0,
  },
  "-=1.2"
);
