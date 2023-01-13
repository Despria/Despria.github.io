---
sidebar_position: 34
---

# Level 1 - 핸드폰 번호 가리기

## 문제

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.<br/>
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 <br/>
나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

## 제한 사항

1. phone_number는 길이 4 이상, 20이하인 문자열입니다.

## 풀이

```c#
public class Solution 
{
    public string solution(string phone_number)
    {
        string protectedNumber = "";

        for (int i = 0; i < phone_number.Length; i++)
        {
            if (i < phone_number.Length - 4)
                protectedNumber += "*";
            else
                protectedNumber += phone_number[i];
        }

        return protectedNumber;
    }
}
```

해결 일자 - 2023.01.13