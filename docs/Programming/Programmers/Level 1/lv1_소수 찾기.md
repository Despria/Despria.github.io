---
sidebar_position: 50
---

# Level 1 - 소수 찾기

## 문제

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다. <br/>
(1은 소수가 아닙니다.)

## 제한 사항

1. n은 2이상 1000000이하의 자연수입니다.

## 풀이

```c#
public class Solution
{
    public int solution(int n)
    {
        int primeNumber = 1;
        bool isPrime;

        for (int i = 3; i <= n; i += 2)
        {
            isPrime = true;

            for (int j = 3; j <= MathF.Sqrt(i); j += 2)
            {
                if (i % j == 0)
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

해결 일자 - 2023.01.14

소수를 판별하기 위한 조건을 거듭 최소화시켜야 하는 문제이다.

우선 짝수는 2를 제외하고는 전부 소수가 아니니 짝수를 제외시켜야 한다.<br/>
이를 위해 첫 반복문 i의 시작 지점을 3으로, 증가치를 2로 설정하여 홀수만 판별하도록 하고<br/>
소수의 개수를 반환할 변수를 1부터 시작한다. (2를 포함하고 시작하는 것)

그 다음, 소수인지를 판별하기 위해 나누는 과정에서도 최대한 연산을 줄여야 한다.<br/>
짝수는 전부 소수가 아니므로, 짝수로 나눠서 나머지가 0이 되는지 확인할 필요는 없다.<br/>
그렇기에 두번째 반복문도 마찬가지로 j의 시작 지점을 3으로, 증가치를 2로 설정하여 홀수만 확인한다.