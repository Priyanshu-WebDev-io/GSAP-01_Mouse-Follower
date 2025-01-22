let cursor = document.querySelector("#cursor");
let main = document.querySelector("#main");

main.addEventListener("mousemove",function(a){
    gsap.to(cursor,{
        x:a.x,
        y:a.y,
        duration:0.8,
        ease: "bounce.out",
    })
})