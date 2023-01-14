---
sidebar_position: 41
---

# Level 1 - 정수 제곱근 판별

## 문제

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다. <br/>
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, <br/>
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

## 제한 사항

1. n은 1이상, 50000000000000 이하인 양의 정수입니다.

## 풀이

```c#
using System;

public class Solution 
{
    public long solution(long n)
    {
        double root = MathF.Sqrt(n);

        if (root % 1 == 0)
        {
            long rootPlusOne = (long)root + 1;
            return rootPlusOne * rootPlusOne;
        }

        return -1;
    }
}
```

해결 일자 - 2023.01.14

n의 값이 매우 큰 정수가 될 수 있으므로, 이에 유의하기만 하면 된다. <br/>
큰 수를 형변환 하면 문제가 발생할 가능성이 커지므로, 가급적 작은 수일때 미리 형변환을 하는 것이 좋다.