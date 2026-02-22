# Lotto Number Generator

## Overview

A simple, visually appealing web application that generates and displays random lottery numbers. The application will have a clean and modern user interface and provide an intuitive user experience.

## Features

*   **Lottery Number Generation:** Generates a set of 6 unique random numbers between 1 and 45.
*   **Interactive Button:** A button to trigger the generation of a new set of lottery numbers.
*   **Modern UI:** A stylish and responsive design with a clean layout, custom fonts, and a pleasant color scheme.
*   **Number Display:** The generated numbers are displayed in individual, styled containers.
*   **Visual Feedback:** The button will have interactive effects, and the numbers will be presented clearly.

## Plan

1.  **HTML Structure (`index.html`):**
    *   Set up the basic HTML document structure.
    *   Create a main container for the application.
    *   Add a title for the application: "Lotto Number Generator".
    *   Create a container to hold the generated numbers.
    *   Add a button with the text "Generate Numbers".
    *   Link the CSS and JavaScript files.

2.  **Styling (`style.css`):**
    *   Apply a background color and a subtle texture to the body.
    *   Center the main application container.
    *   Style the title with a modern font and color.
    *   Style the number containers with borders, shadows, and a distinct background color.
    *   Style the "Generate Numbers" button with a gradient, hover effects, and a clear, readable font.
    *   Ensure the layout is responsive and looks good on different screen sizes.

3.  **JavaScript Logic (`main.js`):**
    *   Get references to the necessary DOM elements (the number container and the generate button).
    *   Create a function to generate an array of 6 unique random numbers from 1 to 45.
    *   Create a function to display the generated numbers in the number container. This function will create and append new elements for each number.
    *   Add a click event listener to the "Generate Numbers" button to call the number generation and display functions.
    *   Generate and display an initial set of numbers when the page loads.
