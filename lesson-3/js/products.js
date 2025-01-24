// STEP 1: Declare and initialize variables
// STEP 1a: Grab the parts of the DOM that we need to build the invoice
const productList = document.querySelector("tbody");
const totalData = document.querySelector("tfoot td:first-of-type");

// STEP 1b: Build the products array in the format 'Product Name:0.00'
let products = [
	"Frozen Pizza: 5.99",
	"Orange Juice: 7.95",
	"Milk: 6.95",
	"Eggs: 4.95",
	"Bacon: 7.49",
	"Kiwi Fruit: 3.95"
];
// STEP 1c: Set up invoiceTotal variable - start at zero
let invoiceTotal = 0;

// STEP 1d: Declare the itemRow and the itemDetail array;
let itemRow = []; //Can also be initialized w/ let itemRow = new Array();
let itemDetail = new Array();
let itemDesc;
let itemPrice;


// STEP 2: Build a loop to iterate through the products array

for(let i=0; i <products.length; i++){
	// STEP 3: Break apart the product name from the price for each item with split()
	products[i] = products[i].split(": ");

	// STEP 4: Now we have an array as an element of an array - set the second array element to the product price (as type number)
	products[i][1] = Number(products[i][1]);
	// STEP 5: Add the price of this product to the invoice total
	invoiceTotal += products[i][1];
	// STEP 6: Capture each product name and price as variables
	itemDesc = products[i][0];
	itemPrice = products[i][1];
	
	// STEP 7: Create a TR element for this product and price in the invoice table
	itemRow[i] = document.createElement("tr");
	
	// STEP 8: Build the string that contains two TD elements each containing one of the item description, and the item price
	itemDetail[i] = `<td>${itemDesc}</td><td>${itemPrice}</td>`;
	// STEP 9: Set the above string as the innerHTML of the new TR element, and then append the new element to the table body (var productList)
	itemRow[i].innerHTML = itemDetail[i];
	console.log(itemRow[i]);
	productList.append(itemRow[i]);
}

// STEP 10: Set the total cost of the invoice as the textContent of the TD in the TFOOT (var totalData), rounding the number to two decimal places

totalData.textContent = "$ " + invoiceTotal.toFixed(2);