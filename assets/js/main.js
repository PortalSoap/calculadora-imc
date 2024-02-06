function runImc() {
    let page = document.querySelector(".container");

    function calculateImc(event) {
        event.preventDefault()
        const weight = Number(document.querySelector("#weight").value);
        const height = Number(document.querySelector("#height").value);
        const results = document.querySelector("#results");

        if(weight && height)
        {
            const person = {
                weight: weight,
                height: height,
        
                getImc() {
                    return Number(weight / height ** 2);
                }
            }
    
            const imc = person.getImc();

            if(imc <= 0) {
                results.innerHTML = `<div class="error">Os valores inseridos são inválidos. (334 = Impossible IMC value)</div>`;
            } else if(imc < 18.5) {
                results.innerHTML = `<div class="result">Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</div>`;
            } else if(imc < 24.9) {
                results.innerHTML = `<div class="result">Seu IMC é ${imc.toFixed(2)} (Peso normal)</div>`;
            } else if(imc < 29.9) {
                results.innerHTML = `<div class="result">Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</div>`;
            } else if(imc < 34.9) {
                results.innerHTML = `<div class="result">Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</div>`;
            } else if(imc < 39.9) {
                results.innerHTML = `<div class="result">Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</div>`;
            } else {
                results.innerHTML = `<div class="result">Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</div>`;
            }
        } else {
            if(!weight) {
                results.innerHTML = `<div class="error">O peso inserido é inválido. (333 = Incorrect value type)</div>`;        
            } else {
                results.innerHTML = `<div class="error">A altura inserida é inválida. (333 = Incorrect value type)</div>`;        
            }
            
        }
    }

    document.addEventListener('submit', calculateImc);
}

runImc();