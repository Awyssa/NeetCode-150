//This code allows you to create a grocery list. For each item you add, it will generate a random quantity of that item for you to buy (max 5 each).

//Empty array to store items from user's input
const items = [];

const startList = alert("Let's do the grocery list for this week!");

console.log(`Grocery List:`);

//Function to start the prompts and collect the items the user wants to insert in the list
function shoppingList() {

  let shoppingItem = prompt("What item do you want to buy?");

  if (shoppingItem) {
    //Remove any whitespace from both sides of the string input, capitalize the first letter of the input, and ensure all other letters are lowercase
    shoppingItem =
      shoppingItem.trim().charAt(0).toUpperCase() +
      shoppingItem.slice(1).toLowerCase();
    
    //Add each item to the items array and then restart the ShoppingList() function to give the user the possibility to add other items to the list
    items.push(shoppingItem);
    shoppingList();
    
    //If the user cancel the first prompt, the code will alert the user that their list is empty
  } else if (items.length === 0) {
    alert("Your list is empty");
    console.log("Your list is empty");
    
  } else if (!shoppingItem) {
    prompt("You didn't insert any item, do you want to add anything else?")
    return
  }
  //   items.push(shoppingItem);
  //   shoppingList();
    
  //   //If the user cancel a prompt after the first one, the code will alert that the list is ready to see in the console
  // } else {
  //   return alert("Great! Now have a look at your grocery list in the console");
  // }
}

//Calling the first function
shoppingList();

//Function to create an object and transform each item from the items array in a key and assign them a random value with Math.random to generate a random quantity for each item
function createObjectList() {
  
  //Empty object
  const randomItemsNumbers = {};

  //Loop through the items array to create the properties of the object (key=item value, value=random number), the value will be a random number between 1 and 5
  for (let i = 0; i < items.length; i++) {
    randomItemsNumbers[items[i]] = Math.floor(Math.random() * 5) + 1;
  }

  //Loop that uses the object method Object.entries to access each key and value of the randomItemsNumbers object to console.log the grocery list items and linked random quantity
  for (let [item, amount] of Object.entries(randomItemsNumbers)) {
    console.log(`${item} x${amount}`);
  }

  //Another way of achieving the same result of the last loop
  //for (let key in randomItemsNumbers) {
  //console.log(`${key} x${randomItemsNumbers[key]}`)
  //}
}

//Calling the function
createObjectList();
