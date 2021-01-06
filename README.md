# Relationship form to matrix

### Setup

`yarn` or `npm i` to install dependencies

### input

save input file as `input.csv` in this directory

Format must be a CSV

header must contain people's names contained within square brackets e.g. `[Tom Banister]`

rows must contain a phrase matching the weightingMap (found in `parseInput.js`) or the text `This is me`

### Use

`node run.js` generates a file named `matrix.csv` and `attributes.csv`
