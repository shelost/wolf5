let Canvas = Id('canvas')
let ctx = Canvas.getContext('2d')
let Streaks = []
let COLOR = '#E4FDFF'

let scrollY, innerHeight, innerWidth

function Resize(){
    Canvas.width = window.innerWidth
    Canvas.height = window.innerHeight
    scrollY = window.scrollY
    innerHeight = window.innerHeight
    innerWidth = window.innerWidth
}
Resize()

function Streak(x,y,length, speed, alpha){
    this.x = x
    this.y = y
    this.l = length
    this.s = speed
    this.a = alpha
    this.draw = () => {
        ctx.globalAlpha = this.a
        ctx.strokeStyle = 'white'
        ctx.lineCap = 'round'
        ctx.lineWidth = this.l/5
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + this.l, this.y)
        ctx.stroke()
        ctx.globalAlpha = 1
        this.x += this.s
        if (this.x > innerWidth){
            this.x = -this.l
        }
    }
}

for (let i=0; i<40; i++){
    let x = Math.random()*innerWidth
    let y = Math.random()*innerHeight
    let l = Math.random()*200+50
    let s = Math.random()*3+2
    let a = (((s-2)/3)*0.008).toFixed(2)
    Streaks.push(new Streak(x,y,l,s,a))
}

const LandingLoop = () => {

    Resize()

    index = scrollY/(innerHeight*0.9)
    int = Math.round(index)

    document.body.style.background = COLOR

    switch (int){
        case 0:
            COLOR = '#E4FDFF'
            break
        case 1:
            COLOR = '#CAFFCA'
            break
        case 2:
            COLOR = '#EDD0FF'
            break
        case 3:
            COLOR = '#FFDCAA'
            break
        default:
            break
    }

    for (let i=0; i<Streaks.length; i++){
        let s = Streaks[i]
        ctx.lineWidth = 1
        s.draw()
    }

    window.requestAnimationFrame(LandingLoop)
}
window.requestAnimationFrame(LandingLoop)
