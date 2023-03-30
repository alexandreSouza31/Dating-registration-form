const slides = document.querySelectorAll("[data-action='form']");
const next_btn = document.querySelector(".next_btn");

let current_formIndex = 0;

next_btn.addEventListener("click", function (e) {
    current_formIndex++;
    e.preventDefault();

    slides.forEach(_form => {
        _form.classList.remove("formVisible")
    })

    slides[current_formIndex].classList.add("formVisible");
    console.log(current_formIndex);

    console.log("clicou")
})