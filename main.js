const buttons = document.querySelectorAll("[data-buttons-button]");
const nextBtn = document.querySelector("[data-next]");
const prevBtn = document.querySelector("[data-prev]");
const imagesLi = document.querySelectorAll("li img");
// console.log(buttons)

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);


function next(){
    const slides = document.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + 1;
    if (newIndex < 0) {
        newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
        newIndex = 0;
    } 
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}

function prev(){
    const slides = document.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) - 1;
    if (newIndex < 0) {
        newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
        newIndex = 0;
    } 
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}

const container = document.querySelector("[data-container]");
const mainbutton = document.querySelector("[data-button-container]");


imagesLi.forEach(image =>{
    image.addEventListener("mouseover", (e) =>{
        buttons.forEach(button =>{
            button.classList.remove("default");
        })
    })

    image.addEventListener("mouseout", () =>{
        buttons.forEach(button =>{
            button.classList.add("default");
        })
    })
})


buttons.addEventListener("mouseover", (e) =>{
    buttons.forEach(button =>{
        button.classList.remove("default");
    })
})





