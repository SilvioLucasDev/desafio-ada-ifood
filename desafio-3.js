// Desafio 3
// Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), a partir do array de números fornecido. 
// Para resolver, crie uma função que recebe um array com os seguintes números:
console.log('=========== DESAFIO 3 ===========')
function uniqueNumbers(numbers) {
    const uniqueNumbersSet = new Set()
    for (const number of numbers) {
        if (!uniqueNumbersSet.has(number)) {
            uniqueNumbersSet.add(number)
        } else {
            uniqueNumbersSet.delete(number)
        }
    }
    return Array.from(uniqueNumbersSet)
}

const numbers = [12, 17, 15, 19, 22, 17, 19, 12]
const result = uniqueNumbers(numbers)
console.log('Números solitários:', result)