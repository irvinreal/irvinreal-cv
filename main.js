gsap.registerPlugin(ScrollTrigger);

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

    gsap.from(".boxContacto", {
        scrollTrigger: {
            trigger: "#contacto",
            start: "center center",
            end: "center center",
            scrub: 2,
            // markers: true,
            toggleActions: "restart none reverse none",
        },
        duration: 2,
        opacity: 0,
        scale: 0.7,
        y: 100,
        stagger: 0.2,
    });

    gsap.from(".liContacto", {
        scrollTrigger: {
            trigger: "#contacto",
            start: "center center",
            end: "end 100px",
            scrub: 1,
            // markers: true,
            toggleActions: "restart none reverse none",
        },
        duration: 2,
        opacity: 0,
        scale: 0.3,
        y: 100,
        stagger: 0.2,
        delay: 1,
    });

    gsap.from(".animatedBtnFooter", {
        scrollTrigger: {
            trigger: "#contacto",
            start: "center center",
            end: "end center",
            scrub: 1,
            // markers: true,
            toggleActions: "restart none reverse none",
        },
        duration: 2,
        opacity: 0,
        scale: 0.3,
        y: 150,
        stagger: 0.8,
    });
});

gsap.from(".imgLogo", {
    scrollTrigger: {
        trigger: ".tecnologias-web",
        start: "center center",
        end: "end 100px",
        scrub: 3,
        // markers: true,
        toggleActions: "restart none reverse none",
    },
    duration: 1,
    opacity: 0,
    scale: 0.5,
    y: 50,
    stagger: 0.15,
});

gsap.from(".titleCapacidad", {
    scrollTrigger: {
        trigger: ".capacidadesPersonales",
        start: "center center",
        end: "end 100px",
        scrub: 1,
        // markers: true,
        toggleActions: "restart none reverse none",
    },
    duration: 2,
    opacity: 0,
    scale: 0.5,
    y: 100,
    stagger: 0.2,
});

gsap.from(".titleTecnologias", {
    scrollTrigger: {
        trigger: ".tecnologias-web",
        start: "center center",
        end: "end 100px",
        scrub: 1,
        // markers: true,
        toggleActions: "restart none reverse none",
    },
    duration: 2,
    opacity: 0,
    scale: 0.5,
    y: 100,
    stagger: 0.2,
});

let ms = gsap.matchMedia();
ms.add("(max-width: 799px)", () => {
    // mobile setup code here...
    gsap.from(".liContacto", {
        scrollTrigger: {
            trigger: "#contacto",
            start: "100px center",
            end: "center center",
            scrub: 1,
            // markers: true,
            toggleActions: "restart none reverse none",
        },
        duration: 2,
        opacity: 0,
        scale: 0.3,
        y: 10,
        stagger: 0.2,
    });

    gsap.from(".animatedBtnFooter", {
        scrollTrigger: {
            trigger: "#contacto",
            start: "300px center",
            end: "300px center",
            scrub: 1,
            // markers: true,
            toggleActions: "restart none reverse none",
        },
        duration: 2,
        opacity: 0,
        scale: 0.3,
        y: -70,
        stagger: 0.2,
    });

    // gsap.set(".navbar-nav", {
    //     x: "1000px",
    // });

    gsap.to(".navbar-nav", {
        scrollTrigger: {
            trigger: "#navbarContainer",
            start: "400px center",
            end: "600px center",
            scrub: 1,
            toggleActions: "restart none reverse none",
            // markers: true
        },
        x: "350px",
        duration: 1,
    });
});
