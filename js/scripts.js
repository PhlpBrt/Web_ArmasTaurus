function onOff() {
    document.querySelector("#modal").classList.toggle("hide")
}
var btn = document.querySelector('button');
btn.onclick = function mostra(id) {
    if (document.getElementById(id).style.display == 'none') {


        document.getElementById(id).style.display = 'grid';
    }
    else {
        document.getElementById(id).style.display == 'none'
    }
}


