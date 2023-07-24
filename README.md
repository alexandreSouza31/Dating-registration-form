# date registration form

beginner project of a 3 page dating site registration form.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![home_page](https://user-images.githubusercontent.com/112407769/229405626-30bf3823-69ee-431f-b497-f7d6f43ca753.png)
![choose_plan_on_mobile_devices](https://user-images.githubusercontent.com/112407769/229405620-97feb716-9ffb-4e15-a6b4-abb8cd6b5d42.png)
![registration_completed_message](https://user-images.githubusercontent.com/112407769/229405641-f71e1045-1794-443f-ad2b-414254ebc87d.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>

### What I learned

```css ***add success and error message:***
#feedbackSuccess,
#feedbackError {
    display: none;
    position: fixed;
    left: 1rem;
    top: 1rem;
    right: 1rem;
    border-radius: 5px;
    font-weight: bold;
    justify-content: center;
    padding: 1rem;
    align-items: center;
    font-size: 2em;
    transform: translateY(calc(-2rem - 100%));
    transition: transform .3s;
    height: max(80px, 1);
    animation: details .4s;
}

#feedbackSuccess {
    flex-direction: column;
    background-color: #333333;
    color: rgb(46, 210, 46);
}

#feedbackSuccess>image {
    width: max(1920px);
    height: 100%;
    margin: 0 auto;
}

#feedbackError {
    background-color: #ef9595;
    color: #652f2f;
}

#feedbackSuccess p,
#feedbackError p {
    margin: .5em auto;
}

#feedbackSuccess button,
#feedbackError button {
    background-color: transparent;
    border: none;
}

#feedbackSuccess button {
    color: #215113;
}

#feedbackError button {
    color: #652f2f;
}

#feedbackSuccess.showSuccess {
    transform: translateY(0px);
}

#feedbackError.showError {
    transform: translateY(0px);
}

```
```js
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
```

### Continued development

```
the use of foreach, flexbox, tag name references in JS, clean code, refactoring.
```
### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ) - Frontend Mentor helped me build the foundation of readme.md and I will be using it going forward.
It also inspired me in this form project.

### How to run the code? 
 Cloning/downloading the project

Enter the command```git clone https://github.com/alexandreSouza31/date-registration-form``` in the terminal, or if you prefer, download it by clicking on the green button called "Code" in this project's repository, and then, "Download zip.

run index.html

#### Deploy

If you want to see the application running without having to download it, go to
- [Vercel](https://dating-registration-form.vercel.app/) - Website used to host the application.

:)

## Author
- LinkdIn - Alexandre Mariano(https://www.linkedin.com/in/alexandresouza31/)

## Acknowledgments

[Roger Melo](https://github.com/Roger-Melo/carousel-com-js-puro) - helped me in one of his videos on youtube with the carousel template for my page.

[Matheus Trindade](discord.com) - helped me find the problem that ignored the error on my page and passed it on.

[Paulo Moreira](discord.com) - helped me find the problem that made the error div not appear on my page.
