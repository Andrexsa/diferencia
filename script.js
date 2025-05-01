

/**
 * Calcula el promedio de un arreglo de números.
 * 
 * @param {number[]} numeros - An array of numbers to calculate their average.
 * @returns {number} The average of the numbers in the array.
 */

function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}



/**
 * Calcula la diferencia entre cada número del arreglo y el promedio dado.
 * 
 * @param {number[]} numeros - Un arreglo de números para calcular las diferencias.
 * @param {number} promedio - El promedio de los números, utilizado para calcular la diferencia.
 * @returns {number[]} Un arreglo con las diferencias entre cada número y el promedio.
 */

function calcularDiferencia(numeros, promedio) {
    return numeros.map(num => num - promedio);//nuevo arreglo
}


/**
 * Calcula la desviación estándar de un arreglo de números.
 * 
 * @param {number[]} numeros - Un arreglo de números para calcular su desviación estándar.
 * @param {number} promedio - El promedio de los números, utilizado para calcular la varianza.
 * @returns {number} La desviación estándar de los números en el arreglo.
 */

function calcularDesviacionEstandar(numeros, promedio) {
    let sumaDiferenciasAlCuadrado = 0;
    for (let i = 0; i < numeros.length; i++) {//acumular difere
        sumaDiferenciasAlCuadrado += Math.pow(numeros[i] - promedio, 2);
    }
    let varianza = sumaDiferenciasAlCuadrado / numeros.length;
    return Math.sqrt(varianza);
}


/**
 * Función principal que maneja la entrada del usuario, realiza los cálculos y muestra los resultados.
 */

function main() {
    let input = document.getElementById("numerosInput").value;
    let numeros = input.split(",").map(Number).filter(num => !isNaN(num));

    if (numeros.length === 0) {
        alert("Ingrese valores numéricos válidos.");
        return;
    }+7


    // El llamado para calcular el promedio, las diferencias y la desviación estándar
    let promedio = calcularPromedio(numeros);
    let diferencia = calcularDiferencia(numeros, promedio);
    let desviacionEstandar = calcularDesviacionEstandar(numeros, promedio);



    // mostrar el resultado en la pagina web 
    document.getElementById("promedio").textContent = promedio.toFixed(2);
    document.getElementById("diferencia").textContent = diferencia.map(num => num.toFixed(2)).join(", ");
    document.getElementById("desviacion").textContent = desviacionEstandar.toFixed(2);
}
