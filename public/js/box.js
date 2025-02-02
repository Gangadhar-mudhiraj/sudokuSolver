const inp = document.querySelectorAll("input"); // Select all input fields
const button = document.querySelector(".save");

// Predefined correct values and other configurations
const right = [3, 12, 21, 6, 9, 15, 18, 24, 27, 57, 60, 63, 66, 69, 72, 75, 78, 81, 30, 39, 48, 33, 36, 51, 54, 57, 42, 45, 48];
const bottom = [19, 20, 21, 22, 23, 24, 25, 26, 27, 46, 47, 48, 49, 50, 51, 52, 53, 54, 73, 74, 75, 76, 77, 78, 79, 80, 81];
const left = [1, 10, 19, 55, 64, 73, 28, 37, 46];

// Optimize assignment of names to input fields
inp.forEach((input, index) => input.name = index + 1);

// Function to handle class assignment based on value array
function addClassBasedOnValues(arr, className) {
    arr.forEach(value => {
        const input = inp[value - 1]; // Adjust index to match value
        if (input) {
            input.classList.add(className);
        }
    });
}

// Assign classes for "right", "bottom", and "left" fields
addClassBasedOnValues(right, "right");
addClassBasedOnValues(bottom, "bottom");
addClassBasedOnValues(left, "left");

// Handle input events with validation
inp.forEach(input => {
    input.addEventListener("input", () => {
        const inputValue = parseInt(input.value, 10);
        if (Number.isInteger(inputValue) && inputValue >= 1 && inputValue <= 9) {
            // Valid input (do something if necessary)
        } else {
            input.value = ""; // Clear invalid input
        }
    });
});

// Optimized function to add or remove class on save button
function ansclas(isnot) {
    if (isnot === false) {
        button.classList.add(isnot);
    }
}

// Initialize result grid (if used later for some purpose)
const result = new Array(9).fill().map(() => new Array(9).fill(0));
