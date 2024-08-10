// Array of programming languages
const programmingLanguages = ["JavaScript", "Java", "Python", "C++"];

// Get references to the heading and dropdown elements
const heading = document.getElementById('heading');
const dropdown = document.getElementById('dropdown');

// Set the heading text
heading.textContent = "Which is your favorite Programming Language:";

// Loop through the array and create dropdown options
programmingLanguages.forEach(language => {
    const option = document.createElement('option');
    option.value = language;
    option.textContent = language;
    dropdown.appendChild(option);
});
