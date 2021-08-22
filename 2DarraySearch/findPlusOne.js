function solutuon(arr){
    let answer = 0, cnt = 0
    for(let x of arr){
        if(x === 1){
            cnt++;
            answer++;
        }else cnt=0;
        
    }return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1]