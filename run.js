const fs = require('fs')
const parseInput = require('./parseInput')
const generateMatrix = require('./generateMatrix')

const input = parseInput()
const output = generateMatrix(input)

fs.writeFileSync('output.csv', output)

console.log('output saved to output.csv')
