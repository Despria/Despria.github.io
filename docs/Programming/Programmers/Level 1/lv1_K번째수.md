---
sidebar_position: 28
---

# Level 1 - K번째수

## 문제

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다. <br/>
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.<br/>
2에서 나온 배열의 3번째 숫자는 5입니다.<br/>
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 <br/>
앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한 사항

1. array의 길이는 1 이상 100 이하입니다.
2. array의 각 원소는 1 이상 100 이하입니다.
3. commands의 길이는 1 이상 50 이하입니다.
4. commands의 각 원소는 길이가 3입니다.

## 풀이

```c#
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int[] solution(int[] array, int[,] commands)
    {
        List<int> answer = new List<int>();

        for (int i = 0; i < commands.GetLength(0); i++)
        {
            List<int> slicedArray = new List<int>();
            int start = commands[i, 0];
            int end = commands[i, 1];
            int number = commands[i, 2];

            for (int j = start - 1; j < end; j++)
            {
                slicedArray.Add(array[j]);
            }
            slicedArray.Sort();
            answer.Add(slicedArray[number - 1]);
        }

        return answer.ToArray();
    }
}
```

해결 일자 - 2023.01.13

매우 간단하게 해결할 수 있는 문제였다.<br/>
2차원 배열의 각 요소에 담겨있는 수 대로, 주어진 배열 array에서 값을 추출하는 것을 반복하면 된다.

반복문 내부에서 array에서 값을 오려낼 List를 만들고, 참고할 수들을 각 변수 start, end, number에 담는다.<br/>
그리고 해당 수에 따라 오려내고, 정렬하고, answer에 해당되는 수를 담는 것을 반복하면 된다.