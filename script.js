// Collapsible Filter Sections (handled by <details> element, no JS needed)

// Sort By Dropdown Functionality
const sortByDropdown = document.querySelector('.sort-by');
sortByDropdown.addEventListener('change', (e) => {
    console.log(`Sorting by: ${e.target.value}`);
    // Placeholder for actual sorting logic
});

// Hover Effects for Product Cards (handled by CSS)

// Wishlist Icon Toggle
const wishlistIcons = document.querySelectorAll('.wishlist-icon');
wishlistIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.style.color = icon.style.color === 'red' ? 'black' : 'red';
    });
});