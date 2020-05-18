//Make sure the document is ready before executing script function ready
if (document.readyState == 'loading') {
document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

// Shopping cart toggle function
(function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();


function ready() {

  var addToCartButtons = document.getElementsByClassName('')
  for (i =o; i< addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }
}

//function for updating cart total
function updateCartTotal () {

  var listOfCartItems = document.getElementsByClassName('shopping-cart-items')[0] 
  var cartItem = listOfCartItems.getElementsByClassName('shopping-cart-item')
  var total = 0
  for (i =0; i < cartItem.length; i++) {
    var cartItem = cartItem[i]
    var itemPriceElement = document.getElementsByClassName('item-price')[0]
    var itemQuantityElement = document.getElementsByClassName('item-quantity')[0]
    var price = itemPriceElement.value
    var quantity = itemQuantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total*100) / 100
  document.getElementsByClassName('cart-total')[0].innerText = total
}

//function to update quantity
function updateCartQuantity() {

  var listOfCartItems = document.getElementsByClassName('shopping-cart-items')[0] 
  var cartItem = listOfCartItems.getElementsByClassName('shopping-cart-item')
  var totalQuantity = 0
  for (i =0; i < cartItem.length; i++) {
    var cartItem = cartItem[i]
    var itemQuantityElement = document.getElementsByClassName('item-quantity')[0]
    var quantity = itemQuantityElement.value
    totalQuantity = total + (price * quantity)
  }
  document.getElementsByClassName('total-quantity')[0].innerText = totalQuantity

}

function addToCartwhenClicked(event) {
  var button = event.target
  var amazonItem = button.parentElement
  var itemName = amazonItem.getElementsByClassName('')[0].innerText
  var itemPrice = amazonItem.getElementsByClassName('')[0].innerText
  var itemImageSrc = amazonItem.getElementsByClassName('')[0].src
  addItemToCart(itemName, itemPrice, itemImageSrc)
  updateCartTotal()
}

function addItemToCart(itemName, itemPrice, itemImageSrc) {

  var cartItem = document.createElement('li')
  cartItem.classList.add('shopping-cart-item')
  var listOfCartItems = document.getElementsByClassName('shopping-cart-items')[0]
  var cartItemsNames = listOfCartItems.getElementsByClassName('item-name')
  for (i=0; i<cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText ==text) 
    alert('This item is aleardy added to the cart.')
    return
  }
  var cartItemContents = 
    `<li class="clearfix">
        <img src= "${itemImageSrc}">
        <span class="item-name">${itemName}</span>
        <span class="item-price">${price}</span>
        <span class="item-quantity">"quantity"</span>
      </li>`
  cartItem.innerHTML = cartItemContents
  listOfCartItems.append(cartItem)
}

