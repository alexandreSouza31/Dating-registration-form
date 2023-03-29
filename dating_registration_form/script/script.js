let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");
let form3 = document.querySelector(".form3");
let next_btn = document.querySelector(".next_btn");
let p = document.getElementsByTagName("p");
form2.style.display="none"
form3.style.display="none"
p[0].style.color = "blue"

next_btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (form1) {
        form1.style.display = "none"
        form2.style.display = "flex"
        p[0].style.color=""
        p[1].style.color = "blue"
        console.log("foi pro 2")
        
    }

    // if (form2) {
    //     form2.style.display = "none";
    //     form1.style.display = "block";
    //     console.log("foi pro 3")

    // }
})