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
  console.log("The average price is $" + average.toFixed(2));
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      console.log(data[i].title);
    }
  }
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:

  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      console.log(data[i].title + " costs " + data[i].price + " pounds.");
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    for (var n = 0; n < data[i].materials.length; n++) {
      if (data[i].materials[n] === "wood") {
        console.log(data[i].title + " is made of wood.");
      }
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      console.log("name of item: " + data[i].title + "has " + data[i].materials.length + " materials:");
      for (let n = 0; n < data[i].materials.length; n++) {
        console.log(" - " + data[i].materials[n]);
      }
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
  console.log(ownerMade + " items were made by their sellers.");

}
// List all materials in the dataset in a single array (no duplicates).
function question7() {

  let materialsList = [];
  let uniqueMaterialsList = [];
  for (let i = 0; i < data.length; i++) {
    for (let n = 0; n < data[i].materials.length; n++) {
      materialsList.push(data[i].materials[n]);
    }
  }
  materialsList.sort();
  console.log(materialsList)
  for (let r = 0; r < materialsList.length; r++) {
    if ((materialsList[r]) !== (materialsList[r + 1])) {
      uniqueMaterialsList.push(materialsList[r]);
    }
  }
  console.log(uniqueMaterialsList);
}

function question8() {
let procTime = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].processing_min <= procTime) {
      if (data[i].processing_max >= procTime) {
console.log(data[i].title + " can be processed in " + procTime + " days!");
      }
    }
  }
}
function question9(){
  // Sort the items by popularity according to views. The most popular items should be first.
data.sort(function (a, b) {
  return (b.views - a.views);
});
console.log(data);
}

function question10(){
  // Create an array of objects, with each object containing a category name and the total number of views of all items in that category. For example, all items that are in the 'Vintage' category should have their views totaled and set as the views property of the object. Every category should have its own object in the array.
let categoryListAll = [];
let categoryListUnique = [];

  for (let i = 0; i < data.length; i++) {
    for (let n = 0; n < data[i].category_path.length; n++) {
      categoryListAll.push(data[i].category_path[n]);

    }
  }
  categoryListAll.sort();
  for (let r = 0; r < categoryListAll.length; r++) {
    if ((categoryListAll[r]) !== (categoryListAll[r + 1])) {
      categoryListUnique.push(categoryListAll[r]);
    }
  }
  console.log(categoryListUnique);

  // for (let i = 0; i < data.length; i++) {
  //   for (let n = 0; n < data[i].category_path.length; n++) {
  //     if (data[i].category_path[n] === (categoryListUnique[any of them])) {
  //
  //     }

      // categoryListAll.views.push(data[i].category_path[n]);

}
