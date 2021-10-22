let Round = 5

function nextRound(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    })
    if (Round < Brackets.length-2){
        Round += 1
    }else{
        Done()
    }
}

function prevRound(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    })
    if (Round > 2){
        Round -= 1
    }

    Cancel()
}

for (let i=0; i<Brackets.length-1; i++){

    let text, date;

    date = 'March 1'

    switch(true){
        case (i < Brackets.length-6):
            text = `Round of 64`
            date = 'March 22-26'
            break;
        case (i == Brackets.length-6):
            text = `Round of 32`
            date = 'March 29 - April 2'
            break;
        case (i == Brackets.length-5):
            text = 'Sweet 16'
            date = 'April 5 - 9'
            break;
        case (i == Brackets.length-4):
            text = 'Elite 8'
            date = 'April 12'
            break;
        case (i == Brackets.length-3):
            text = 'Final 4'
            date = 'April 16'
            break;
        case (i == Brackets.length-2):
            text = 'Championship'
            date = 'April 19'
            break;
    }

    let string =
    `
    <div class = 'round'>
        <img class = 'img' src = './Assets/madness-49.png'>
        <div class = 'date'>
            <h1> ${text} </h1>
            <h2> ${date} </h2>
        </div>
    `

    if (i == 2){
        string =
        `
        <div class = 'round'>
            <div class = 'splash'>
                <img class = 'img' src = './Assets/madness-49.png'>
                <p id = 'openInfo'> Information </p>

                <div class = 'sponsors'>
                    <h2> Sponsored By </h2>
                    <div>
                        <a href = 'https://www.tapintuit.co/' target = '_blank'>
                            <img src = 'Assets/logos/logo-tapintuit.png' alt = 'Sponsor'>
                        </a>
                        <a href = 'https://dumbmoney.tv/' target = '_blank'>
                            <img src = 'Assets/logos/logo-dumbmoney.png' alt = 'Sponsor'>
                        </a>
                        <a href = 'https://bullish.studio/' target = '_blank'>
                            <img src = 'Assets/logos/logo-bullish.png' alt = 'Sponsor'>
                        </a>
                        <a href = 'https://fremontcapitalpartners.com/' target = '_blank'>
                            <img src = 'Assets/logos/logo-fremont.png' alt = 'Sponsor'>
                        </a>
                        <a href = 'https://tradingview.com/' target = '_blank'>
                            <img src = 'Assets/logos/logo-tradingview.png' alt = 'Sponsor'>
                        </a>
                        <a href = 'https://seekingalpha.com/' target = '_blank'>
                            <img src = 'Assets/logos/logo-seekingalpha.png' alt = 'Sponsor'>
                        </a>
                    </div>
                </div>
                <p id = 'affiliates'> Affiliates </p>
                <a href = '#first'>
                    <div id = 'pointer' aria-label="scroll-down">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14.6px"
                        height="13px" viewBox="0 0 14.6 13" style="overflow:visible;enable-background:new 0 0 14.6 13;" xml:space="preserve">
                            <polyline points="8,0.5 14.1,6.6 8.3,12.5 	"/>
                        </svg>
                    </div>
                </a>
            </div>
            <div class = 'date' id = 'first'>
            <p> For each matchup, tap the stock you think will come out on top! Results will be determined on Twitter <b> @HowlWithWOLF. </b> </p>
                <h1> ${text} </h1>
                <h2> ${date} </h2>
            </div>

        `
    }

    for (let j=0; j<Brackets[i].length; j++){

        let match = `<div class = 'match'>`

        if (j%2 == 1){
            match = `<div class = 'match alternate'>`
        }

        for (let k=0; k<Brackets[i][j].length; k++){

            let name = Brackets[i][j][k]

            let fullName = findFullName(name)

            let seed = findSeed(name)

            match +=   `<div class = 'block' id = '${i}n${j}n${k}'>`

            if (name){
                match +=
                `
                    <img src = './Assets/logos/logo-${name}.png'>
                    <h1> ${name} </h1>
                    <h2> ${fullName} </h2>
                    <h3> ${seed} </h3>
                </div>
                `
            }else{
                match +=
                `
                <img src = './Assets/wolf-logo-2.png' class = 'undecided'>
                    <h1> -- </h1>
                    <h2> Undecided </h2>
                    <h3> -- </h3>
                </div>
                `
            }

            if (k == 0){
                match += `<p class = 'vs'>   VS </p>`
            }
        }

        match += `</div>`

        string += match
    }

    string += `</div`

    Id('mobile').innerHTML += string

}

Id('openInfo').onclick = () => { Info(1)}
Id('affiliates').onclick = () => {Link('affiliates.html')}

function Update(arg){
    for (let i=0;i<Brackets.length; i++){
        for (let j=0; j<Brackets[i].length; j++){
            for (let k=0; k<Brackets[i][j].length; k++){
                let mobile = Id(`${i}n${j}n${k}`)
                let desktop = findBlock(i,j,k)

                // Desktop to Mobile
                if (arg == 0 && mobile && desktop){
                    if (desktop.selected){
                        mobile.classList.add('selected')
                    }else{
                        mobile.classList.remove('selected')
                    }
                }

                // Mobile to Desktop
                if (arg == 1 && mobile && desktop){
                    if (mobile.classList.contains('selected')){
                        desktop.selected = true
                    }else{
                        desktop.selected = false
                    }
                }
            }
        }
    }
}

function setElems(){
    for (let i=0; i<Class('block').length; i++){
        let block = Class('block')[i]
        let id = block.id
        let split = id.split("n")
        let round = parseInt(split[0])
        let match = parseInt(split[1])
        let position = parseInt(split[2])

        let name = Brackets[round][match][position]

        if (name){
            block.childNodes[3].innerHTML = name
            block.childNodes[5].innerHTML = findFullName(name)
            block.childNodes[7].innerHTML = findSeed(name)
            block.childNodes[1].src = `./Assets/logos/logo-${name}.png`
            block.childNodes[1].classList.remove('undecided')
        }else{
            block.childNodes[1].src = `./Assets/wolf-logo-2.png`
            block.childNodes[1].classList.add('undecided')
        }
    }
}

let BracketMobileLoop = () => {

    for (let i=0; i<Brackets.length-1; i++){
        if (i == Round){
            Class('round')[i].classList.add('active')
        }else{
            Class('round')[i].classList.remove('active')
        }
    }

    for (let i=0; i<Class('block').length; i++){
        let block = Class('block')[i]
        let id = block.id
        let split = id.split("n")
        let round = parseInt(split[0])
        let match = parseInt(split[1])
        let position = parseInt(split[2])

        /*
        block.onclick = () => {

            if (Brackets[round][match][position]){

                let n = findNext(round, match)

                block.classList.add('selected')

                if (position == 0){
                    Id(`${round}n${match}n1`).classList.remove('selected')
                }else{
                    Id(`${round}n${match}n0`).classList.remove('selected')
                }

                Brackets[n[0]][n[1]][n[2]] = Brackets[round][match][position]
            }

            setElems()
        }
        */

    }

    window.requestAnimationFrame(BracketMobileLoop)
}

window.requestAnimationFrame(BracketMobileLoop)