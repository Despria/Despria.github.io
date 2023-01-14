---
sidebar_position: 57
---

# Level 1 - 가운데 글자 가져오기

## 문제

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. <br/>
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

## 제한 사항

1. s는 길이가 1 이상, 100이하인 스트링입니다.

## 풀이

```c#
public class Solution 
{
    public string solution(string s)
    {
        return s.Length % 2 == 0? 
            string.Format($"{s[s.Length / 2 - 1]}{s[s.Length / 2]}") : 
            s[s.Length / 2].ToString();
    }
}
```

해결 일자 - 2023.01.14