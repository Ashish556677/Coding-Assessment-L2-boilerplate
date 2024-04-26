
// Fetch JSON data
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Function to update product details
        function updateProductDetails(product) {
        // Update product title
        document.querySelector('.product-details h1').textContent = product.title;

        // Update price
        document.querySelector('.price .new-price').textContent = product.price;
        document.querySelector('.price .old-price').textContent = product.compare_at_price;

        // Update description
        document.querySelector('.description').innerHTML = product.description;

      // Update images
        const imageContainer = document.querySelector('.product-image');
        imageContainer.innerHTML = '';
        product.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = product.title;
        imageContainer.appendChild(img);
      });
    // Update colors
        const colorContainer = document.querySelector('.colors');
        colorContainer.innerHTML = '';
        product.options.find(option => option.name === 'Color').values.forEach(color => {
        const colorName = Object.keys(color)[0];
        const colorCode = color[colorName];
        const span = document.createElement('span');
        span.classList.add('color-option');
        span.style.backgroundColor = colorCode;
        span.dataset.colorName = colorName; // Add data attribute to store color name
        colorContainer.appendChild(span);
    });

    }

    // Update product details
    updateProductDetails(data.product);

    // Add event listener for Add to Cart button
    document.querySelector('.add-to-cart').addEventListener('click', function() {
      const quantity = document.getElementById('quantity').value;
      console.log(`Adding ${quantity} item(s) to cart.`);
      // Perform action to add item to cart here
    });

    // Add event listener to change product image on color option click
    document.addEventListener('DOMContentLoaded', function() {
        // Add event listener to change product image on small image click
        document.querySelectorAll('.small-images img').forEach(smallImage => {
            smallImage.addEventListener('click', function() {
                // Get the source of the clicked small image
                const imageSrc = this.src;
                // Update the source of the main image
                document.querySelector('.product-images img').src = imageSrc;
            });
        });
    });
    
  })
  .catch(error => console.error('Error fetching JSON:', error));
  
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to change product image on small image click
    document.querySelectorAll('.small-images img').forEach(smallImage => {
      smallImage.addEventListener('click', function() {
        // Get the index of the clicked small image
        const index = parseInt(this.dataset.index);
        // Get the source of the clicked small image
        const imageSrc = this.src;
        // Update the source of the main image
        document.querySelector('.product-images img').src = imageSrc;
      });
    });
  });
  // Add event listener for Add to Cart button
  document.querySelector('.add-to-cart').addEventListener('click', function() {
    var quantity = document.getElementById('quantity').value;
    // Perform action with quantity, like adding to cart
    console.log('Adding ' + quantity + ' item(s) to cart.');
    
    // Create a new element to display the added item
    const cartItem = document.createElement('div');
    cartItem.textContent = `Added ${quantity} item(s) to cart.`;
    document.querySelector('.cart-items').appendChild(cartItem);
});
