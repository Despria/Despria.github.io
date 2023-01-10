---
sidebar_position: 19
---

# Level 1 - 숫자 문자열과 영단어

## 문제

네오와 프로도가 숫자놀이를 하고 있습니다. <br/>
네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 <br/>
프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

* 1478 → "one4seveneight"
* 234567 → "23four5six7"
* 10203 → "1zerotwozero3"

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.<br/>
s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

| 숫자 | 영단어 |
|:----:|:------:|
|   0  | zero   |
|   1  | one    |
|   2  | two    |
|   3  | three  |
|   4  | four   |
|   5  | five   |
|   6  | six    |
|   7  | seven  |
|   8  | eight  |
|   9  | nine   |

## 제한 사항

1. 1 ≤ s의 길이 ≤ 50
2. s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
3. return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

## 풀이

```c#
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int solution(string s)
    {
        Dictionary<string, int> numbers = new Dictionary<string, int>()
        {
            { "zero", 0 },
            { "one", 1 },
            { "two", 2 },
            { "three", 3 },
            { "four", 4 },
            { "five", 5 },
            { "six", 6 },
            { "seven", 7 },
            { "eight", 8 },
            { "nine", 9 },
        };
        string[] textNumbers = numbers.Keys.ToArray();

        for (int i = 0; i < numbers.Count; i++)
        {
            s = s.Replace(textNumbers[i], numbers[textNumbers[i]].ToString());
        }

        return Convert.ToInt32(s);
    }
}
```

해결 일자 - 2023.01.10

매우 간단한 문제이다.<br/>
숫자는 0부터 9까지뿐이므로, 이에 해당하는 Dictionary를 하나 만들어 둔다.<br/>
그리고 매개변수로 주어지는 문자열 s에서 0부터 9까지 순서대로 Replace로 숫자로 바꿔주면 된다.<br/>
여기에서 미리 만들어 둔 Dictionary를 이용하면 된다.

다만, s는 문자열이므로 일단은 string형으로 바꾼 후, solution을 return할 때 int형으로 바꿔준다.
