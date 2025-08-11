let obj = {
  item: "pen",
  price: 10,
};
console.log(`The price of` , obj.item , "is " , obj.price , "rupees");

// combine the whole thing inside console.log in single string
// we can do this via template literals

let output = `the cost of ${obj.item} is ${obj.price} rupess`
console.log(output);
console.log(`the cost of ${obj.item} is ${100 + 9} rupess`)
