// Example of high order functions 

function formalGreeting() {
    console.log("How are you?");
}

function casualGreeting() {
    console.log("What's up?");
}

function dilmaGreeting() {
    console.log('Hoje eu vim aqui pra saudar a mandioca!¬¬')
}

function greet(type, greetFormal, greetCasual, greetDilma) {
    if (type === 'formal') {
        greetFormal()
    } else if (type === 'dilma') {
        greetDilma()
    } else {
        greetCasual()
    }
}

greet('dilma', formalGreeting, casualGreeting, dilmaGreeting);

