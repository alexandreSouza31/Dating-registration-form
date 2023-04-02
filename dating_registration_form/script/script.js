const slides = document.querySelectorAll("[data-action='section']");
const next_btn = document.querySelector(".next_btn");
const before_btn = document.querySelector(".before_btn");

let name = document.querySelector(".name");
let age = document.querySelector(".age");
let gender = document.querySelector(".gender");
let pref = document.querySelector(".pref");
let email = document.querySelector(".email");
let tel = document.querySelector(".tel");
let address = document.querySelector(".address");

//let check = document.querySelectorAll("[data-action='chk']");
let check1 = document.querySelector(".chk1");
let check2 = document.querySelector(".chk2");
let check3 = document.querySelector(".chk3");


let current_sectionIndex = 0;
nextRender()
beforeRender()

function preencheDados() { //
    name.value = "joao";
    age.value = 20;
    gender.value = "m";
    pref.value = "f";
    email.value = "p@gm";
    tel.value = 999999999;
    address.value = "f";
}
preencheDados()

function nextRender() {
    slides.forEach(_section => {
        _section.classList.remove("sectionVisible");
        const p = document.getElementsByTagName("p");

        if (current_sectionIndex === 0) {
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
            next_btn.disabled = true;
            p[1].style.color = "";
            p[1].style.fontWeight = "";
            p[1].style.fontStyle = "";
            p[2].style.color = "white";
            p[2].style.fontWeight = "bold";
            p[2].style.fontStyle = "italic";
        }
        if (current_sectionIndex === 3) {

            const container = document.querySelector(".form_container");
            const h1 = document.querySelector(".h1");
            next_btn.style.display = "none";
            before_btn.style.display = "none";
            //container.style.display = "none";
            h1.style.display = "none";
            showSuccessMessage(`cadastro realizado com sucesso, ${name.value}! Em breve
            você receberá um email com as instruções para o
            pagamento`);
            current_sectionIndex = 0;
            p[1].style.color = "";
            p[1].style.fontWeight = "";
            p[1].style.fontStyle = "";
            p[2].style.color = "";
            p[2].style.fontWeight = "";
            p[2].style.fontStyle = "";
        }
    })
    slides[current_sectionIndex].classList.add("sectionVisible");
    console.log("index atual da página: " + current_sectionIndex);
}

function beforeRender() {
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
}

const clickNext = next_btn.addEventListener("click", function (e) {
    e.preventDefault();


    if (validaCurrent0() || validaCurrent1()) {
        return
    } else {

        if (current_sectionIndex === slides.length - 1) {
            // current_sectionIndex = 0; //serve pra caso eu quisesse voltar pro início. Não é o caso.
            return;
        } else {
            current_sectionIndex++;
        }
        nextRender()
    }
})

const clickBefore = before_btn.addEventListener("click", function (e) {
    next_btn.disabled = false;
    if (current_sectionIndex === 0) {
        slides.length - 1;
    } else {
        current_sectionIndex--;
    }
    e.preventDefault();
    beforeRender();
})

const aboult = document.querySelector(".aboult");
const details = document.querySelector(".details");
const body = document.getElementsByTagName("body")

const clickAboult = aboult.addEventListener("click", () => {
    details.style.display = "flex";

})

const close = document.querySelector(".details");
close.addEventListener("click", () => {
    details.style.display = "none";
})

const p = document.getElementsByTagName("p");
p[0].addEventListener("click", () => {
    current_sectionIndex = 0;
    beforeRender()

});


function validaCurrent0() {
    if (name.value == "" || age.value == "" || gender.value == "" || pref.value == "") {
        alert("preencha os dados pessoais corretamente");
        return true;
    }
}
function validaCurrent1() {
    if (email.value == "" && current_sectionIndex === 1 || tel.value == "" &&
        current_sectionIndex === 1 || address.value == "" && current_sectionIndex === 1) {
        alert("preencha o contato corretamente");
        return true;
    }
}

function checou() {
    
    check1.addEventListener("click", function () {
        const checado = check1.checked;

        if (current_sectionIndex === 2) {
            if (checado) {
                next_btn.disabled = false;
                check2.disabled = true;
                check3.disabled = true;
                console.log("habilitado")
            } else {
                console.log("desabilitado");
                next_btn.disabled = true;
                check2.disabled = false;
                check3.disabled = false;
            }
        }
    })
    check2.addEventListener("click", function () {
        const checado = check2.checked;
        if (current_sectionIndex === 2) {
            if (checado) {
                next_btn.disabled = false;
                check1.disabled = true;
                check3.disabled = true;
                console.log("habilitado")
            } else {
                console.log("desabilitado");
                next_btn.disabled = true;
                check1.disabled = false;
                check3.disabled = false;
            }
        }
    })
    check3.addEventListener("click", function () {
        const checado = check3.checked;
        if (current_sectionIndex === 2) {
            if (checado) {
                next_btn.disabled = false;
                check1.disabled = true;
                check2.disabled = true;
                console.log("habilitado")
            } else {
                console.log("desabilitado");
                next_btn.disabled = true;
                check1.disabled = false;
                check2.disabled = false;
            }
        }
    })
}
checou();

const feedbackSuccess = document.getElementById("feedbackSuccess");
function showSuccessMessage(msg) {
    feedbackSuccess.classList.add("show");
    feedbackSuccess.querySelector("#p-feedbackS").textContent = msg;
}
    
const feedbackError = document.getElementById("feedbackError");
function showErrorMessage(msg) {
    feedbackError.classList.add("show2");
    feedbackError.querySelector("#p-feedbackE").textContent = msg;
    }