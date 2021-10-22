function Id(arg){
    return document.getElementById(arg)
}

function Class(arg){
    return document.getElementsByClassName(arg)
}

function Tag(arg){
    return document.getElementsByTagName(arg)
}

function El(arg){
    return document.createElement(arg)
}

function TextNode(arg){
    return document.createTextNode(arg)
}

function Contains(el, arg){
    return el.classList.contains(arg)
}

function Add(elem, args){
    for (let i=0;i<args.length;i++){
        elem.appendChild(args[i])
    }
}

function Classes(elem, arg){

    var arr = arg.split(' ')

    for (let i=0;i<arr.length;i++){
        elem.classList.add(arr[i])
    }
}

function filter(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}