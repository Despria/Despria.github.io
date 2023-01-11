---
sidebar_position: 20
---

# Level 1 - 약수의 개수와 덧셈

## 문제

두 정수 left와 right가 매개변수로 주어집니다. <br/>
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, <br/>
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

1. 1 ≤ left ≤ right ≤ 1,000

## 풀이

```c#
using System;

public class Solution
{
    public int solution(int left, int right)
    {
        int answer = 0;

        for (int i = left; i <= right; i++)
        {
            int numberOfDivisor = 0;

            for (int j = 1; j <= MathF.Sqrt(i); j++)
            {
                if (j == MathF.Sqrt(i))
                {
                    numberOfDivisor++;
                }
                else if (i % j == 0)
                {
                    numberOfDivisor += 2;
                }
            }

            if (numberOfDivisor % 2 == 0)
            {
                answer += i;
            }
            else
            {
                answer -= i;
            }
        }

        return answer;
    }
}
```

해결 일자 - 2023.01.11

매우 간단한 문제이다. <br/>
left부터 right까지 모든 수들의 약수의 개수를 구하고, 그에 따라 간단한 덧셈 혹은 뺄셈을 하면 된다.<br/>
약수의 개수를 구하는 것은 이미 이전 문제인 [기사단원의 무기](../Level%201/lv1_%EA%B8%B0%EC%82%AC%EB%8B%A8%EC%9B%90%EC%9D%98%20%EB%AC%B4%EA%B8%B0.md)에서 해결한 적이 있다.<br/>
그 때와 같이, MathF.Sqrt()를 통해 약수를 구하는 연산 횟수의 부담을 최대한 줄여서 계산을 했다.