---
sidebar_position: 35
---

# Level 1 - 하샤드 수

## 문제

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. <br/>
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. <br/>
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

## 제한 사항

1. x는 1 이상, 10000 이하인 정수입니다.

## 풀이

```c#
using System;

public class Solution 
{
    public bool solution(int x)
    {
        bool isHarshad = false;

        string number = x.ToString();
        int harshad = 0;

        for (int i = 0; i < number.Length; i++)
        {
            harshad += Convert.ToInt32(number[i]) - 48;
        }

        if (x % harshad == 0)
        {
            isHarshad = true;
        }

        return isHarshad;
    }
}
```

해결 일자 - 2023.01.13