---
sidebar_position: 42
---

# Level 1 - 정수 내림차순으로 배치하기

## 문제

함수 solution은 정수 n을 매개변수로 입력받습니다. <br/>
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. <br/>
예를 들어 n이 118372면 873211을 리턴하면 됩니다.

## 제한 사항

1. n은 1이상 8000000000 이하인 자연수입니다.

## 풀이

```c#
public class Solution
{
    public long solution(long n)
    {
        List<int> numbers = new List<int>();
        string number = n.ToString();

        for (int i = 0; i < number.Length; i++)
        {
            numbers.Add(Convert.ToInt32(number[i]) - 48);
        }
        numbers = numbers.OrderByDescending(x => x).ToList();

        string newNumber = "";

        for (int i = 0; i < numbers.Count; i++) 
        { 
            newNumber += numbers[i].ToString();
        }

        return Convert.ToInt64(newNumber);
    }
}
```

해결 일자 - 2023.01.14