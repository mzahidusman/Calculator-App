function Factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
const display = document.querySelector('#displayinput');
const currentValue = display.value;
function append(value) {
    display.value += value;
}
function keyInput(){
    document.addEventListener("keydown", function(event) {
        const key = event.key;

        if (/^[0-9]$/.test(key)) {
            append(key);
        }
        else if (["+", "-", ".", "(", ")"].includes(key)) {
            append(key);
        }
        else if (key === "*") {
            append("×");
        }
        else if (key === "/") {
            append("÷");
        }
        else if (key === "Enter") {
            equal();
        }
        else if (key === "Backspace") {
            backspace();
        }
        else if (key === "Escape") {
            clearAll();
        }
        else if (key.toLowerCase()==='s'){
            append('sin(')
        }
        else if (key.toLowerCase()==='c'){
            append('cos(')
        }
         else if (key.toLowerCase()==='t'){
            append('tan(')
        }
         else if (key.toLowerCase()==='m'){
            append('abs(')
        }
         else if (key.toLowerCase()==='l'){
            append('log(')
        }
    });
}

keyInput();

function negate() {
    const currentValue = parseFloat(display.value);
    display.value = -(currentValue);
}
function backspace() {
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}
function clearAll() {
    display.value = "";
}
function tanDeg(angle) {
    const result =Math.tan(angle * Math.PI / 180);
    if (!Number.isFinite(result) || Math.abs(result)>1e10) {
        
        return "infinity"; // or throw an error
    }
    return Number(result.toFixed(8));
}
function equal() {
    let expression = display.value;
    expression = expression.replace(/\%/g, '*(1/100)');
    expression = expression.replace(/÷/g, '/');
    expression = expression.replace(/\^/g, '**');
    expression = expression.replace(/×/g, '*');
     expression = expression.replace(/e/g, '*Number((Math.E).toFixed(8))');
    expression = expression.replace(/∛\((.*?)\)/g, 'Number(Math.cbrt($1).toFixed(8))');
    expression = expression.replace(/√\((.*?)\)/g, 'Number(Math.sqrt($1).toFixed(8))');
    expression = expression.replace(/log\((.*?)\)/g, 'Number(Math.log10($1).toFixed(8))');
    expression = expression.replace(/(\d+)!/g, 'Factorial($1)');
    expression = expression.replace(/sin\((\d+)\)/g, 'Number(Math.sin($1*Math.PI/180).toFixed(8))');
    expression = expression.replace(/cos\((\d+)\)/g, 'Number(Math.cos($1*Math.PI/180).toFixed(8))');
    expression = expression.replace(/tan\((\d+)\)/g, 'tanDeg($1)');
    expression = expression.replace(/π/g, '*Number((Math.PI).toFixed(8))');
    display.value = eval(expression);

}

