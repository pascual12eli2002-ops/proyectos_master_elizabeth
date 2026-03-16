const passwordInput = document.getElementById("passwordInput");

const upperCaseCheck = document.getElementById("uppercase");
const lowerCaseCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("numbers");
const symbolCheck = document.getElementById("symbols");

const strengthText = document.getElementById("strengthText");
const bars = document.querySelectorAll(".bar");

passwordInput.addEventListener("input", validarPassword);

function validarPassword() {

    const value = passwordInput.value;
    let fuerza = 0;

    // Reset barras
    bars.forEach(bar => bar.style.background = "#444");

    // MAYÚSCULA
    if (/[A-Z]/.test(value)) {
        upperCaseCheck.checked = true;
        fuerza++;
    } else {
        upperCaseCheck.checked = false;
    }

    // MINÚSCULA
    if (/[a-z]/.test(value)) {
        lowerCaseCheck.checked = true;
        fuerza++;
    } else {
        lowerCaseCheck.checked = false;
    }

    // NÚMERO
    if (/[0-9]/.test(value)) {
        numberCheck.checked = true;
        fuerza++;
    } else {
        numberCheck.checked = false;
    }

    // SÍMBOLO
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        symbolCheck.checked = true;
        fuerza++;
    } else {
        symbolCheck.checked = false;
    }

    evaluarFuerza(fuerza);
}

function evaluarFuerza(nivel) {

    if (nivel <= 1) {
        strengthText.textContent = "WEAK";
        bars[0].style.background = "red";
    } 
    else if (nivel <= 3) {
        strengthText.textContent = "MEDIUM";
        bars[0].style.background = "yellow";
        bars[1].style.background = "yellow";
        bars[2].style.background = "yellow";
    } 
    else {
        strengthText.textContent = "STRONG";
        bars.forEach(bar => bar.style.background = "#8affc1");
    }
}