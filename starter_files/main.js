// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let average = 0;
  let total = 0;
  for (var i = 0; i < data.length; i++) {
    total = total + data[i].price;
  }
  average = total / data.length;
  console.log(average.toFixed(2))
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  let itemsForQTwo = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      itemsForQTwo.push(data[i].price);

    }
  }
  console.log(itemsForQTwo);

return itemsForQTwo;
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:

  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      console.log("name: " + data[i].title);
      console.log("price: " + data[i].price.toFixed(2));
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  let wooden =[];
  for (var i = 0; i < data.length; i++) {
    for (var n = 0; n < data[i].materials.length; n++) {
      if (data[i].materials[n] === "wood") {
        wooden.push(data[i]);
      }
    }
  }
console.log(wooden);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
for (var i = 0; i < data.length; i++) {
  if (data[i].materials.length >= 8) {
    console.log("name of item: " + data[i].title);
    console.log("number of materials: " + data[i].materials.length);
    console.log("made of: " + data[i].materials);
  }
}
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  let ownerMade = 0;
for (var i = 0; i < data.length; i++) {
  if (data[i].who_made === "i_did"){
    ownerMade++;
  }
}
console.log(ownerMade);

}
