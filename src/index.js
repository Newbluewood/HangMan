import { Vesala } from "./Veshala.js"
const recA = "METAFORA"
const recB = "STRUKTURALNO"




const button = document.getElementById("try")
const buttonAnother = document.querySelector(".another")
const slicica = document.getElementById("police")
const div_slicice = document.getElementById("div_slicice")
const PlaceHolder1 = document.getElementById("container1-child2-g1")
const PlaceHolder2 = document.getElementById("container1-child2-g2")

const igra1 = new Vesala(recA)
const igra2 = new Vesala(recB)
igra1.postavi()
igra2.postavi()
const prikaziStanje = igra1.prikaz
const prikaziStanje2 = igra2.prikaz  
dodajRec(prikaziStanje,PlaceHolder1,1)
dodajRec(prikaziStanje2, PlaceHolder2,2)   

// IVENTI //

document.addEventListener("click",(e)=>{
    const eventElement = e.target
    // Dugme TRY //--------------------------------------------------------------------------------------------------------------------------------|
    if(eventElement.id === "try" ){
        if (button.getAttribute("data-data") === "off"){
            div_slicice.style = " height: 100%; width: fit-content; right: 50%; opacity: 1; transition:all 1s ease-out"
            slicica.style = " bottom: 0%; transition:all 1s ease-in-out; " 
            button.setAttribute("data-data", "on") 
        } else {
        div_slicice.style = " height: 100%; width: fit-content; right: 20%; opacity: 0; transition:all 1s ease-out"
        slicica.style = " bottom: 0%; transition:all 1s ease-in-out; ;"
        button.setAttribute("data-data", "off") 
        }
    }
    // Dugme za 2 reci//--------------------------------------------------------------------------------------------------------------------------|
    if(eventElement.classList.contains("another") || eventElement.id === "dve"){
    console.log(eventElement)
    const secoundWord = document.querySelector(".secound")
    if (buttonAnother.getAttribute("data-data") === "on"){
        secoundWord.style = "opacity: 0; display: none; transition:all 1s ease-out"
        buttonAnother.setAttribute("data-data", "of")
        buttonAnother.classList.remove("rec2") 
    } else {
    secoundWord.style = " opacity: 1; display:flex; transition:all 1s ease-out"
    buttonAnother.setAttribute("data-data", "on")
    buttonAnother.classList.add("rec2")
    }
    }

     // Izbor SLOVA //----------------------------------------------------------------------------------------------------------------------------|
    if(eventElement.classList.contains("slva")){
        button.removeAttribute("disabled")
         const abv = document.querySelectorAll(".slva")
         abv.forEach((el)=>{el.classList.remove("checked")})
        eventElement.classList.add("checked")
        let izbranoSlovo = eventElement.innerText
        button.innerText = "Try " + izbranoSlovo
        button.onclick = ()=>{
            eventElement.setAttribute("disabled", "on")
            igra1.imaLiSlovo(izbranoSlovo)
            igra2.imaLiSlovo(izbranoSlovo)
            console.log(izbranoSlovo)
            dodajRec(prikaziStanje,PlaceHolder1,1)
            dodajRec(prikaziStanje2,PlaceHolder2,2)
            const promasaji = igra1.promaseno
            const promasaji2 = igra2.promaseno
            const ostaloZivota = 10 - igra1.promaseno
            izbranoSlovo = " "
            button.innerText = "Try "
            button.setAttribute("disabled", "on")
            //
            if(promasaji > 0){
                const zivot = document.querySelector("#container1-child1-g2-g1-g"+ promasaji)
                zivot.classList.remove("ziv")
            }
            if(promasaji > 4){
                const pola = document.querySelectorAll(".ziv")
                for (let polje of pola){
                    polje.classList.remove("ziv")
                    polje.classList.add("ziv1")
                }
                const zivot = document.querySelector("#container1-child1-g2-g1-g"+ promasaji)
                zivot.classList.remove("ziv1")
            }
            if(promasaji > 7){
                const pola = document.querySelectorAll(".ziv1")
                for (let polje of pola){
                    polje.classList.remove("ziv1")
                    polje.classList.add("ziv2")
                }
                const zivot = document.querySelector("#container1-child1-g2-g1-g"+ promasaji)
                zivot.classList.remove("ziv2")
            }

            const zivoti = document.querySelector("#zivotiSpan")
            zivoti.innerText = ostaloZivota
     
            eventElement.classList.remove("checked")
            if(igra1.reseno()){
                document.querySelector(".confety").style.display = "block"
            }
        }
   
    }

})

// kraj IVENTI //



 function dodajRec(rec, PlaceHolderToAdd, br){
    let no = br
    const rec1 = rec
    const placeholder = PlaceHolderToAdd
    placeholder.innerText = ""
    let n=0
    for (let slovo of rec1){
        n++
        const div = document.createElement("div")
        const span = document.createElement("span")

        div.id = "container1-child2-g1-g"+n
        div.classList.add("container", "border-b", "W10", "H80", "mg2-l")
        if(no === 2) {
            div.classList.add("border2-b")  
        }
        span.id = "rec1slovo"+n
        span.innerText = slovo

        div.appendChild(span)
        PlaceHolderToAdd.append(div)
    }

    


 }