const slides = document.querySelectorAll("[data-action='section']");
const input = document.querySelectorAll("[data-action='input']");
const next_btn = document.querySelector(".next_btn");
const before_btn = document.querySelector(".before_btn");

let name = document.querySelector(".name");
let age = document.querySelector(".age");
let gender = document.querySelector(".gender");
let pref = document.querySelector(".pref");
let email = document.querySelector(".email");
let tel = document.querySelector(".tel");
let address = document.querySelector(".address");

let check1 = document.querySelector(".chk1");
let check2 = document.querySelector(".chk2");
let check3 = document.querySelector(".chk3");

let current_sectionIndex = 0;
nextRender()
beforeRender()

//menus como sendo links
const p = document.getElementsByTagName("p");
const p0Clicked = p[0].addEventListener("click", () => {
    current_sectionIndex = 0;
    beforeRender()
    next_btn.disabled = false;
});

const p1Clicked = p[1].addEventListener("click", () => {
    current_sectionIndex = 1;
    beforeRender()
    next_btn.disabled = false;
});
const p2Clicked = p[2].addEventListener("click", () => {
    current_sectionIndex = 2;
    beforeRender();
    next_btn.disabled = true;
});

function noCheckedNoDisabled() {
    check1.checked = false
    check2.checked = false
    check3.checked = false
    check1.disabled = false
    check2.disabled = false
    check3.disabled = false
}

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
            noCheckedNoDisabled()
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
            noCheckedNoDisabled()
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
            noCheckedNoDisabled()
        }
        if (current_sectionIndex === 3) {
            next_btn.style.display = "none";
            before_btn.style.display = "none";
            showSuccessMessage();
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
            p[2].style.color = "";
            p[2].style.fontWeight = "";
            p[2].style.fontStyle = "";
            noCheckedNoDisabled();
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
            noCheckedNoDisabled();
        }
        if (current_sectionIndex === 2) {
            const p = document.getElementsByTagName("p");
            p[0].style.color = "";
            p[0].style.fontWeight = "";
            p[0].style.fontStyle = "";
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

const closeDetails = document.querySelector(".details");
closeDetails.addEventListener("click", () => {
    details.style.display = "none";
})

function validaCurrent0() {
    if (name.value == "" || age.value == "" || gender.value == "" || pref.value == "") {
        showErrorMessage("preencha os dados pessoais corretamente");
        return true;
    }
}
function validaCurrent1() {
    if (email.value == "" && current_sectionIndex === 1 || tel.value == "" &&
        current_sectionIndex === 1 || address.value == "" && current_sectionIndex === 1) {
        showErrorMessage("preencha o contato corretamente");
        return true
    }
}    

let checado = "";
function checou() {

    check1.addEventListener("click", function () {

        checado = check1.checked;
        if (current_sectionIndex === 2) {
            if (checado) {
                next_btn.disabled = false;
                check2.disabled = true;
                check3.disabled = true;
                console.log("habilitado");
            } else {
                console.log("desabilitado");
                next_btn.disabled = true;
                check2.disabled = false;
                check3.disabled = false;
            }
        }
    })
    check2.addEventListener("click", function () {
        checado = check2.checked;
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
        checado = check3.checked;
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

//aparecer mensagem de sucesso
const feedbackSuccess = document.getElementById("feedbackSuccess");
function showSuccessMessage(msg) {
    feedbackSuccess.classList.add("showSuccess");
    feedbackSuccess.style.display = "flex";

    if (check1.checked) {
        msg = `Cadastro concluído com sucesso, ${name.value}! Você já pode aproveitar seus 2 meses Grátis!`
    } else if (check2.checked) {
        msg = `Cadastro concluído com sucesso, ${name.value}! Você receberá um email para prosseguir com o pagamento de 22,90/mês`
    } else if (check3.checked) {
        msg = `Cadastro concluído com sucesso, ${name.value}! Você receberá um email para prosseguir com o pagamento de 30,99/mês`
    }
    feedbackSuccess.querySelector("#p-feedbackS").textContent = msg;
    name.value = "";
    age.value = "";
    gender.value = "";
    pref.value = "";
}

//aparecer mensagem de erro
const feedbackError = document.getElementById("feedbackError");
function showErrorMessage(msg) {
    feedbackError.classList.add("showError");
    feedbackError.style.display = "flex";
    feedbackError.querySelector("#p-feedbackE").textContent = msg;
}

//desaparecer msg de sucesso pela própria div
feedbackSuccess.addEventListener("click", () => {
    feedbackSuccess.classList.remove("showSuccess");
    feedbackError.style.display = "";
    next_btn.style.display = "";
    before_btn.style.display = "";
    input.forEach(_input => {
        _input.focus();
    })
})

//desaparecer msg de sucesso pelo clique do input
input.forEach(_input => {
    _input.addEventListener("click", () => {
        feedbackSuccess.classList.remove("showSuccess");
        feedbackError.style.display = "";
        next_btn.style.display = "";
        before_btn.style.display = "";
    })
})

//desaparecer a msg de erro pela própria div
feedbackError.addEventListener("click", () => {
    feedbackError.classList.remove("showError");
    next_btn.style.display = "";
    before_btn.style.display = "";
    input.forEach(_input => {
        _input.focus();
    })
})

//desaparecer a msg de erro pelo clique no input
input.forEach(_input => {
    _input.addEventListener("click", () => {
        feedbackError.classList.remove("showError");
        next_btn.style.display = "";
        before_btn.style.display = "";
    })
})
