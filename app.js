const asianCuisine = [
    {
        id: 1,
        img: "./Assets/images/sashimi.jpg",
        cuisine: "japanese",
        mealName: "sahimi",
        priceForTwo: 700,
        desc: "Sashimi is a Japanese delicacy consisting of fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce."
    },
    {
        id: 2,
        img: "./Assets/images/sweetAndSour.jpg",
        cuisine: "chinese",
        mealName: "sweet and sour pork",
        priceForTwo: 1200,
        desc: "Sashimi is a Japanese delicacy consisting of fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce."
    },
]

const menuDisplay = document.querySelector('.menu-display');

window.addEventListener('DOMContentLoaded', function(){
    let menuItems = asianCuisine.map(function(meal){
        return `
        <div class="cards">
            <img src=${meal.img} alt="sashimi" class="photo">
            <div class="item-info">
                <p>Cuisine: <span>${meal.cuisine}</span></p>
                <h4>${meal.mealName}</h4>
                <hr>
                <p>Cost for two: <span>${meal.priceForTwo}</span></p>
                <p>${meal.desc}</p>
            </div>
        </div>`
    });
    menuItems = menuItems.join('');
    menuDisplay.innerHTML = menuItems;
    console.log(menuItems);
})