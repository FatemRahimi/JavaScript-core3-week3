let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let total = 0;
console.log(`QTY        ITEM        TOTAL`);

order.forEach((item) => {
  let { itemName, quantity, unitPrice } = item;
  total += item.unitPrice * item.quantity;
  console.log(
    ` ${item.quantity}      ${item.itemName}      ${Number.parseFloat(
      item.unitPrice * item.quantity
    ).toFixed(2)}`
  );
});
console.log(`Total: ${total}`);