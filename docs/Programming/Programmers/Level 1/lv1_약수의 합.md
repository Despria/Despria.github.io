---
sidebar_position: 46
---

# Level 1 - 약수의 합

## 문제

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

## 제한 사항

1. n은 0 이상 3000이하인 정수입니다.

## 풀이

```c#
using System;

public class Solution
{
    public int solution(int n)
    {
        int sumOfAllDivisor = 0;

        for (int i = 1; i <= MathF.Sqrt(n); i++)
        {
            if (i == MathF.Sqrt(n))
            {
                sumOfAllDivisor += i;
            }
            else if (n % i == 0)
            {
                sumOfAllDivisor += i;
                sumOfAllDivisor += n / i;
            }
        }

        return sumOfAllDivisor;
    }
}
```

해결 일자 - 2023.01.14