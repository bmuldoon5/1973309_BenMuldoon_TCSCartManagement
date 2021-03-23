class Product{
    name:string;
    price:number;
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

}

let arr = []; //array for storing in local storage
//making product 1,2,3 counter
let p1:number =0;
let p2:number =0;
let p3:number =0;
let total:number = 0;



//function cartValue(total:number, newProduct: number)
//part two of function
function addProduct(price) { //when a product is added
    if (price == 10) {
        p1 = p1+ 1;
        console.log(p1);
        localStorage.setItem('p1', JSON.stringify(p1)); //storing the new product in the local stoarge to access in other page
       
    }
    else if (price == 20) {
        p2 = p2+1;
        console.log(p2);
        localStorage.setItem('p2',JSON.stringify(p2));

    }
    else {
        p3 = p3+1;
        console.log(p3);
        localStorage.setItem('p3',JSON.stringify(p3));
    }
    total = total + price;
    localStorage.setItem('total',JSON.stringify(total));
    console.log(localStorage.getItem('total'));
    //make sure to update total variable when something added
}


 

