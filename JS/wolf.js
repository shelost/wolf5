// Dynamically write Wolf HTML

let Wolf =

`
<div class='background'>
    <svg id='wolf' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px" width="338.5px" height="431.5px" viewBox="0 0 338.5 431.5"
      style="overflow:visible;enable-background:new 0 0 338.5 431.5;" xml:space="preserve">
      <style type="text/css">

      </style>
      <defs>
      </defs>
      <g>
        <polygon class="st1 wolf-poly" points="169.2,266.5 58.2,203.6 132,266.5 " />
        <polygon class="st1 wolf-poly" points="132,266.5 132,330.7 149.1,310.7 " />
        <polygon class="st1 wolf-poly" points="146,186.5 58.2,203.8 72.6,153.2 " />
        <polygon class="st1 wolf-poly" points="192.5,186.5 280.3,203.8 265.9,153.2 " />
        <polygon class="st1 wolf-poly" points="169.2,266.5 280.2,203.6 206.4,266.5 " />
        <polygon class="st1 wolf-poly" points="206.4,330.7 169.2,330.6 169.2,330.6 132,330.7 169.2,317.7 169.2,317.7 " />
        <polygon class="st1 wolf-poly" points="206.4,266.5 206.4,330.7 189.4,310.7 	" />

        <polygon class="st3 wolf-poly" points="169.4,50.9 169.4,50.9 169.2,50.9 " />
        <polygon class="st3 wolf-poly" points="107.7,153.2 51.2,104.8 28.7,153.1 " />
        <polygon class="st3 wolf-poly" points="0,299.5 169.2,431.5 132,330.7 " />
        <polygon class="st3 wolf-poly" points="230.7,153.2 287.3,104.8 309.7,153.1 " />
        <polygon class="st3 wolf-poly" points="228.3,64 169.2,266.5 169.2,266.5 169.2,266.5 110.1,64 169.1,50.9 169.2,50.9 169.4,50.9 " />
        <polygon class="st3 wolf-poly" points="169.2,266.5 169.2,266.5 169.2,266.5 	" />
        <polygon class="st3 wolf-poly" points="169.2,50.9 169.1,50.9 169.1,50.9 	" />
        <polygon class="st3 wolf-poly" points="338.5,299.5 169.2,431.5 206.4,330.7 	" />

        <polygon class="st4 wolf-poly" points="28.7,153.1 0,299.5 132,330.7 " />
        <polygon class="st4 wolf-poly" points="24.8,318.8 58.2,386.8 144.5,412.2 " />
        <polygon class="st4 wolf-poly" points="287.3,104.8 228.3,64 192.5,186.5 " />
        <polygon class="st4 wolf-poly" points="206.4,330.7 169.2,431.5 169.2,431.5 169.2,431.5 132,330.7 169.2,330.6 169.2,330.6 " />
        <polygon class="st4 wolf-poly" points="169.2,431.5 169.2,431.5 169.2,431.5 	" />
        <polygon class="st4 wolf-poly" points="309.7,153.1 338.5,299.5 206.4,330.7 	" />
        <polygon class="st4 wolf-poly" points="313.6,318.8 280.3,386.8 193.9,412.2 	" />
        <polygon class="st4 wolf-poly" points="51.2,104.8 110.1,64 146,186.5 " />

        <polygon class="st2 wolf-poly" points="146,186.5 169.2,266.5 58.2,203.6 " />
        <polygon class="st2 wolf-poly" points="58.2,203.6 28.8,152.9 72.6,153.2 " />
        <polygon class="st2 wolf-poly" points="2.8,0 51.2,104.8 28.7,153.1 	" />
        <polygon class="st2 wolf-poly" points="169.2,317.7 132,330.7 149.1,310.7 " />
        <polygon class="st2 wolf-poly" points="58.2,203.6 132,330.7 132,266.5 	" />
        <polygon class="st2 wolf-poly" points="192.5,186.5 169.2,266.5 280.2,203.6 	" />
        <polygon class="st2 wolf-poly" points="280.2,203.6 309.7,152.9 265.9,153.2 	" />
        <polygon class="st2 wolf-poly" points="169.2,317.7 206.4,330.7 189.4,310.7 	" />
        <polygon class="st2 wolf-poly" points="280.2,203.6 206.4,330.7 206.4,266.5 	" />
        <polygon class="st2 wolf-poly" points="335.7,0 287.3,104.8 309.7,153.1 	" />

        <polygon class="st4 wolf-poly" points="206.4,266.5 169.2,317.7 169.2,317.7 132,266.5 169.2,285.8 169.2,285.8 " />

        <polygon class="st5 wolf-poly" points="287.3,104.8 335.7,0 228.3,64 " />
        <polygon class="st5 wolf-poly" points="169.2,317.7 189.4,310.7 206.4,266.5 " />
        <polygon class="st5 wolf-poly" points="206.4,266.5 169.2,285.8 169.2,285.8 169.2,285.8 132,266.5 169.2,266.5 169.2,266.5 " />
        <polygon class="st5 wolf-poly" points="51.2,104.8 2.8,0 110.1,64 	" />
        <polygon class="st5 wolf-poly" points="169.2,317.7 149.1,310.7 132,266.5 " />

        <polygon class="st0 wolf-poly eye" points="146,186.5 72.6,153.2 107.7,153.2 " />
        <polygon class="st0 wolf-poly eye" points="192.5,186.5 265.9,153.2 230.7,153.2 	" />

      </g>
    </svg>
  </div>
`


// Mobile Navigation

// Animated Wolf

var CX = window.innerWidth/2;
var CY = window.innerHeight/2;

var initPositions = []

for (let i=0; i<Class('wolf-poly').length; i++){
    let poly = Class('wolf-poly')[i];
    initPositions.push([poly.getBoundingClientRect().x, poly.getBoundingClientRect().y]);
}

var MX, MY;

var FY = CY;
var FYS = 0;
var up = true;

const loop = () => {

    for (let i=0; i<Class('wolf-poly').length; i++){

        let poly = Class('wolf-poly')[i];
        let px = poly.getBoundingClientRect().x
        let py = poly.getBoundingClientRect().y

        var q;

        switch(true){

            case Contains(poly, 'st5'):
                q = 12;
                break;
            case Contains(poly, 'st6'):
                q = 12;
                break;
            case Contains(poly, 'st1'):
                q = 10;
                break;
            case Contains(poly, 'st2'):
                q = 8;
                break;
            case Contains(poly, 'st3'):
                q = 8;
                break;
            case Contains(poly, 'st4'):
                q = 7;
                break;
            case Contains(poly, 'st0'):
                q = 8;
                break;
            default:
                q = 1;
                break;
        }

        let b = 1;

        if (MX-CX > 0){
            b = 1;
        }else{
            b = -1;
        }

        let dist = Math.sqrt((MX-px)**2 + (MY-py)**2)

        let angle = (dist/700)*10

        poly.style.transform = `translate(${Math.floor(MX-CX)*0.003*q}px, ${Math.floor(MY-CY)*0.003*q}px) rotate3D(0,0,1,${b*angle*0.1}deg)`


      if (window.innerWidth < 800){

        if (up){
            FYS -= 0.015;
        }else{
            FYS += 0.015;
        }

        FY += FYS;
        FYS *= 0.9;

        if (FY < CY -200){
            up = false;
        }

        if (FY > CY +200){
            up = true;
        }

       poly.style.transform = `translate(0px, ${Math.floor(FY-CY)*0.005*q}px)`

      }
    }

    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)

window.addEventListener('mousemove', e => {
    MX = e.clientX;
    MY = e.clientY;
})

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to a more compatible method here
    }
  });


