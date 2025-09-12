// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content
// of a paragraph

// document.addEventListener('DOMContentLoaded', () => {
//     const paragraph = document.getElementById('myParagraph');
//     const button = document.getElementById('changeTextButton');

//     button.addEventListener('click', () => {
//         paragraph.textContent = 'Text has been changed!';
//     });
// });

// Task 2: Add a double-click event listener to an image that toggles its visiblity.

// document.addEventListener('DOMContentLoaded', () => {
//     const image = document.getElementById('myImage');

//     image.addEventListener('dblclick', () => {
//         // Toggle visibility using the display property
//         if (image.style.display === 'none') {
//             image.style.display = 'block'; // Show the image
//         } else {
//             image.style.display = 'none'; // Hide the image
//         }
//     });
// });

//  Activity 2 : Mouse Events
// Task 3 : Add a mouseover event listener to an element that changes its
//  background color

    // let text = document.getElementById("mytext")
    // text.addEventListener('mouseover',()=> {
    //     text.style.backgroundColor = "black"
    // })
// Task 4: Add a mouseout event listener to an element that reset its
// background color
    // let text2 = document.getElementById("mytext")
    // text2.addEventListener('mouseout',()=> {
    //     text2.style.backgroundColor = "white"
    // })

    // Activity 3 : Keyboard Events
// Task 5 : Add a keydown event listener to an input field that logs 
// the keys pressed to the console.

    // const inputField = document.getElementById('mytext');

    // inputField.addEventListener('keydown', (event) => {
    //     console.log(`Key pressed: ${event.key}`); // Log the key pressed
    // });

// Task 5 : Add a keyup event listener to an input field that logs 
// the keys pressed to the console.

    // const inputField = document.getElementById('mytext');

    // inputField.addEventListener('keyup', (event) => {
    //     console.log(`Key pressed: ${event.key}`); // Log the key pressed
    // });

    // Actiity 4: Form Events
    // Task 7 : Add a submit event listener to a form that prevents the default
    // submission and logs the form data to the console.

    // document.addEventListener('DOMContentLoaded', () => {
    //     const form = document.getElementById('myForm');
    
    //     form.addEventListener('submit', (event) => {
    //         event.preventDefault(); // Prevents the default form submission
            
    //         // Create a FormData object to get the form data
    //         const formData = new FormData(form);
            
    //         // Convert FormData to a plain object
    //         const dataObject = {};
    //         formData.forEach((value, key) => {
    //             dataObject[key] = value;
    //         });
            
    //         console.log(dataObject); // Logs the form data object to the console
    //     });
    // });

    // Task 8: Add a change event listener to a select dropdown that displays  the
    // selected value in a paragraph

    // document.addEventListener('DOMContentLoaded', () => {
    //     const selectElement = document.getElementById('mySelect');
    //     const outputParagraph = document.getElementById('selectedValue');
    
    //     selectElement.addEventListener('change', (event) => {
    //         const selectedValue = event.target.value; // Get the selected value
    //         outputParagraph.textContent = `Selected value: ${selectedValue}`; // Update the paragraph text
    //     });
    // });
    
    // Activity 5: Event Delegation
    // Task 9: Add click event listener to a list that logs the content of the clicked
    // list item using event delegation.

    // document.addEventListener('DOMContentLoaded', () => {
    //     const list = document.getElementById('myList');
    
    //     list.addEventListener('click', (event) => {
    //         // Check if the clicked element is an <li>
    //         if (event.target && event.target.nodeName === 'LI') {
    //             console.log(event.target.textContent); // Log the content of the clicked <li>
    //         }
    //     });
    // });
    
    // Task 10: Add an event listener to a parent element that listens for events
    // from dynamically added child elements.

    // document.addEventListener('DOMContentLoaded', () => {
    //     const parentElement = document.getElementById('parentElement');
    //     const addButton = document.getElementById('addChild');
    
    //     // Add a click event listener to the parent element
    //     parentElement.addEventListener('click', (event) => {
    //         // Check if the clicked element is a dynamically added button
    //         if (event.target && event.target.classList.contains('childButton')) {
    //             console.log('Button clicked:', event.target.textContent);
    //         }
    //     });
    
    //     // Add a button dynamically when the "Add Child" button is clicked
    //     addButton.addEventListener('click', () => {
    //         const newButton = document.createElement('button');
    //         newButton.textContent = 'Dynamic Button';
    //         newButton.classList.add('childButton');
    //         parentElement.appendChild(newButton);
    //     });
    // });
    