var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());

var p1 = 0;
console.log(p1)
var p2 = 0;
var p3 = 0;
var total = 0;
console.log(total);
//const listener = document.getElementById('totalCheck');
//listener.addEventListener('click', getTotal());
//console.log(getTotal());

//function getTotal(){
    //document.getElementById("Checkout").innerHTML = total;
    //document.write(total);
//});
//function cartValue(total:number, newProduct: number)
//part two of function
function addProduct(price) { //when a product is added
    if (price == 10) {
        p1 = p1+ 1;
        console.log(p1);
        localStorage.setItem('p1', JSON.stringify(p1)); //storing the new product in the local stoarge to access in other page
        document.getElementById("p1Count").innerHTML = p1; //making sure the other page updates
    }
    else if (price == 20) {
        p2 = p2+1;
        console.log(p2);
        localStorage.setItem('p2',JSON.stringify(p2));
        document.getElementById("p2Count").innerHTML = p2;
    }
    else {
        p3 = p3+1;
        console.log(p3);
        document.getElementById("p3Count").innerHTML = p3;
        localStorage.setItem('p3',JSON.stringify(p3));
    }
    total = total + price;
    document.getElementById("totalCheck").innerHTML = total;
    localStorage.setItem('total',JSON.stringify(total));
    console.log(localStorage.getItem('total'));
    //make sure to update total variable when something added
}
//document.getElementById("p2").addEventListener("click",document.write(total));

