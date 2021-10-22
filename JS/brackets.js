
let Brackets = [
    // Round 0
    [
        ['BTC', 'BNGO'], ['BB', 'SNDL'], ['ETH', 'FIZZ',], ['DOGE', 'TLRY'], ['NAKD', 'SKLZ'], ['AMC', 'XRP'], ['NOK', 'OZON',], ['GME', 'NIO'], ['TSLA', 'ETSY'], ['ZM', 'PLTR'], ['TWTR', 'SNAP',], ['AAPL', 'SE'], ['SPOT', 'SQ'], ['CELH', 'MGNI'], ['DKNG', 'PENN',], ['DMTK', 'MWK'], ['GM', 'CVS'], ['GS', 'JPM'], ['TAP', 'WM',], ['JNJ', 'FB'], ['KO', 'PEP'], ['BABA', 'AMZN'], ['BA', 'IBM',], ['BRK', 'ABBV'], ['ARKK', 'BLOK'], ['PSTH', 'IPOH'], ['BETZ', 'SLV',], ['NERD', 'GLD'], ['SPY', 'BUZZ'], ['SPCE', 'ARKG'], ['QQQJ', 'VOO'], ['VTI', 'WANT'],
    ],
    // Round 1
    [
        ['BTC', 'SNDL'], ['ETH', 'DOGE'], ['SKLZ', 'XRP'], ['OZON', 'GME'], ['TSLA', 'PLTR'], ['TWTR', 'SE'], ['SQ', 'CELH'], ['PENN', 'DMTK'],['GM', 'GS'], ['TAP', 'FB'], ['KO', 'BABA'], ['BA', 'ABBV'], ['ARKK', 'PSTH'], ['SLV', 'NERD'], ['BUZZ', 'SPCE'], ['QQQJ', 'VTI']
    ],
    // Round 2
    [
        ['BTC', 'ETH'], ['XRP', 'GME'], ['PLTR', 'SE'], ['SQ', 'DMTK'], ['GS', 'FB'], ['BABA', 'ABBV'], ['PSTH', 'SLV'], ['BUZZ', 'QQQJ']
    ],
    // Round 3
    [
        ['BTC', 'GME'], ['PLTR', 'SQ'], ['FB', 'BABA'], ['PSTH', 'BUZZ']
    ],
    // Round 4
    [
        ['BTC', 'PLTR'], ['FB', 'BUZZ']
    ],
    // Round 5
    [
        ['PLTR', 'BUZZ']
    ],
    // Round 6
    [
        [null]
    ]
]

let Key = {
    "BTC": ["Bitcoin",1],
    "BNGO": ['Bionano Genomics',16],
    "BB": ['Blackberry',8],
    "SNDL": ['Sundial Growers',9],
    "ETH": ['Ethereum',5],
    "FIZZ": ['National Beverage',12],
    "DOGE": ['Dogecoin',4],
    "TLRY": ['Tilray',13],
    "NAKD": ['Naked Brand',6],
    "SKLZ": ['Skillz',11],
    "AMC": ['AMC Entertainment',3],
    "XRP": ['Ripple',14],
    "NOK": ['Nokia',7],
    "OZON": ['Ozon Holdings',10],
    "GME": ['Gamestop',2],
    "NIO": ['Nio',15],
    "TSLA": ['Tesla',1],
    "ETSY": ['Etsy',16],
    "ZM": ['Zoom',8],
    "PLTR": ['Palantir Technologies',9],
    "TWTR": ['Twitter',5],
    "SNAP": ['Snapchat',12],
    "AAPL": ['Apple',4],
    "SE": ['Sea Ltd',13],
    "SPOT": ['Spotify',6],
    "SQ": ['Square',11],
    "CELH": ['Celsius Holdings',3],
    "MGNI": ['Magnite',14],
    "DKNG": ['DraftKings',7],
    'PENN': ['Penn National Gaming',10],
    'DMTK': ['DermTech', 2],
    'MWK': ['Mohawk Group Holdings',15],
    'GM': ['General Motors',1],
    'CVS': ['CVS Health',16],
    'GS': ['Goldman Sachs',8],
    'JPM': ['JP Morgan',9],
    'TAP': ['Molson Coors',5],
    'WM': ['Waste Management',12],
    'JNJ': ['Johnson & Johnson',4],
    'FB': ['Facebook',13],
    'KO': ['Coca-Cola',6],
    'PEP': ['PepsiCo',11],
    'BABA': ['Alibaba',3],
    'AMZN': ['Amazon',14],
    'BA': ['Boeing',7],
    'IBM': ['IBM',10],
    'BRK': ['Berkeshire Hathaway',2],
    'ABBV': ['AbbVie',15],
    'ARKK': ['Ark Innovation ETF',1],
    'BLOK': ['Amplify Transformational Data',16],
    'PSTH': ['Pershing Square Tontine Holdi...',8],
    'IPOH': ['Social Capital Hedosophia Hold...',9],
    'BETZ': ['Roundhill Sports Betting',5],
    'SLV': ['iShares Silver Trust',12],
    'NERD': ['Roundhill BITKRAFT eSports',4],
    'GLD': ['SPDR Gold Trust',13],
    'SPY': ['SPDR S&P 500',6],
    'BUZZ': ['Vaneck Vectors Social Sentime...',11],
    'SPCE': ['Virgin Galactic Holdings',3],
    'ARKG': ['Ark Genomic Revolution',14],
    'QQQJ': ['Invesco NASDAQ Next Gen 100...',7],
    'VOO': ['Vanguard S&P500 ETF',10],
    'VTI': ['Vanguard Total Stock Market ETF',2],
    'WANT': ['Direxion Daily Consumer Discr...', 15]
}

// INITIALIZE ELEMENTS

let Blocks = []
let Buttons = []
let rowHeight, colWidth, bHeight, bWidth, M_X, M_Y, numCols, numRows, rect, mobileHeight;
let mousedown = false
let thresehold = 0

let canvas = Id('canvas')
let ctx = canvas.getContext('2d')

let bg = Id('bg')
let bgx = bg.getContext('2d')

let ResetButton = new Button(0,0, 200, 100,10, '#a0a0a0', 'white', Reset, 'Reset')
let DoneButton = new Button(0,0, 200, 100,10, '#0074ff', 'white',Done, 'Done!')
let InfoButton = new Button(0,0,300,100,10,'#ffce00', 'black', Info.bind(1), 'Information')
let AffButton = new Button(0,0,300,100,10,'#e0e0e0', 'black', () => {Link('affiliates.html')}, 'See Affiliates')

Id('submit').onclick = () => { uploadImage(bg.toDataURL('image/png'),1) }

Id('cancel').onclick = Cancel
Id('closeInfo').onclick = () => { Info(0)}

Buttons.push(InfoButton, AffButton)

// Button functions
function Reset(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    })
    setTimeout(()=>{
        location.reload()
    },200)
}

function Link(url){

    window.open(url, '_blank')
}

function Info(arg){
    if (arg == 0){
        Id('info').classList.remove('active')
    }else{
        Id('info').classList.add('active')
    }
}

// Initialize images
let Madness = new Image()
Madness.src = 'Assets/logos/madness-50.png'

let Logo = new Image()
Logo.src = 'https://wolf-images-public.s3.amazonaws.com/fc836af3-6310-4fab-a729-64874652296f/appicon-wolf.png'


// Create blocks
for (let i=0; i<Brackets.length; i++){
    for (let j=0; j<Brackets[i].length; j++){
        for (let k=0; k<Brackets[i][j].length; k++){

            let block = new Block(i,j,k)
            Blocks.push(block)
        }
    }
}

// RESIZING
function Resize(){

    if (window.innerWidth > 800){
        canvas.width = window.innerWidth*2
        canvas.height = window.innerHeight*2
    }else{
        canvas.width = 1600
        canvas.height = 900

    }
    numCols = Brackets.length*2-1
    numRows = Brackets[0].length
    rowHeight = canvas.height/numRows
    colWidth = canvas.width/(numCols-1)
    bHeight = rowHeight*0.7
    bWidth = colWidth*0.9
    rect = canvas.getBoundingClientRect();
    bg.width = canvas.width
    bg.height = canvas.height

    ResetButton.x = canvas.width/2-100
    ResetButton.y = canvas.height/2-bHeight*10
    ResetButton.h = bHeight*1.8

    DoneButton.x = canvas.width/2-100
    DoneButton.y = canvas.height/2 + bHeight*3
    DoneButton.h = bHeight*1.8

    InfoButton.x = canvas.width/2-150
    InfoButton.y = canvas.height/2-bHeight*12.5
    InfoButton.h = bHeight*1.8

    AffButton.x = canvas.width/2-150
    AffButton.y = canvas.height/2+bHeight*21
    AffButton.h = bHeight*1.8

}

mobileHeight = window.innerHeight

Resize()

// Sponsors
let Sponsors = [
    ['tapintuit', 'https://www.tapintuit.co/'],
    ['dumbmoney', 'https://dumbmoney.tv/'],
    ['bullish', 'https://bullish.studio/'],
    ["fremont", 'https://fremontcapitalpartners.com/'],
    ["tradingview", 'https://www.tradingview.com/'],
    ["seekingalpha", 'https://seekingalpha.com/']
]

let SponsorBlocks = []

let SponsorLogos = []

for (let i=0; i<Sponsors.length; i++){

    let sponsor = Sponsors[i][0]

    let img = new Image()
    img.src = `./Assets/logos/logo-${sponsor}.png`

    let block = new Button(canvas.width/2-bHeight*7.75+bHeight*4*i, canvas.height/2+bHeight*13.75, bHeight*3.5, bHeight*3.5, 10, '#a0a0a0', 'white', () => {Link(Sponsors[i][1])}, 'Reset')

    SponsorLogos.push([img, block])
}

function setBackground(){

    bgx.fillStyle = 'white'
    bgx.fillRect(0,0, canvas.width, canvas.height)

    for (let i=0; i<Blocks.length; i++){
        let block = Blocks[i]

        let coords = setCoords(block.round, block.match, block.position)
        block.x = coords[0]
        block.y = coords[1]
        block.h = bHeight

        if (block.round == 0 || block.round == Brackets.length-1){
            block.w = bWidth*1.9
        }else{
            block.w = bWidth*0.8
        }

        block.line(bgx)
        block.draw(bgx)
    }

    for (let i=0; i<Buttons.length; i++){
        let button = Buttons[i]
        button.draw(ctx)
    }

    bgx.fillStyle = 'black'
    Squircle(bgx, bWidth*0.05, bWidth*0.1, bWidth*0.2, canvas.height/2-bWidth*0.2, 5)
    Squircle(bgx, bWidth*0.05, canvas.height/2+bWidth*0.1, bWidth*0.2, canvas.height/2-bWidth*0.2, 5)
    Squircle(bgx, canvas.width-bWidth*0.25, bWidth*0.1, bWidth*0.2, canvas.height/2-bWidth*0.2, 5)
    Squircle(bgx, canvas.width-bWidth*0.25, canvas.height/2+bWidth*0.1, bWidth*0.2, canvas.height/2-bWidth*0.2, 5)

    bgx.rotate(-Math.PI/2)
    bgx.font = `${bWidth*0.15}px Poppins`
    bgx.fillStyle = 'white'
    bgx.fillText('Zoomer', -canvas.height/4-bgx.measureText('Zoomer').width*0.6, bWidth*0.2)
    bgx.fillText('Stonks', -3*canvas.height/4-bgx.measureText('Stonks').width*0.4, bWidth*0.2)
    bgx.rotate(Math.PI)
    bgx.fillText('Boomer', canvas.height/4-bgx.measureText('Boomer').width*0.6, -canvas.width+bWidth*0.2)
    bgx.fillText('Warren & Chamath', 3*canvas.height/4-bgx.measureText('Warrren & Chamath').width*0.6, -canvas.width+bWidth*0.2)
    bgx.rotate(-Math.PI/2)

    // Madness
    bgx.drawImage(Madness, canvas.width/2-bHeight*8, canvas.height/2-bHeight*22, bHeight*16, bHeight*6)

    bgx.fillStyle = 'white'
    bgx.strokeStyle = 'white'
    Squircle(bgx, canvas.width/2-bWidth*2, canvas.height/2-bHeight*16, bWidth*4, bHeight*1.2, 0)

    bgx.font = `600 ${bHeight*0.7}px Poppins`
    let tw = bgx.measureText('Tournament held on Twitter @HowlWithWOLF').width
    bgx.fillStyle = 'black'
    bgx.fillText('Tournament held on Twitter @HowlWithWOLF', canvas.width/2-tw/2, canvas.height/2-bHeight*15)

    // Sponsors
    bgx.fillStyle = 'white'
    bgx.strokeStyle = 'white'
    Squircle(bgx, canvas.width/2-bWidth*1.2, canvas.height/2+bHeight*11, bWidth*2.4, bHeight*1.2, 0)

    bgx.font = `${bHeight}px Poppins`
    let sw = bgx.measureText('Sponsored By').width
    bgx.fillStyle = 'black'
    bgx.fillText('Sponsored By', canvas.width/2-sw/2, canvas.height/2+bHeight*9)

    bgx.fillStyle = '#f0f0f0'
    bgx.strokeStyle = 'white'
    Squircle(bgx, canvas.width/2-bHeight*7, canvas.height/2+bHeight*10, bHeight*14, bHeight*10, 30)

    for (let i=0; i<SponsorLogos.length; i++){

        let img = SponsorLogos[i][0]
        let block = SponsorLogos[i][1]

        block.w = bHeight*3.5
        block.h = bHeight*3.5

        if (i < SponsorLogos.length/2){
            block.x = canvas.width/2-bHeight*5.75+bHeight*4*i
            block.y = canvas.height/2+bHeight*11
        }else{
            block.x = canvas.width/2-bHeight*5.75+bHeight*4*(i-3)
            block.y = canvas.height/2+bHeight*15
        }


        bgx.drawImage(img, block.x, block.y, block.w, block.h)
    }
}

function setNames(){
    for (let i=0; i<Blocks.length; i++){
        let b = Blocks[i]
        b.name = Brackets[b.round][b.match][b.position]
        b.fullName = findFullName(b.name)
        b.seed = findSeed(b.name)
        if (b.name){
            b.image.src = `./Assets/logos/0.06x/logo-48-${b.name}.png`
        }
    }
    setBackground()
}

setNames()


window.onresize = () => {
    setNames()
    Resize()
    setBackground()

    if (window.innerWidth > 800){
        Update(0)
    }else{
        Update(1)
    }
}

// Hover

window.addEventListener("mousemove", e => {

    M_X = (e.pageX-canvas.offsetLeft)*2
    M_Y = (e.pageY-canvas.offsetTop)*2

    setTimeout(()=>{
        mousedown = false
    },7000)

})

window.addEventListener("mousedown", e => {
    mousedown = true
})

window.addEventListener("mouseup", e => {
    mousedown = false
})

function Hover(target){

    if (M_X > target.x && M_X < target.x + target.w && M_Y > target.y && M_Y < target.y+target.h){
        return true
    }else{
        return false;
    }



}

function setCoords(round, match, position){

    let numMatches = Brackets[round].length

    // Set X Position
    let xPos;

    if (match < numMatches/2){
        xPos = bWidth*2.3+(round-1)*bWidth*0.88
    }else{
        xPos = canvas.width-bWidth*2.2-(round)*bWidth*0.88
    }

    if (round == Brackets.length-2 && position == 1){
        xPos = canvas.width-bWidth*2.2-(round)*bWidth*0.88
    }

    if (round == 0){
        if (match < numMatches/2){
            xPos = bWidth*0.3
        }else{
            xPos =  canvas.width-bWidth*2.2
        }
    }

    // Set Y Position
    let secHeight = canvas.height/(numMatches/2)
    let row;

    if (match < numMatches/2){
        row = match
    }else{
        row = match-numMatches/2
    }

    let yPos = secHeight*row+secHeight/2-bHeight*1.2

    if (position > 0){
        yPos += bHeight*1.2
    }

    // If one block, center it
    if (round >= Brackets.length-2){
        yPos = canvas.height/2-bHeight/2
    }

    // Final block
    if (round == Brackets.length-1){
        xPos = canvas.width/2-bWidth*1.9/2
        yPos = canvas.height/2-bHeight*5
    }

    return [xPos, yPos]
}


function findNext(round, match){
    let i = round+1
    let j = match/2
    let k = 0

    if (match%2>0){
        j = (match-1)/2
        k = 1
    }

    if (round == Brackets.length-2){
        i = Brackets.length-1
        j = 0
        k = 0
    }

    if (round >= Brackets.length-1){
        i = 0
        j = 0
        k = 0
    }

    return [i,j,k]
}

function findFullName(ticker){
    for (var prop in Key){
        if (prop == ticker){
            return Key[prop][0]
        }
    }
}

function findSeed(ticker){
    for (var prop in Key){
        if (prop == ticker){
            return Key[prop][1]
        }
    }
}

function findBlock(round, match, position) {
    for (let i=0; i<Blocks.length; i++){
        let b = Blocks[i]

        if (b.round == round && b.match == match && b.position == position){
            return b;
        }
    }
}

function findMatch(round, match, position){
    for (let i=0; i<Blocks.length; i++){
        let b = Blocks[i]

        if (b.round == round && b.match == match && b.position != position){
            return b;
        }
    }
}

function Cancel(){
    Class('modal')[0].classList.remove('active')
}


let objectUrl = ''


let OBJECT = {
    name: '',
    email: '',
    phoneNumber: '',
    imageUrl: '',
    return: null,
    array: [],
}


function Upload(object){

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"name":object.name,"email":object.email,"phoneNumber": object.phoneNumber,"imageUrl": object.imageUrl,"return":object.return,"data":object.array, });

    // Post object to server
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.wolf.financial/v1/community-events/market-madness/create", requestOptions)
    .then(response => {if (!response.ok) {
            throw Error(response.statusText);
        } ; return response.text()})
    .then(result => {
             alert("You've submitted your bracket! Thank you for participating in Market Madness.")
        })
    .catch(error => {
        console.log('error', error)
        alert("Oops! Something went wrong.")
    });
}


function uploadImage(dataURL){

    let blob = dataURItoBlob(dataURL)

    // Get signedURL & objectURL
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://api.wolf.financial/v1/files/signed-urls/image-upload?contentType=image/png", requestOptions)
    .then(response => response.json())
    .then(result => {

        console.log('STEP 1:')
        console.log(result)
        console.log(result.payload.signedUrl)
        objectUrl = result.payload.objectUrl
        console.log(objectUrl)


        const upload = () => {
            fetch(result.payload.signedUrl, {
            method: 'PUT',
            headers: {
                "Content-Type": "image/png"
            },
            body: blob
            })
            .then(response => response.json())
            .then(success => {
                console.log(success)

            })
            .catch(
                error => console.log(error)
            );
        }

        upload()


        Submit(objectUrl)

    })
    .catch(error => console.log('error', error));
}

function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/png'});
}

function Done(){

    let valid  = true

    for (let i=0; i<Brackets.length; i++){
        for (let j=0; j<Brackets[i].length; j++){
            for (let k=0; k<Brackets[i][j].length; k++){
                if (!Brackets[i][j][k]){
                   valid = false
                }
            }
        }
    }

    if (valid){
        Class('modal')[0].classList.add('active')
    }else{
        var alerted = localStorage.getItem('alerted') || '';
        if (alerted != 'yes') {
         alert('Please finish your bracket before submitting.');
         localStorage.setItem('alerted','yes');
        }
    }

    setTimeout(()=>{
        localStorage.setItem('alerted','no');
    }, 3000)
}

localStorage.setItem('submitted', 'no')

function Submit(){

    if (Id('name').value.length < 1){
        Id('name').classList.add('error')
        setTimeout(()=> {
            Id('name').classList.remove('error')
        }, 1000)
        setTimeout(()=> {
            alert('Please enter your name.')
        }, 200)
    }else if (!isValid(Id('email').value)){
        Id('email').classList.add('error')
        setTimeout(()=> {
            Id('email').classList.remove('error')
        }, 1000)
        setTimeout(()=> {
            alert('Please enter a valid email address.')
        }, 200)
    }else if ( typeof Number(Id('tiebreaker').value) != 'number' || isNaN(Number(Id('tiebreaker').value)) || Id('tiebreaker').value.length < 1 ){

        Id('tiebreaker').classList.add('error')
        setTimeout(()=> {
            Id('tiebreaker').classList.remove('error')
        }, 1000)
        setTimeout(()=> {
            alert('Please enter a number for % return.')
        }, 200)
    }else if (!Id('checkbox').checked){
        setTimeout(()=> {
            alert('Please agree to the Terms and Conditions before submitting your bracket.')
        }, 200)
    }else{

        if (localStorage.getItem('submitted') != 'yes'){
            OBJECT.name = Id('name').value
            OBJECT.email = Id('email').value
            OBJECT.return = Id('tiebreaker').value
            OBJECT.array = Brackets
            OBJECT.phoneNumber = Id('phoneNumber').value
            OBJECT.imageUrl = objectUrl

            console.log('STEP 2: ')
            console.log(OBJECT)
            console.log(objectUrl)

            Upload(OBJECT)
            localStorage.setItem('submitted', 'yes')
        }

        setTimeout(() => {
            localStorage.setItem('submitted', 'no')
        },2000)

        setTimeout(Cancel, 100)
    }

}

function isValid(email){
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return regex.test(email)
}

function Button(x,y,w,h,r,color, textColor,fn,name){

    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.r = r
    this.name = name
    this.color = color
    this.textColor = textColor
    this.fn = fn

    this.draw = function(context){
       context.fillStyle = this.color
       context.beginPath()
       context.moveTo(this.x+this.r, this.y)
       context.lineTo(this.x+this.w-this.r, this.y)
       context.arc(this.x+this.w-this.r, this.y+this.r, this.r, Math.PI*3/2, Math.PI*2)
       context.lineTo(this.x+this.w, this.y+this.h-this.r)
       context.arc(this.x+this.w-this.r, this.y+this.h-this.r,this.r, 0, Math.PI/2)
       context.lineTo(this.x+this.r, this.y+this.h)
       context.arc(this.x+this.r, this.y+this.h-this.r, this.r, Math.PI/2, Math.PI)
       context.lineTo(this.x, this.y+this.r)
       context.arc(this.x+this.r, this.y+this.r, this.r, Math.PI, Math.PI*3/2)
       context.fill()
       context.closePath()

       context.globalAlpha = 1
       context.font = `500 ${bHeight*0.8}px Poppins`
       context.fillStyle = this.textColor
        let width =context.measureText(this.name).width,
            height =context.measureText(this.name).height
        if (this.name){
           context.fillText(this.name, this.x+this.w/2-width/2, this.y+this.h/2+bHeight/4)
        }

    }
}

function Squircle(context,x,y,w,h,r){

    context.beginPath()
    context.moveTo(x+r, y)
    context.lineTo(x+w-r, y)
    context.arc(x+w-r, y+r, r, Math.PI*3/2, Math.PI*2)
    context.lineTo(x+w, y+h-r)
    context.arc(x+w-r, y+h-r,r, 0, Math.PI/2)
    context.lineTo(x+r, y+h)
    context.arc(x+r, y+h-r, r, Math.PI/2, Math.PI)
    context.lineTo(x, y+r)
    context.arc(x+r, y+r, r, Math.PI, Math.PI*3/2)
    context.fill()
    context.stroke()
    context.closePath()
}

function Block(round,match,position){

    this.w = bWidth*0.8
    if (round == 0 || round == Brackets.length-1){
        this.w = bWidth*1.9
    }
    this.h = bHeight
    this.r = 5
    this.name = Brackets[round][match][position]
    this.selected = false
    this.round = round
    this.match = match
    this.position = position
    this.fullName = ''
    this.seed = ''
    this.image = new Image()

    let fullName = findFullName(this.name)
    let seed = findSeed(this.name)

    if (fullName){
        this.fullName = fullName
        this.seed = seed
        this.image.src = `./Assets/logos/0.06x/logo-48-${this.name}.png`
    }

    let coords = setCoords(round, match, position)

    this.x = coords[0]
    this.y = coords[1]

    this.line = function(context){

        context.lineWidth = 1
        context.strokeStyle = 'black'
        context.beginPath()

        if (this.round < Brackets.length-3 && this.position == 0){
            if (this.x < canvas.width/2){

                context.moveTo(this.x+this.w, this.y+this.h*1.1)
                context.lineTo(this.x+this.w+bWidth*0.5, this.y+this.h*1.1)

                if (this.match % 2 == 0){
                    context.lineTo(this.x+this.w+bWidth*0.5, this.y+this.h*1.1+canvas.height/Brackets[this.round].length)
                }else{
                    context.lineTo(this.x+this.w+bWidth*0.5, this.y+this.h*1.1-canvas.height/Brackets[this.round].length)
                }

            }else{
                context.moveTo(this.x, this.y+this.h*1.1)
                context.lineTo(this.x-bWidth*0.5, this.y+this.h*1.1)

                if (this.match % 2 == 0){
                    context.lineTo(this.x-bWidth*0.5, this.y+this.h*1.1+canvas.height/Brackets[this.round].length)
                }else{
                    context.lineTo(this.x-bWidth*0.5, this.y+this.h*1.1-canvas.height/Brackets[this.round].length)
                }
            }
        }

        if (this.round == Brackets.length-2){
            context.moveTo(this.x+this.w/2, this.y)
            context.lineTo(this.x+this.w/2, this.y-bHeight*1.5)
            if (position == 0){
                context.lineTo(this.x+this.w*1.2, this.y-bHeight*1.5)
                context.moveTo(this.x, this.y+this.h/2)
                context.lineTo(this.x-this.w*0.1, this.y+this.h/2)
            }else{
                context.lineTo(this.x-this.w*0.2, this.y-bHeight*1.5)
                context.moveTo(this.x, this.y+this.h/2)
                context.lineTo(this.x+this.w*1.1, this.y+this.h/2)
            }
        }

        if (this.round == Brackets.length-1){
            context.moveTo(this.x+this.w/2, this.y+this.h)
            context.lineTo(this.x+this.w/2, this.y+this.h+bHeight*2)
        }

        context.stroke()
        context.closePath()
    }

    this.draw = function(context){

        context.lineWidth = 1
        context.strokeStyle = '#A7CFFF'
        context.fillStyle = '#F4F9FF'

        if (this.selected){
            context.strokeStyle = '#0074ff'
            context.fillStyle = '#B5D8FF'
        }
        if (!this.name){
            context.strokeStyle = '#b0b0b0'
            context.fillStyle = '#f8f8f8'
        }

        Squircle(context, this.x, this.y, this.w, this.h, this.r)

        if (this.name){
            context.font = `600 ${bHeight*0.75}px Poppins`
            context.fillStyle = 'black'
            let width = context.measureText(this.name).width

            if (0 == this.round || this.round == Brackets.length-1){

                // Seed
                context.font = `500 ${bHeight*0.55}px Poppins`
                context.fillStyle = 'red'
                context.fillText(this.seed, this.x+bWidth*0.08-context.measureText(this.seed).width*0.5, this.y+this.h/2+bHeight*0.25)

                // Logo
                context.drawImage(this.image, this.x+bWidth*0.16, this.y, this.h, this.h)

                // Ticker
                context.font = `600 ${bHeight*0.75}px Poppins`
                context.fillStyle = 'black'
                context.fillText(this.name, this.x+bWidth*0.20+this.h, this.y+this.h/2+bHeight/4)

                // Full Name
                context.font = `400 ${bHeight*0.45}px Poppins`
                context.fillStyle = '#404040'
                context.fillText(this.fullName, this.x+bWidth*0.23+this.h+width, this.y+this.h/2+bHeight/4)

            }else{

                // Logo
                context.drawImage(this.image, this.x, this.y, this.h, this.h)

                // Ticker
                context.font = `600 ${bHeight*0.75}px Poppins`
                context.fillStyle = 'black'
                context.fillText(this.name, this.x+this.h*1.1, this.y+this.h/2+bHeight/4)
            }
        }
    }
}

let tops = []

for (let i=0; i<Tag('input').length; i++){
    let input = Tag('input')[i]

    let top = input.getBoundingClientRect().top

    tops.push(top)
}

let BracketLoop = () => {

    ctx.clearRect(0,0,canvas.width, canvas.height)
    setNames()

    for (let i=0; i<Blocks.length; i++){

        let block = Blocks[i]


        if (Hover(block)){

        ctx.globalAlpha = 0.5
        ctx.fillStyle = '#0074ff'
        Squircle(ctx, block.x, block.y, block.w, block.h, 5)
        ctx.globalAlpha = 1

        /*
            if (mousedown && block.name &&  block.round > 1 && block.round < Brackets.length-1 && !Class('modal')[0].classList.contains('active')){

                let next = findNext(block.round, block.match)
                let opponent = findMatch(block.round, block.match, block.position)
                let n = findNext(next[0], next[1])

                block.selected = true
                opponent.selected = false
                Brackets[next[0]][next[1]][next[2]] = block.name

                for (let i=1; i<Brackets.length; i++){
                    for(let j=0; j<Brackets[i].length; j++){
                        for (let k=0; k<Brackets[i][j].length; k++){
                            if (Brackets[i][j][k] == opponent.name && opponent.name && i>block.round){
                                Brackets[i][j][k] = block.name
                            }
                        }
                    }
                }
            }
            */
        }


    }

    for (let i=0; i<SponsorLogos.length; i++){
        let button = SponsorLogos[i][1]

        if (Hover(button)){
            ctx.globalAlpha = 0.3
            ctx.fillStyle = 'black'
            Squircle(ctx, button.x, button.y, button.w, button.h, button.h/2)
            ctx.globalAlpha = 1

            if (mousedown && !Class('modal')[0].classList.contains('active')){
                button.fn()
            }
        }

    }

    for (let i=0; i<Buttons.length; i++){

        let button = Buttons[i]

        if (Hover(button)){

            ctx.globalAlpha = 0.3
            ctx.fillStyle = 'black'
            Squircle(ctx, button.x, button.y, button.w, button.h, 10)
            ctx.globalAlpha = 1

            if (mousedown && !Class('modal')[0].classList.contains('active')){
                button.fn()
            }
        }
    }

    if (Brackets[Brackets.length-1][0][0] != Brackets[Brackets.length-2][0][0] &&
        Brackets[Brackets.length-1][0][0] != Brackets[Brackets.length-2][0][1]){
        Brackets[Brackets.length-1][0][0] = null
    }

    if (Class('modal')[0].classList.contains('active')){
        ctx.globalAlpha = 0.5
        ctx.fillStyle = 'white'
        ctx.fillRect(0,0,canvas.width,canvas.height)
    }
    /*

    if (window.innerWidth < 800){

        let keyboard = false

        for (let i=0; i<Tag('input').length-1; i++){
            let input = Tag('input')[i]


            if (input == document.activeElement){

                keyboard = true

                Class('modal')[0].style.transform = `translateY(${mobileHeight-window.innerWidth-tops[i]}px)`

                console.log(tops[i])

            }
        }

        if (!keyboard){
            Class('modal')[0].style.transform = `translateY(0px)`
        }
    }
    */

    window.requestAnimationFrame(BracketLoop)
}

window.requestAnimationFrame(BracketLoop)
