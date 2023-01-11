---
sidebar_position: 22
---

# Level 1 - 음양 더하기

## 문제

어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

1. absolutes의 길이는 1 이상 1,000 이하입니다.
> absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
2. signs의 길이는 absolutes의 길이와 같습니다.
> signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

## 풀이

```c#
using System;

public class Solution
{
    public int solution(int[] absolutes, bool[] signs)
    {
        int sum = 0;

        for (int i = 0; i < absolutes.Length; i++)
        {
            if (!signs[i])
            {
                absolutes[i] = -absolutes[i];
            }

            sum += absolutes[i];
        }

        return sum;
    }
}
```

해결 일자 - 2023.01.11

absolutes와 signs의 배열의 길이는 같으므로, signs[i]가 false일때만 absolutes[i]를 음수로 전환하면 된다.