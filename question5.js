
var store = [
    {name: "Laptop", price: 75000, rating: 4.5},
    {name: "Tablet", price: 30000, rating: 4.2},
    {name: "Smartphone", price: 60000, rating: 4.7},
    {name: "Smartwatch", price: 20000, rating: 3.9}
];

function storeAnalysis(store){
    let ratingcount = 0;
    let minPriceProduct = "";
    let minPrice = store[0].price;

    for (let i =0; i < store.length; i++){
        console.log(`Product Name : ${store[i].name}, Rating: ${store[i].rating}`);
        ratingcount += store[i].rating;
        if(store[i].price < minPrice){
            minPrice = store[i].price;
            minPriceProduct = store[i].name;
        }
    }

    let averageRate = ratingcount / store.length;
    console.log("Average Rating:", averageRate);

    console.log("Minimum Price Product:", minPriceProduct);
}

storeAnalysis(store);