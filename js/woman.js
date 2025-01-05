fetch("https://quill-ordinary-result.glitch.me/womanProducts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((elem) => {
      var div = document.createElement("div");
      div.setAttribute("class", "product-card");

      var image = document.createElement("img");
      image.setAttribute("src", elem.image);
      image.setAttribute("id", "productimage");

      var title = document.createElement("p");
      title.innerText = elem.discription;
      title.setAttribute("id", "title");

      var price = document.createElement("p");
      price.innerText = `${elem.price}`;
      price.setAttribute("class", "price");

      var btnCart = document.createElement("button");
      btnCart.textContent = "Add to Cart";
      btnCart.addEventListener("click", function () {
        addCart(elem);
      });
      btnCart.setAttribute("class", "btn");

      var btnWishlist = document.createElement("button");
      btnWishlist.textContent = "Add to Wishlist";
      btnWishlist.addEventListener("click", function () {
        addWishlist(elem);
      });
      btnWishlist.setAttribute("class", "btn wishlist-btn");

      div.append(image, title, price, btnCart, btnWishlist);
      document.querySelector("#cont").append(div);
    });
  });

let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
function addCart(elem) {
  cartArr.push(elem);
  localStorage.setItem("cartItems", JSON.stringify(cartArr));
}

let wishlistArr = JSON.parse(localStorage.getItem("wishlistItems")) || [];
function addWishlist(elem) {
  wishlistArr.push(elem);
  localStorage.setItem("wishlistItems", JSON.stringify(wishlistArr));
}
