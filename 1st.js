<script>
        // Initialize cart count
        let cartCount = 0;

        // Get all "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        // Get the cart count element
        const cartCountElement = document.getElementById('cart-count');

        // Function to handle adding items to the cart
        function addToCart() {
            cartCount++;  // Increase the cart count
            cartCountElement.textContent = cartCount;  // Update the cart count in the header
        }

        // Attach the "addToCart" function to each "Add to Cart" button
        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });
    </script>