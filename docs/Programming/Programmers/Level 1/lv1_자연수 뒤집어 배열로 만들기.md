---
sidebar_position: 43
---

# Level 1 - 자연수 뒤집어 배열로 만들기

## 문제

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. <br/>
예를 들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

## 제한 사항

1. n은 10,000,000,000이하인 자연수입니다.

## 풀이

```c#
using System;
using System.Collections.Generic;

public class Solution 
{
    public int[] solution(long n)
    {
        List<char> number = new List<char>();
        string num = n.ToString();

        for (int i = 0; i < num.Length; i++)
        {
            number.Add(num[i]);
        }

        List<int> answer = new List<int>();
        for (int i = number.Count - 1; i >= 0; i--) 
        {
            answer.Add(Convert.ToInt32(number[i]) - 48);
        }

        return answer.ToArray();
    }
}
```

해결 일자 - 2023.01.14

```c#
using System;
using System.Collections.Generic;

public class Solution {
    public int[] solution(long n)
    {
        List<int> number = new List<int>();
        string num = n.ToString();

        for (int i = num.Length - 1; i >= 0; i--)
        {
            number.Add(num[i] - 48);
        }

        return number.ToArray();
    }
}
```

이렇게 하면 조금 더 효율적이다.