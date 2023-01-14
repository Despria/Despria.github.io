---
sidebar_position: 38
---

# Level 1 - 최대공약수와 최소공배수

## 문제

두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. <br/>
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. <br/>
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

## 제한 사항

1. 두 수는 1이상 1000000이하의 자연수입니다.

## 풀이

```c#
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution 
{
    public int[] solution(int n, int m)
    {
        List<int> nDivisor = new List<int>();
        List<int> mDivisor = new List<int>();

        for (int i = 1; i <= MathF.Sqrt(n); i++)
        {
            if (n % i == 0)
            {
                nDivisor.Add(i);
                if (!nDivisor.Contains(n / i))
                    nDivisor.Add(n / i);
            }
        }

        for (int i = 1; i <= MathF.Sqrt(m); i++)
        {
            if (m % i == 0)
            {
                mDivisor.Add(i);
                if (!mDivisor.Contains(m / i))
                    mDivisor.Add(m / i);
            }
        }

        nDivisor.Sort();
        mDivisor.Sort();

        int maxDivisor = 0;
        for (int i = nDivisor.Count - 1; i >= 0; i--)
        {
            if (mDivisor.Contains(nDivisor[i]))
            {
                if (nDivisor[i] > maxDivisor)
                    maxDivisor = nDivisor[i];
            }
        }

        int[] answer = new int[] { maxDivisor, n / maxDivisor * m / maxDivisor * maxDivisor };
        return answer;
    }
}
```

해결 일자 - 2023.01.14

두 수 n, m의 약수 리스트를 각각 만든 후, 그 중 공통되면서 최대크기인 수를 구한다. <br/>
최소공배수는 최대공약수로 각 수를 나눈 몫과 최대공약수를 곱하여 구하면 된다.