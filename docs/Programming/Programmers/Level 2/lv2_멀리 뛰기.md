---
sidebar_position: 2
---

# Level 2 - 멀리 뛰기

## 문제

효진이는 멀리 뛰기를 연습하고 있습니다. <br/>
효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 

칸이 총 4개 있을 때, 효진이는

> (1칸, 1칸, 1칸, 1칸)<br/>
> (1칸, 2칸, 1칸)<br/>
> (1칸, 1칸, 2칸)<br/>
> (2칸, 1칸, 1칸)<br/>
> (2칸, 2칸)

의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 

멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 알아내, <br/>
여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요. <br/>
예를 들어 4가 입력된다면, 5를 return하면 됩니다.

## 제한 사항

1. n은 1 이상, 2000 이하인 정수입니다.

## 풀이

```c#
public class Solution
{
    public long solution(int n)
    {
        long beforeTwo = 1;
        long beforeOne = 2;
        long thisTime = 0;

        if (n == 1) return beforeTwo;
        if (n == 2) return beforeOne;

        for (int i = 2; i < n; i++)
        {
            thisTime = (beforeTwo + beforeOne) % 1234567;
            beforeTwo = beforeOne;
            beforeOne = thisTime;
        }

        return thisTime;
    }
}
```

해결 일자 - 2023.01.16

처음에 나올 수 있는 경우의 수 몇개를 직접 구해보니 피보나치 수열로 해결하면 되는 문제였다. <br/>
n은 1부터 2000사이의 자연수이므로 n이 1이거나 2인 경우의 값만 직접 반환값을 적어주고, <br/>
그 다음부터는 피보나치 수열 방식으로 답을 구하도록 해두었다.