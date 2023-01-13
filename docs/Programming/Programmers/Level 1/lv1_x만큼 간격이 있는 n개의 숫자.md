---
sidebar_position: 32
---

# Level 1 - x만큼 간격이 있는 n개의 숫자

## 문제

함수 solution은 정수 x와 자연수 n을 입력 받아, 
x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

## 제한 사항

1. x는 -10000000 이상, 10000000 이하인 정수입니다.
2. n은 1000 이하인 자연수입니다.

## 풀이

```c#
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution 
{
    public long[] solution(long x, int n)
    {
        List<long> answer = new List<long>();

        long margin = x;
        for (int i = 0; i < n; i++)
        {
            answer.Add(x);
            x += margin;
        }

        return answer.ToArray();
    }
}
```

해결 일자 - 2023.01.13

long형으로 자료형 통일만 해주면 된다.