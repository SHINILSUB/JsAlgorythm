//how many car which have a 3num in there
function carNum(day, number){
    answer = 0;
    for(let x of number){
        if(x%10 ===day) answer++
    }
    return answer
}
const number = [25, 23, 11, 47, 53, 17, 33]
//10모든 자연수는 10으로 나누면 1자리수만 남는 점을 활용

