// Declare and initialize variables
const btn = document.querySelector('button');

// Functions
function random(number) {
    return Math.floor(Math.random()*(number + 1));
}
function bgChange() {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol; //pushes out rgb(0-255, 0-255, 0-255)
}


/* STEP 1: Experiment with a variety of different events - comment out the above onclick listener and build an alternate one below - try the following - onfocus/onblur, ondblclick, onmouseover/onmouseout, window.onkeypress/onkeydown/onkeyup
*/
// Event Listeners/Handlers


// btn.onclick = bgChange;

//onfocus does it when using tab instead of onclick
// btn.onfocus = bgChange;

// .onblur works when it loses focus
// btn.onblur = bgChange;

//.ondblclick works with doubleclicking
// btn.ondblclick = bgChange;

// onmouseover works when you hover over and off the target
// btn.onmouseover = bgChange;

//When mouse leaves
// btn.onmouseout = bgChange;


/* STEP 2: Inline event handlers - don't use! */
// Comment out the above event listener/handler, and add the same event as an attribute directly to the button element

/* STEP 3: Let's apply event handlers/listeners to a group of buttons - comment out the above BUTTON element, and create three new ones, A, B, and C */

// const buttons = document.querySelectorAll("button");
// console.log(buttons);
// for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', bgChange);
// }


/* STEP 4a: addEventListener() and removeEventListener()
Let's rewrite the above code with these two methods - comment out the A, B, C buttons and restore the original button - then comment out the above code */
// btn.addEventListener("dblclick", bgChange());
// // btn.removeEventListener('onmouseover', bgChange);


/* STEP 4b: We can also put the entire bgChange() function inside an anonymous function, if we'd like: */
btn.addEventListener("click", function(){
    bgChange();
});


/* STEP 4c: We can now remove the event listener … comment out the above code in STEP 4b, and then add another event listener, then remove it (silly, yes, but try it all the same) */



// The ability to remove an event listener provides you with greater flexibility, at the cost of a bit more complexity - the choice is yours, but avoid inline JS

// Next, open up events2.html and we will learn about some other concepts specific to events and how to manage them

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
