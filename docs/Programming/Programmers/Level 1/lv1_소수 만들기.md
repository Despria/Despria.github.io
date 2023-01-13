---
sidebar_position: 30
---

# Level 1 - 소수 만들기

## 문제

주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. <br/>
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 <br/>
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

1. nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
2. nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

## 풀이

```c#
using System;
using System.Collections.Generic;

public class Solution
{
    public int solution(int[] nums)
    {
        List<int> numberList = new List<int>();
        int primeNumber = 0;
        bool isPrime;

        for (int i = 0; i < nums.Length - 2; i++) 
        { 
            for (int j = i + 1; j < nums.Length - 1; j++)
            {
                for (int k = j + 1; k < nums.Length; k++)
                {
                    int number = nums[i] + nums[j] + nums[k];
                    numberList.Add(number);
                }
            }
        }

        for (int i = 0; i < numberList.Count; i++)
        {
            isPrime = true;

            for (int j = 2; j <= MathF.Sqrt(numberList[i]); j++)
            {
                if (numberList[i] % j == 0)
                {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime)
            {
                primeNumber++;
            }
        }

        return primeNumber;
    }
}
```

해결 일자 - 2023.01.13

간단하게 해결할 수 있는 문제이다.<br/>
다만 주의할 점은, nums에서 중복 없이 3개의 요소를 더했을 때의 결과에서는 중복이 있을 수 있다는 점이다.<br/>
그러므로 3개의 요소를 더해서 만들 수 있는 수의 List인 numberList에서는 중복 검사를 하지 않으면 된다.

이후에는 이전 문제에서 했듯이 약수를 검사하고, 약수가 존재할 경우에는 primeNumber의 수를 증가시키지 않는다.