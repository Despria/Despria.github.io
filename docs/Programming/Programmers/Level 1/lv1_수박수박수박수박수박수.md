---
sidebar_position: 49
---

# Level 1 - 수박수박수박수박수박수?

## 문제

길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.<br/>예를 들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

## 제한 사항

1. n은 길이 10,000이하인 자연수입니다.

## 풀이

```c#
public class Solution
{
    public string solution(int n)
    {
        StringBuilder watermelon = new StringBuilder();

        for (int i = 0; i < n; i++) 
        { 
            if (i % 2 == 0)
            {
                watermelon.Append("수");
            }
            else
            {
                watermelon.Append("박");
            }
        }

        return watermelon.ToString();
    }
}
```

해결 일자 - 2023.01.14