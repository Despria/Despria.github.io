---
sidebar_position: 48
---

# Level 1 - 문자열을 정수로 바꾸기

## 문제

문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

## 제한 사항

1. s의 길이는 1 이상 5이하입니다.
2. s의 맨앞에는 부호(+, -)가 올 수 있습니다.
3. s는 부호와 숫자로만 이루어져있습니다.
4. s는 "0"으로 시작하지 않습니다.

## 풀이

```c#
using System;

public class Solution
{
    public int solution(string s)
    {
        return Convert.ToInt32(s);
    }
}
```

해결 일자 - 2023.01.14