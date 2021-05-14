
            function solution(a, b, c){
                //삼각형일떄 yes 아닐떄 no 
                //

                let answer="YES", max;
                let tot=a+b+c;
                if(a>b) max=a;
                else max=b;
                if(c>max) max=c;
                if(tot-max<=max) answer="NO"; 
                return answer;
            }

            console.log(solution(13, 33, 17));
        