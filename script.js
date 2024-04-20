// script.js
const imageContainer = document.querySelector('.image-container');

// Add event listener to scroll container
imageContainer.addEventListener('scroll', () => {
    // Implement any custom scroll behavior here
    // For example, change opacity or translateX based on scroll position
});

// Optional: Auto-scroll to the right every 3 seconds
setInterval(() => {
    imageContainer.scrollBy(300, 0); // Adjust scroll amount as needed
}, 3000);
