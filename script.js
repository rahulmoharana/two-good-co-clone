function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveAnimation();


function videoconAnimation(){
    var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",()=>{
  gsap.to(playbtn,{
    scale:1,
    opacity:1
  })
})
videocon.addEventListener("mouseleave",()=>{
    gsap.to(playbtn,{
        scale:0,
        opacity:0
      })
})
videocon.addEventListener("mousemove",(dets)=>{
    gsap.to(playbtn,{
       left:dets.x-70,
       top:dets.y-80
      })
})

}
videoconAnimation()
function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page1 #video-container",{
      scale:0.9,
      opacity:0,
      delay:1.3,
      duration:0.5,
      
  })
}
loadingAnimation()

function card(){
  var uphead = document.querySelector(".uphead");
  var contano = document.querySelector(".contano");
  var dets = document.querySelector(".dets");
  var goa = document.querySelector(".goa");
  var saa = document.querySelector(".saa");
  var dets1 = document.getElementById("dets1");
  var dets2 = document.getElementById("dets2");
  var goa1 = document.querySelector("#goa1");
  var saa1 = document.querySelector("#saa1");
  
  uphead.addEventListener("mousemove",function(){
    gsap.set(dets,{
      height:"300px"
    }),
    gsap.set(contano,{
      opacity:1,
      scale:1
    })
    

  })
  contano.addEventListener("mouseleave",function(){
    gsap.set(dets,{
      height:"0%"
    }),
    gsap.set(contano,{
      opacity:0,
      scale:0
    })

    

    

  })
  goa.addEventListener("mousemove",function(){
    gsap.set(dets1,{
      height:"300px"
    }),
    gsap.set(saa,{
      opacity:1,
      scale:1
    })
    

  })
  saa.addEventListener("mouseleave",function(){
    gsap.set(dets1,{
      height:"0%"
    }),
    gsap.set(saa,{
      opacity:0,
      scale:0
    })

  
  })

  goa1.addEventListener("mousemove",function(){
    gsap.set(dets2,{
      height:"300px"
    }),
    gsap.set(saa1,{
      opacity:1,
      scale:1
    })
    

  })
  saa1.addEventListener("mouseleave",function(){
    gsap.set(dets2,{
      height:"0%"
    }),
    gsap.set(saa1,{
      opacity:0,
      scale:0
    })

  
  })
  
  
  

  


}
card()
// document.addEventListener("mousemove",function(dets){
//   gsap.to("#cursur",{
//     left:dets.x,
//     top:dets.y
//   })

// })
// document.querySelector(".child").addEventListener("mouseenter",()=>{
//   gsap.to("#cursur",{
//     transform:'scale(1) translate(-50%,-50%)',
    
//   })

// })
// document.querySelector(".child").addEventListener("mouseleave",()=>{
//   gsap.to("#cursur",{
//     transform:'scale(0) translate(-50%,-50%)',
    
//   })

// })
// document.querySelectorAll(".child").forEach((element)=>{
//   element.addEventListener("mousemove",function(dets){
//     gsap.to("#cursur",{
//           left:dets.x,
//           top:dets.y
//     })

//   })
//   element.addEventListener("mouseenter",() =>{
//     gsap.to("#cursur",{
//           transform:'scale(1) translate(-50%,-50%)',
//     })

//   })

//   element.addEventListener("mouseleave",() =>{
//     gsap.to("#cursur",{
//           transform:'scale(0) translate(-50%,-50%)',
//     })

//   })
// })


function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursur", {
      left: dets.x,
      top: dets.y,
    });
  });
  // document.querySelector("#child1").addEventListener("mouseenter",function(){

  // })

  // document.querySelector("#child1").addEventListener("mouseleave",function(){
  //   gsap.to("#cursur",{
  //     transform: 'translate(-50%,-50%) scale(0)'
  //   })
  // })
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursur", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursur", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
  // document.querySelector("#child1").addEventListener("mouseenter",function(){
  //   document.getElementById("#cursur").style.backgroundColor = "grey"

  // })
  
}
cursorAnimation();

function navBaranimation(){
  gsap.to("#nav-part1 svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
      trigger:"#page1",
      scroller:".main",
      start:"top 0",
      end:"top -5%",
      scrub:true,
      
    }
  }),
  gsap.to("#nav-part2 #links",{
    transform:"translateY(-140%)",
    scrollTrigger:{
      trigger:"#page1",
      scroller:".main",
      start:"top 0",
      end:"top -5%",
      scrub:true,
      
    }
  })

}
navBaranimation();


gsap.from("#page2 .elem ",{
  transform:"scale(0)",
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:".main",

    start:"top 80%",
    end:"top 10%",
    
  }
})





  
 


