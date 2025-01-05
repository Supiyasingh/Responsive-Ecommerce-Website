const footer = () => {
    let card = `<div id = "footer">
    <div id="footertop">
        <div>
            <p class = "mainheading">HELP & INFORMATION</p>
            <p>Help</p>
            <p>Track Order</p>
            <p>Deleivery & Returns</p>
        </div>
        <div>
            <p class = "mainheading">ABOUT .Store</p>
            <p>About us</p>
            <p>Careers at .Store</p>
            <p>Corpaorate Responsibilites</p>
           
        </div>
        <div>
            <p class = "mainheading">MORE FROM .Store</p>
            <p>Mobile and .Store apps</p>
            <p>ASOS Maeketplace</p>
            <p>Gift Vochers</p>
            <p>Black Friday</p>
        </div>
        <div>
            <p class = "mainheading">SHOPPING FROM.</p>
            <p>You're in India | Change</p>
        </div>
    </div>
    <div id="footerend">
        <div id = "copyright">Copyright © 2025</div>
        <div id = "footermenu">Privacy Policy | T & C | Accessibility</div>
    </div>
</div>`;
  
    document.getElementById("footer").innerHTML = card;
  };
  
  footer();
  