---
sidebar_position: 53
---

# Level 1 - 문자열 내림차순으로 배치하기

## 문제

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요. <br/>
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

## 제한 사항

1. str은 길이 1 이상인 문자열입니다.

## 풀이

```c#
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class Solution
{
    public string solution(string s)
    {
        StringBuilder sb = new StringBuilder();
        List<char> order = new List<char>();

        for (int i = 0; i < s.Length; i++)
        {
            order.Add(s[i]);
        }
        order = order.OrderByDescending(x => x).ToList();

        for (int i = 0; i < order.Count; i++)
        {
            sb.Append(order[i]);
        }

        return sb.ToString();
    }
}
```

해결 일자 - 2023.01.14