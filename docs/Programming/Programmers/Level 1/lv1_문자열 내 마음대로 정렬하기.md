---
sidebar_position: 54
---

# Level 1 - 문자열 내 마음대로 정렬하기

## 문제

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, <br/>
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. <br/>
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 <br/>
각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

## 제한 사항

1. strings는 길이 1 이상, 50이하인 배열입니다.
2. strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
3. strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
4. 모든 strings의 원소의 길이는 n보다 큽니다.
5. 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

## 풀이

```c#
using System.Linq;

public class Solution
{
    public string[] solution(string[] strings, int n)
    {
        string[] answer = strings.OrderBy(y => y).OrderBy(x => x[n]).ToArray();
        return answer;
    }
}
```

해결 일자 - 2023.01.14

n번째 알파벳을 기준으로 정렬해야 하지만, n번째 알파벳이 같은 단어끼리는 사전순으로 정렬해야한다.<br/>
그렇기 때문에 반대로 사전순으로 일단 정렬한 다음, n번째 알파벳 순서대로 정렬해주었다.