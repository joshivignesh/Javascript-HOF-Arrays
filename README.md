# Javascript-HOF-Arrays
 Javascript-HigherOrderFunctions-Arrays

 In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.

A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

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
