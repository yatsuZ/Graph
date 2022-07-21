// apelle des document que je compte manipuler
const CreateNode = document.getElementById("CreateNode");

const body = document.querySelector("body")

const NewGraph = document.querySelector(".NewGraph");

const NewBarre = document.querySelector(".NewBarre")

const main = document.querySelector("main")

const html = document.querySelector("html")

const pointA = document.getElementById("A")

const pointB = document.getElementById("B")

const pointC = document.getElementById("C")

let id = 0

let idBarre = 0

let debut = false

/////////////////// creation des event

// event quand on appuye sur crée un noeud
CreateNode.addEventListener("click",Creation_Noeud)//quand on apuye sur le bouton qui a l'id CreateNode on execute la fonction Creation Noeud


function Creation_Noeud() {

    debut = true;
    console.log("test");//j'affiche test de la console
    var name = document.createElement("p");
    name.setAttribute("class","blabla");
    var txt = document.createTextNode(id);
    name.appendChild(txt);
    NewGraph.textContent = "";
    NewGraph.appendChild(name);
    window.addEventListener('mousemove',Mouvement_souris)//creation de l'event Mouvement souris 
}

function Mouvement_souris(e) {//e et le parametre de la souris je pense
    if (debut){
        NewGraph.style.visibility = "visible";//je rend visible la div mousemove
        NewGraph.style.left = e.pageX+"px";
        NewGraph.style.top = e.pageY+"px";//La div suit la souris
    }
}

//l'event Creation Noeud sarrete quand on click a nouveaux sur la page donc nouvelle event


NewGraph.addEventListener("click",Stoper_propagation);//creation de l'event Stoper Propagation


function Stoper_propagation(){//Je veux que quand je click la div ne bouge plus 
    console.log("je click sur le cercle");//j'affiche
    var FixGraph = document.createElement("div");
    FixGraph.setAttribute("id","Noeud"+id);
    FixGraph.setAttribute("class","Noeud");
    FixGraph.style.left = NewGraph.style.left;
    FixGraph.style.top = NewGraph.style.top;
    

    var name = document.createElement("p");
    name.setAttribute("class","blabla")
    var txt = document.createTextNode(id);
    name.appendChild(txt);
    FixGraph.appendChild(name);
    
    main.appendChild(FixGraph);
    id++;
    
    
    NewGraph.style.visibility = "hidden";//je rend visible la div mousemove
    NewGraph.style.left ="0 px";
    NewGraph.style.top = "0 px";//La div suit la souris
    debut = false
    let Nodes = document.querySelectorAll(".Noeud")
    // console.log("Node === ",Nodes)
    // crée une liason
    Nodes.forEach((Noeud)=> {
        Noeud.addEventListener("click",()=>{
            NewBarre.style.top = Noeud.style.top;
            console.log(NewBarre.style.top)

            NewBarre.style.left = Noeud.style.left;
            console.log(NewBarre.style.left)

            NewBarre.style.visibility = "visible"
            console.log(NewBarre.style.visibility)
            pointA.style.top = Noeud.style.top;
            pointA.style.left = Noeud.style.left
            pointC.style.top = Noeud.style.top

            html.addEventListener("mousemove",Mouvement_souris_barre)

            // console.log("test liason");
            // console.log("id = Noeud"+Noeud.textContent);
            Nodes.forEach((N)=>{
                N.style.background = "blue"
            })
        })
    });

    
}
//crée le point A B C pour savoir ou est chaque point important

/// fonction qui permet de bien manipuler la barre
function Mouvement_souris_barre(e) {
    console.log("test de la fonction mouvement souris")
    //aplication fo DOM
    NewBarre.style.background = "red";
    // deplacement du point B constant
    pointB.style.left =e.pageX+"px";
    pointB.style.top =e.pageY+"px";
    pointC.style.left = e.pageX+"px"
    //calule des segement
     
    let AC = (e.pageX-parseInt(pointA.style.left));
    let BC = (e.pageY-parseInt(pointC.style.top));
    
    console.log(pointA.style.left)
    let hyphotenus = Math.pow(AC,2)+Math.pow(BC,2);
    
    console.log(hyphotenus)
    hyphotenus = Math.sqrt(hyphotenus);
    //sqrt( (Xb - Xa)**2 + (Yb - Ya)**2 ) = la distance du segement AB
    NewBarre.style.width = hyphotenus-10+"px";
//////////////////////////////////// Barre et les angles
    NewBarre.style.left = parseInt(pointA.style.left)- hyphotenus/2+'px';
    NewBarre.style.width = hyphotenus+"px";
    let tan = BC/AC

    let angleCAB = Math.atan(tan)*180/3.14;

    if (AC<0) {
        NewBarre.style.transform = "rotate("+angleCAB+"deg) translate(-50%,-50%)";
    } else {
        NewBarre.style.transform = "rotate("+angleCAB+"deg) translate(50%,50%)";
    }

}

//quand on re apuye sur un noeud il se connecte crée un bouton annuler crée un le bouton suprimer noeur est crée une matrice qui contien l'id de chaque noeud avec keur liason
