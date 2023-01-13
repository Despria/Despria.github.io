---
sidebar_position: 36
---

# Level 1 - 평균 구하기

## 문제

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

## 제한 사항

1. arr은 길이 1 이상, 100 이하인 배열입니다.
2. arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

## 풀이

```c#
public double solution(int[] arr)
{
    double answer = arr.Average();
    return answer;
}
```

해결 일자 - 2023.01.13