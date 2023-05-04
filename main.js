gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar-nav", {
    duration: 2,
    x: 380,
    delay: 2,
    repeat: 0
});

gsap.from(".image-profile", {
    duration: 2,
    opacity: 0,
    delay: 1,
});

gsap.to("#irvin-title", {
    scrollTrigger: {
        trigger: "#irvin-title",
        // start: "400px center",
        start: "top center",
        end: "100px 100px",
        scrub: 1,
        toggleActions: "restart none reverse none",
    },
    x: -900,
    duration: 2,
    // scrub: 1
});

gsap.to("#fullstack-title", {
    scrollTrigger: {
        trigger: "#fullstack-title",
        // start: "390px center",
        start: "70px center",
        end: "70px 100px",
        scrub: 1,
        toggleActions: "restart none reverse none",
    },
    x: 800,
    ease: "none",
    duration: 1.5,
});

gsap.to(".image-profile", {
    scrollTrigger: {
        trigger: "#fullstack-title",
        // start: "390px center",
        start: "70px center",
        end: "70px 100px",
        scrub: 1,
        toggleActions: "restart none reverse none",
    },
    y: "110px",
    ease: "none",
    duration: 10,
});


gsap.from(".navbar-nav", {
    scrollTrigger: {
        trigger: ".navbar-nav",
        start: "-220px center",
        end: "-210px 100px",
        scrub: 1,
        toggleActions: "restart none reverse none",
    },
    x: "0px",
    ease: "none",
    duration: 1,
});

// gsap.from(".image-profile", {
//     scrollTrigger: {
//         trigger: "#fullstack-title",
//         // start: "390px center",
//         start: "70px center",
//         end: "70px 100px",
//         scrub: 1,
//         toggleActions: "restart none reverse none",
//     },
//     y: "120px",
//     ease: "none",
//     duration: 10,
//     opacity: 0.1,
// });

// gsap.defaults({ ease: "none", duration: 2 });

// const lt = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".image-profile",
//         markers: true,
//         start: "top 0",
//         end: "+=700 0",
//         scrub: "3",
//         pin: '.image-profile'
//     },
// });

// tl.to(".image-profile", { x: "1000", duration: 2 });

// tl.from("#navbarNav", { xPercent: 100 });

// ScrollTrigger.create({
//     animation: tl,
//     trigger: "#navbarContainer",
//     markers: true,
//     start: 'top top',
//     end: '+=4000px',
//     pin: true,
//     scrub: true,
// });
