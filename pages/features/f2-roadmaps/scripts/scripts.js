var tl = gsap.timeline();

tl.from(".gsap-navtitle", { y:-15, duration:1, delay:0.5, opacity:0 })
tl.from(".gsap-navlinks", { y:-20, duration:1, opacity:0, stagger:0.3})
gsap.from(".gsap-title", {y:-20, opacity:0, delay:0.5,duration:1})
gsap.from(".gsap-des", {y:-20, opacity:0, delay:0.6,duration:1})
