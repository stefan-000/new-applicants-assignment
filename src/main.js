// Add your JavaScript here

function insert(number) {
    document.getElementById('display').value =
        document.getElementById('display').value + number;
}
function equalTo() {
    let curr = document.getElementById('display').value;
    if (curr) {
        document.getElementById('display').value = eval(curr);
    }
}
function clearAll() {
    document.getElementById('display').value = '';
}
function deleteLastNumber() {
    let curr = document.getElementById('display').value;
    document.getElementById('display').value = curr.substring(
        0,
        curr.length - 1
    );
}

function percentage() {
    let curr = document.getElementById('display').value;
    if (curr) {
        document.getElementById('display').value = parseFloat(curr) / 100;
    }
}
