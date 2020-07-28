
function snail(input){
    let output = []

    if(input.length==0||input[0].length==0){
        return output
    }
    if(input.length==1){
        return [input[0][0]]
    }
    const lastIndex = input[0].length-1

    //First row
    for(let i=0;i<lastIndex+1;i++){
        output.push(input[0][i])
    }
    //console.log('1 '+output)
    //Last column
    for(let i=1;i<lastIndex;i++){
        output.push(input[i][lastIndex])
    }
    //console.log('2 '+output)
    //Last row
    for(let i=lastIndex;i>=0;i--){
        output.push(input[lastIndex][i])
    }
    //console.log('3 '+output)
    //first column
    for(let i=lastIndex-1;i>0;i--){
        output.push(input[i][0])
    }
    //console.log('4 '+output)

    const subarray = []
    for(let j=1;j<lastIndex;j++){
        subarray.push(input[j].splice(1,lastIndex-1))
    }
    //console.log(subarray)
    output = output.concat(snail(subarray))
    return output

}
module.exports = snail