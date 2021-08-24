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

// console.log(groceryList);

// The .forEach() method executes a callback function on each of the elements in an array in order.
// // groceryList.forEach(groceryItem => {  
// //     console.log(`The price for ${groceryItem.name} is ${groceryItem.price}`);
// //   }); 

// The .map() method creates a new array with the results of calling a provided function on 
//every element in the calling array. What this means is map() calls a provided callback function 
// once for each element in an array, in order, and constructs a new array from the results.
// //   const newPrice = groceryList.map(groceryItem => {
// //       return {name:groceryItem.name, price:groceryItem.price *2}  
// //   }); 
// //   console.log(newPrice);


// The filter() method is another example of an in-built higher-order function. 
//   It creates a new array with all the elements that pass the test provided by a callback function. 
//   It also takes in a function as an argument, hence making it a higher-order function. 
//   The callback function passed to the filter() method accepts three arguments:

// // const fruitList = groceryList.filter(groceryItem => {
// //     return groceryItem.category === "fruits"
// // }); 
// // console.log(fruitList);

// The find() method returns the value of the first element in the provided array 
// that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.

// // const result = groceryList.find(groceryItem => {
// //     return groceryItem.category === "misc"
// // }); 
// // console.log(result);

// The sort() method sorts the elements of an array in place and returns the sorted array. 
// The default sort order is ascending, built upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

const sortedArray = groceryList.sort(); 
    console.log(sortedArray);