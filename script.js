document.addEventListener('DOMContentLoaded', (event) => {
    function guitarString(boxId) {
        var initialPath = `M 40 100 Q 750 100 1500 100`;
        var finalPath = `M 40 100 Q 750 100 1500 100`;
        var string = document.querySelector(boxId);

        string.addEventListener("mousemove", function(dets) {
            initialPath = `M 40 100 Q ${dets.x} ${dets.y} 1500 100`;

            gsap.to(string.querySelector("svg path"), {
                attr: {d: initialPath},
                duration: 0.2,
                ease: "bounce.out"
            });
        });

        string.addEventListener("mouseleave", function() {
            gsap.to(string.querySelector("svg path"), {
                attr: {d: finalPath},
                duration: 1.5,
                ease: "elastic.out(1, 0.2)"
            });
        });
    }
    function heroAnimation() {
        var timeline1 = gsap.timeline();
        timeline1.from("nav .left-box h2, nav .right-box a, .section-header .left-section h1", {
            y: -30,
            opacity:0,
            duration:0.4,
            delay:0.6,
            ease: "slow(0.7,0.7,false)"
        });
        timeline1.from(".section-header .left-section p,.section-header,.section-header .right-section .div-img img",{
            y:30,
            duration1:0.4,
            opacity:0,
            delay:0.6,
            ease: "slow(0.7,0.7,false)"
        },"-=1");
    }
    guitarString('.explore-box');
    heroAnimation();
    
});