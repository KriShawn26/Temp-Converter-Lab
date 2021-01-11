function outputCelcius() {
    let valueToConvert = document.getElementById("numberInput").value;
    let answer = (valueToConvert - 32) * 5 / 9;
    document.getElementById("answer").innerHTML = answer;
}