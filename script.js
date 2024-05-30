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
    guitarString('.explore-box');
});