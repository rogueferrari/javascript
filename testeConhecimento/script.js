function carregar() {
var atribuirDia = window.document.getElementById('res')
    var dataSystem = new Date()
var diaAtual = dataSystem.getDay()
switch (diaAtual) {
    case 0: 
    diaAtual = "Domingo"
    atribuirDia.innerHTML = `Hoje é ${diaAtual}! Curtiu a cor de fundo?`
    window.document.body.style.background = "#87CEFA" //lightSkyBlue
    break
    case 1: 
    diaAtual = "Segunda-Feira"
    atribuirDia.innerHTML = `Hoje é ${diaAtual}! Curtiu a cor de fundo?`
    window.document.body.style.background = "#32CD32" //LimeGreen
    break
    case 2: 
    diaAtual = "Terça-Feira"
    atribuirDia.innerHTML = `Hoje é ${diaAtual}! Curtiu a cor de fundo?`
    window.document.body.style.background = "#FFD700" //yellowGold
    break
    case 3: 
    diaAtual = "Quarta-Feira"
    atribuirDia.innerHTML = `Hoje é ${diaAtual}! Curtiu a cor de fundo?`
    window.document.body.style.background = "#FF0000" //red
    break
    case 4:
    diaAtual = "Quinta-Feira"
    atribuirDia.innerHTML = `Hoje é ${diaAtual}! Curtiu a cor de fundo?`
    window.document.body.style.background = "#FF69B4" //hotPink
    break
    case 5: 
    diaAtual = "Sexta-Feira"
    atribuirDia.innerHTML = `Hoje é ${diaAtual}! Curtiu a cor de fundo?`
    window.document.body.style.background = "#808080" //gray
    break
    case 6: 
    diaAtual = "Sábado"
    atribuirDia.innerHTML = `Hoje é ${diaAtual}! Curtiu a cor de fundo?`
    window.document.body.style.background = "#A020F0" //purple
    break
}
}