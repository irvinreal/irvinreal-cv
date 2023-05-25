gsap.registerPlugin(ScrollTrigger);

let ms = gsap.matchMedia();
ms.add("(max-width: 720px)", () => {
    // mobile setup code here...
    gsap.from(".liContacto", {
        // scrollTrigger: {
        //     trigger: ".liContacto",
        //     start: "end end",
        //     end: "end star",
        //     // scrub: 1,
        //     markers: true,
        //     toggleActions: "restart none reverse none",
        // },
        scrollTrigger: {
            trigger: "#contacto",
            toggleActions: "restart none reverse none",
        },
        duration: 0.7,
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
            // scrub: 1,
            // markers: true,
            toggleActions: "restart none reverse none",
        },
        duration: 0.8,
        opacity: 0,
        scale: 0.3,
        y: -70,
        stagger: 0.2,
    });

    gsap.from(".boxContacto", {
        scrollTrigger: {
            trigger: "#contacto",
            start: "300px center",
            end: "300px center",
            // scrub: 1,
            // markers: true,
            toggleActions: "restart none reverse none",
        },
        duration: 1,
        opacity: 0,
        scale: 0.1,
        y: -70,
        ease: "elastic.out(1, .3)",
    });

    gsap.to(".navbar-nav", {
        scrollTrigger: {
            trigger: "#navbarContainer",
            start: "450px center",
            end: "700px center",
            scrub: 1,
            toggleActions: "restart none reverse none",
            // markers: true
        },
        x: "350px",
        duration: 1,
    });

    gsap.to(".itemProfile", {
        scrollTrigger: {
            trigger: "#navbarContainer",
            start: "400px center",
            end: "550px center",
            scrub: 1,
            toggleActions: "restart none reverse none",
            // markers: true
        },
        x: "-350px",
        duration: 1,
        stagger: {
            from: "end",
            amount: 0.5,
        },
    });
});

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

gsap.from(".titleTecnologias", {
    scrollTrigger: {
        trigger: ".titleTecnologias",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
        toggleActions: "restart none reset none",
    },
    opacity: 0,
    scale: 0.5,
    y: 100,
});

gsap.from(".imgLogo", {
    scrollTrigger: {
        trigger: ".imgLogo",
        start: "20px 90%",
        end: "50px 70%",
        scrub: true,
        toggleActions: "restart pause restart none",
    },
    opacity: 0,
    scale: 0.5,
    y: 60,
    stagger: 0.15,
});

gsap.from(".titleCapacidad", {
    scrollTrigger: {
        trigger: ".titleCapacidad",
        start: "100px 65%",
        end: "200px 60%",
        scrub: 3,
        toggleActions: "restart none reset none",
    },
    opacity: 0,
    scale: 0.1,
    x: -200,
    stagger: .5
});

