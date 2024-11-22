const display = document.getElementById('calc-display');

// Appends symbols and numbers to the display
function appendSymbol(symbol) {
    display.value += symbol;
}

// Clears the display
function clearDisplay() {
    display.value = '';
}

// Deletes the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculates the square root
function calculateSquareRoot() {
    try {
        const result = Math.sqrt(eval(display.value));
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

// Calculates the result of the expression
function calculateResult() {
    try {
        const result = eval(display.value.replace('%', '/100'));
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

// Keyboard support for calculator
document.addEventListener('keydown', (event) => {
    const validKeys = '0123456789+-*/.()';
    if (validKeys.includes(event.key)) {
        appendSymbol(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        deleteLast();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
