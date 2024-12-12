window.onscroll = function () {
    const searchBox = document.getElementById('searchBox');
    const header = document.getElementById("header")
    // alert(searchBox)

    if (window.scrollY > 50) {
      header.style.height = "110px"
      searchBox.classList.add('hidden');
      searchBox.classList.remove('fade-in');
      header.classList.remove('fade-in');
    } else {
      header.style.height = "150px"
      searchBox.classList.remove('hidden');
      // Trigger the fade-in animation when scrolling back to the top
      searchBox.classList.add('fade-in');
      header.classList.add('fade-in')
    }
  };
  
  var pyemt = document.getElementById("details"); 
var priceDetail = document.getElementById("pDetail");

pyemt.addEventListener("click", () => {
    if (priceDetail.classList.contains("open")) {
        // Close the details
        priceDetail.classList.remove("open");
        pyemt.classList.remove("bi-dash");
        pyemt.classList.add("bi-plus");
    } else {
        // Open the details
        priceDetail.classList.add("open");
        pyemt.classList.remove("bi-plus");
        pyemt.classList.add("bi-dash");
    }
});

  
  
  

  
  // Function to update the prices dynamically when quantity is changed
  function updatePriceDetails() {
    const unitPrice = parseFloat(document.getElementById('unit-price').innerText.replace('₹', '').trim());
    const quantity = parseInt(document.getElementById('quantity').innerText.trim());
    const convenienceCharge = 2; // As per the provided example
    const totalMrp = 1695; // The original price for the item (unit price before any discount)

    // Calculate the subtotal (actual price after discount)
    const subTotal = unitPrice * quantity;
    
    // Update the Total M.R.P. and Savings on M.R.P.
    const totalMrpPrice = totalMrp * quantity;
    const savingsOnMrp = totalMrpPrice - subTotal;

    // Update the displayed values
    document.getElementById('total-mrp').innerText = "₹" + totalMrpPrice.toFixed(2);
    document.getElementById('savings').innerText = "(-) ₹" + savingsOnMrp.toFixed(2);

    // Update the subtotal, total price, and net payable on the page
    document.getElementById('sub-total').innerText = "₹" + subTotal.toFixed(2);

    // Update the total price and net payable
    const orderTotal = subTotal + convenienceCharge;
    document.getElementById('order-total').innerText = "₹" + orderTotal.toFixed(2);
    document.getElementById('net-payable').innerText = "₹" + orderTotal.toFixed(2);
}

// Function to handle quantity increment and decrement
function handleQuantityChange() {
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const quantityElement = document.getElementById('quantity');
 
    incrementButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityElement.innerText.trim());
        quantityElement.innerText = currentQuantity + 1;
        // alert(decrementButton)
        updatePriceDetails();
    });

    decrementButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityElement.innerText.trim());
        if (currentQuantity > 1) {
            quantityElement.innerText = currentQuantity - 1;
            updatePriceDetails();
        }
    });
}

// Initialize all functionalities when the page loads
window.onload = function () {
    updatePriceDetails(); // Initialize price calculations
    handleQuantityChange(); // Handle quantity change
};


document.getElementById('edit').addEventListener('click', function() {
  let dropdownMenu = document.getElementById('dropdown-menu');
  if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
      dropdownMenu.style.display = "block";
  } else {
      dropdownMenu.style.display = "none";
  }
});

document.getElementById('edit-name').addEventListener('click', function() {
  document.getElementById('dropdown-menu').style.display = "none";
  let name = document.getElementById('name');
  name.innerHTML = `<input type="text" id="name-input" value="${name.innerHTML}" class="form-control">`;
  document.getElementById('save-btn').style.display = "block";
  document.getElementById('name-input').focus();
});

document.getElementById('edit-number').addEventListener('click', function() {
  document.getElementById('dropdown-menu').style.display = "none";
  let phone = document.getElementById('phone');
  phone.innerHTML = `<input type="text" id="phone-input" value="${phone.innerHTML}" class="form-control">`;
  document.getElementById('save-btn').style.display = "block";
  document.getElementById('phone-input').focus();
});

document.getElementById('delete').addEventListener('click', function() {
  if (confirm("Are you sure you want to delete this information?")) {
      document.getElementById('name').innerHTML = "";
      document.getElementById('email').innerHTML = "";
      document.getElementById('phone').innerHTML = "";
      document.getElementById('verify-email').innerHTML = "";
  }
  document.getElementById('dropdown-menu').style.display = "none";
  document.getElementById('save-btn').style.display = "none";
});

document.getElementById('save').addEventListener('click', function() {
  let nameInput = document.getElementById('name-input');
  let phoneInput = document.getElementById('phone-input');
  
  if (nameInput) {
      document.getElementById('name').innerHTML = nameInput.value;
  }
  if (phoneInput) {
      document.getElementById('phone').innerHTML = phoneInput.value;
  }
  
  document.getElementById('save-btn').style.display = "none";
  document.getElementById('name').style.display = 'inline-block';
  document.getElementById('phone').style.display = 'inline-block';
});

  // JavaScript to handle active state change on click
  const navLinks = document.querySelectorAll('.nav-mb-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove active class from all items
      navLinks.forEach(nav => nav.classList.remove('active'));
      // Add active class to the clicked item
      link.classList.add('active');
    });
  });



    // Optional: You can add auto-scroll functionality if needed
    const slider = document.querySelector('.nav_Slide');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
  
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
  
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
  
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      slider.scrollLeft = scrollLeft - walk;
    });


    $(document).ready(function () {
        $('.navbar-light .dmenu').hover(function () {
          $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
          $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
      });
    
      $(document).ready(function () {
        $(".megamenu").on("click", function (e) {
          e.stopPropagation();
        });
      });
  
      const cursor = document.getElementById('custom-cursor');

      // Update cursor position based on mouse movements
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    
      // Add click and touch event listeners to add active class
      const activateCursor = () => {
        cursor.classList.add('active');
        setTimeout(() => cursor.classList.remove('active'), 150);
      };
    
      document.addEventListener('mousedown', activateCursor);
      document.addEventListener('touchstart', (e) => {
        // Update position on touch
        cursor.style.left = `${e.touches[0].clientX}px`;
        cursor.style.top = `${e.touches[0].clientY}px`;
        activateCursor();
      });

     