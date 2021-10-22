
let Nav = `
<div class = 'dorm' id = 'navbar'>

    <a href = 'index.html'>
        <div>
            <img id = 'mast' src = 'Assets/wolf-pill-blue.png'>
        </div>
    </a>

    <div id = 'nav'>
        <a href = 'index.html'>
            <h1 id = 'index' class = 'navbtn'> Home </h1>
        </a>
        <a href = 'about.html'>
            <h1 id = 'about' class = 'navbtn'> About </h1>
        </a>
        <a href = 'blog.html'>
            <h1 id = 'blog' class = 'navbtn'> Blog </h1>
        </a>
    </div>

</div>

<div id = 'navfab'>
    <div></div>
    <div></div>
    <div></div>
</div>

<div id = 'dark'> </div>

<div id = 'modal'>

    <div class = 'container visible'>
        <h1> Try Wolf Today </h1>
        <div class = 'horflex'>
            <input type = 'email' id = 'email' placeholder = 'EMAIL' aria-label = "email">
            <button id = 'beta'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14.6px"
                height="13px" viewBox="0 0 14.6 13" style="overflow:visible;enable-background:new 0 0 14.6 13;" xml:space="preserve">
                    <g id = 'arrow'>
                        <line x1="0.5" y1="6.5" x2="13.9" y2="6.5"/>
                        <polyline points="8,0.5 14.1,6.6 8.3,12.5 	"/>
                    </g>
                </svg>
            </button>
        </div>
    </div>

    <div class = 'container'>
        <h1> You've been signed up! </h1>
        <h2> Check your email for updates. </h2>
        <button id = 'ok'> OK </button>
    </div>

</div>

`

let Footer =
`
<div class = 'footer'>
        <div class = 'columns'>
            <div class = 'column'>
                <h3> Social </h3>
                <a href = 'https://twitter.com/WOLF_Financial'>
                    <div class = 'foot'>
                        <img src = 'Assets/icon-01.png' alt = 'Footer Logo'>
                        <p class = 'foot'> Twitter </p>
                    </div>
                </a>
                <a href = 'https://www.tiktok.com/@wolf_financial?lang=en'>
                    <div class = 'foot'>
                        <img src = 'Assets/icon-02.png' alt = 'Footer Logo'>
                        <p class = 'foot'> TikTok </p>
                    </div>
                </a>
                <a href = 'https://www.instagram.com/wolfinancial/'>
                    <div class = 'foot'>
                        <img src = 'Assets/icon-04.png' alt = 'Footer Logo'>
                        <p class = 'foot'> Instagram </p>
                    </div>
                </a>
                <a href = 'https://www.linkedin.com/company/wolf-financial/'>
                    <div class = 'foot'>
                        <img src = 'Assets/icon-03.png' alt = 'Footer Logo'>
                        <p class = 'foot'> LinkedIn </p>
                    </div>
                </a>
            </div>
            <div class = 'column'>
                <h3> Legal & Contact </h3>
                <a href = 'privacy.html'>
                    <div class = 'foot'>
                        <img src = 'Assets/icon-05.png' alt = 'Footer Logo'>
                        <p class = 'foot'> Privacy Policy </p>
                    </div>
                </a>
                <a href = 'contact.html'>
                    <div class = 'foot'>
                        <img src = 'Assets/icon-06.png' alt = 'Footer Logo'>
                        <p class = 'foot'> Contact </p>
                    </div>
                </a>
            </div>
        </div>
        <div class = 'bottom'>
            <h2> © 2021 InvestingWolf LLC. All Rights Reserved. </h2>
        </div>
    </div>
`

Tag('body')[0].innerHTML = Nav + Tag('body')[0].innerHTML + Footer

for (let i=0; i<Class('navbtn').length; i++){
    let navbtn = Class('navbtn')[i]
    navbtn.classList.remove('active')
}