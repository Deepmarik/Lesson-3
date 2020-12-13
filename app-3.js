"use strict";
//3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%
const products = [
    {
      id: 3,
      price: 200
    },
    {
      id: 4,
      price: 900
    },
    {
      id: 1,
      price: 1000
    }
  ];
  products.forEach((obj) => {
    obj.price = obj.price - obj.price * 0.15;
    alert(obj.price);
  });
  console.log(products);
  