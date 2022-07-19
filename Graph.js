// apelle des document que je compte manipuler
const CreateNode = document.getElementById("CreateNode");

const body = document.querySelector("body")

const NewGraph = document.querySelector(".NewGraph");


const main = document.querySelector("main")


let id = 0

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
    console.log("Node === ",Nodes)

    // crée une liason
    Nodes.forEach((Noeud)=> {
        Noeud.addEventListener("click",()=>{
        console.log("test liason");
        console.log("id = Noeud"+Noeud.textContent);
        })
    });


}

//fonction qui ajoute une liason


// const boxes = document.querySelectorAll(".box");

// console.log(boxes);

// boxes.forEach((box) => {
//     box.addEventListener('click', (e) => {
//         console.log(e.target);
//     })
// });