---
sidebar_position: 4
---

# Level 2 - 최솟값 만들기

## 문제

길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다. <br/>
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. <br/>
이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. <br/>
이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. <br/>
(단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면

* A에서 첫번째 숫자인 1, B에서 첫번째 숫자인 5를 뽑아 곱하여 더합니다. (누적된 값 : 0 + 5(1x5) = 5)
* A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 5 + 16(4x4) = 21)
* A에서 세번째 숫자인 2, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 21 + 8(2x4) = 29)

즉, 이 경우가 최소가 되므로 29를 return 합니다.

배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.

## 제한 사항

1. 배열 A, B의 크기 : 1,000 이하의 자연수
2. 배열 A, B의 원소의 크기 : 1,000 이하의 자연수

## 풀이

```c#
using System.Linq;

public class Solution
{
    public int solution(int[] A, int[] B)
    {
        int answer = 0;

        A = A.OrderBy(x => x).ToArray();
        B = B.OrderBy(x => x).ToArray();

        for (int i = 0; i < A.Length; i++)
        {
            answer += A[i] * B[A.Length - 1 - i];
        }

        return answer;
    }
}
```

해결 일자 - 2023.01.17

A와 B의 길이가 반드시 동일하기 때문에 간단히 해결할 수 있는 문제이다. <br/>
A의 최소값과 B의 최대값 (또는 A의 최대값과 B의 최소값) 을 순서대로 서로 곱해서 더해나가면 가장 작은 누적값이 된다. <br/>
처음에는 습관적으로 Linq를 써서 해결했는데, 아래와 같이 Array.Sort()를 쓰는 것이 더 빠르다.

```c#
using System;

public class Solution
{
    public int solution(int[] A, int[] B)
    {
        int answer = 0;

        Array.Sort(A);
        Array.Sort(B);

        for (int i = 0; i < A.Length; i++)
        {
            answer += A[i] * B[A.Length - 1 - i];
        }

        return answer;
    }
}
```