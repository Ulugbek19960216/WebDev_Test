
function calc(operation) {
    const num1 = parseFloat(document.getElementById("first-num").value);
    const num2 = parseFloat(document.getElementById("second-num").value);
    let result = document.getElementById("result");
    let res;

    switch (operation) {
        case 'mul':
            res = num1 * num2;
            break;
        case 'div':
            res = num1 / num2;
            break;
        case 'add':
            res = num1 + num2;
            break;
        case 'sub':
            res = num1 - num2;
            break
        default:
            res = "Invalid operation";
            break;
    }

    result.textContent = "The result is :" + res; 
}
