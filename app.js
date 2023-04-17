const closeBtn = document.querySelector("#open-btn");
const sideFilters = document.querySelector("aside");

closeBtn.addEventListener('click', () =>{
    sideFilters.style.display = "none";
})