gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

// ------------------------------
// ------  Descktop Code  ---------
mm.add("(min-width: 521px)", () => {
    // Descktop setup code here...
    gsap.timeline()
        .to(".itemProfile", {
            scrollTrigger: {
                trigger: ".itemProfile",
                start: "center 20%",
                end: "center 10%",
                scrub: true,
                toggleActions: "restart none restart none",
            },
            // y: '100vh',
            // yPercent: 100,
            y: "100px",
            opacity: 0,
            stagger: {
                amount: 0.5,
            },
        })
        .to(".navbar-nav", {
            scrollTrigger: {
                trigger: ".navbar-nav",
                start: "60% 80%",
                end: "70% center",
                scrub: true,
                toggleActions: "restart none reverse none",
            },
            x: "100px",
            opacity: 0,
        });
    // gsap.to(".image-profile", {
    //     scrollTrigger: {
    //         trigger: ".image-profile",
    //         start: "70px 20%",
    //         end: "70px 0%",
    //         scrub: true,
    //         toggleActions: "restart none reverse none",
    //     },
    //     y: "100vh",
    //     yPercent: 100,
    //     scale: 0.7,
    //     opacity: 0,
    // });

    // gsap.to("#irvin-title", {
    //     scrollTrigger: {
    //         trigger: "#irvin-title",
    //         start: "top center",
    //         end: "100px 100px",
    //         scrub: true,
    //         toggleActions: "restart none reverse none",
    //     },
    //     x: "100vw",
    //     xPercent: 100,
    // });

    // gsap.to("#fullstack-title", {
    //     scrollTrigger: {
    //         trigger: "#fullstack-title",
    //         // start: "390px center",
    //         start: "70px center",
    //         end: "70px 100px",
    //         scrub: true,
    //         toggleActions: "restart none reverse none",
    //     },
    //     x: "100vw",
    //     xPercent: 100,
    // });

    // gsap.to(".navbar-nav", {
    //     scrollTrigger: {
    //         trigger: ".navbar-nav",
    //         start: "-220px center",
    //         end: "-210px 100px",
    //         scrub: true,
    //         toggleActions: "restart none reverse none",
    //     },
    //     // x: "0px",
    //     opacity: 0,
    // });

    // --- Se agregan desde fuera de ..... mm.add("(min-width: 521px)" .....
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
        stagger: 0.5,
    });
    // --- Se agregan desde fuera de ..... mm.add("(min-width: 521px)" .....

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

// ------------------------------
// ------  mobile Code  ---------
mm.add("(max-width: 520px)", () => {
    // mobile setup code here...
    gsap.timeline()
        .to(".itemProfile", {
            scrollTrigger: {
                trigger: ".itemProfile",
                start: "center 20%",
                end: "center 10%",
                scrub: true,
                toggleActions: "restart none restart none",
            },
            // y: '100vh',
            // yPercent: 100,
            y: "100px",
            opacity: 0,
            stagger: {
                amount: 0.5,
            },
        })
        .to(".navbar-nav", {
            scrollTrigger: {
                trigger: ".navbar-nav",
                start: "60% 80%",
                end: "70% center",
                scrub: true,
                toggleActions: "restart none reverse none",
            },
            x: "100px",
            opacity: 0,
        });

    gsap.timeline()
        .from(".titleTecnologias", {
            scrollTrigger: {
                trigger: "#tecnologias-web",
                start: "center 90%",
                end: "center 70%",
                scrub: true,
                toggleActions: "restart none restart none",
                // markers: true
            },
            opacity: 0,
            scale: 0.5,
            y: "90px",
        })
        .from(".imgLogo", {
            scrollTrigger: {
                trigger: "#tecnologias-web",
                start: "center 85%",
                end: "center 65%",
                scrub: true,
                toggleActions: "restart pause restart none",
            },
            opacity: 0,
            scale: 0.2,
            y: "60px",
            stagger: 0.2,
        });

    gsap.from(".titleCapacidad", {
        scrollTrigger: {
            trigger: ".titleCapacidad",
            start: "center 85%",
            end: "center 65%",
            scrub: true,
            toggleActions: "restart pause restart none",
        },
        opacity: 0,
        scale: 0.2,
        x: "-200px",
        stagger: 0.2,
    });

    gsap.timeline()
        .from(".boxContacto", {
            scrollTrigger: {
                trigger: ".boxContacto",
                start: "center 80%",
                end: "center 60%",
                scrub: true,
                toggleActions: "restart none restart none",
            },
            opacity: 0,
            scale: 0.1,
            y: "-70px",
            ease: "elastic.out(1, .3)",
        })
        .from(".liContacto", {
            scrollTrigger: {
                trigger: ".liContacto",
                start: "center 75%",
                end: "center 60%",
                scrub: true,
                toggleActions: "restart none restart none",
            },
            opacity: 0,
            scale: 0.3,
            y: 10,
            stagger: 0.3,
        })
        .from(".animatedBtnFooter", {
            scrollTrigger: {
                trigger: ".animatedBtnFooter",
                start: "center 70%",
                end: "center 60%",
                scrub: true,
                toggleActions: "restart none reverse none",
            },
            opacity: 0,
            scale: 0.3,
            y: "-70px",
            stagger: 0.3,
        });
});
