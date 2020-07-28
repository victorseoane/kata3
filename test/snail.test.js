const snail = require('../lib/snail.js')

describe('snail function ',()=>{
    const input = [[[1,2,3],[4,5,6,],[7,8,9]],[[1,2,3,1],[4,5,6,4],[7,8,9,7],[7,8,9,7]],[[5]],[[1,2],[3,4]],[[]]]
    const expectedOutput = [[1,2,3,6,9,8,7,4,5],[1,2,3,1,4,7,7,9,8,7,7,4,5,6,9,8],[5],[1,2,4,3],[]]
    for(let i=0;i<input.length;i++){
        it("works with case "+i,()=>{
            const result = snail(input[i])
            expect(result).toEqual(expectedOutput[i])
        })
    }

})