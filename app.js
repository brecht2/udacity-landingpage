/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navBar = document.querySelector('#navbar__list');
const navElement = document.createElement('li');
var arr = ['Secction 1','Section 2','Section 3','Section 4'];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/** Are you listening for an event for the navigation to build?
Where are you placing the navigation?
Where is the text for each navigation item coming from and where are you anchoring to?
How are you going to add each navigation item to your menu? (Hint: there are several ways to do this. 
Do some research to figure out which makes the most sense for your situation. Performance? Clarity?). */

var cont = document.querySelector('#navbar_list');

// create ul element and set the attributes.
var ul = document.createElement('ul');
ul.setAttribute('style', 'padding: 0; margin: 0;');
ul.setAttribute('id', 'theList');

for (i = 0; i <= arr.length - 1; i++) {
    var li = document.createElement('li');     // create li element.
    li.innerHTML = arr[i];      // assigning text to li using array value.
    li.setAttribute('style', 'display: block;');    // remove the bullets.

    ul.appendChild(li);     // append li to ul.
}

cont.appendChild(ul); 

// Add class 'active' to section when near top of viewport

/** ### It should be clear which section is being viewed while scrolling through the page.

You need to add an active class to a section and also the corresponding link when it is in window view.
Also remove the active class from the section and link when it is no longer in view.
Suggestion: Attach a scroll event to the window object, then when a section is in browser view add the active style to the class of that section. When no longer in view, remove the active style.
A good tip is to have a measurement that will help you calculate the window view. I have provided `getBoundingClientRect()` as one method to use. 

- Are you listening for an event for sections to become active?
- How are you going to test which section should be highlighted?
- How can we use classList methods to change the CSS being displayed? What about removing that CSS?
- Check the HTML and CSS files to ensure that what you chose is updated in the other locations.

*/



// Scroll to anchor ID using scrollTO event 

/** ### When clicking an item from the navigation menu, the link should scroll to the appropriate section.

- Add an event listener on the click event
- Add the `preventDefault` behaviour of the link
- Use `scroll()`, `scrollBy()`, or `scrollIntoView()` function to implement scrolling.
- Tip: `scrollIntoView()` is the most simplistic. 

- Which event are you listening for (hint: you were just reading it)?
- There is a default event occurring that we need to stop. How?
- If you don’t recall how HTML page anchors work, read more to figure out which variables you should set.
- There are several javascript methods for scrolling. Which seems like it may be the most simple?
*/


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


