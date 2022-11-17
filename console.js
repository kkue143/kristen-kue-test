// js scripting programming language
// programming language is a language used to tell a computer what to do
// scripting programming language - a language that is interpreted by an interpreter
// interpreter - a program that turns script code into computer code
// node - a JS interpreter
// variable - a thing that contains a value
// string - a sequence of characters
let var1 = 'val1', var2 = 5
// types - string, number

console.log(var2)
// print this string to the console output so tha I can see it

//function - a named, and configurable set of instructions
// declared the function 'fn1', not called it
function fn1(input1) {
    if (input1 < 5) {
        console.log('this is a function')
        console.log('more things')
    } else {
        console.log('something else')
    }
    return input1 + 1
}

const r = fn1(3) //some name followed by (...) then that is a function call
fn1(r)

function fn2(input1, input2) {
    input1(input2) // fn1(input2)
}

fn2(fn1,4)

// 3 uses of fn1
// 1. declaring fn1 (line 18)
// 2. calling fn1 (line 28)
// 3. referring to fn1 (line 34)

// there are lots of different ways to do the same thing
// good for experienced JS devs
// terrible thing for inexperienced JS devs

// arrow fns - a different syntax for declaring a function
// syntax - grammar (rules of programming language)

const fn3 = (input1) => {
    if (input1 < 5) {
        console.log('this is a function')
        console.log('more things')
    } else {
        console.log('something else')
    }
    return input1 + 1
}

fn3(3)

// when an arrow fn has 1 arg, the parens are optional
// when an arrow fn has a single expression return, then {} are optional
const itGetsWorse = input1 => input1 + 1

// how many functions are being declared? 3
// how many variables are being declared? 1
// how many arguments are being declared? 3
// what are the arguments' names? butterfly, cricket, and ant
// what are the functions' names? n/a
// what is the return type of the first function? function
// what is the return type of the second fucntion? function
// what is the return type of the third function? void
const handleMiddleware = butterfly => cricket => ant => {
    if (typeof ant === 'function') {
        ant(butterfly.dispatch, butterfly.getState)
        return
    }

    cricket(ant) // implies that cricket is a function
}

// return type of a fucntion - imagine that a variable is assigned to the result of that function
// then what is the type of that variable

console.log(typeof handleMiddleware) // function
console.log(typeof handleMiddleware()) // function

// every time node sees '=>' it created a function that can be referenced/called
handleMiddleware
({dispatch: 'can be anything', getState: 'can be anything else'}) // calling the first arrow function
(console.log) // calling the second arrow function
('i expect to see this') // calling the third arrow function

const useCricket = handleMiddleware({dispatch: 'dispatch', getState: 'getState'})
const useAnt = useCricket(console.log)
useAnt('i expect to see this')

handleMiddleware
({dispatch: 'dispatch', getState: 'getState'})
(console.log)
((arg1, arg2) => console.log(arg1 + ', ' + arg2));

const two_fns = arg1 => arg2 => {
    if (typeof arg1 === 'function')
        return arg1(arg2)
    console.log(arg1)
}

two_fns(4)
two_fns(two_fns)

console.log(typeof typeof (() => {})) // string

function multiply(a, b) {
    console.log(a * b);
}
// calling function
multiply (2, 3)