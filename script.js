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
}).from("img",{
    scale:0,
    duration:2,
}).to("img",{
    y:20,
    duration:1.5,
    repeat:-1,
    yoyo:true
})