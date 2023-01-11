---
sidebar_position: 24
---

# Level 1 - 3진법 뒤집기

## 문제

자연수 n이 매개변수로 주어집니다. <br/>
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.<br/>

## 제한 사항

1. n은 1 이상 100,000,000 이하인 자연수입니다.

## 풀이

```c#
using System;

public class Solution
{
    public int solution(int n)
    {
        int answer = 0;

        string threeBase = "";

        while (n >= 3)
        {
            int left = n % 3;
            threeBase += left.ToString();
            n /= 3;
        }
        threeBase += n.ToString();

        for (int i = 0; i < threeBase.Length; i++)
        {
            int number = Convert.ToInt32(threeBase[i]) - 48;

            int threeBaseNumber = 1;
            int powIndex = threeBase.Length - 1 - i;
            int powNum = 3;
            int index = 0;

            while (index < powIndex)
            {
                threeBaseNumber *= powNum;
                index++;
            }

            answer += threeBaseNumber * number;
        }
        
        return answer;
    }
}
```

해결 일자 - 2023.01.11

단순한 문제이지만, 생각지 못한 장애물이 하나 있었다.<br/>
3진법으로 변환된 문자열을 다시 10진법인 수로 표현하기 위해 계산을 하기 위해서<br/>
처음에는 MathF.Pow()를 사용했는데, 부동소수점의 문제인지 숫자가 커지면 정확도가 1씩 어긋나는 문제가 발생했다.

따라서 MathF.Pow()를 사용하지 않고 직접 제곱을 하는 식을 작성하여 구했더니 제대로 된 숫자가 나왔다.