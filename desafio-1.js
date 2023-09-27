// Desafio 1
// Sua missão: criar um algoritmo capaz de fazer essa conversão! Para isso, crie uma função que receba um horário qualquer, respeitando o formato 12hs (06:15:25PM) e retorne o equivalente (18:15:25).
console.log('=========== DESAFIO 1 ===========')
function convertTimeTo24HFormat(time12h) {
    const partsOfTime = time12h.slice(0, -2).split(":")
    let hour = parseInt(partsOfTime[0])
    const minutes = parseInt(partsOfTime[1])
    const seconds = parseInt(partsOfTime[2])
    const period = time12h.slice(-2)

    if (period === "PM" && hour !== 12) {
        hour += 12
    } else if (period === "AM" && hour === 12) {
        hour = 0
    }

    return `${hour}:${minutes}:${seconds}`
}

const time12h = '06:15:25PM'
const convertedTime = convertTimeTo24HFormat(time12h)
console.log(time12h, 'no formato de 24h:', convertedTime)
