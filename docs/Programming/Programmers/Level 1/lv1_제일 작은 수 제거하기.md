---
sidebar_position: 40
---

# Level 1 - 제일 작은 수 제거하기

## 문제

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. <br/>
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. <br/>
예를 들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

## 제한 사항

1. arr은 길이 1 이상인 배열입니다.
2. 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

## 풀이

```c#
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution 
{
    public int[] solution(int[] arr)
    {
        List<int> array = arr.ToList();
        array.Remove(array.Min());

        if (array.Count == 0)
            array.Add(-1);

        return array.ToArray();
    }
}
```

해결 일자 - 2023.01.14

제한 사항 2번의 의미는 주어진 배열 arr의 모든 요소의 값이 서로 다르다는 뜻이다. <br/>
그러므로 중복을 고려할 필요 없이 가장 작은 값을 지우면 된다.