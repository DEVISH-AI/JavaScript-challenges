// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.
  
// // Wait until the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', (event) => {
//     // Select the HTML element by its ID
//     let paragraph = document.getElementById('myParagraph');

//         // Display the original text
//         paragraph.textContent = 'Old Text';

//         // Change the text content after 1 second
//         setTimeout(() => {
//             paragraph.textContent = 'New Text Content';
//         }, 1000); // 1000 milliseconds = 1 second
    
// });


// Task 2: Select an HTML element by its class change its background color.

// const element = document.querySelector('.myDiv');
// element.style.backgroundColor = 'lightblue';

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to
//  the body

// const newDiv = document.createElement('div');
// newDiv.textContent = 'This is a new div element';

// document.body.appendChild(newDiv);

// Task 4: create a new li element and add it to an existing ul list.

// Wait until the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', (event) => {
    // Create a new <li> element
    // let newListItem = document.createElement('li');

    // Add text content to the new <li> element
    // newListItem.textContent = 'New Item';

    // Select the existing <ul> list
    // let ulList = document.getElementById('myList');

    // Append the new <li> element to the <ul> list
    // ulList.appendChild(newListItem);
// });

// Activity 3: Removing Elements
// Task 5: Select an HTML element and it from the DOM.

// const elementTOremove = document.getElementById('removeMe');
// elementTOremove.remove();

// Task 6: Remove the last child of a specific HTML element.

// const list = document.getElementById('myList');
// if (list.lastElementChild) {
//     list.removeChild(list.lastElementChild)
// };

// Activity 4: Modifying Atrributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g, src of an img tag)

// const imageElement = document.getElementById('myImage');

// imageElement.setAttribute('src', 'new-image.jpg');

// imageElement.setAttribute('alt', 'New Image');

// Task 8: Add and remove a CSS class to/from an HTML element.

// const paragraph = document.getElementById('myParagraph');

// function addClass() {
//     paragraph.classList.add('highlight');
// }

// function removeClass() {
//     paragraph.classList.remove('highlight');
// }

// Activity 5: Event Handling
// Task 9: Add a click event listenr to a button that changes the text content
// of a paragraph

// document.addEventListener('DOMContentLoaded', () => {
//     const paragraph = document.getElementById('myParagraph');
//     const button = document.getElementById('changeTextButton');

//     button.addEventListener('click', () => {
//         paragraph.textContent = 'Text has been changed!';
//     });
// });

// Task 10: Add a mouseover event listener to an element that changes its border color.

// document.addEventListener('DOMContentLoaded', () => {
//     const colorBox = document.getElementById('colorBox');

//     // Add a mouseover event listener to the element
//     colorBox.addEventListener('mouseover', () => {
//         // Change the border color when mouse is over the element
//         colorBox.style.borderColor = 'red';
//     });

//     // Optionally, you can add a mouseout event to reset the border color
//     colorBox.addEventListener('mouseout', () => {
//         // Reset the border color when mouse leaves the element
//         colorBox.style.borderColor = 'black';
//     });
// });
