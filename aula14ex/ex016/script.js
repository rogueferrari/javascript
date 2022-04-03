function calcular() {
    var numInicio = window.document.getElementById("txtnum1")
    var numFim = window.document.getElementById("txtnum2")
    var numPasso = window.document.getElementById("txtnum3")
    var resultado = window.document.getElementById("res")

        if(numInicio.value.length == 0 || numFim.value.length == 0 || numPasso.value.length == 0) {
            resultado.innerHTML = "Impossível contar!"
        } else {
            resultado.innerHTML = "Contando: <br>"
            var convertNum1 = Number(numInicio.value)
            var convertNum2 = Number(numFim.value)
            var convertNum3 = Number(numPasso.value)
            if(convertNum3 <= 0) {
                window.alert("Passo inválido! Considerando PASSO 1")
                convertNum3 = 1
            }
            if (convertNum1 < convertNum2) {
                //Contagem crescente
                for(var c = convertNum1; c <= convertNum2; c += convertNum3) {
                resultado.innerHTML += `${c} \u{1F449} `
                }
            } else {
                //contagem regressiva
                for (c = convertNum1; c >= convertNum2; c -= convertNum3) {
                    resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += ` \u{1F3F4}`
    }
}
