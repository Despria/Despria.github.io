---
sidebar_position: 47
---

# Level 1 - 시저 암호

## 문제

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. <br/>
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. <br/>
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

## 제한 사항

1. 공백은 아무리 밀어도 공백입니다.
2. s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
3. s의 길이는 8000이하입니다.
4. n은 1 이상, 25이하인 자연수입니다.

## 풀이

```c#
public class Solution
{
    public string solution(string s, int n)
    {
        string caesarCipher = "";

        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] == ' ')
            {
                caesarCipher += s[i];
                continue;
            }

            if (s[i] <= 90 && s[i] + n > 90)
            {
                caesarCipher += (char)(s[i] + n - 26);
                continue;
            }

            if (s[i] <= 122 && s[i] + n > 122)
            {
                caesarCipher += (char)(s[i] + n - 26);
                continue;
            }

            caesarCipher += (char)(s[i] + n);
        }

        return caesarCipher;
    }
}
```

해결 일자 - 2023.01.14

ASCII코드의 값에 주의하면서 문제를 해결하면 된다.

문제의 제한 사항 설명이 살짝 불친절한데, 대문자 'Z'에서 1을 더해도 대문자 'A'로 돌아간다. <br/>
또한 대문자와 소문자의 ASCII값 사이에 특수 문자들이 존재한다는 것을 기억해두면 된다.