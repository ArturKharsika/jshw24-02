let products = [
    {name: 'Хлеб', count: 2, price: 20},
    {name: 'Молоко', count: 1, price: 30},
    {name: 'Масло', count: 2, price: 60},
    {name: 'Сало', count: 1, price: 150},
];

while (isRepeat = true) {
    let userAnswer = prompt(
        '1. Список продуктов, 2. Общее кол-во и сумма товаров в корзине, 3. Средняя цена товаров / товаров > 100 / товаров < 50, 4. Cамый дорогой / Самый дешевый товар, 5. Выход'
    );
    
    if (userAnswer == '1') {
        groceryList();
    } else if (userAnswer == '2') {
        cart();
    } else if (userAnswer == '3') {
        averageCost();
    } else if (userAnswer == '4') {
        mostExpensiveandChepeast();
    } else if (userAnswer == '5') {
        break;
    } else {
        console.log('Ошибка!');
        break;
    }
}

function groceryList() {
    for (let i = 0; i < products.length; i++) {
        let nameProducts = products[i].name;
        let amountOfProducts = products[i].count;
        let priceProducts = products[i].price;
        let productsCost = amountOfProducts * priceProducts;
        console.log(nameProducts, ':', amountOfProducts, '*', priceProducts, '=', productsCost);
    }
    console.log('***************************');
}

function cart() {
    let totalProducts = 0;
    for (let i = 0; i < products.length; i++) {
        totalProducts += products[i].count;
    }
    
    console.log('всего товаров:', totalProducts);
    
    let quantityProducts;
    let CostProducts;
    let productsValue = 0;
    for (let i = 0; i < products.length; i++) {
        quantityProducts = products[i].count;
        CostProducts = products[i].price;
        productsValue += quantityProducts * CostProducts;
    }
    
    console.log('сумма товаров в корзине:', productsValue);
    console.log('***************************');
}

function averageCost() {
    let averageProductsPrice = 0;
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price;
        averageProductsPrice = totalPrice / products.length;
    }
    
    console.log('средняя цена товара:', averageProductsPrice);
    
    let expensivestProducts = 0;
    for (let i = 0; i < products.length; i++) {
        let priceProducts = products[i].price;
        if (priceProducts > 100) {
            expensivestProducts++;
        }
    }
    
    console.log('товаров дороже 100:', expensivestProducts);
    
    let cheapestProducts = 0;
    for (let i = 0; i < products.length; i++) {
        let priceProducts = products[i].price;
        if (priceProducts < 50) {
            cheapestProducts++;
        }
    }
    
    console.log('товаров дешевле 50:', cheapestProducts);
    console.log('***************************');
}

function mostExpensiveandChepeast() {
    let minPrice = products[0].price;
    let maxPrice = products[0].price;
    let minNameProducts;
    let maxNameProducts;
    let amountOfMinProducts;
    let amountOfMaxProducts;
    
    for (let i = 0; i < products.length; i++) {
        let priceProducts = products[i].price;
        if (priceProducts <= minPrice) {
            minPrice = priceProducts;
            minNameProducts = products[i].name;
            amountOfMinProducts = products[i].count;
        }
        if (priceProducts >= maxPrice) {
            maxPrice = priceProducts;
            maxNameProducts = products[i].name;
            amountOfMaxProducts = products[i].count;
        }
    }
    
    console.log('Самый дорогой товар -', maxNameProducts, maxPrice, 'купили', amountOfMaxProducts);
    console.log('Самый дешевый товар -', minNameProducts, minPrice, 'купили', amountOfMinProducts);
}

