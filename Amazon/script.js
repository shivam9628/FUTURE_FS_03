// script.js

// Example: add search click functionality
document.querySelector('.search-icon').addEventListener('click', () => {
    let searchValue = document.querySelector('.search-input').value;
    alert(`You searched for: ${searchValue}`);
});
