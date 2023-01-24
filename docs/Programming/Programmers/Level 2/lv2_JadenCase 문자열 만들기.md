---
sidebar_position: 7
---

# Level 2 - JadenCase 문자열 만들기

## 문제

JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. <br/>
단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)<br/>
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

## 제한 사항

1. s는 길이 1 이상 200 이하인 문자열입니다.
2. s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
 * 숫자는 단어의 첫 문자로만 나옵니다. <br/>
 * 숫자로만 이루어진 단어는 없습니다. <br/>
 * 공백문자가 연속해서 나올 수 있습니다.

## 풀이

```c#
using System.Text;

public class Solution
{
    public string solution(string s)
    {
        StringBuilder sb = new StringBuilder();
        string[] split = s.Split(" ");

        for (int i = 0; i < split.Length; i++)
        {
            string jadenCase = split[i].ToLower();
            if (jadenCase != string.Empty)
            {
                string upperCase = jadenCase[0].ToString().ToUpper();
                jadenCase = jadenCase.Remove(0, 1).Insert(0, upperCase);
            }

            sb.Append(jadenCase);
            sb.Append(' ');
        }
        sb.Remove(sb.Length - 1, 1);

        return sb.ToString();
    }
}
```

해결 일자 - 2023.01.24

공백으로 나눠진 문자열의 모든 단어들을 첫 문자만 대문자, 나머지는 소문자로 바꾸면 된다. <br/>
ToLower()를 이용해서 우선 모두 소문자로 바꾼 후, ToUpper()를 이용해 대문자로 바꾼다. <br/>
단, 공백문자가 연속으로 나오는 경우가 존재하는데 이 때에는 해당 문자열은 비어있는 취급이기 때문에 <br/>
인덱스에 접근하려 하면 IndexOutOfRangeException이 발생하므로 이 경우만 조건을 지정해주면 된다.