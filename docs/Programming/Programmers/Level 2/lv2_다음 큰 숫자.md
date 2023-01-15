# Level 2 - 다음 큰 숫자

## 문제

자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

* 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
* 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
* 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.

예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

## 제한 사항

1. n은 1,000,000 이하의 자연수 입니다.

## 풀이

```c#
using System;
using System.Linq;

public class Solution
{
    public int solution(int n)
    {
        int answer = n + 1;
        int nOne = GetOneInBinaryNumber(n);
        while (GetOneInBinaryNumber(answer) != nOne)
        {
            answer++;
        }

        return answer;
    }

    public int GetOneInBinaryNumber(int n)
    {
        string binary = "";

        while (n >= 2)
        {
            int num = n % 2;
            binary += num.ToString();
            n /= 2;
        }
        binary += n.ToString();

        return binary.Count(x => x - 48 == 1);
    }
}
```

해결 일자 - 2023.01.15

주어진 숫자 n을 이진수로 변환했을 때 1의 개수를 반환하는 함수를 만들었다. <br/>
이를 통해 n 이후의 숫자를 차례대로 비교해나가며 다음 큰 수를 찾았다.

다행히 이 문제에서는 간단한 Linq문을 써도 효율성 테스트에서 시간초과가 걸리지는 않았다.