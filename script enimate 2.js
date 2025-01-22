gsap.from("#page1 #box1",{
    scale:0,
    rotate:360,
    duration:1,
    delay:2,
    backgroundColor:"yellow",

})
gsap.from("#page2 #box2",{
    scale:0,
    rotate:360,
    duration:1,
    delay:2,
    backgroundColor:"yellow",
    scrollTrigger:"#page2 #box2"
})
gsap.from("#page3 #box3",{
    scale:0,
    rotate:360,
    duration:1,
    delay:2,
    backgroundColor:"yellow",
    scrollTrigger:"#page3 #box3"
})
gsap.from("#page4 h1",{
    transform:"Translate(-150%)",
    scrollTrigger:{
        trigger:"#page4",
        scroll:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true

    }
})
