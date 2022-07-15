const html = document.querySelector("html")
const body = document.querySelector("body")
const barre = document.querySelector(".barre");
const textX = document.getElementById("X");
const textY = document.getElementById("Y");
const centreX =document.getElementById("centreX");
const centreY = document.getElementById("centreY");
const A =document.getElementById("pointA");
const B = document.getElementById("pointB")

console.log(body)
html.addEventListener('mousemove',Mouvement_souris)

function Mouvement_souris(e) {
    //aplication fo DOM
    barre.style.background = "red";
    textX.textContent = e.pageX;
    textY.textContent = e.pageY;
    centreX.textContent = html.clientHeight/2;
    centreY.textContent = html.clientWidth/2;
    // deplacement du point B constant
    B.style.left =e.pageX+"px";
    B.style.top =e.pageY+"px";

    //calule des segement 
    let AC = (e.pageX-(html.clientWidth/2));
    let BC = (e.pageY-(html.clientHeight/2));


    let hyphotenus = Math.pow(AC,2)+Math.pow(BC,2);

    hyphotenus = Math.sqrt(hyphotenus);
    //sqrt( (Xb - Xa)**2 + (Yb - Ya)**2 ) = la distance du segement AB
    barre.style.width = hyphotenus+"px";
//////////////////////////////////// Barre et les angles
    barre.style.left = (html.clientWidth/2)- hyphotenus/2+'px';
    barre.style.width = hyphotenus+"px";
    let tan = BC/AC

    let angleCAB = Math.atan(tan)*180/3.14;

    if (AC<0) {
        barre.style.transform = "rotate("+angleCAB+"deg) translate(-50%,-50%)";
    } else {
        barre.style.transform = "rotate("+angleCAB+"deg) translate(50%,50%)";
    }

}
