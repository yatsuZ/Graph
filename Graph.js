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

let Nodes = []

let id = 0

let idBarre = 0

let debut = false

let connexion = true
/////////////////// creation des event

// event quand on appuye sur crée un noeud
CreateNode.addEventListener("click",Creation_Noeud)//quand on apuye sur le bouton qui a l'id CreateNode on execute la fonction Creation Noeud


function Creation_Noeud() {

    debut = true;
    // console.log("test");//j'affiche test de la console
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
    // console.log("je click sur le cercle");//j'affiche
    if (debut){
        //("1. creation du noeud")
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
        
        ///////////////////////////////////////////////////////////////////////////////////////////////
        // console.log(document.getElementById("Noeud"+(id-1)))
        Nodes = document.querySelectorAll(".Noeud")
        tour = 0
        // console.log("Node === ",Nodes,"|len =",Nodes.length)
        // crée une liason
        // console.log(Nodes)
        Nodes.forEach((Noeud)=>{
            Noeud.addEventListener("click",()=>{
                let mtn = Noeud.id;
                console.log("tour =",tour)
                if (tour==0){//vrai uniquement le premier tour
                    /////etape 1 trouver l'index de ce noeud dans Nodes
                    console.log("mtn = ",mtn);
                    index_for_liason = couper_STR(mtn,5,mtn.length);
                    console.log("index for liason = ",index_for_liason);
                    //le problème n'est pas encore regler
                
                }
                tour++;//etape 2 vu que d'es le premier toure la condition s'anulle il ne re executera plus la fonction

                if (index_for_liason+tour>=Nodes.length){//si le nombre de tour + Index = a la longuer on reset
                    tour=0;
                }

            })
        });    
    }
    debut = false;
}
// a chaque fois que je finis de crée un nouveaux graphe je peux crée des liason entre chaque graphe 
//
let tour = 0;
let index_for_liason = 0;
// function Creation_liason () {
    ///////////////////////////////////////////////////////////////////////////////////////////////:
    // // console.log("Node === ",Nodes)
    // // crée une liason
    // console.log(Nodes)
    // Nodes.forEach((Noeud)=> {
        //     if (tour==0){
            //         console.log("-----------DEBU--------------")
            //     }
            //     Noeud.addEventListener("click",()=>{//(quand il est une fois vrai il et vrais pour la suite de la liste cela pose problème :( )
            //         if (tour==index_for_liason) {
                //             index_for_liason--
    //             console.log("ICI = ",Noeud.id)
    //             console.log("2. creation d'une liason")
    //         // console.log(connexion)
    //         if (connexion== true){
        //             Nodes.forEach((N)=>{
            //                 N.style.background = "black"
            //             })
            //             console.log("cas 1 ")
            //             connexion = false;
            //         }else{
                //             console.log("cas 2")
                
                //             // je separe en deux 
                //             NewBarre.style.top = Noeud.style.top;
                //             // console.log(NewBarre.style.top)
                
                //             NewBarre.style.left = Noeud.style.left;
                //             // console.log(NewBarre.style.left)
                
                //             NewBarre.style.visibility = "visible"
                //             // console.log(NewBarre.style.visibility)
                //             pointA.style.top = Noeud.style.top;
                //             pointA.style.left = Noeud.style.left
                //             pointC.style.top = Noeud.style.top
                
                //             html.addEventListener("mousemove",Mouvement_souris_barre)
                
                //             // console.log("test liason");
                //             // console.log("id = Noeud"+Noeud.textContent);
                //             // console.log("ici = ",Nodes)// pourquoi il ne prend pas tout les Nodes ?? // il doit y avoir un truc avec les paire impaire mais jsp pk ?
                //             Nodes.forEach((N)=>{
                    //                 N.style.background = "blue"
                    //             })
                    //             connexion = true
                    //             }
                    //         }
                    //     });
                    //     console.log("nbr de tour = ",tour)
    //     tour++;
    //     index_for_liason++;
    //     if (tour>=Nodes.length){
        //         console.log("tour =",tour," | Number of node = ",Nodes.length," | index for liason = ",index_for_liason)
        //         tour=0;
        //         index_for_liason = 0 ;
        //         console.log("----------FIN---------------")
        //     }
        // });
        //}
        
        
        
        //crée le point A B C pour savoir ou est chaque point important
        
        /// fonction qui permet de bien manipuler la barre
        function Mouvement_souris_barre(e) {
            // console.log("test de la fonction mouvement souris")
            //aplication fo DOM
            NewBarre.style.background = "red";
            // deplacement du point B constant
            pointB.style.left =e.pageX+"px";
            pointB.style.top =e.pageY+"px";
            pointC.style.left = e.pageX+"px"
            //calule des segement
            
            let AC = (e.pageX-parseInt(pointA.style.left));
            let BC = (e.pageY-parseInt(pointC.style.top));
            
            // console.log(pointA.style.left)
            let hyphotenus = Math.pow(AC,2)+Math.pow(BC,2);
            
            // console.log(hyphotenus)
            hyphotenus = Math.sqrt(hyphotenus);
            //sqrt( (Xb - Xa)**2 + (Yb - Ya)**2 ) = la distance du segement AB
            //////////////////////////////////// Barre et les angles
            NewBarre.style.left = parseInt(pointA.style.left)- hyphotenus/2+'px';
            NewBarre.style.width = hyphotenus-5+"px";//petit decallage sinon compliquer pour apuyer les noeud
            let tan = BC/AC
            
            let angleCAB = Math.atan(tan)*180/3.14;
            
            if (AC<0) {
                NewBarre.style.transform = "rotate("+angleCAB+"deg) translate(-50%,-50%)";
            } else {
                NewBarre.style.transform = "rotate("+angleCAB+"deg) translate(50%,50%)";
            }
            
        }
        
        //quand on re apuye sur un noeud il se connecte crée un bouton annuler crée un le bouton suprimer noeur est crée une matrice qui contien l'id de chaque noeud avec keur liason
        
function couper_STR(S,D,F){
    let str = '';
    for (let i = 0; i < F-D; i++) {
      str = str + S[i+D];
    }
    return str
}