document.getElementById("player").addEventListener("mouseover", sumarPuntos);
document.getElementById("enemigo").addEventListener("mouseover", perderVida);
puntos = 0;
tiempo = 20;
nesecarios = 10;
nivel = 1

window.onload = function enemigo() {
    ranNum = Math.round(Math.random() * 500);
    ranNum2 = Math.round(Math.random() * 500);
    document.getElementById("enemigo").style.marginTop = ranNum + "px";
    document.getElementById("enemigo").style.marginLeft = ranNum2 + "px";
    setInterval(enemigo, 1000);

    ranNum3 = Math.round(Math.random() * 500);
    ranNum4 = Math.round(Math.random() * 500);
    document.getElementById("enemigo2").style.marginTop = ranNum3 + "px";
    document.getElementById("enemigo2").style.marginLeft = ranNum4 + "px";
    setInterval(enemigo2, 1000);
}



function perderVida() {
    alert("Perdiste, no toques a las bombas")
    puntos = 0;
    tiempo = 20;
    location.href = location.href
}

function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML = "🔫&nbsp;Puntos: " + puntos + "/" + nesecarios;
    ranNum = Math.round(Math.random() * 500);
    ranNum2 = Math.round(Math.random() * 500);
    document.getElementById("player").style.marginTop = ranNum + "px";
    document.getElementById("player").style.marginLeft = ranNum2 + "px";

    if (puntos == 10) {
        location.href = "win.html"
        tiempo = 20;
        puntos = 0;
        nivel = nivel + 1

    }
}

function restarTiempo() {
    tiempo--
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;⏰&nbspTiempo: " + tiempo;
    if (tiempo == 0) {
        alert("Perdiste :(")
        tiempo = 20;
        puntos = 0;
        location.href = location.href
    }
}

setInterval(restarTiempo, 1000);