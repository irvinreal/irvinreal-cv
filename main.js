let mm = gsap.matchMedia();
mm.add("(min-width: 599px)", () => {
    // mobile setup code here...
    gsap.from(".navbar-nav", {
        duration: 2,
        x: 380,
        delay: 2,
        repeat: 0,
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
        x: "100vw",
        xPercent: -800,
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
});
