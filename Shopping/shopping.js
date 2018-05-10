"use strict";

(function () {
    function Product(name, price, expDate) {
        this.id = parseInt(Math.random() * 100000);
        this.name = name;
        this.price = parseFloat(price);
        this.expDate = new Date(expDate);
        this.getInfo = function () {
            var firstLetter = this.name[0].toUpperCase();
            var lastLetter = this.name[this.name.length - 1].toUpperCase();
            var productId = firstLetter + lastLetter + this.id;

            return productId + ", " + name + ", " + price;

        }
    }

    var banana = new Product("Banana", "123.50", "3-5-2019");
    var kiwi = new Product("Kiwi", "150.50", "3-5-2019");
    var ananas = new Product("Ananas", "223.50", "3-5-2019");
    // console.log(banana);

    function ShoppingBag() {
        this.listOfProducts = [];
        this.addProduct = function (product) {
            if (!product && !(product instanceof Product)) {
                console.log("Invalid input");
                return;
            }

            if (product.expDate.getTime() > Date.now()) {
                this.listOfProducts.push(product);
            }

        };
        this.avgPrices = function (product) {
            var avgResult = 0;
            this.listOfProducts.forEach(function (product) {
                avgResult += product.price;
            });
            console.log(avgResult);
            avgResult = (parseFloat(avgResult) / this.listOfProducts.length).toPrecision(3);

            return avgResult;
        }
        this.mostExpensive = function () {
            var mostExpensive = this.listOfProducts[0].price;
            var mostExpensiveProduct;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                if (mostExpensive < this.listOfProducts[i].price) {
                    mostExpensiveProduct = this.listOfProducts[i];
                }
            }
            return mostExpensiveProduct;
            console.log(mostExpensiveProduct);

        }
        this.totalPrice = function () {
            var sum = 0;
            this.listOfProducts.forEach(function (product) {
                sum += product.price;
            })
            return sum;
        }
    }

    function PaymentCard(balance, validDate) {
        this.balance = parseFloat(balance);
        this.validDate = new Date(validDate);
        this.active = function () {
            return this.validDate > Date.now() ? "active" : "inactive";
        };
    }



    var mySB = new ShoppingBag();
    mySB.addProduct(banana);
    mySB.addProduct(kiwi);
    mySB.addProduct(ananas);


    console.log(mySB.totalPrice());

    var milos = new PaymentCard(12000, "5 10 2019");
    console.log(milos.active());


    (function checkoutAndBuy(price, balance){
        if(price <= balance){
            console.log("purchase is successful")
        }else{
            console.log(price - balance);
        }
    })(mySB.totalPrice, milos.balance);



}());



