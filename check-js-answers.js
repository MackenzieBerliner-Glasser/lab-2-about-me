/* exported checkJSAnswers, resetJSAnswers */

// Reference all the elements (by id) that we are going
// to need to use in our functions
var factForm = document.getElementById('facts-form');
var factResults = document.getElementById('js-results');
var factSubmit = document.getElementById('js-submit');
var factReset = document.getElementById('js-reset');

// function that will run when "submit" event happens on
// form (because we put onsubmit="return checkJSAnswers()")
function checkJSAnswers() {

    // PART 1 - GET THE VALUES

    // log some details about fact that function is being run
    // add take a look at form output
    console.log('checkJSAnswers called');
    console.dir(factForm);
    // form exposes a special "elements" property (just part of how forms
    // work in the browser). This gives us access to all the input controls,
    // so we can get the values out of them.
    var elements = factForm.elements;

    // we can access the value of any input by using it's "value" property
    // a text input has the value in the control that the user typed
    var myName = elements.myName.value;
    // a radio group has the value from the input that is checked
    var thatsImpossible = elements.thatsImpossible.value;
    // a radio group value input is checked
    var noWay = elements.noWay.value;
    //a range group value input is checked
    var heartOfGold = elements.heartOfGold.value;
    // a selector value input checked
    var hanSolo = elements.hanSolo.value;

    // inspecting those value to make sure we got it
    console.log('myName', myName);
    console.log('thatsImpossible', thatsImpossible);
    console.log('noWay', noWay);
    console.log('heartOfGold', heartOfGold);
    console.log('hanSolo', hanSolo);
    // PART 2 - Check those answers (values)

    // keep count of correct answers in a variable
    var correct = 0;

    // check answer 1
    if(myName.toLowerCase() === 'mack') {
        // if correct, add 1 to correct count
        correct = correct + 1;
    }       
    // check answer 2
    if(thatsImpossible.toLowerCase() === 'yes') {
        // increment the correct count
        correct = correct + 1;
    }

    //check answer 3
    if(noWay.toLowerCase() === 'maybe') {
        //increment the correct count
        correct = correct + 1;
    }

    //check answer 4
    if(heartOfGold >= '7') {
        //increment the correct count
        correct = correct + 1;
    }
    //check answer 5
    if(hanSolo === 'no') {
        correct = correct + 1;
    }
    // PART 3 - Report results to the user

    // inner text for freeform text response
    factResults.innerText = 'You got ' + correct + ' out of 5 right';
    // disable the submit button (because game is done)
    factSubmit.disabled = true;
    // enable the reset button (because it is the Play Again button)
    factReset.disabled = false;

    // we need this to keep the form from changing/refreshing the webpage
    return false;
}

// function that will run when a reset event happens on the form
// via onreset="resetJSAnswers()"
function resetJSAnswers() {
    // put everything back to how it was at start of game
    factResults.innerText = '';
    factSubmit.disabled = false;
    factReset.disabled = true;
}