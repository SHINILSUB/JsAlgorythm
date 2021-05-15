let n = parseInt(prompt('n?'))
let p = [] //아래 i가 소수면 p[i] = true 합성수면 false
for (let i = 2; i <= n; i ++) p[i] = true //2~n에 있는수를 모두 소수로 간주
let max = Math.floor(Math.sqrt(n)) //소수 x는 n제곱근까지 구하면 충분
let x = 2
while(x <= max) {
    for (let i = 2 * x; i <= n; i += x) p[i] = false //x의배수는 합성수
    while(!p[++x]) //다음소수 검색


    //쌍둥이 소수 출력
    for(let i=2; i<=n-2; i++) { 
        if(p[i] && p[i+2]) {
            return(i+','+(i+2)+'<br>')
        }
    }
}
