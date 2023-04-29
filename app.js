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
        desc: "A classic Chinese sweet and sour pork stir-fry recipe made with juicy pieces of pork tenderloin, bell peppers, onion, and pineapple."
    },
]

const menuDisplay = document.querySelector('.menu-display');
const filterByPrice = document.querySelectorAll('.filterPrice');

window.addEventListener('DOMContentLoaded', function(){
   displayItems(asianCuisine);
})

//Display items
function displayItems(arrayOfItems){
    let menuItems = arrayOfItems.map(function(meal){
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
    // console.log(menuItems);
}

//Sort items by their price
filterByPrice.forEach(function(priceCheck){
    priceCheck.addEventListener('click', function(e){
        const priceSort = e.currentTarget.dataset.id;
        const priceComparison = asianCuisine.filter(function(priceToSort){
            // console.log(priceToSort.priceForTwo);
            return priceToSort;
        });
        // console.log(priceComparison);
        const sortItems = priceComparison.sort(function(a,b){
            if(priceSort == "low"){
                return b.priceForTwo - a.priceForTwo;
            }
            else{
                return a.priceForTwo - b.priceForTwo;
            }
            
        })
        console.log(sortItems);
    });
    
});
