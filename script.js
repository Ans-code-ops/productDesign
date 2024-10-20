const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageAni() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".boundingelm", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 1.5,
            delay: -1,
            stagger: 0.2
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut

        });
}
function criclechapkr() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        cricleMouseFollowers(xscale, yscale);
    });
}



function cricleMouseFollowers(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${xscale}, ${yscale})`;

    });
}
criclechapkr();
cricleMouseFollowers();
firstpageAni();
// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye
document.querySelectorAll(".elm").forEach(function (elm) {
    var rotate = 0;
    var diffrot = 0;
  
    elm.addEventListener("mouseleave", function (dets) {
      gsap.to(elm.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elm.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elm.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elm.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
