---
sidebar_position: 52
---

# Level 1 - 문자열 다루기 기본

## 문제

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. <br/>
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

## 제한 사항

1. s는 길이 1 이상, 길이 8 이하인 문자열입니다.
2. s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

## 풀이

```c#
public class Solution
{
    public bool solution(string s)
    {
        if (s.Length != 4 && s.Length != 6)
            return false;

        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] >= 65 && s[i] <= 90)
                return false;

            else if (s[i] >= 97 && s[i] <= 122)
                return false;
        }

        return true;
    }
}
```

해결 일자 - 2023.01.14