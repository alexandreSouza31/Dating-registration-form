const slides = document.querySelectorAll("[data-action='section']");
const next_btn = document.querySelector(".next_btn");
const before_btn = document.querySelector(".before_btn");

let current_sectionIndex = 0;
if (current_sectionIndex === 0) {
    const p = document.getElementsByTagName("p");
    p[0].style.color = "white";
    p[0].style.fontWeight = "bold";
    p[0].style.fontStyle = "italic";
}

next_btn.addEventListener("click", function (e) {
    if (current_sectionIndex === slides.length - 1) {
        // current_sectionIndex = 0; //serve pra caso eu quisesse voltar pro início. Não é o caso.
        return;
    } else {
        current_sectionIndex++;
    }
    e.preventDefault();
    slides.forEach(_section => {
        _section.classList.remove("sectionVisible");

        if (current_sectionIndex === 0) {
            const p = document.getElementsByTagName("p");
            p[0].style.color = "white";
            p[0].style.fontWeight = "bold";
            p[0].style.fontStyle = "italic";
            p[1].style.color = "";
            p[1].style.fontWeight = "";
            p[1].style.fontStyle = "";
            // p[2].style.color = "";não preciso do 0 pois  passo pelo 1º e é ele quem faz o meio de campo
            // p[2].style.fontWeight = "";
            // p[2].style.fontStyle = "";
        }
        if (current_sectionIndex === 1) {
            const p = document.getElementsByTagName("p");
            p[0].style.color = "";
            p[0].style.fontWeight = "";
            p[0].style.fontStyle = "";
            p[1].style.color = "white";
            p[1].style.fontWeight = "bold";
            p[1].style.fontStyle = "italic";
            p[2].style.color = "";
            p[2].style.fontWeight = "";
            p[2].style.fontStyle = "";
        }
        if (current_sectionIndex === 2) {
            const p = document.getElementsByTagName("p");
            // p[0].style.color = "";não preciso do 2º pois  passo pelo 1º e é ele quem faz o meio de campo
            // p[0].style.fontWeight = "";
            // p[0].style.fontStyle = "";
            p[1].style.color = "";
            p[1].style.fontWeight = "";
            p[1].style.fontStyle = "";
            p[2].style.color = "white";
            p[2].style.fontWeight = "bold";
            p[2].style.fontStyle = "italic";

        }
    })
    slides[current_sectionIndex].classList.add("sectionVisible");
    console.log(current_sectionIndex);
})

const clickBefore = before_btn.addEventListener("click", function (e) {
    if (current_sectionIndex === 0) {
        slides.length - 1;
    } else {
        current_sectionIndex--;
    }
    e.preventDefault();
    slides.forEach(_section => {
        _section.classList.remove("sectionVisible");

        if (current_sectionIndex === 0) {
            const p = document.getElementsByTagName("p");
            p[0].style.color = "white";
            p[0].style.fontWeight = "bold";
            p[0].style.fontStyle = "italic";
            p[1].style.color = "";
            p[1].style.fontWeight = "";
            p[1].style.fontStyle = "";
            // p[2].style.color = "";não preciso do 2º pois  passo pelo 1º e é ele quem faz o meio de campo
            // p[2].style.fontWeight = "";
            // p[2].style.fontStyle = "";
        }
        if (current_sectionIndex === 1) {
            const p = document.getElementsByTagName("p");
            p[0].style.color = "";
            p[0].style.fontWeight = "";
            p[0].style.fontStyle = "";
            p[1].style.color = "white";
            p[1].style.fontWeight = "bold";
            p[1].style.fontStyle = "italic";
            p[2].style.color = "";
            p[2].style.fontWeight = "";
            p[2].style.fontStyle = "";
        }
        if (current_sectionIndex === 2) {
            const p = document.getElementsByTagName("p");
            // p[0].style.color = ""; não preciso do 0 pois passo pelo 1º e é ele quem faz o meio de campo
            // p[0].style.fontWeight = "";
            // p[0].style.fontStyle = "";
            p[1].style.color = "";
            p[1].style.fontWeight = "";
            p[1].style.fontStyle = "";
            p[2].style.color = "white";
            p[2].style.fontWeight = "bold";
            p[2].style.fontStyle = "italic";
        }
    })
    slides[current_sectionIndex].classList.add("sectionVisible");
    console.log(current_sectionIndex);
})

const aboult = document.querySelector(".aboult");
const details = document.querySelector(".details");
const body = document.getElementsByTagName("body")

const clickAboult = aboult.addEventListener("click", () => {
    details.style.display = "flex";

})

const close = document.querySelector("#close");
close.addEventListener("click", () => {
    details.style.display = "none";
})


