---
sidebar_position: 39
---

# Level 1 - 짝수와 홀수

## 문제

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

## 제한 사항

1. num은 int 범위의 정수입니다.
2. 0은 짝수입니다.

## 풀이

```c#
public class Solution
{
    public string solution(int num)
    {
        return num % 2 == 0 ? "Even" : "Odd";
    }
}
```

해결 일자 - 2023.01.14