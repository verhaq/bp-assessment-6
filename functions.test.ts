const {shuffleArray} = require('./utils')
const {bots} = require('./data')

const tests=[1,2,3,4,5,6]

describe('shuffleArray should', () => {
    // CODE HERE
    test('same items in the array',()=>{
        expect(shuffleArray(tests)).toBeTruthy()

    })
    test('return an array of the same length',()=>{
        expect(shuffleArray(tests)).toHaveLength(tests.length)
    })
    
})