function solution(s){
    let answer, max = Number.MIN_SAFE_INTEGER
    for (let x of s){
        if(x.length > max){
            max = x.length;
            answer = x
        }
        return answer
    }
    
}
let word = ['teacher', 'time', 'student', 'beatiful', 'good'];
console.log(solution(word))
