---
sidebar_position: 44
---

# Level 1 - 자릿수 더하기

## 문제

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요. <br/>
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

## 제한 사항

1. N의 범위 : 100,000,000 이하의 자연수

## 풀이

```c#
using System;

public int solution(int n)
{
    int answer = 0;
    string number = n.ToString();

    for (int i = 0; i < number.Length; i++)
    {
        answer += Convert.ToInt32(number[i]) - 48;
    }

    return answer;
}
```

해결 일자 - 2023.01.14