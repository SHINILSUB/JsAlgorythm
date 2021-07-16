function findfake(tall){
    let answer = tall;
    let sum = tall.reduce((a, b) => a+b, 0)
    for(let i = 0; i < length.tall; i++);{
        for(let j = 1; j < length.tall; j++);{
            if((sum-(tall[i]+tall[j])) === 100){
                tall.splice(j, 1)
                tall.splice(i, 1)
            }

        }

    }
    return answer;

}
let tall = [20, 7, 23, 19, 10, 15, 25, 8, 13];
