const NAVFAB = Id('navfab')
const NAV = Id('nav')
const DARK = Id('dark')

function Toggle(){
    NAV.classList.toggle('active')
    DARK.classList.toggle('active')
}

function Trywolf(){
    Id('modal').classList.toggle('active')
    DARK.classList.toggle('active')
}

function Ok(){
    Id('modal').classList.toggle('active')
    DARK.classList.toggle('active')
    Class('container')[0].classList.add('visible')
    Class('container')[1].classList.remove('visible')
}

for (let i=0; i<Class('trywolf').length; i++){
    let button = Class('trywolf')[i]

    button.onclick = Trywolf
}

DARK.onclick = Ok

Id('ok').onclick = Ok

const GlobalLoop = () => {

    if (window.innerWidth<800){
        NAVFAB.onclick = Toggle
        NAV.onclick = Toggle
        DARK.onclick = Toggle
        if (Id('modal').classList.contains('active')){
            DARK.onclick = Ok
        }

    }

    window.requestAnimationFrame(GlobalLoop)
}

window.requestAnimationFrame(GlobalLoop)


Id('beta').onclick = signup

//signup validation
function signup() {

  function isValid(str) {
    // based on RFC 5322 Official Standard
    // https://tools.ietf.org/html/rfc5322
    // dont touch the regex
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return regex.test(str)
  }
  let email = Id('email')
  if (isValid(email.value)) {
    email.classList.add('success')

    Class('container')[0].classList.toggle('visible')
    Class('container')[1].classList.toggle('visible')

    var xhr = new XMLHttpRequest()
    xhr.open(
    'POST',
    'https://api.wolf.financial/v1/signup',
    true,
    )
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader('Content-Type', 'application/json')
    let code = window.location.search.split("code=")[1];
    xhr.send(JSON.stringify(code ? { email: email.value, referral: code } : { email: email.value }))
    setTimeout(() => {
        email.classList.remove('success')
    }, 1000)
  } else {
    email.classList.add('fail')
    email.value = ''
    setTimeout(() => {
        email.classList.remove('fail')
    }, 400)
  }
}


