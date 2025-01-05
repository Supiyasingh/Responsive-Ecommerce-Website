
 // Retrieve wishlist data from localStorage
 const wishlistArr = JSON.parse(localStorage.getItem("wishlistItems")) || [];

 // Render wishlist items
 function renderWishlist() {
     const container = document.querySelector("#cont");
     container.innerHTML = ""; // Clear the container

     if (wishlistArr.length === 0) {
         const emptyMsg = document.createElement("p");
         emptyMsg.textContent = "Your wishlist is empty.";
         emptyMsg.className = "empty-msg";
         container.append(emptyMsg);
         return;
     }

     wishlistArr.forEach((item, index) => {
         const card = document.createElement("div");
         card.className = "card";

         const image = document.createElement("img");
         image.src = item.image;

         const content = document.createElement("div");
         content.className = "card-content";

         const title = document.createElement("h3");
         title.textContent = item.discription;

         const price = document.createElement("p");
         price.textContent = `${item.price}`;

         content.append(title, price);

         const actions = document.createElement("div");
         actions.className = "card-actions";

         const removeBtn = document.createElement("button");
         removeBtn.textContent = "Remove";
         removeBtn.className = "btn btn-remove";
         removeBtn.addEventListener("click", function () {
             removeFromWishlist(index);
         });

         actions.append(removeBtn);

         card.append(image, content, actions);
         container.append(card);
     });
 }

 // Remove item from wishlist
 function removeFromWishlist(index) {
     wishlistArr.splice(index, 1); // Remove item at index
     localStorage.setItem("wishlistItems", JSON.stringify(wishlistArr)); // Update localStorage
     renderWishlist(); // Re-render the wishlist
 }

 // Initial rendering
 renderWishlist();
