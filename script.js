gsap.to(".a",{
    scrollTrigger:{
        trigger:"#one",
        // markers:true,
        start:"top top ",
        end:"bottom 30%",
        scrub:2
    },
    ease:Power1,
    duration:2,
    stagger:.2,
    opacity:0,
})
gsap.to(".b",{
    scrollTrigger:{
        trigger:"#two",
        start:"top 30%",
        // markers:true,
        end:"centre 10%",
        scrub:2

    },
    width:"30%",
    ease:Power1,
    duration:2

})