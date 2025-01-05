const navbar = () => {
    let card = `<div id="navbar">
       <div id="container">
           <div id="left">
               <div id = "logo"><a href = "index.html">.Store</a></div>
               <div id="menu">
                    <div><a href = "women.html">WOMEN</a></div>
                    <div><a href = "men.html">MEN</a></div>
                </div>
           </div>
           <div id = "right">
                <input type="search" name="" id="search" placeholder="Search For Items and Brands">
                <div id = "login"><a href = "login.html">Login</a></div>
                <div id = "signup"><a href = "signup.html">Sign Up</a></div>
                <div id = "whishlist"><a href = "wishlist.html">Whishlist</a></div>
                <div id = "cart"><a href = "cart.html">Cart</a></div>   
           </div>
       </div>
   </div>`;
  
      document.getElementById("nav").innerHTML = card
      
  };
  
  navbar()
  