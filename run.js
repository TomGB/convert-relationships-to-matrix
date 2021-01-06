const fs = require('fs')
const parseInput = require('./parseInput')
const generateMatrix = require('./generateMatrix')

const input = parseInput()
const { matrix, attributesCsv } = generateMatrix(input)

fs.writeFileSync('matrix.csv', matrix)
fs.writeFileSync('attributes.csv', attributesCsv)

console.log('output saved to matrix.csv and attributes.csv')
