
var agora = new Date()
var hora = agora.getHours()
if (agora < 12) {
    console.log('Bom dia!')
} else if (agora <= 18) {
    console.log('Boa tarde!')
} else if (agora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!') 
}
