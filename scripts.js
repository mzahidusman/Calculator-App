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
const display= document.querySelector('#displayinput');
const currentValue= display.value;
 function seven(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn17').innerText;
}
function eight(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn18').innerText;
}
function nine(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn19').innerText;
}
function four(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn22').innerText;
}
function five(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn23').innerText;
}
function six(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn24').innerText;
}
function one(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn27').innerText;
}
function two(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn28').innerText;
}
function three(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn29').innerText;
}
function dzeros(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn31').innerText;
}
function zero(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn33').innerText;
}
function point(){
    document.querySelector('#displayinput').value+= document.querySelector('#btn34').innerText;
}
function lbracket(){
    document.querySelector('#displayinput').value+= '(';
}
function rbracket(){
    document.querySelector('#displayinput').value+= ')';
}
function divide(){
    document.querySelector('#displayinput').value+= '/';
}
function subtract(){
    document.querySelector('#displayinput').value+= '-';
}
function add(){
    document.querySelector('#displayinput').value+= '+';
}
function multiply(){
    document.querySelector('#displayinput').value+= '*';
}
function sin(){
    document.querySelector('#displayinput').value+= 'sin(';
}
function cos(){
    document.querySelector('#displayinput').value+= 'cos(';
}
function tan(){
    document.querySelector('#displayinput').value+= 'tan(';
}
function square(){
    const currentValue= parseFloat(display.value);
    if (!isNaN(currentValue))
    {
        display.value+='^2' ;
    }
}
function cube(){
    const currentValue= parseFloat(display.value);
    if (!isNaN(currentValue))
    {
        display.value='^3' ;
    }
}
function factorial(){
    display.value+= '!';
}
function Absolute(){
    const currentValue= parseFloat(display.value);
   display.value+= Math.abs(currentValue);
}
function negate(){
    const currentValue= parseFloat(display.value);
    display.value= -(currentValue);
}
function pi(){
    document.querySelector('#displayinput').value+= 'π';
}
function backspace(){
    const currentValue= display.value;
    display.value= currentValue.slice(0,-1);
}
function clearAll(){
    display.value= "";
}
function evalue(){
     document.querySelector('#displayinput').value+= '*' + '(2.71828)';
}
function baseexponent(){
     display.value+='^';

}
function squareroot(){
    const currentValue= display.value;
    display.value= currentValue+'**(1/2)';
}
function cuberoot(){
    const currentValue= display.value;
    // display.value= currentValue+'**(1/3)';
    display.value= currentValue+'∛(';
}
function percent()
{
     display.value+= currentValue+'%';
}
function tanDeg(angle) {
    if (angle % 180 === 90) {
        return "undefined"; // or throw an error
    }
    return Number(Math.tan(angle * Math.PI / 180).toFixed(8));
}
function equal()
{
    let expression=  display.value;
    expression = expression.replace(/\%/g,'*(1/100)');
    expression = expression.replace(/\^/g, '**');
    expression = expression.replace(/∛\((.*?)\)/g, 'Math.cbrt($1)');
    expression = expression.replace(/(\d+)!/g,'Factorial($1)');
    expression = expression.replace(/sin\((\d+)\)/g,'Number(Math.sin($1*Math.PI/180).toFixed(8))');
    expression = expression.replace(/cos\((\d+)\)/g,'Number(Math.cos($1*Math.PI/180).toFixed(8))');
    expression = expression.replace(/tan\((\d+)\)/g,'tanDeg($1)');
    expression = expression.replace(/(\d+)π/g,'(Number($1*Math.PI).toFixed(8))');
    display.value= eval(expression);
    
}

