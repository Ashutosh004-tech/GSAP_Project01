let tl = gsap.timeline();

tl.from(".tagline",{
    y:400,
    duration:2,
    delay:1,
    opacity:0,
}).from(".logo",{
    y:400,
    duration:2,
    opacity:0,
}).to("img",{
    x:700,
    y:0

})