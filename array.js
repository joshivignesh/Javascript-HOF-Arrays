const groceryList = [
    {name:"Apple", price: 25, category:"fruits"},
    {name:"Mangoe", price:35, category:"fruits"},
    {name:"Tomatoe", price:15, category:"vegetables"},
    {name:"Milk", price:20, category:"mis"},
    {name:"Bread", price:12, category:"misc"},
    {name:"Eggs", price:18, category:"misc"},
    {name:"Banana", price:26, category:"fruits"},
    {name:"Potatoe", price:8, category:"vegetable"},
];

console.log(groceryList);

// The .forEach() method executes a callback function on each of the elements in an array in order.
groceryList.forEach(groceryItem => {  
    console.log(groceryItem.name);
  }); 