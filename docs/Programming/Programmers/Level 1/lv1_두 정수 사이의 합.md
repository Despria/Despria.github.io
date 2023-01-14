---
sidebar_position: 55
---

# Level 1 - 두 정수 사이의 합

## 문제

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.<br/>
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

## 제한 사항

1. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
2. a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
3. a와 b의 대소관계는 정해져있지 않습니다.

## 풀이

```c#
public class Solution
{
    public long solution(int a, int b)
    {
        long sum = 0;

        int start = a >= b ? b : a;
        int end = a >= b ? a : b;

        for (int i = start; i <= end; i++)
        {
            sum += i;
        }

        return sum;
    }
}
```

해결 일자 - 2023.01.14