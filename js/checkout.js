
const checkoutDetails = JSON.parse(sessionStorage.getItem('checkoutDetails'));

// Display checkout details on checkout.html
document.getElementById('date').innerText = checkoutDetails.date;
document.getElementById('invoice-number').innerText = checkoutDetails.invoiceNumber;

const orderItemsList = document.getElementById('order-items');
checkoutDetails.items.forEach(product => {
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item';
  listItem.innerText = `${product.name} - $${product.price.toFixed(2)}`;
  orderItemsList.appendChild(listItem);
});

document.getElementById('total-price').innerText = checkoutDetails.totalPrice;
