---
sidebar_position: 3
---

# Level 2 - 최댓값과 최솟값

## 문제

문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. <br/>
str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 <br/>
"(최소값) (최대값)"형태의 문자열로 반환하는 함수, solution을 완성하세요.<br/>
예를 들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

## 제한 사항

1. s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

## 풀이

```c#
using System.Linq;

public class Solution
{
    public string solution(string s)
    {
        int[] numbers = s.Split(' ').Select(int.Parse).ToArray();

        int max = numbers.Max();
        int min = numbers.Min();

        return string.Format($"{min} {max}");
    }
}
```

해결 일자 - 2023.01.16

레벨1이라고 해도 될 정도로 굉장히 쉬운 문제이다.