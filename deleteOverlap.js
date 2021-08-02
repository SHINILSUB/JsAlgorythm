//indexOf는 배열값에 정의된 내용의 첫번째 인덱스로 고정시켜주는 특징이 있다.
function solution (s){
    let answer;
    answer = s=filter((v, i)=>{
        if(s.indexOf(v) === i) return true;
    });
    return answer;

}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str))