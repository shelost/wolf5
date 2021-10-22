const DOCNAV = Id('docnav')
const MAIN = Class('main')[0]


function setNavbar(){

    let string =
    `
    <div class = 'docheader'>
        <img src = 'Assets/wolf-38.png' alt = 'wolf'>
        <h1> DESIGN DOCS </h1>
    </div>
    `

    for (let i=0; i<DOCS.length; i++){

        string +=
        `
        <a href = '#c-${DOCS[i].title}'>
        <h1 class = 'docbtn'> ${DOCS[i].title} </h1>
        </a>
        `

        for (let j=0; j<DOCS[i].sections.length; j++){

            string +=
            `
            <a href = '#b-${DOCS[i].sections[j].title}'>
            <h2 class = 'docbtn'> ${DOCS[i].sections[j].title} </h2>
            </a>
            `

            string += `<div class = 'subsections'>`

            for (let k=0; k<DOCS[i].sections[j].subsections.length; k++){

                string +=
                `
                <a href = '#a-${DOCS[i].sections[j].subsections[k].title}'>
                <h3 class = 'docbtn hbtn'> ${DOCS[i].sections[j].subsections[k].title} </h3>
                </a>
                `

                console.log(DOCS[i].sections[j].subsections[k].title)
            }

            string += `</div>`
        }
    }

    DOCNAV.innerHTML += string
}

function setContent(){

    let string = ``

    for (let i=0; i<DOCS.length; i++){

        string +=
        `
        <div class = 'd1'>

        <h1 class = 'doctitle' id = 'c-${DOCS[i].title}'> ${DOCS[i].title} </h1>
        `

        if (DOCS[i].blurb){

            string +=
            `
            <p> ${DOCS[i].blurb} </p>
            `

        }

        string +=
        `
        </div>
        `

        for (let j=0; j<DOCS[i].sections.length; j++){


            string +=
            `
            <div class = 'd2'>

            <h2 class = 'doctitle' id = 'b-${DOCS[i].sections[j].title}'> ${DOCS[i].sections[j].title} </h2>
            `

            if (DOCS[i].sections[j].blurb){

                string +=
                `
                <p> ${DOCS[i].sections[j].blurb} </p>
                `

            }

            string +=
            `
            </div>
            `


            for (let k=0; k<DOCS[i].sections[j].subsections.length; k++){

                string +=
                `
                <div class = 'subsection'>

                    <h3 class = 'doctitle htitle' id = 'a-${DOCS[i].sections[j].subsections[k].title}' > ${DOCS[i].sections[j].subsections[k].title} </h3>

                    <p class = 'docp'> ${DOCS[i].sections[j].subsections[k].blurb} </h3>

                </div>

                <div class = 'displays'>
                `

                for (let n=0; n<DOCS[i].sections[j].subsections[k].displays.length; n++){

                    let display = DOCS[i].sections[j].subsections[k].displays[n]

                    if (display.img != null){

                        string +=
                        `
                        <div class = 'display img'>

                        <img src = 'Assets/docs/${display.img}' alt = 'image'>

                        <p> ${display.blurb} </p>

                        </div>
                        `

                    }else{

                        string +=

                        `
                        <div class = 'display'>

                        <p> ${display.blurb} </p>

                        </div>
                        `

                    }
                }

                string += '</div>'

            }

            string += `</div>`
        }
    }

    MAIN.innerHTML += string
}

setNavbar()
setContent()




let DocsLoop = () => {


    for (let i=0; i<Class('doctitle').length; i++){


        let t = Class('doctitle')[i]
        let t2 = null


        for (let j=0; j<Class('docbtn').length; j++){

            let k = Class('docbtn')[j]

            if (k.innerHTML == t.innerHTML){
                t2 = k
            }
        }

        if (t.getBoundingClientRect().top > -50  && t.getBoundingClientRect().top < window.innerHeight/3){
            t2.classList.add('active')

        }else{
            t2.classList.remove('active')
        }

    }

    window.requestAnimationFrame(DocsLoop)
}

window.requestAnimationFrame(DocsLoop)

function Function(){

}

if(condition){
    Function()
}

switch (condition){
    case 1:
        DoThis()
        break;
    case 2:
        DoThat()
        break;
    case 3:
        DoThisOtherThing()
        break;
    default:
        DefaultAction()
        break;
}