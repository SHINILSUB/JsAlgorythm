//case 1
function solution(s){
    let answer = 0;
    for(let x of s){
        if(x === x.toUpperCase())answer++;
    }
    return answer

}
let str = "KoreaTimeGood"
console.log(solution(str))

//case 2 ascii num
//65~90=upperCase, 97~122=lowerCase
function solution(s){
    let answer = 0;
    for(let x of s){
        let num = x.charCodeAt();
        if(num >= 65 && num <= 90) answer++
    }
    return answer

}
let str = "KoreaTimeGood"
console.log(solution(str))
