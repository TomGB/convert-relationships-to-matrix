require = require("esm")(module)
const fs = require('fs')
const { Combination } = require('js-combinatorics')

// const input = [
//     { name: 'Xander', Thomas: 5, Ben: 2, Sally: 4, Amanda: 3 },
//     { name: 'Thomas', Xander: 2, Ben: 1, Sally: 2, Amanda: 3 },
//     { name: 'Ben', Thomas: 2, Xander: 1, Sally: 1, Amanda: 1 },
// ]

module.exports = (input) => {
    const people = Object.keys(input[0]).filter(x => x !== 'name')

    const nonRespond = people.filter(person => !input.find(({ name }) => name === person))

    nonRespond.map(person => input.push({ name: person }))

    const combs = new Combination(input, 2);
    const result = [...combs].map(([a, b]) => {
        const aScore = a[b.name]
        const bScore = b[a.name]

        let average = 0

        if (!aScore && !bScore) average = 0
        else if (!aScore) average = bScore
        else if (!bScore) average = aScore
        else average = (aScore + bScore) / 2

        return { one: a.name, two: b.name, average }
    })

    let output = ' ,' + people.join() + '\n'

    people.map((person, lIndex) => {
        const data = people.map((topPerson, tIndex) => {
            if (lIndex <= tIndex) return ''
            const relationship = result.find(({ one, two }) =>
                (one === person && two === topPerson) ||
                (one === topPerson && two === person)
            )
            return relationship.average
        }).join()

        output = output + person + ',' + data + '\n'
    })

    return output
}
