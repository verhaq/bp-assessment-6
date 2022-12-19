const {shuffleArray} = require('./utils')
const {bots} = require('./data')

describe('shuffleArray should', () => {
    let result = shuffleArray(bots)
    expect(typeof result).toBe([])
    //test('shuffleArray should return an array', () => expect(shuffleArray.length).toEqual(bots.length))
})