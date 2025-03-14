
const colors = ["rgb(219, 37, 122)","rgb(121, 28, 207)","rgb(204, 29, 29)","rgb(32, 29, 199)","rgb(23, 168, 47)","rgb(238, 127, 37)"]



function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function generateRandomColors(num) {
    let colors = [];
    for (let i = 0; i < num; i++) {
        colors.push(randomColor());
    }
    return colors;
}


let colorDisplay = document.querySelector("#colorDisplay"); 
let message = document.querySelector("#message");
let h1 = document.querySelector("h1"); 
let cuadrados = document.querySelectorAll(".square"); 


let colores = generateRandomColors(6); 
let pickedColor = pickColor(); 
colorDisplay.textContent = pickedColor; 


cuadrados.forEach((cuadrado, i) => {
    cuadrado.style.backgroundColor = colors[i]; 
    cuadrado.addEventListener("click", function () {
        let clickedColor = cuadrado.style.backgroundColor; 
        if (clickedColor === pickedColor) {
            message.textContent = "¡Correcto!"; 
            changeColors(pickedColor); 
            h1.style.backgroundColor = pickedColor; 
            botonDeReset.textContent = "Play Again?";

        } else {
            cuadrado.style.backgroundColor = "rgb(35, 35, 35)"; 
            message.textContent = "Intentalo nuevamente"; 
        }
    });
});


function changeColors(color) {
    cuadrados.forEach(cuadrado => {
        cuadrado.style.backgroundColor = color;
    });
}


function pickColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]; 
}

// BOTON

let botonDeReset = document.getElementById("reset");
botonDeReset.addEventListener("click", resetGame);

function resetGame() {
    colores = generateRandomColors(6); 
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor; 
    message.textContent = ""; 
    botonDeReset.textContent = "Nuevos Colores"; 
    document.querySelector("h1").style.backgroundColor = "steelblue"; 

    
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i];
        cuadrados[i].style.display = "block"; 
    }
}

// BOTON ESAY Y HARD