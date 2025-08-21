import gsap from "gsap";

gsap.to(".btn", {
  x: 200,
  duration: 0.4,
  ease: "power1.inOut",
});

gsap.to(".toast", {
  x: 200,
  duration: 1.2,
  ease: "power2.out",
});

gsap.to(".card", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power3.inOut",
});
