function hello() {
    var hex1 = document.getElementById("value");
    hex1.innerHTML = "HELLO World HEHEHEHE";
    /*const hex1 = document.getElementsByClassName("h1");
    hex1.classList.add("h1AniB");*/
}





function colorPicker() {
    var showValue = document.getElementById("value");
    var colorPickerV = document.getElementById("colorPicker").value;

    showValue.innerHTML = colorPickerV;
}