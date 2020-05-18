// Shopping Cart on Amazon API

// create shapping cart functions

(function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();

  var shoppingCart = (function(){

  // create empty array of cart items 
  cart = [];

  // Create constructors for itemName, price, image, productURL and count
  function Item(name, price, count, image, productURL) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.productURL = productURL;
    this.count = 0;
  }
  
  // Save cart
  function saveCart() {
  sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count, image, productURL) {
    for(var item in cart) {
      if(cart[item].productURL === productURL) {
        cart[item].count ++;
      }
    }
    var item = new Item(name, price, count, image);
    cart.push(item);
    saveCart();
    //append
  }
  // Set count from total items
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].productURL === productURL) {
        cart[i].count = count;
        break;
      }
    }
  };
  
  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
    totalCount += cart[item].count;
    }
  return totalCount;
  }

  return obj;
})

//Events

// Add item
$('').click(function(event) {
  event.preventDefault();
  var name = 0;
  var price = 0;
  var image = 0;
  //append to shoppingCart
  shoppingCart.addItemToCart(name, price, image, 1);
  
});



