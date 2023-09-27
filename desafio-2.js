// Desafio 2
// Neste desafio, sua missão será encontrar a quantidade de palavras existentes na seguinte phrase: "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa" //15
console.log('=========== DESAFIO 2 ===========')
function wordCounter(phrase) {
    let amount = 1

    for (let i = 0; i < phrase.length; i++) {
        const charAtual = phrase[i]

        if (charAtual === charAtual.toUpperCase()) amount++
    }

    return amount
}
const phrase = 'façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa'
const numberOfWords = wordCounter(phrase)
console.log('Quantidade de palavras:', numberOfWords)