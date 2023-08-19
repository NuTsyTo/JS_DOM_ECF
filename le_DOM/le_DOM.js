/*  // Méthode de selection des noeuds

const element = document.getElementById("elementId");
const elements = document.getElementsByClassName("className");
const elements = document.getElementsByTagName("tagName");
const element = document.querySelector("selector");
const elements = document.querySelectorAll("selector");

if (document.hasFocus()) {
console.log("Le document a le focus.");
} else {
console.log("Le document n'a pas le focus.");
}

// EXEMPLE DE SELECTION 

// Sélection par ID
const titleElement = document.getElementById("title");
console.log("Sélection par ID:", titleElement);

// Sélection par classe
const containerElements = document.getElementsByClassName("container");
console.log("Sélection par classe:", containerElements);

// Sélection par balise
const listItems = document.getElementsByTagName("li");
console.log("Sélection par balise:", listItems);

// Sélection avec querySelector
const firstItem = document.querySelector(".list li");
console.log("Premier élément de la liste:", firstItem.textContent);

// Sélection avec querySelectorAll
const paragraphs = document.querySelectorAll(".container p");
console.log("Sélection avec querySelectorAll:", paragraphs);

// PARCOURS DES NOEUDS DOM

// parentNode :
const childElement = document.getElementById("child");
const parentElement = childElement.parentNode;
console.log(parentElement);

// childNodes :
const parentElement = document.getElementById("parent");
const children = parentElement.childNodes;
console.log(children);

// firstChild :
const parentElement = document.getElementById("parent");
const firstChild = parentElement.firstChild;
console.log(firstChild);

// lastChild :
const parentElement = document.getElementById("parent");
const lastChild = parentElement.lastChild;
console.log(lastChild);

// nextSibling :
const firstChild = document.getElementById("first");
const nextSibling = firstChild.nextSibling;
console.log(nextSibling);


// previousSibling :
const secondChild = document.getElementById("second");
const previousSibling = secondChild.previousSibling;
console.log(previousSibling);

// nextElementSibling :
const firstElement = document.getElementById("firstElement");
const nextElement = firstElement.nextElementSibling;
console.log(nextElement);

// previousElementSibling :
const secondElement = document.getElementById("secondElement");
const previousElement = secondElement.previousElementSibling;
console.log(previousElement);
*/

// Header 
const heading = document.getElementById("main-heading");
const button = document.getElementById("change-text");
button.addEventListener("click", () => {
    heading.textContent = "Nouveau Titre";
    heading.style.color = "red";
});

//Récuprération contenu
const buttonR = document.getElementById("recup-text");
buttonR.addEventListener("click", () => {
    const paragraph = document.getElementById("myParagraph");
    const content = paragraph.textContent;
    alert("Contenu du paragraphe:" + content);
});

// Modification du contenu
const button2 = document.getElementById("myButton2");
button2.addEventListener("click", () => {
    const paragraph2 = document.getElementById("myParagraph2");
    paragraph2.textContent = "Hommage à Bernard : \
    Moitié homme, moitié robot, \
    Le plus valeureux des héros \
    Bioman, Bioman \
    Défenseur de la Terre \
    Comme un arc-en-ciel courageux \
    Rouge, rose, vert, jaune et bleu \
    Bioman, Bioman \
    Héros de l Univers";
});

//Modification du contenu avec innerHTML

// Exercice 1, modif de texte
const afficheText= document.getElementById("affiche-text");
const content = document.getElementById("myText");
afficheText.addEventListener("click", () => {
        alert("Contenu du texte :" +content.innerHTML);
});

const modifText= document.getElementById("modif-text");
const textSouligne = document.getElementById("text-souligne");
const textSouligne_1 = document.textContent;
modifText.addEventListener("click", () => {
    textSouligne.innerHTML= "<strong>" + textSouligne_1 + "</strong>";
}); 

// Exercice 2, modif de div
const modifDiv = document.getElementById("modif-div")
modifDiv.addEventListener("click",() =>{
    myDiv.setAttribute("style", "background-color: blue; color: white; font-size: 20px");
});

// Exercice 3 : input avec bouton caché
const submitButton = document.getElementById("submitButton")
const myInput = document.getElementById("myInput")
myInput.addEventListener("input", () =>{
    //si le champ n'est pas vide
    if (myInput.value !== ""){
        // on retire l'attribut hidden
        submitButton.removeAttribute("hidden")
        // sinon si il est vide on ajoute l'attribut hidden
    } else{
        submitButton.removeAttribute("hidden", "");
    }
})
submitButton.addEventListener("click", () => {
    const contentInput = myInput.value;
    alert("prénom : " + contentInput)
});

// ÉVÈNEMENT
    // Exercice 1 
    const button1 = document.getElementById("button1");
    button1.addEventListener("click", () => {
        alert("Le bouton a été cliqué !");
        console.log("le bouton à été cliqué !");
    });

    // Exercice 2
    const element = document.getElementById("paragrapheExo2");
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "grey";
        console.log("changement de couleur");
    });
    element.addEventListener("mouseout", () => {
        element.style.backgroundColor = "";
        console.log("remise du bgc");
    });

    // Exercice 3
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            alert("Touche Entrée pressée !");
        }
    });

    // Exercice 4
    const buttonCancel = document.getElementById("buttonCancel");
    const textExo4 = document.getElementById("textExo4");
    buttonCancel.addEventListener("click", () => {
        textExo4.value = ""
    })

    //Exercice 5 
    const rightClick = document.getElementById("rightClick")
    rightClick.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    //Exercice 6
    const textExo6 = document.getElementById("textExo6");
    textExo6.addEventListener("select", () => {
        console.log(textExo6.selectionStart)
        console.log(textExo6.selectionEnd)
    });

    //Exercice 7
    const buttonSubmit = document.getElementById("buttonSubmit");
    buttonSubmit.addEventListener("click", () =>{
        var retval = confirm("Valider les données saisies ?")
        if (retval == true){
            alert("Données saisies")
        }
        else{
            alert("Données non saisies");
            return false;
        }
    });

    //Exercice 8
    const ChampTextExo8 = document.getElementById("ChampTextExo8");
    ChampTextExo8.addEventListener("focus", () => {
        ChampTextExo8.style.backgroundColor = "lightgreen";
        console.log("mise en couleur du bg");
        setTimeout(() => {
            ChampTextExo8.blur();
            ChampTextExo8.style.backgroundColor = "";
          }, 3000);
    });

    //Execice 9
    const ChampTextExo9 = document.getElementById("ChampTextExo9");
    ChampTextExo9.addEventListener("input", () => {
        console.log("La valeur a changé :", ChampTextExo9.value);
    });

    //Exercice 10
    const toggleButton = document.getElementById("toggleButton");
    const ChampTextExo10 = document.getElementById("ChampTextExo10");
    let isTextAreaVisible = false; // Initial state

    toggleButton.addEventListener("click", () => {
        isTextAreaVisible = !isTextAreaVisible; // Inverse l'état à chaque clic

        if (isTextAreaVisible) {
            ChampTextExo10.style.display = "block"; // Affiche la zone de texte
        } else {
            ChampTextExo10.style.display = "none"; // Masque la zone de texte
        }
    });

// PARTIE 8 

    // Exercice 1
    const ModifText =document.getElementById("Modif_Text")

    ModifText.addEventListener("click", () => {
        const targetParagraph = document.getElementById("target-paragraph");
        targetParagraph.innerHTML =`<span class="highlight">Bob</span> l'éponge est un personnage dynamique et optimiste mais également très naïf.
        L'un de ses passe-temps préférés est la chasse à la méduse, une activité similaire à l'observation ornithologique et à la collection d'insectes, et la création de bulles en compagnie de <span class='highlight'>Patrick</span>. Il ne sait pas à quel point il agace <span class='highlight'>Carlo</span>."
    `});
    
    // Exercice 2
    const ModifSpan = document.getElementById("Modif_Span");
    
    ModifSpan.addEventListener("click", () => {
        const highlight = document.querySelectorAll(".highlight");

        highlight.forEach(element => {
            element.style.color = "red"
            element.style.textDecoration = "underline";
        })
    });

    //Exercice 3

    const listContainer = document.getElementById("listContainer")
