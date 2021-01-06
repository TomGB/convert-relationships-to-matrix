# Relationship form to matrix

### Setup

`yarn` or `npm i` to install dependencies

### input

Save the form output as `input.csv` in this directory

The header must contain people's names contained within square brackets e.g. `[Tom Banister]`

Rows must contain a phrase matching the weightingMap (found in `parseInput.js`) or the text `This is me`

### Use

Once the `input.csv` is in place then run

`node run.js` in the cli

This generates two file named `matrix.csv` and `attributes.csv`

`matrix.csv` contains the averaged weights between each pair of individules

`attributes.csv` contains the sum of the relationships for that person
