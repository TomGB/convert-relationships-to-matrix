const fs = require('fs')

const weightingMap = {
    "Almost every day": 20,
    "More than once a week": 10,
    "About weekly": 4,
    "Every couple of weeks": 2,
    "About monthly": 1,
    "Less than monthly or never": 0,
}

const input = fs.readFileSync(`./input.csv`, 'utf8').split('\r\n').map(x => x.split(','))

module.exports = () => {
    const columns = input[0].filter(x => x.includes('[')).map(col => col.split('[')[1].split(']')[0])

    input.pop()

    const output = input.map(row => {
        const weighting = {}

        columns.map((name, i) => {
            if (row[1 + i] === 'This is me') weighting['name'] = name
            else weighting[name] = weightingMap[row[1 + i]]
        })

        return weighting
    })

    return output
}
