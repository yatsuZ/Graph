const CreateNode = document.getElementById("CreateNode");

const body = document.querySelector("body")

const NewGraph = document.querySelector(".NewGraph");

const main = document.querySelector("main")

var id = 0

var debut = false

CreateNode.addEventListener("click",Creation_Noeud)//creation de l'event crée un noeud
NewGraph.addEventListener("click",Stoper_propagation)//creation de l'event Stoper Propagation


function Creation_Noeud() {
    debut = true
    console.log("test");//j'affiche test de la console
    window.addEventListener('mousemove',Mouvement_souris)//creation de l'event Mouvement souris 
}


function Mouvement_souris(e) {
    if (debut){
        NewGraph.style.visibility = "visible";//je rend visible la div mousemove
        NewGraph.style.left = e.pageX+"px";
        NewGraph.style.top = e.pageY+"px";//La div suit la souris
    }
}

function Stoper_propagation(){//Je veux que quand je click la div ne bouge plus 
    console.log("je click sur le cercle");//j'affiche
    var FixGraph = document.createElement("div")
    FixGraph.setAttribute("class","Noeud")
    FixGraph.setAttribute("id","Noeud"+id);
    FixGraph.style.left = NewGraph.style.left;
    FixGraph.style.top = NewGraph.style.top;
    
    var name = document.createElement("p");
    name.setAttribute("class","blabla")
    var txt = document.createTextNode(id);
    name.appendChild(txt);
    FixGraph.appendChild(name)


    main.appendChild(FixGraph);
    id++;

    NewGraph.style.visibility = "hidden";//je rend visible la div mousemove
    NewGraph.style.left ="0 px";
    NewGraph.style.top = "0 px";//La div suit la souris
    debut = false
}








/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// //click event

// const questionContainer = document.querySelector(".click-event")

// const btn1 = document.querySelector("#btn-1");/*same*/
// const btn2 = document.getElementById("btn-2");

// const response = document.querySelector("p");



// questionContainer.addEventListener("click",()=>{
//     questionContainer.classList.toggle("question-clicked");
// })

// btn1.addEventListener("click",() =>{
//     response.classList.add("show-response")
//     response.style.background = "green"
// })

// btn2.addEventListener("click",() =>{
//     response.classList.add("show-response")
//     response.style.background = "red"
// })

// /*  ecrire directement dans la balise > #id> .class > baliseHTML */

// //---------------------------------------------------------------
// //Mouse Events / mouse move

// const mousemove = document.querySelector(".mousemove");


// window.addEventListener("mousedown", ()=> {
//     mousemove.style.transform = "scale(2) translate(-25%,-25%)";
//     mousemove.style.transition = "0.6s ease" 
//     mousemove.style.border= "2px solid green"
//     mousemove.style.background= "yellow"
// }) 

// window.addEventListener("mouseup", ()=> {
//     mousemove.style.transform = "scale(1) translate(-50%,-50%)";
//     mousemove.style.transition = "0.2s ease"
//     mousemove.style.background= "none"
//     mousemove.style.border= "2px solid blue"
// })

// questionContainer.addEventListener("mouseenter", () => {
//     questionContainer.style.background = "rgba(0,0,0,0.6)"
// })

// questionContainer.addEventListener("mouseout", () => {
//     questionContainer.style.background = "pink"
// })

// response.addEventListener("mouseover", () => {
//     response.style.transform = "rotate(10deg)";
// })

// //---------------------------------------------------------------
// // KeyPress event
// const KeypressContainer = document.querySelector(".keypress")
// const key = document.getElementById("key")

// const ring = (key) => {
//     if (key == "Enter") {
//         const audio = new Audio();
//         audio.src = "./"+key+".mp3";
//         audio.play();
//     }
// };

// document.addEventListener('keypress', (e) => {
//     key.textContent = e.key
//     if (key.textContent=="p"){
//         KeypressContainer.style.background = "pink"
//     }else if (key.textContent=="h"){
//         KeypressContainer.style.background = "teal"
//     }else {
//         KeypressContainer.style.background = "red"
//     }
//     ring(e.key)
// })

// //---------------------------------------
// //Scroll Event

// const nav = document.querySelector("nav")

// window.addEventListener("scroll",() => {
//     if (window.scrollY>120){
//         nav.style.top = 0;
//     }else {
//         nav.style.top = "-50px";
//     }
// })
// //-----------------------------------------
// // Form Events
// const inputName = document.querySelector('input[type="text"]');
// const select = document.querySelector("select");
// const form = document.querySelector("form")
// let pseudo = "";
// let language = "";

// inputName.addEventListener("input", (e)=>{
//     pseudo = e.target.value;
// })

// select.addEventListener('input', (e) => {
//     language = e.target.value;
// })

// form.addEventListener('submit', (e)=> {
//     e.preventDefault();//anule le changement de page quand on appui sur le bouton submit
//     if (cgv.checked) {//pas besoin de metre dans une variable les bouton et cgv
//         //afficher le contenue des variable
//         document.querySelector('form > div').innerHTML = `
//         <h3>Pseudo : ${pseudo}</h3>
//         <h4>Langage prèféré : ${language}</h4>
//         `;
//     } else {
//         const audio = new Audio();
//         audio.src = "./Enter.mp3";
//         audio.play();
//         alert('Veuillez accepeter les CGV');
//     }
// })

// //-----------------------------------------------------------
// // Load Event (quand la page est en train de chargé)

// window.addEventListener("load", ()=> {
//     console.log("Document Chargé!");
// })

// //-----------------------------------------------------------
// // ForEach
// const boxes = document.querySelectorAll(".box");

// console.log(boxes);

// boxes.forEach((box) => {
//     box.addEventListener('click', (e) => {
//         console.log(e.target);
//     })
// });

// //------------------------------------------------
// // addEventListener Vs onclick
// // document.body.onclick = function() {
// //   console.log("Scroll !");
// // };

// // Bubbling => fin (de base l'eventlistener est paramétré en mode Bublbing)
// document.body.addEventListener("click", () => {
//     console.log("click 1 !");
//   });
  
//   // Usecapture
//   document.body.addEventListener(
//     "click",
//     () => {
//       console.log("click 2 !");
//     },
//     true
//   );
  
//   // https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

// //--------------------------------------------------------------------------
// // Stop Propagation 
// // questionContainer.addEventListener('click', (e)=>{
// //     alert("Test !");
// //     e.stopPropagation();
// // })

// // removeEventListner (existe)

// //-----------------------------------------------------
// // BOM (Brother Object Model)

// // console.log(window.innerHeight);
// // console.log(window.scrollY);

// // window.open("http://google.com","cours js","height=600,widht=800")
// // window.close()
// // Evénement adossés  à Window
// // alert("Hello ! ")

// //confirm

// btn2.addEventListener('click', ()=> {
//     confirm("Voulez vous vraiment vous tromper ?");
// });

// // prompt
// btn1.addEventListener('click', ()=>{
//     let answer =  prompt("Entrez votre nom !");
//     console.log(answer);
// })
