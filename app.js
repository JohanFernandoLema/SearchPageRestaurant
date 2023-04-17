const closeBtn = document.querySelector("#open-btn");
const sideFilters = document.querySelector("#hideRight");
const openBtn = document.querySelector("#open-btn");

closeBtn.addEventListener('click', () =>{
    sideFilters.style.display = "none";
})

openBtn.addEventListener('click', () =>{
    sideFilters.style.display = "block";
})