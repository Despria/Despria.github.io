---
sidebar_position: 17
---

# Level 1 - 없는 숫자 더하기

## 문제

0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

1. 1 ≤ numbers의 길이 ≤ 9
> 0 ≤ numbers의 모든 원소 ≤ 9
> numbers의 모든 원소는 서로 다릅니다.

## 풀이

```c#
using System;
using System.Linq;

public class Solution
{
    public int solution(int[] numbers)
    {
        int sum = 0;

        for (int i = 0; i <= 9; i++)
        {
            if (!numbers.Contains(i))
            {
                sum += i;
            }
        }

        return sum;
    }
}
```

해결 일자 - 2023.01.10

풀이는 생략해도 될 것 같다.