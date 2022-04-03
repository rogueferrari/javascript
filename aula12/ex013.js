var agora = new Date() //Variável criada para armazenar os dados atuais do sistema
var diaSem = agora.getDay() //Variável criada para determinar que queremos obter os dias da semana.
switch(diaSem) { //Usa na expressão, a variável criada que está armazenando os valores obtidos do sistema. 
    case 0:
        console.log('Domingo')
        break; //Nunca esquerer o Break do "case"!!!
    case 1: 
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: 
        console.log('[ERRO] Dia inválido')
        break
}