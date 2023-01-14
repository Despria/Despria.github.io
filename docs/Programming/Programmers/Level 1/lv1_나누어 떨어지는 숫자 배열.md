---
sidebar_position: 56
---

# Level 1 - 나누어 떨어지는 숫자 배열

## 문제

array의 각 element 중 divisor로 나누어 떨어지는 값을 <br/>
오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.<br/>
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

## 제한 사항

1. arr은 자연수를 담은 배열입니다.
2. 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
3. divisor는 자연수입니다.
4. array는 길이 1 이상인 배열입니다.

## 풀이

```c#
using System.Linq;

public class Solution 
{
    public int[] solution(int[] arr, int divisor)
    {
        int[] answer = arr.Where(x => x % divisor == 0).OrderBy(y => y).ToArray();
        return answer.Length == 0? new int[] { -1 } : answer;
    }
}
```

해결 일자 - 2023.01.14