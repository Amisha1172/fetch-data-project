async function fectchData(){
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    return data;
    
}
let storeContainer = document.querySelector(".store");
window.addEventListener("DOMContentLoaded",async() =>{
    let data = await fectchData();
    const cards = data.map((e) => {
        return`<div class="main">
        <img src="${e.image}" alt="" class="img">
        <div class="second">
            <h2>${e.title}</h2>
            <h5>${e.price}</h5>
        </div>
        <div>
            <h5>${e.category}</h5>
            <h5>${e.rating.rate}</h5>
        </div>
        <div>
            <button>Shoe More</button>
        </div>
     </div>`;
    }).join("");
    storeContainer.innerHTML = cards;
});