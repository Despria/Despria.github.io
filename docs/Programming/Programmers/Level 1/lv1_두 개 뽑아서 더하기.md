---
sidebar_position: 25
---

# Level 1 - 두 개 뽑아서 더하기

## 문제

정수 배열 numbers가 주어집니다. <br/>
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 <br/>
배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

1. numbers의 길이는 2 이상 100 이하입니다.
> numbers의 모든 수는 0 이상 100 이하입니다.

## 풀이

```c#
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int[] solution(int[] numbers)
    {
        List<int> answer = new List<int>();

        for (int i = 0; i < numbers.Length - 1; i++)
        {
            for (int j = i + 1; j < numbers.Length; j++)
            {
                if (!answer.Contains(numbers[i] + numbers[j]))
                    answer.Add(numbers[i] + numbers[j]);
            }
        }
        answer.Sort();

        return answer.ToArray();
    }
}
```

해결 일자 - 2023.01.12

주어진 배열 내부의 서로 다른 수를 합하여 만들 수 있는 수를 모두 구하여 정렬하면 된다. <br/>
단, 합하여 만들어진 수는 중복을 허용하지 않는다.