/* Closures are a use of nested functions that allow us to keep variables in memory that are within the lexical scope (the scope of that function) of that function. For example the code bellow uses a function
within the "initlaize" function that has access to the variable "called". In the "if else" function we used called = true which will prevent the function from returning "view has been set!" each time the "initialize" function is called. Instead, in memory we retain that called is > 0, so we don't keep calling the same task repeatedly */


let view;
function initialize() {
    let called = 0
    return () => {
        if(called > 0) {
            return;
        } else {
            view = '🏔';
            called = true
            console.log("view has been set!")
        }        
    }
}

let initStart = initialize()
initStart()
initStart() // prevented from being called
initStart() // prevented from being called
