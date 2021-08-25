# Javascript-HOF-Arrays
 Javascript-HigherOrderFunctions-Arrays

 In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.

A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

Simple Array:
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

Using forEach:

// The .forEach() method executes a callback function on each of the elements in an array in order.
groceryList.forEach(groceryItem => {  
    console.log(`The price for ${groceryItem.name} is ${groceryItem.price}`);
  }); 
  
![image](https://user-images.githubusercontent.com/10427100/130595784-3911d270-9d45-485a-9243-9855eb81c377.png)

Using map:

// The .map() method creates a new array with the results of calling a provided function on 
//every element in the calling array. What this means is map() calls a provided callback function 
// once for each element in an array, in order, and constructs a new array from the results.

  const newPrice = groceryList.map(groceryItem => {
      return {name:groceryItem.name, price:groceryItem.price *2}  
  }); 
  console.log(newPrice);
  
![image](https://user-images.githubusercontent.com/10427100/130596692-1fffcb43-340e-4c35-8839-98eb097357ee.png)

Using filter:

// The filter() method is another example of an in-built higher-order function. 
//   It creates a new array with all the elements that pass the test provided by a callback function. 
//   It also takes in a function as an argument, hence making it a higher-order function. 
//   The callback function passed to the filter() method accepts three arguments:

Code:

const fruitList = groceryList.filter(groceryItem => {
    return groceryItem.category === "fruits"
}); 
console.log(fruitList);

![image](https://user-images.githubusercontent.com/10427100/130598017-9cd54c2b-a5a8-464c-b102-3d2a53c530df.png)


Using find:

// The find() method returns the value of the first element in the provided array 
// that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.

const result = groceryList.find(groceryItem => {
    return groceryItem.category === "misc"
}); 
console.log(result);


![image](https://user-images.githubusercontent.com/10427100/130664791-ab322ce2-21af-48c3-b1de-cb6f43725664.png)


Using some:

//   The some() method tests whether at least one element in the array passes the test 
//   implemented by the provided function. It returns true if, in the array, 
//   it finds an element for which the provided function returns true; otherwise it returns false. 
//   It doesn't modify the array.

const checkPrice = groceryList.some(item => {
    return item.price > 19
}); 
   console.log(checkPrice);
   
   ![image](https://user-images.githubusercontent.com/10427100/130815045-b66c8cf3-7177-45a6-9910-352dcc756a8d.png)
   
   
   Using every:
   
   // The every() method tests whether all elements in the array pass the test implemented 
// by the provided function. It returns a Boolean value.

const checkPrice = groceryList.every(item => {
    return item.price > 19
}); 
   console.log(checkPrice);

![image](https://user-images.githubusercontent.com/10427100/130815996-1cbb5d9b-43c2-426a-bc6d-3e5445663d66.png)

const checkPrice = groceryList.every(item => {
    return item.price > 7
}); 
   console.log(checkPrice);

![image](https://user-images.githubusercontent.com/10427100/130816147-5f93011c-c860-4d53-87ba-56486a4bb052.png)

