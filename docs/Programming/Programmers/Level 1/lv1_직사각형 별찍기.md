---
sidebar_position: 31
---

# Level 1 - 직사각형 별찍기

## 문제

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다. <br/>
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

## 제한 사항

1. n과 m은 각각 1000 이하인 자연수입니다.

## 풀이

```c#
using System;

public class Example
{
    public static void Main()
    {
        Console.Clear();
        string[] columnRow = Console.ReadLine().Split(" ");

        int n = int.Parse(columnRow[0]);
        int m = int.Parse(columnRow[1]);

        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                Console.Write("*");
            }
            Console.WriteLine();
        }
    }
}
```

해결 일자 - 2023.01.13

하다하다 이런게 문제로 나올 거라곤 생각지도 못했다.