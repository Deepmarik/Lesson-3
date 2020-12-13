"use strict";
/*Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter 
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort*/
const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
let newProducts = products1.filter(obj => {
    if (obj.photos != null) { return true; }
})
console.log(newProducts);
products1.sort((a, b) => a.price - b.price);
console.log(products1);