//for loop
function solution(s) {
    let answer="";
    for(let x of s){
        if(x === 'A') answer+='#';
        else answer+=x;
    }

    return answer
}
const str = 'BANANA';
console.log(solution(str))

//relplace
function solution(s) {
    let answer=s;
    answer.replace(/A/g, '#')
    return answer
}
const str = 'BANANA';
console.log(solution(str))
