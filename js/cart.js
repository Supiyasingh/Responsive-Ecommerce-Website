
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartArr);

function displayData(items) {
    document.querySelector("#cont").innerHTML = ""; // Clear the container

    items.map(function (elem, index) {
        var div = document.createElement("div");
        div.classList.add("item");

        // Product Image
        var image = document.createElement("img");
        image.setAttribute("src", elem.image);
        image.setAttribute("id", "productimage");

        // Product Title
        var title = document.createElement("p");
        title.innerText = elem.discription;
        title.setAttribute("id", "title");

        // Price Section
        var price = document.createElement("p");
        price.innerText = `${elem.price}`;
        price.setAttribute("class", "price");

        // Remove Button
        var removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.setAttribute("class", "removeBtn");
        removeBtn.addEventListener("click", function () {
            removeItem(index); // Call the removeItem function
        });

        // Append elements
        div.append(image, title, price, removeBtn);
        document.querySelector("#cont").append(div);
    });

    updateTotal(items); // Update the total amount
}

function updateTotal(items) {
    var total = items.reduce(function (acc, item) {
        return acc + item.price;
    }, 0);

    document.getElementById("total").textContent = `Total Amount of Cart: ₹${total}`;
}

function removeItem(index) {
    cartArr.splice(index, 1); // Remove the item from the array
    localStorage.setItem("cartItems", JSON.stringify(cartArr)); // Update local storage
    displayData(cartArr); // Refresh the displayed data
}

// Initial Display
displayData(cartArr);
